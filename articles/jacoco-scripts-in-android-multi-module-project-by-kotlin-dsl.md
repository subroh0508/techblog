---
title: jacoco-scripts-in-anroid-muitl-module-project-by-kotlin-dsl
displayTitle: マルチモジュールなAndroidプロジェクトでJaCoCoの設定を書く
description: 業務で携わるマルチモジュールなAndroidプロジェクトに、Kotlin DSLでJaCoCoの設定を書いた時の備忘録です。Kotlin DSLで書いている事例が殆ど見つからず、苦労したのでまとめます。
publishedAt: 2019-10-02T00:35:00+09:00
updatedAt: 2019-10-02T00:35:00+09:00
tags:
  - Android
  - Kotlin
  - Gradle
  - JaCoCo
  - Kotlin DSL
---
JVM言語のカバレッジレポートツール・[JaCoCo](https://github.com/jacoco/jacoco)。Androidの開発において、ユニットテスト環境の整備時に採用されることの多いライブラリですが、マルチモジュール構成 + Kotlin DSLなAndroidプロジェクトに導入した事例がまだまだ表に出てきていないので、知見をネットの海に放流したいと思います。

# 前提条件

- バージョン
  - Kotlin: 1.3.50
  - JaCoCo: 0.8.4
  - Android Studio: 3.5.1
- Kotlin DSLを利用

# シングルモジュールの場合

`plugins { jacoco }`でプラグインを適用すればOK。`./gradle jacocoTestReport`でレポートの出力ができます。

カバレッジレポートの形式やディレクトリの指定は、以下のスクリプトで設定可能です。

```kotlin:build.kts
plugins {
    jacoco
}

tasks.jacocoTestReport {
    reports {
        xml.isEnabled = false
        csv.isEnabled = false
        html.destination = file("${buildDir}/jacocoHtml")
    }
}
```

その他細かい設定は、[The JaCoCo Plugin | Gradle User Manual](https://docs.gradle.org/current/userguide/jacoco_plugin.html#sec:jacoco_getting_started)を参考に。

## Robolectric対応

Robolectricを利用したユニットテストは、`includeNoLocationClasses = true`の設定追記が必要になります。Android + Kotlin DSLのビルドスクリプトならばこんな感じ。

```kotlin:build.kts
android {
    testOptions {
        unitTests.all(unitTests.closureOf<Test> {                  
            extensions.configure(JacocoTaskExtension::class.java) {
                isIncludeNoLocationClasses = true
            }
        } as Closure<Test>)
    }
}
```

`unitTests.all(...)`辺りの書き方があんまりイケてないですが、よりシンプルに書ける方法は今のところなさそう🤔

(参考: [[Android] - "android.testOptions" Groovy closure issue #440](https://github.com/gradle/kotlin-dsl-samples/issues/440))

# マルチモジュールの場合

大きく分けて

- モジュール毎にレポート出力タスクを実行
- 全モジュールのカバレッジを1ファイルにマージし、レポート出力タスクを実行

の2通りの方法で、カバレッジレポートの出力を有効にすることができます。

[Codecov](https://codecov.io/)等、レポートファイルの複数アップロードに対応しているサービスであれば前者の方法で問題ありません。

後者の方法は、カバレッジを単一のレポートファイルにまとめる必要がある場合に用います。また、モジュールの数が増えた場面でも、生成ファイルを1ヶ所にまとめることができるため、ファイルの取り回しがしやすくなる利点もあります。

ここから先は、カバレッジを1ファイルにマージする方法について、スクリプトの実装を解説していきます。

## 大まかなタスクの流れ

実装するスクリプトでは、最終的に以下のようなタスクを順に実行します。

`モジュール毎にユニットテストを実行`
↓
`モジュール毎のカバレッジのマージ`
↓
`1ファイルにまとめたカバレッジからレポート出力`

新しく定義するタスクは「カバレッジのマージ」と「1ファイルにまとめたカバレッジからレポート出力」です。

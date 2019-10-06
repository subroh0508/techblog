---
title: jacoco-scripts-in-anroid-muitl-module-project-by-kotlin-dsl
displayTitle: マルチモジュールなAndroidプロジェクトでJaCoCoの設定を書く
description: 業務で携わるマルチモジュールなAndroidプロジェクトに、Kotlin DSLでJaCoCoの設定を書いた時の備忘録です。Kotlin DSLで書いている事例が殆ど見つからず、苦労したのでまとめます。
publishedAt: 2019-10-06T23:11:00+09:00
updatedAt: 2019-10-06T23:11:00+09:00
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

```kotlin:build.gradle.kts
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

```kotlin:build.gradle.kts
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

## カバレッジのマージ

JaCoCoには`JacocoMerge`というカバレッジマージ用のタスクが定義されているため、これを**ユニットテストの後**に実行するよう、新しくタスクを定義します。

```kotlin:build.gradle.kts
tasks.create("jacocoMergeReports", JacocoMerge::class.java) {
    group = "reporting"
    description = "Merge all JaCoCo reports from projects into one."

    executionData = files()
    gradle.afterProject {
        if (rootProject == this || !plugins.hasPlugin("jacoco")) {
            return@afterProject
        }

        executionData += files("${buildDir}/jacoco/testDebugUnitTest.exec")
        dependsOn("testDebugUnitTest")
    }
}
```

ポイントは以下2つ。

- `dependsOn`メソッドで、「ユニットテストの実行後にカバレッジマージタスクを実行」というタスク間の依存関係を定義
- `setExecutionData`メソッドで、各モジュールのカバレッジファイルを指定
  - Kotlin DSLでは`executionData += files(...)`と書くのがおそらく最もシンプル

## 1ファイルにまとめたカバレッジからレポート出力

`JacocoReport`がレポートの出力タスクになります。このタスクを、**カバレッジマージタスクの後**に実行するよう、依存関係を定義します。

xml・htmlファイルでレポートを出力する場合は、以下のようにタスクを定義します。

```kotlin:build.gradle.kts
val jacocoMergeReports = tasks.create("jacocoMergeReports", JacocoMerge::class.java) { ... }

tasks.create("jacocoTestReports", JacocoReport::class.java) {
    group = "Reporting"
    description = "Generate Jacoco coverage reports for the build. Only unit tests."

    dependsOn(jacocoMergeReports)

    executionData.setFrom(jacocoMergeReports.destinationFile)

    var sourceDirs: FileCollection = files()
    subprojects.forEach {
        if (it.rootProject == this || !it.plugins.hasPlugin("jacoco")) {
            return@forEach
        }

        sourceDirs += files("${it.projectDir}/src/main/kotlin")
    }

    sourceDirectories.setFrom(sourceDirs)
    classDirectories.setFrom(fileTree(
            "dir" to ".",
            "includes" to listOf("**/tmp/kotlin-classes/debug/**"),
            "excludes" to listOf(
                    // Android
                    "**/R.class", "**/R$*.class", "**/BuildConfig.*", "**/Manifest*.*", "**/*Test*.*",
                    "**/*Spec*.*", "android/**/*.*", "**/*Application.*",

                    //Dagger 2
                    "**/*Dagger*Component*.*", "**/*Module.*", "**/*Module$*.*", "**/*MembersInjector*.*",
                    "**/*_Factory*.*", "**/*Provide*Factory*.*"
            )
    ))

    reports {
        xml.isEnabled = true
        html.isEnabled = true
        csv.isEnabled = false

        xml.destination = file("$buildDir/reports/jacoco/report.xml")
        html.destination = file("$buildDir/reports/jacoco/html")
    }
}
```

ここでのポイントは以下3つ。

- `dependsOn`メソッドで、「カバレッジマージの実行後にレポート出力を実行」というタスク間の依存関係を定義
- `setSourceDirectories`メソッドで、カバレッジ対象のソースディレクトリを指定
- `setClassDirectories`メソッドで、カバレッジ対象のクラスディレクトリを指定
  - Kotlinの場合、`${buildDir}/tmp/kotlin-classes/${BuildVariants}`
  - Javaの場合、`${buildDir}/intermediates/classes/${BuildVariants}`

これでスクリプト実装は終了です。`./gradlew jacocoTestReports`を実行し、全てのモジュールでユニットテストが実行され、カバレッジレポートが生成されているか確認してみましょう。Robolectricを使うユニットテストが存在する場合、`includeNoLocationClasses = true`の設定を忘れないように！

# Kotlin DSLで書く利点

**初めて使うプロパティやメソッドの存在、および実装をIDEのタグジャンプで探せること**が最大の利点だと、個人的には思います。Gradleの公式リファレンスにも必要な情報は存在しますが、「JaCoCoのGradleタスクにどんな設定値が存在するか」くらいの情報なら、コードベースで探した方が圧倒的に早く得られる実感があります。

# まとめ

JaCoCoのスクリプト実装をKotlin DSLで書いた事例を記事としてまとめました。Kotlin DSL、慣れると作業効率が目に見えて上がるのですが、「とりあえず動作するスクリプトを1つ実装する」ことが難しく、なかなか一歩を踏み出せないという人が多い気がします。この記事がそのハードルを超える一助になれば…と思います。

# 参考リンク

- [Gradle のマルチモジュールプロジェクトで JaCoCo の結果を集計する | ひだまりソケットは壊れない](https://vividcode.hatenablog.com/entry/software-test/jacoco-gradle-multi-module)
- [Androidのマルチモジュールでのjacoco設定 | phicdy devlog](https://phicdy.hatenablog.com/entry/android-multi-module-jacoco-report)
- [Spek2+MockK+JaCoCoでイケてるUnit Test環境を手に入れろ！ | DroidKaigi 2019](https://droidkaigi.jp/2019/timetable/70535)

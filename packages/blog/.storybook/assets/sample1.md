---
title: sample1
displayTitle: 記事サンプル1
description: 記事内容の要約文章が入ります。大体2行くらいで収まる長さだとちょうどよし。
publishedAt: 2020-02-01T00:00:00+09:00
updatedAt: 2020-02-01T00:00:00+09:00
tags:
  - Advent Calendar
  - THE IDOLM@STER
  - 怪文書
---

この技術ブログは[Vue.js](https://v3.vuejs.org/)を用いて実装されています。各Componentは[Storybook](https://storybook.js.org/)によって管理されており、見た目や振る舞いをComponent単位で確認することが可能です。

コードの全容は[subroh0508/techblog](https://github.com/subroh0508/techblog)のレポジトリを参照ください。

---

# 大見出し
## 中見出し
### 小見出し

- 箇条書き1
- 箇条書き2
- 箇条書き3
  - 箇条書き入れ子3-1
    - 箇条書き入れ子3-1-1

下線を引くことができます、<u>こんな感じ</u>
打ち消し線を引くことができます、~~こんな感じ~~
太字にすることができます、**こんな感じ**
斜体にすることができます、_こんな感じ_

> 引用表記が使えます、こんな感じ

コードブロックが使えます、インラインは`こんな感じ`

```js:index.js
class Test {
  constructor(message) {
    this.message = message;
  }

  show() {
    console.log(this.message);
  }
}

Test('Hello, World!').show();
```

```kotlin
fun main() {
    println('Hello, World!')
}
```

画像は以下のようにプレビューされます。

![図1. 担当アイドル](http://localhost:6006/static/media/.storybook/assets/madoka.png)

![図2. とてもかわいい](http://localhost:6006/static/media/.storybook/assets/poplinks.png)

テーブル表現も利用できます。

|プレイ動画|プレイ動画(スキル発動時)|
|---|---|
|![図3. プレイ動画](http://localhost:6006/static/media/.storybook/assets/poplinks_play1.gif)|![図4. プレイ動画(スキル発動時)](http://localhost:6006/static/media/.storybook/assets/poplinks_play2.gif)|




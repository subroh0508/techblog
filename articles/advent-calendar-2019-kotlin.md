---
title: advent-calendar-2019-kotlin
displayTitle: Kotlin/JSのバンドルファイルを頑張って1/6に削減した
description: Kotlin/JS + KotlinWebpackPluginで実装したWebアプリのバンドルファイルがやたら大きくて発狂したので頑張りました
publishedAt: 2019-12-16T00:00:00+09:00
updatedAt: 2019-12-16T00:00:00+09:00
tags:
  - Advent Calendar
  - Kotlin
  - Kotlin/JS
  - JavaScript
  - Webpack
---

この記事は[Kotlin Advent Calendar 2019](https://qiita.com/advent-calendar/2019/kotlin)・16日目の記事です。

---

 先日、第二回技術書同人誌博覧会にて、[週刊IM@Study Vol.4](https://gishohaku.dev/gishohaku2/circles/ROahj1IRHTW9S96D8aCg)という合同誌を頒布させていただきました。こちらに寄稿した記事『小鳥さんと一緒に100%Kotlinのサイト製作　〜frontend編〜』にて、性懲りもなくKotlin/JSネタで一筆したためたのですが、サンプル用のWebアプリを実装した時にハマった箇所がありました。今回はこちらを解決策と共に共有します。

# ハマったこと: バンドルファイルデカすぎ問題

 Kotlin/JSを使ってWebアプリを実装する際、大まかな手順は以下のようになります。今回問題が発生したのは、2と3の手順です。

1. DOM操作をKotlinで実装
1. KotlinのコードをJavaScriptに変換
1. 変換後得られたJavaScriptのコードをWebpackで1ファイルにまとめ、minify

 Kotlin->JS変換とWebpackのバンドル処理は、npmとGradleのどちらでも実行可能です。今回はフロントエンドエンジニアを想定読者としたため、Kotlin->JS変換に[KotlinWebpackPlugin](https://github.com/JetBrains/create-react-kotlin-app/tree/master/packages/kotlin-webpack-plugin)というnpmモジュールを使う構成にしています。

 そして、実際に実装したWebアプリがこちら。
→765プロスケジュールチェッカー: [imasbook04.otonashi-kotlin.dev](https://imasbook04.otonashi-kotlin.dev)
→GitHub: [subroh0508/imasbook04-sample](https://github.com/subroh0508/imasbook04-sample)

 見ての通り、一切スタイルをいじらない素朴なWebアプリとなっています。使用しているライブラリも数少なく、出力されるバンドルファイルも大したサイズにはならないと高を括っていたのですが…

![図1. productionモードでそのままビルド](https://firebasestorage.googleapis.com/v0/b/techblog-cc1e4.appspot.com/o/images%2Fadvent-calendar-2019-kotlin-1.png?alt=media&token=e3528d5a-b865-4eb7-9596-8257d6ae9439)

 何も考えずproductionモードでビルドし、出力されたバンドルファイルのサイズはなんと**1.2MB**！流石にデカすぎる…、このままで本番環境にデプロイするのはめちゃくちゃ気が引ける…😣

 というわけで、このデカすぎバンドルファイルを小さくしていきます。

## (1) kotlin-dce-jsを有効にする

 Kotlin/JSには、JS変換時に使われていないメソッドを自動判別し、これらを削除するツール「kotlin-dce-js」が存在します(参考: https://kotlinlang.org/docs/reference/javascript-dce.html)。これを利用することで、**Kotlin/JSの標準ライブラリ、およびKotlin製ライブラリのJS変換後のファイルサイズを大幅に削減**することが可能になります。

#### 参考: kotlin-dce-js適用前後のファイルサイズ比較

- kotlin.js: 2.1MB -> 274KB
- kotlinx-html-js.js: 602KB -> 121KB

 KotlinWebpackPluginでは、`optimize`オプションでこのツールを有効にすることができます。デフォルトの設定では`kotlin_build`というディレクトリにJS変換後のファイルが出力されるので、`yarn run webpack`の実行後正しく出力されるか確認してもるとよいでしょう。

```js:webpack.config.js
const path = require('path');

module.exports = {
  ...,
  plugins: [
    new KotlinWebpackPlugin({
      src: path.resolve(__dirname, 'src'),
      optimize: true, // ←ココ
      moduleName: 'bundlekt',
      moduleKind: 'commonjs',
      librariesAutoLookup: true,
      verbose: true,
      sourceMap: !isProduction,
      packagesContents: [require('./package.json')],
    }),
    ...,
  ],
};    
```

※`optimize`はKotlinWebpackPluginのREADME.mdに書いていないオプションなので注意！該当コードは[この辺り](https://github.com/JetBrains/create-react-kotlin-app/blob/3220e851978770ce39d743054397ff1fe9952f64/packages/kotlin-webpack-plugin/plugin.js#L151-L153)です。 

 さて、kotlin-dce-jsも有効になったところで、再度ビルドを走らせて見ましょう！どのくらい小さくなったかな…！

![図2. kotlin-dce-jsを有効にしてビルド](https://firebasestorage.googleapis.com/v0/b/techblog-cc1e4.appspot.com/o/images%2Fadvent-calendar-2019-kotlin-2.png?alt=media&token=ad8908ca-6885-4342-9ec7-0d3c43b9744e)

 さっきと同じ**1.2MB**！全然変わってなーい！！！ナンデー？？？

## (2) kotlin-dce-jsを通した後のJSファイルを優先的に読み込むよう設定を修正

 kotlin-dce-jsを通したにも関わらず、バンドルサイズが全く変わらない問題。こちらは、JSモジュールを1つのバンドルファイルにまとめる過程で、**kotlin-dce-jsを通す前のファイルを読み込んでしまう**ことが原因です。これを解決するには、`webpack.config.js`に以下の記述を追加します。

```js:webpack.config.js
const path = require('path');

module.exports = {
  ...,
  resolve: {
    modules: [
      path.resolve(__dirname, 'kotlin_build'),
      path.resolve(__dirname, 'node_modules'),
    ],
  },
  ...,  
}
```

 こうすることで、Kotlinの標準ライブラリの元データが含まれる`node_modules`ディレクトリより先に、kotlin-dce-jsを通したファイルの出力先である`kotlin_build`ディレクトリを読み込むよう指定できます(この設定はREADME.mdにしっかり書いてあります、ちゃんと読もうね自分🥺)。

 これで準備は整った…！いざ、ビルド実行！！！

![図3. モジュールの読み込み順を変更してビルド](https://firebasestorage.googleapis.com/v0/b/techblog-cc1e4.appspot.com/o/images%2Fadvent-calendar-2019-kotlin-3.png?alt=media&token=acd1edb0-b0aa-4f2c-ad59-48e20b21a735)

1.2MBあったバンドルファイルが**185KB**まで小さくなりました！大勝利！！！

# 余談: Gradleではどうするの？

 Kotlin/JSのGradle Pluginでのkotlin-dce-jsサポートは[v1.3.70で正式に入る](https://youtrack.jetbrains.com/issue/KT-32323)ようです。現状でも利用できないことはなかったはずですが、正直しんどかった記憶…🤔

# まとめ

 ~毎度思うけど、Kotlin/JSはドキュメントが貧弱すぎてつらい~

 8月のKotlin Fest 2019では、主にGradleを使ったKotlin/JS製Webアプリの実装手順を解説しましたが、今回はnpm + Webpackで色々と頑張ってみました。Gradleとnpm、慣れ親しんだ方を自由に選択できるのはKotlin/JSの良さだと思っているので、もっと多くの人に触って欲しいなと思います。

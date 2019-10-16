---
title: mobile-crew-niigata-attending-report
displayTitle: MOBILE CREW NIIGATA参加レポート
description: 先週、新潟で開催されたモバイルアプリエンジニア向けカンファレンスに参加してきました。その参加レポートです。
publishedAt: 2019-10-16T23:00:00+09:00
updatedAt: 2019-10-16T23:00:00+09:00
tags:
  - Event
  - Android
  - Trip
---
2019年10月11日、新潟にて[MOBILE CREW NIIGATA](https://www.mobilecrew.jp/)という技術カンファレンスイベントに参加してきました！

モバイルアプリにフォーカスしており、かつ地方開催という珍しいフォーマットで、更に登壇者も豪華な方々だったため、個人的にはかなり早い内(=イベント開催決定告知の翌日)から参加を決め当日を楽しみに待っていました。

<blockquote class="twitter-tweet tw-align-center"><p lang="ja" dir="ltr">行きたいンゴ☺️☺️☺️ <a href="https://t.co/hCid8o10rn">https://t.co/hCid8o10rn</a></p>&mdash; [¥275,644]にしこりさぶろ〜 (@subroh_0508) <a href="https://twitter.com/subroh_0508/status/1163727498095411202?ref_src=twsrc%5Etfw">August 20, 2019</a></blockquote>

この記事では、このイベントの全8セッションの感想や懇親会の様子等を当日のツイートを交えつつまとめて行きたいと思います！

# イベント当日 - 会場着

朝7時発の北陸新幹線に乗車し、約2時間。会場の「JR東日本ホテルメッツ 新潟」に到着しました。駅舎直結の会場で、アクセスは大変良かったです。

<blockquote class="twitter-tweet tw-align-center"><p lang="ja" dir="ltr">上陸した！ <a href="https://twitter.com/hashtag/mcniigata?src=hash&amp;ref_src=twsrc%5Etfw">#mcniigata</a> <a href="https://t.co/1P8RTzOBCF">pic.twitter.com/1P8RTzOBCF</a></p>&mdash; [¥275,644]にしこりさぶろ〜 (@subroh_0508) <a href="https://twitter.com/subroh_0508/status/1182446814475124736?ref_src=twsrc%5Etfw">October 11, 2019</a></blockquote>

<blockquote class="twitter-tweet tw-align-center"><p lang="und" dir="ltr">✌ <a href="https://twitter.com/hashtag/mcniigata?src=hash&amp;ref_src=twsrc%5Etfw">#mcniigata</a> <a href="https://t.co/XbFoxQWKD3">pic.twitter.com/XbFoxQWKD3</a></p>&mdash; [¥275,644]にしこりさぶろ〜 (@subroh_0508) <a href="https://twitter.com/subroh_0508/status/1182448734338109440?ref_src=twsrc%5Etfw">October 11, 2019</a></blockquote>

早く着きすぎてしまったせいもあり、まだ誰も座っていない席の最前列左端でひたすらTwitterとDroidKaigiのCfP作成をしていたのですが、開始時刻が迫るにつれてどんどん座席が埋まっていき、しまいには部屋いっぱいに…！

<blockquote class="twitter-tweet tw-align-center"><p lang="ja" dir="ltr">人めっちゃ集まってる👀 <a href="https://twitter.com/hashtag/mcniigata?src=hash&amp;ref_src=twsrc%5Etfw">#mcniigata</a></p>&mdash; [¥275,644]にしこりさぶろ〜 (@subroh_0508) <a href="https://twitter.com/subroh_0508/status/1182459266004733952?ref_src=twsrc%5Etfw">October 11, 2019</a></blockquote> 

<blockquote class="twitter-tweet tw-align-center"><p lang="ja" dir="ltr">新潟でエンジニア向けのアプリのイベント開いたら、人が山ほど来て感動してる　<a href="https://twitter.com/hashtag/MCniigata?src=hash&amp;ref_src=twsrc%5Etfw">#MCniigata</a> <a href="https://t.co/jwFACYp9Dh">pic.twitter.com/jwFACYp9Dh</a></p>&mdash; クマ・ボスティーノ (@ph_i_hq) <a href="https://twitter.com/ph_i_hq/status/1182463432076840960?ref_src=twsrc%5Etfw">October 11, 2019</a></blockquote>

熱量高くてびっくりしました。ホントに。

# セッションパート(午前)

## フラーとANDROIDアプリの共創ヒストリー: [@ujikawa1026](https://twitter.com/ujikawa1026)

最初のセッションは、[FULLER株式会社](https://fuller-inc.com/)新潟支社で働く氏川さんの話。
[長岡花火公式アプリ](https://nagaokamatsuri.com/app/)・[NHKキッズ](https://www.nhk.or.jp/school/kids/)・[Snow Peak公式アプリ](https://www.snowpeak.co.jp/sp/app/)に代表される、FULLER社さんの共創事業における技術選定と、その開発現場で感じたことがメインでした。

年に数日しか使われない長岡花火公式アプリで、「開発リソースやお金を割けない制約の中、やりたいことを実現する」ために[Cloud Firestore](https://firebase.google.com/docs/firestore)を採用した話は、僕だけではなく会場の多くのエンジニアの共感を得ていたように思います。

NHKキッズの方でも、「保守性を維持しつつ、複雑な画面遷移やアニメーションの実装を進める」ためにSingle Activityによる実装を選定したとのこと。正に、モダンな技術を随時キャッチアップしつつ、これを「新しいから」ではなく「要求される仕様や取り巻く環境に最も適合するから」という理由で採用している様子が、エンジニアとしてあるべき姿そのものだと感じました。

<blockquote class="twitter-tweet tw-align-center"><p lang="ja" dir="ltr">イベントアプリ怖いよねわかる（技術書典アプリもドキドキする） <a href="https://twitter.com/hashtag/mcniigata?src=hash&amp;ref_src=twsrc%5Etfw">#mcniigata</a></p>&mdash; なかざん (@Nkzn) <a href="https://twitter.com/Nkzn/status/1182467087991595008?ref_src=twsrc%5Etfw">October 11, 2019</a></blockquote>

長岡花火当日、荒れるCrashlyticsに夜なべで対応した話に呼応するツイート。技術書典公式アプリの製作者もこの場にいるの、半端じゃなかった(こなみ)。

## LiveData with Databinding実用レポート: 渡邉耕史

2人目は[ウォーターセル株式会社](https://water-cell.jp/)のAndroidエンジニア、渡邉さんの話。

5年以上稼働しているAndroidアプリの新規機能実装時に、LiveDataとDatabindingを導入してみたという内容。ガッツリAndroidの話で、必要最低限のコードを見せながらLifecycleも考慮に入れた安全なコードをシンプルに書けることが分かりやすく伝わってきました。BindingAdapterが肥大化してつらくなる辺りも、実際に落とし穴踏み抜いたリアリティが感じれて良かったです。

これからは既存機能をLiveDataやDatabindingに置き換えにチャレンジして欲しい…！ここ、僕が現在進行系で苦しんでいるので、互いに知見交換をしたい…！

## アプリアーキテクチャ概論: [@mhidaka](https://twitter.com/mhidaka)

<a class="embedly-card" data-card-controls="0" href="https://speakerdeck.com/mhidaka/apuriakitekutiyagai-lun">アプリアーキテクチャ概論</a>

午前中最後はDroidKaigiのオーガナイザー・日高さんのターン！モバイルアプリにアーキテクチャを導入するモチベーションがどこにあるかを紐解き、アーキテクチャの導入に尻込みしてしまう人の背中を押す、そんな発表でした。

「プロダクトに対して開発者ができる貢献は、持てる技術による開発速度の向上である」「開発速度の向上には、生産性の向上が鍵となる」「生産性に及ぼす影響は、ソフトウェア技術以外の要素の方が多い」というイントロからはじまり、終始頷きポイントだらけでした。日高さんの発表を聞いて毎回思うのが「抽象的概念に対する言語化スキルの高さ」で、今回も普段自分達が業務中に抱く課題感と、それに対する解決のヒントが言葉として多くの人の脳内に残ったのではないでしょうか。

<blockquote class="twitter-tweet tw-align-center"><p lang="ja" dir="ltr">生産性の向上でもって価値創出のスピードを早める <a href="https://twitter.com/hashtag/mcniigata?src=hash&amp;ref_src=twsrc%5Etfw">#mcniigata</a></p>&mdash; [¥275,644]にしこりさぶろ〜 (@subroh_0508) <a href="https://twitter.com/subroh_0508/status/1182486630189289472?ref_src=twsrc%5Etfw">October 11, 2019</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

<blockquote class="twitter-tweet tw-align-center"><p lang="ja" dir="ltr">生産性が鍵、アーキテクチャは原動力<a href="https://twitter.com/hashtag/mcniigata?src=hash&amp;ref_src=twsrc%5Etfw">#mcniigata</a></p>&mdash; ABEChan@iOS/Android Developer (@yutaabe200) <a href="https://twitter.com/yutaabe200/status/1182487141206482944?ref_src=twsrc%5Etfw">October 11, 2019</a></blockquote>

<blockquote class="twitter-tweet tw-align-center"><p lang="ja" dir="ltr">「生産性の最大化や価値創出の意思を持った上で、その思想を言語でもってソフトウェアに反映させる」って話、めっちゃ腹落ちする <a href="https://twitter.com/hashtag/mcniigata?src=hash&amp;ref_src=twsrc%5Etfw">#mcniigata</a></p>&mdash; [¥275,644]にしこりさぶろ〜 (@subroh_0508) <a href="https://twitter.com/subroh_0508/status/1182488339158458368?ref_src=twsrc%5Etfw">October 11, 2019</a></blockquote>

<blockquote class="twitter-tweet tw-align-center"><p lang="ja" dir="ltr">「捨てやすさ」も技術選定のポイント <a href="https://twitter.com/hashtag/mcniigata?src=hash&amp;ref_src=twsrc%5Etfw">#mcniigata</a></p>&mdash; Sota Hatakeyama (@chooblarin) <a href="https://twitter.com/chooblarin/status/1182490672026144769?ref_src=twsrc%5Etfw">October 11, 2019</a></blockquote>

業務で壁にぶつかった時、記憶や印象に残る言葉が解決の糸口になったり困難に立ち向かう勇気をくれたりした経験は僕自身多々あるので、僕もそんな話が前でできる人間になりたいと強く感じました。<small>とりあえずDroidKaigi 2020のCfP、通って欲しい🙏
</small>

# お昼🍜(とその他ご飯の話)

お昼は、Twitterで流れてきた[地元の方オススメのラーメン屋](https://tabelog.com/niigata/A1501/A150101/15002652/)で腹ごしらえ。あっさり醤油スープと縮れ細麺がサクサク胃袋に入ってめちゃ美味かったです👍

<blockquote class="twitter-tweet tw-align-center"><p lang="und" dir="ltr">🍜 <a href="https://twitter.com/hashtag/mcniigata?src=hash&amp;ref_src=twsrc%5Etfw">#mcniigata</a> <a href="https://t.co/wR04XabDT6">pic.twitter.com/wR04XabDT6</a></p>&mdash; [¥275,644]にしこりさぶろ〜 (@subroh_0508) <a href="https://twitter.com/subroh_0508/status/1182496897363140608?ref_src=twsrc%5Etfw">October 11, 2019</a></blockquote>

無心で食べていたら、[Kotlin愛好会](https://love-kotlin.connpass.com/)で何度かお世話になった七島さん([@jollyjoester](https://twitter.com/jollyjoester))とまさかのエンカウント☺️

<blockquote class="twitter-tweet tw-align-center"><p lang="ja" dir="ltr">まさかの〜☺️</p>&mdash; Hideyuki Nanashima (@jollyjoester) <a href="https://twitter.com/jollyjoester/status/1182508218620108800?ref_src=twsrc%5Etfw">October 11, 2019</a></blockquote>

それから、[株式会社クーネルワーク](https://cunelwork.co.jp/)提供の[雪室珈琲](https://shop.ng-life.jp/suzukicoffee/0222-001/)と[ヤスダヨーグルト](https://shop.ng-life.jp/yasudayogurt/0194-001/)、セッションの合間にいただきましたが最高に美味しかったです！

<blockquote class="twitter-tweet tw-align-center"><p lang="ja" dir="ltr">美味い！！！！！！ <a href="https://twitter.com/hashtag/mcniigata?src=hash&amp;ref_src=twsrc%5Etfw">#mcniigata</a> <a href="https://t.co/Xyuj0Jj9of">pic.twitter.com/Xyuj0Jj9of</a></p>&mdash; [¥275,644]にしこりさぶろ〜 (@subroh_0508) <a href="https://twitter.com/subroh_0508/status/1182482666571960321?ref_src=twsrc%5Etfw">October 11, 2019</a></blockquote>

# セッションパート(午後)

## 地方IT企業の戦略を広げる技術選択としてのREACT NATIVE: [@Nkzn](https://twitter.com/Nkzn)

<a class="embedly-card" data-card-controls="0" href="https://speakerdeck.com/nkzn/di-fang-itqi-ye-falsezhan-lue-woguang-geru-ji-shu-xuan-ze-tositefalsereact-native">地方IT企業の戦略を広げる 技術選択としてのReact Native</a>

## 考察 : モバイルエンジニアの機械学習との付き合い方: [@jollyjoester](https://twitter.com/jollyjoester)

<a class="embedly-card" data-card-controls="0" href="https://speakerdeck.com/jollyjoester/kao-cha-mobairuenziniafalseji-jie-xue-xi-tofalsefu-kihe-ifang">考察 : モバイルエンジニアの機械学習との付き合い方</a>

## WEBベースでアプリライクなUI／UXが実現できる「PWA×SPA」という選択肢: [@cw_iri_meets](https://twitter.com/cw_iri_meets)

<a class="embedly-card" data-card-controls="0" href="https://speakerdeck.com/iri/webbesudeapuriraikunaui-uxgashi-xian-dekiru-pwaxspa-toiuxuan-ze-zhi">WebベースでアプリライクなUI／UXが実現できる「PWA×SPA」という選択肢</a>

## INTEGRATE YOUR APP TO MODERN WORLD: [@d_date](https://twitter.com/d_date)

<a class="embedly-card" data-card-controls="0" href="https://speakerdeck.com/d_date/integrate-your-app-to-modern-world-in-niigata">Integrate your app to modern world in Niigata</a>

## 長岡花火を支える技術: 伊津惇

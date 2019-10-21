---
title: mobile-crew-niigata-attending-report
displayTitle: MOBILE CREW NIIGATA参加レポート
description: 先週、新潟で開催されたモバイルアプリエンジニア向けカンファレンスに参加してきました。その参加レポートです。
publishedAt: 2019-10-16T23:00:00+09:00
updatedAt: 2019-10-16T23:00:00+09:00
tags:
  - Event
  - Android
  - iOS
  - React Native
  - Architecture
  - Trip
---
2019年10月11日、新潟にて[MOBILE CREW NIIGATA](https://www.mobilecrew.jp/)という技術カンファレンスに参加してきました！

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

## 地方IT企業の戦略を広げる技術選択としてのReact Native: [@Nkzn](https://twitter.com/Nkzn)

<a class="embedly-card" data-card-controls="0" href="https://speakerdeck.com/nkzn/di-fang-itqi-ye-falsezhan-lue-woguang-geru-ji-shu-xuan-ze-tositefalsereact-native">地方IT企業の戦略を広げる 技術選択としてのReact Native</a>

午後の1人目、ウォーターセル株式会社の中川さん。BtoB(toB)の事業、かつ人材流動性の低い地方でIT企業として生き残るため[React Native](https://facebook.github.io/react-native/)を選定した道筋と、React Nativeメインの開発組織で生み出す価値を最大化するためのポイントを聞くことができました。

決してキラキラではない、前例もリソースもないなかで泥臭く目の前の課題と向き合い今日まで価値を生み出し続けたことがヒシヒシと伝わり、ものすごくためになるセッションでした。技術選定の上で、「新しいから」「流行りだから」ではなく、「自分達が抱える課題の解決に最も適しているか否か」という視点で中川さん以上に突き詰めた人は、東京にもそういないのではと感じました。中川さんの下で働くことができるエンジニアのみなさんがめちゃくちゃ羨ましいです！

それから、セッションの本筋とはズレてしまうもののこんな感想も抱いたというツイート🤔

<blockquote class="twitter-tweet tw-align-center"><p lang="ja" dir="ltr">「地方=人材リソースが限られている」状況下で価値を出すための話だったけど、都内のベンチャーも「リソースで殴って人材を確保」してもそれは幸せな採用と言えるのか🤔っていう命題は存在するはずで、その辺りにも示唆をいただけてなかざんさんの話マジ学びでした( ˘ω˘) <a href="https://twitter.com/hashtag/mcniigata?src=hash&amp;ref_src=twsrc%5Etfw">#mcniigata</a></p>&mdash; [¥275,644]にしこりさぶろ〜 (@subroh_0508) <a href="https://twitter.com/subroh_0508/status/1182523379502309377?ref_src=twsrc%5Etfw">October 11, 2019</a></blockquote>

## 考察 : モバイルエンジニアの機械学習との付き合い方: [@jollyjoester](https://twitter.com/jollyjoester)

<a class="embedly-card" data-card-controls="0" href="https://speakerdeck.com/jollyjoester/kao-cha-mobairuenziniafalseji-jie-xue-xi-tofalsefu-kihe-ifang">考察 : モバイルエンジニアの機械学習との付き合い方</a>

お昼にたまたまエンカウントした、七島さんのセッション！個人的にエンジニアコミュニティでのオーガナイザー(およびカンパイヤー)としての印象が強かったので、七島さんのゴリゴリ技術の話もとても楽しみにしていました！

メインは、「ここ数年、機械学習におけるモデル作成のハードルが大きく下がったことで、新たなアプリの機能開発の道が拓けるのでは？」という内容でした。ネット上の文献も紹介しつつ「機械学習を機能開発にどう組み込むのか」「組み込む際に考えるべきこと」の2点がシンプルにまとまっており、機械学習とアプリ開発を組み合わせた未来を解像度高くイメージできたように思います。

<blockquote class="twitter-tweet tw-align-center"><p lang="ja" dir="ltr">ユーザー体験の先頭に立ってるモバイル(フロントエンドも含む？)エンジニアだから、MLを使った機能実装やってみようよ！というメッセージ、なるほどみが深い <a href="https://twitter.com/hashtag/mcniigata?src=hash&amp;ref_src=twsrc%5Etfw">#mcniigata</a></p>&mdash; [¥275,644]にしこりさぶろ〜 (@subroh_0508) <a href="https://twitter.com/subroh_0508/status/1182530068314083329?ref_src=twsrc%5Etfw">October 11, 2019</a></blockquote>

近年のAIバブルの影響で、僕も機械学習に対して誤った先入観を抱きがちなのですが、アプリ開発における新たな課題解決・価値創出の道として紹介してもらえたおかげで、今までとは明らかに違う「機械学習触ってみよう！」のモチベーションが湧いてきました！一応ネタはある、なにから触ろう…🤔

## WEBベースでアプリライクなUI／UXが実現できる「PWA×SPA」という選択肢: [@cw_iri_meets](https://twitter.com/cw_iri_meets)

<a class="embedly-card" data-card-controls="0" href="https://speakerdeck.com/iri/webbesudeapuriraikunaui-uxgashi-xian-dekiru-pwaxspa-toiuxuan-ze-zhi">WebベースでアプリライクなUI／UXが実現できる「PWA×SPA」という選択肢</a>

午後3本目。株式会社クーネルワークCTOの入澤さんのセッションです。Web歴の長い入澤さんのセッションは、「モバイルフレンドリーなWebアプリを作るための技術紹介」がメインです。

特にAMP・PWA・SPAの3つについての解説がされましたが、モバイルアプリエンジニアにとっては正に「かゆい所に手が届く」内容だったと感じます。Web技術、興味はあるものの、いざキャッチアップのために調べると新旧入り交じった大量の情報が出てきて溺れてしまった経験が僕自身何度もあるのですが、このセッションではAMP・PWA・SPAの勘所を独特の言い回しでわかりやすく伝えていたので、とても勉強になりました！

<blockquote class="twitter-tweet tw-align-center"><p lang="ja" dir="ltr">新潟直送計画の合言葉は「米しかないと、思うなよ。」<br><br>バチクソかっこいいじゃん……<a href="https://twitter.com/hashtag/mcniigata?src=hash&amp;ref_src=twsrc%5Etfw">#mcniigata</a></p>&mdash; なかざん (@Nkzn) <a href="https://twitter.com/Nkzn/status/1182535826472783872?ref_src=twsrc%5Etfw">October 11, 2019</a></blockquote>

余談ですが運営しているECサイトの合言葉、マジでかっこいいと思います👍

## INTEGRATE YOUR APP TO MODERN WORLD: [@d_date](https://twitter.com/d_date)

<a class="embedly-card" data-card-controls="0" href="https://speakerdeck.com/d_date/integrate-your-app-to-modern-world-in-niigata">Integrate your app to modern world in Niigata</a>

次はtry!Swiftオーガナイザーの松館さん！

内容はガッツリ[Swift UI](https://developer.apple.com/xcode/swiftui/)のお話。iOS13以上が要求されるSwift UIへ、将来的に完全移行するために従来のUI Kitで頑張るノウハウがコードベースで解説されていました。

コードからなんとなく香る「Swiftの言語機能をモリモリ使って実装した」感がエンジニアとしてとてもワクワクしたのですが、如何せんSwiftを知らなすぎたせいもあり雰囲気しか掴むことができませんでした。興味はめちゃくちゃあるので、これを気にiOSもキャッチアップしていきたいお気持ちが高まっています！

## 長岡花火を支える技術: 伊津惇

ラストはFULLER株式会社新潟支社の伊津さんのトーク！長岡花火公式アプリの開発、および花火当日の運用裏話を聞かせていただきました。

<blockquote class="twitter-tweet tw-align-center"><p lang="ja" dir="ltr">運営本部にアナログな形で情報が集まってくる→フラー社員が手打ちしてpush通知<br><br>血の滲むタイプのアレだ… <a href="https://twitter.com/hashtag/mcniigata?src=hash&amp;ref_src=twsrc%5Etfw">#mcniigata</a></p>&mdash; [¥275,644]にしこりさぶろ〜 (@subroh_0508) <a href="https://twitter.com/subroh_0508/status/1182562407178072069?ref_src=twsrc%5Etfw">October 11, 2019</a></blockquote>

<blockquote class="twitter-tweet tw-align-center"><p lang="ja" dir="ltr">足で駐車場情報取りに行ったのすごく素晴らしい <a href="https://twitter.com/hashtag/mcniigata?src=hash&amp;ref_src=twsrc%5Etfw">#mcniigata</a></p>&mdash; ⑨ (@circled9) <a href="https://twitter.com/circled9/status/1182563468504731648?ref_src=twsrc%5Etfw">October 11, 2019</a></blockquote>

開発・運用の裏で、上記のような「それが最適解であればアナログな手法も厭わず実行する」姿勢がとても印象強く残っています。また、花火当日に本部に集まったデータを「Pull Requestの形でミスがないかレビューできるよう」にCSV+GitHubで管理し、[Bitrise](https://www.bitrise.io)を使ってCloud Firestoreの更新をかけた話は、本当に長岡花火の事例でしか聞けない内容だったと思います。

# まとめ

新潟のエンジニアの方々、ゲストスピーカーの方々、全員からユーザーに対する価値提供と眼前の課題解決に真摯に取り組んでいることがヒシヒシと伝わってきたことが1番の思い出です。そして、純粋に技術だけは乗り越えられない壁を八方手を尽くして越えた経験、これを普段ITの最新情報やリアルの空気感に触れることが難しいであろう新潟という地で共有する姿は、僕を含めた聴講者の多くが影響を受けたのではと感じます。

間違いなく、すごく良いカンファレンスでした！来年以降も開催されれば参加したいです！

# 懇親会と🍶

東京の宅配🍕&🍣も大好きですが、新潟のご飯は格別でした！肉もポテトもめちゃくちゃ美味しかった！

<blockquote class="twitter-tweet tw-align-center"><p lang="ja" dir="ltr">懇親会〜！ <a href="https://twitter.com/hashtag/mcniigata?src=hash&amp;ref_src=twsrc%5Etfw">#mcniigata</a> <a href="https://t.co/b1IAUKT9mZ">pic.twitter.com/b1IAUKT9mZ</a></p>&mdash; Hideyuki Nanashima (@jollyjoester) <a href="https://twitter.com/jollyjoester/status/1182595530381131776?ref_src=twsrc%5Etfw">October 11, 2019</a></blockquote>

それから訂正。今回のカンファレンス1番の思い出はコレでした😇　技術力が上がる水です😇

<blockquote class="twitter-tweet tw-align-center"><p lang="ja" dir="ltr">本日のハイライト <a href="https://twitter.com/hashtag/mcniigata?src=hash&amp;ref_src=twsrc%5Etfw">#mcniigata</a> <a href="https://t.co/Z1WSHyXF62">pic.twitter.com/Z1WSHyXF62</a></p>&mdash; [¥275,644]にしこりさぶろ〜 (@subroh_0508) <a href="https://twitter.com/subroh_0508/status/1182635637310021632?ref_src=twsrc%5Etfw">October 11, 2019</a></blockquote>

<small>マジな話、割と飲んだのに翌日殆ど2日酔いしなかったので、新潟の日本酒は最高なのです🥰</small>

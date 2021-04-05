サイト名
====

Training Menu Today/今日のトレメニュー

概要
====

![tremenu-site-firstview](https://user-images.githubusercontent.com/68333078/113622055-6abe0c00-9697-11eb-9c14-6ecac0756763.png)

ネイティブアプリ「[今日のトレメニュー](https://play.google.com/store/apps/details?id=jp.AppCreate.TrainingLog)」を紹介するためのSPAサイトです。PC・スマートフォンのレスポンシブ対応。
筋トレ情報サイトというコンセプトのもと、アプリの紹介だけでなくトレーニングプログラムやサプリメントの情報の紹介も行っています。

サイトURL
====

サイトはこちらからどうぞ：[リンク(外部)](https://y-u-portfolio.netlify.app/)

使用技術一覧(言語・ライブラリ・ツール)
====

・React.js

・Firebase

・Adobe Photoshop

・Adobe XD

・ESLint(Airbnb)

## React.js

再利用可能なものはコンポーネント化したり、propsを用いて条件分岐付きのレンダリングなどをしています。ページ遷移後は該当するページの一番上にビューが来るように調節しました。以下の機能一覧にあるいくつかの機能を実装するために非同期処理をしています。※APIキーやFirebaseに関するデータはenvファイル内で環境変数にしています。

機能一覧
====

・ページ遷移機能(React Routerを利用)

・トレーニングプログラムカルキュレーター（useStateを利用しユーザーが入力した数字を基に適切なトレーニングプログラムを作成）

・画像検索機能(外部APIを活用した非同期処理/取得した画像データをmapメソッドで表示)

・カルーセル(アプリ画像と紹介文がクリックによって切り替わる/useStateを使用したデータの呼び出し)

・お問い合わせ機能(FirebaseのFirestoreをデータベースに利用)

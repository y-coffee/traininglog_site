サイト名
====

Training Menu Today/今日のトレメニュー ～筋トレ情報サイト～

概要
====

![tremenu-site-firstview](https://user-images.githubusercontent.com/68333078/113622055-6abe0c00-9697-11eb-9c14-6ecac0756763.png)

ネイティブアプリ「今日のトレメニュー([リンク(外部))](https://play.google.com/store/apps/details?id=jp.AppCreate.TrainingLog)」を紹介するためのSPAサイトです。PC・スマートフォンのレスポンシブ対応。
筋トレ情報サイトというコンセプトのもと、アプリの紹介だけでなくトレーニングプログラムやサプリメントの情報の紹介も行っています。

サイトURL
====

サイトはこちらからどうぞ：[リンク(外部)](https://training-menu-today.netlify.app/)

使用技術一覧(言語・ライブラリ・ツール)
====

・React.js 17.0.1

・React Router Dom 5.2.0

・Prop Types 15.7.2

・Material UI 4.11.2(スマートフォンのハンバーガーメニュー用アイコン)

・Firebase 8.2.9

・Adobe Photoshop(画像の編集加工)

・Adobe XD(デザインカンプ)

・ESLint 7.19.0(Airbnb)

## React.js

再利用可能なものはコンポーネント化したり、propsを用いて条件分岐付きのレンダリングなどをしています。ページ遷移後は該当するページの一番上にビューが来るように調節しました。以下の機能一覧にあるいくつかの機能を実装するために非同期処理をしています。※APIキーやFirebaseに関するデータはenvファイル内で環境変数にしています。

機能一覧
====

・ページ遷移機能(React Routerを利用)

・トレーニングプログラムカルキュレーター（ユーザーが入力した数字から筋トレプログラムを作成/useStateを用いた非同期処理）

・画像検索機能(外部APIを活用した非同期処理/取得した画像データをmapメソッドで表示)

・カルーセル(アプリ画像と紹介文がクリックによって切り替わる/useStateを使用したデータの呼び出し)

・お問い合わせ機能(FirebaseのFirestoreをデータベースに利用)

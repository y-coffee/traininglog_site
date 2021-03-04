import React from 'react';
import '../App.css';

import joo from '../assets/Background_app.png';
import loo from '../assets/App_screenshot1.png';
import goo from '../assets/Googleplay_badge.png';

import ExplanationBox from '../components/ExplanationBox';
import FeatureContentTitle from '../components/FeatureContentTitle';
import Footer from '../components/Footer';
import NavigationBarApp from '../components/NavigationBarApp';
import Carousel from '../components/Carousel';

export default function TremenuApp() {
  return (
    <>
      <NavigationBarApp
        navTitle1="TOP"
        navTitle2="TrainingMenu"
        navTitle3="Supplement"
      />
      <div style={{ backgroundImage: `url(${joo})`, height: 1750 }} className="areaSupplementView">
        <div className="container">
          <div className="subTitleBox">
            <h2>スマートフォンアプリ「今日のトレメニュー」</h2>
          </div>
          <FeatureContentTitle title="アプリの内容" style={{ width: 180 }} />
          <ExplanationBox
            loo={loo}
            sentence1="Android用の無料スマートフォンアプリです。トレーニングメニューの作成や管理が可能です。"
            sentence2="「ジムに行ってトレーニングするだけなのに荷物が多い…」「なんだか面倒くさくなってきた…」。"
            sentence3="そんな風に思ったことはありませんか？本アプリを手に入れれば、ノートや筆記用具をジムへ持っていく手間が省け持ち物がスマートフォンだけで済むようになります。"
            sentence4="その日に行うトレーニングメニューをあらかじめ記録していき、トレーニング中や後の記憶が強く残っているタイミングで新たなメモを編集したり追加したりすることができます。"
            sentence5="シンプルな機能と操作性を備えたスマートフォンアプリ「今日のトレメニュー」であなたのトレーニングをアップグレードしましょう。"
            style2={{ height: 350 }}
            style={{ width: 150, paddingLeft: 50 }}
          />
          <Carousel />
          <FeatureContentTitle title="ダウンロード" style={{ width: 200, marginTop: 50 }} />
          <ExplanationBox
            link="https://play.google.com/store/apps/details?id=jp.AppCreate.TrainingLog"
            loo={goo}
            sentence1="本アプリはGooglePlayに掲載されています。"
            sentence2="ダウンロードに料金は一切発生しません。無料アプリです。"
            sentence3="Android対応のスマートフォンアプリです。"
            sentence4="本アプリは今後さらなる機能を実装とともにアップグレードされる予定です。"
            sentence5="ダウンロードはこちらのアイコンからお願いします。"
            style2={{ height: 300 }}
            style={{ paddingLeft: 50 }}
          />
        </div>
        <Footer
          style={{
            color: '#ffffff', marginTop: 900,
          }}
        />
      </div>
    </>
  );
}

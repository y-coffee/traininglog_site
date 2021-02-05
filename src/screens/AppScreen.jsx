import React from 'react';

import MenuTitle from '../components/MenuTitle';

import yoo from '../assets/Mockup_startphone.png';

export default function AppScreen() {
  return (
    <>
      <MenuTitle title="App" />
      <div className="areaAboutView">
        <div className="container">
          <div className="mockupBox">
            <img src={yoo} alt="Mockup_pc" className="phoneMockupImage" />
          </div>
          <div className="aboutBox">
            <p className="aboutSubtitle">スマートフォンアプリ「今日のトレメニュー」</p>
            <p className="aboutDescription">
              Android対応のスマートフォンアプリです。
              <br />
              <br />
              筋トレメニューをシンプルに管理することができます。その日の記録を残すこともできるので、以降のトレーニングの見通しが向上します。
              <br />
              <br />
            </p>
            <p className="appDetailLinkBox"><span className="appDetailLink">＞＞アプリ詳細とダウンロード</span></p>
          </div>
        </div>
      </div>
    </>
  );
}

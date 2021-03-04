import React from 'react';
import { Link } from 'react-router-dom';

import MenuTitle from '../components/MenuTitle';

import yoo from '../assets/App_screenshot1.png';

export default function AppScreen() {
  return (
    <>
      <MenuTitle title="App" style={{ marginBottom: 100 }} />
      <div className="areaAboutView">
        <div className="container">
          <div className="mockupBox">
            <Link to="/tremenuApp">
              <img src={yoo} alt="Mockup_pc" className="phoneMockupImage" />
            </Link>
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
            <Link to="/tremenuApp" style={{ color: 'inherit', textDecoration: 'inherit' }}>
              <p className="appDetailLinkBox"><span className="appDetailLink">＞＞アプリ詳細とダウンロード</span></p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

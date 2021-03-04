import React from 'react';

import MenuTitle from '../components/MenuTitle';

import hoo from '../assets/Mocup_pc_with.png';

export default function AboutScreen() {
  return (
    <>
      <MenuTitle title="About" />
      <div className="areaAboutView">
        <div className="container">
          <div>
            <img src={hoo} alt="Mockup_pc" className="pcMockupImage" />
          </div>
          <div className="aboutBox">
            <p className="aboutSubtitle">Training Menu Today/今日のトレメニューとは</p>
            <p className="aboutDescription">
              筋トレについての役立つ情報を発信しています。
              <br />
              範囲は各種トレーニングプログラムに始まり、サプリメントやスマートフォンアプリケーション「今日のトレメニュー」の紹介まで多岐に渡ります。
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

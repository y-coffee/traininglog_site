import React from 'react';
import '../App.css';

import foo from '../assets/Background_top1-2.png';
import goo from '../assets/Top_word.png';
import koo from '../assets/Muscles.svg';

// import NavigationBar from '../components/NavigationBar';
// import AboutScreen from './AboutScreen';
// import FeatureScreen from './FeatureScreen';
// import AppScreen from './AppScreen';
// import Mail from '../assets/Mail.svg';

export default function TopScreen() {
  return (
    <>
      <div style={{ backgroundImage: `url(${foo})` }} className="areaTopView">
        <div style={{ backgroundImage: `url(${goo})` }} className="container">
          <img src={koo} alt="topWord" className="muscle" />
          <h1 className="topWordSubTitle">今日のトレメニュー ～筋トレ情報サイト～</h1>
        </div>
      </div>
    </>
  );
}

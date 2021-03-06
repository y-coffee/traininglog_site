import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import DehazeIcon from '@material-ui/icons/Dehaze';

import foo from '../assets/Background_top1-2.png';
import goo from '../assets/Top_word.png';
import koo from '../assets/Muscles.svg';

export default function TopScreen() {
  const [open, setOpen] = useState(false);
  const humberger = () => {
    setOpen(!open);
  };

  const navScrollAbout = function onPress() {
    setOpen(!open);
    window.scrollTo({
      top: 570,
      behavior: 'smooth',
    });
  };
  const navScrollFeatures = function onPress() {
    setOpen(!open);
    window.scrollTo({
      top: 1220,
      // top: 500,
      behavior: 'smooth',
    });
  };
  const navScrollApp = function onPress() {
    setOpen(!open);
    window.scrollTo({
      top: 2430,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <div style={{ backgroundImage: `url(${foo})` }} className="areaTopView">
        <div className={`areaHumbergerView${open ? 'IsBlue' : ''}`}>
          <div className="container">
            <div className="navPC">
              <nav className="humbergerNavBox">
                <ul>
                  <li onClick={navScrollAbout} aria-hidden="true">・About</li>
                  <li onClick={navScrollFeatures} aria-hidden="true">・Feature</li>
                  <li onClick={navScrollApp} aria-hidden="true">・App</li>
                  <li><Link to="contact" style={{ color: 'inherit', textDecoration: 'inherit' }}>・Contact</Link></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>

        <div className="humbergerBox">
          <DehazeIcon className="humberger" style={{ fontSize: '3rem' }} onClick={humberger} />
        </div>
        <div style={{ backgroundImage: `url(${goo})` }} className="container">
          <img src={koo} alt="topWord" className="muscle" />
          <h1 className="topWordSubTitle">今日のトレメニュー ～筋トレ情報サイト～</h1>
        </div>
      </div>
    </>
  );
}

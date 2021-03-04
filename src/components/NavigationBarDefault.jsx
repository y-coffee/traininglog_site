// defaultScreenにあるナビゲーションバー用のコンポーネント

import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

import Icon from '../assets/Menu.png';
import doo from '../assets/Mail.svg';

export default function NavigationBarDefault() {
  const navScrollAbout = function onPress() {
    window.scrollTo({
      top: 570,
      behavior: 'smooth',
    });
  };
  const navScrollFeatures = function onPress() {
    window.scrollTo({
      top: 1250,
      behavior: 'smooth',
    });
  };
  const navScrollApp = function onPress() {
    window.scrollTo({
      top: 2050,
      behavior: 'smooth',
    });
  };
  return (
    <>
      <header>
        <div className="container">
          <div className="areaLogoHeader">
            <Link to="/" style={{ color: 'inherit', textDecoration: 'inherit' }}>
              <img src={Icon} alt="Icon" />
            </Link>
          </div>
          <nav className="navHeader">
            <ul className="listNavHeader">
              <li className="navItem"><button type="button" onClick={navScrollAbout} label="About" className="navTopButton">About</button></li>
              <li className="navItem"><button type="button" onClick={navScrollFeatures} label="Features" className="navTopButton">Features</button></li>
              <li className="navItem"><button type="button" onClick={navScrollApp} label="App" className="navTopButton">App</button></li>
              <div className="navItemContact">
                <img src={doo} alt="Mail" className="mailIcon" />
                <li className="navItem"><Link to="/contact" style={{ color: 'inherit', textDecoration: 'inherit' }}>Contact</Link></li>
              </div>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

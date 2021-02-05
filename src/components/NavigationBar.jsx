import React from 'react';
import '../App.css';

import Icon from '../assets/Menu.png';
import doo from '../assets/Mail.svg';

export default function NavigationBar() {
  return (
    <>
      <header>
        <div className="container">
          <div className="areaLogoHeader">
            <img src={Icon} alt="Icon" />
          </div>
          <nav className="navHeader">
            <ul className="listNavHeader">
              <li className="navItem">About</li>
              <li className="navItem">Features</li>
              <li className="navItem">App</li>
              <div className="navItemContact">
                <img src={doo} alt="Mail" className="mailIcon" />
                <li className="navItem">Contact</li>
              </div>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

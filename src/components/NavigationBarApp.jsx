import React from 'react';
import { string } from 'prop-types';
import '../App.css';
import { Link } from 'react-router-dom';

import Icon from '../assets/Menu.png';
import doo from '../assets/Mail.svg';

export default function NavigationBarApp(props) {
  const {
    navTitle1, navTitle2, navTitle3,
  } = props;
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
              <li className="navItem"><Link to="/" style={{ color: 'inherit', textDecoration: 'inherit' }}>{navTitle1}</Link></li>
              <li className="navItem"><Link to="/trainingMenu" style={{ color: 'inherit', textDecoration: 'inherit' }}>{navTitle2}</Link></li>
              <li className="navItem"><Link to="/supplement" style={{ color: 'inherit', textDecoration: 'inherit' }}>{navTitle3}</Link></li>
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

NavigationBarApp.propTypes = {
  navTitle1: string.isRequired,
  navTitle2: string.isRequired,
  navTitle3: string.isRequired,
};

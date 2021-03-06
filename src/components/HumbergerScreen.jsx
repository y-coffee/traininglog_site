import React from 'react';
import { string } from 'prop-types';
import { Link } from 'react-router-dom';

export default function Humberger(props) {
  const {
    link1, link2, link3, link4, koko,
    navTitlePhone1, navTitlePhone2, navTitlePhone3, navTitlePhone4,
  } = props;
  return (
    <>
      <div className={`areaHumbergerView${koko}`}>
        <div className="container">
          <nav className="humbergerNavBox">
            <ul>
              <li>
                ・
                <Link to={link1} style={{ color: 'inherit', textDecoration: 'inherit' }}>{navTitlePhone1}</Link>
              </li>
              <li>
                ・
                <Link to={link2} style={{ color: 'inherit', textDecoration: 'inherit' }}>{navTitlePhone2}</Link>
              </li>
              <li>
                ・
                <Link to={link3} style={{ color: 'inherit', textDecoration: 'inherit' }}>{navTitlePhone3}</Link>
              </li>
              <li>
                ・
                <Link to={link4} style={{ color: 'inherit', textDecoration: 'inherit' }}>{navTitlePhone4}</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}

Humberger.propTypes = {
  koko: string,
  navTitlePhone1: string.isRequired,
  navTitlePhone2: string.isRequired,
  navTitlePhone3: string.isRequired,
  navTitlePhone4: string,
  link1: string.isRequired,
  link2: string.isRequired,
  link3: string.isRequired,
  link4: string,
};

Humberger.defaultProps = {
  koko: null,
  navTitlePhone4: null,
  link4: null,
};

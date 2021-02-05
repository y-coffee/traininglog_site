import React from 'react';
import '../App.css';

import doo from '../assets/Arrow_top.svg';

export default function Arrow() {
  return (
    <>
      <div className="arrowTopBox">
        <img src={doo} alt="arrow" className="arrowTop" />
      </div>
    </>
  );
}

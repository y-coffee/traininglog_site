// import { render } from '@testing-library/react';
import React from 'react';
// import Test1 from './Test1';

// import loo from '../assets/Savas-protein1.png';

export default function explanationBox(props) {
  const {
    link, loo, sentence1, sentence2, sentence3, sentence4, sentence5, style, style2,
  } = props;
  if (loo) {
    return (
      <>
        <div className="explanationBox" style={style2}>
          <div>
            <p>
              {sentence1}
              <br />
              {sentence2}
              <br />
              {sentence3}
              <br />
              {sentence4}
              <br />
              {sentence5}
            </p>
          </div>
          <div>
            <a href={link} rel="noreferrer" target="_blank">
              <img src={loo} alt="loo" className="explanationImage" style={style} />
            </a>
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <div className="explanationBox" style={style2}>
        <div>
          <p>
            {sentence1}
            <br />
            {sentence2}
            <br />
            {sentence3}
            <br />
            {sentence4}
            <br />
            {sentence5}
          </p>
        </div>
        {/* <div>
          <img src={loo} alt="loo" className="explanationImage" style={style} />
        </div> */}
      </div>
    </>
  );
}

explanationBox.defaultProps = {
  loo: null,
  link: null,
};

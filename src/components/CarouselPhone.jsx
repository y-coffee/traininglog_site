import React, { useState } from 'react';
import { string } from 'prop-types';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import images from '../Helper/CarouselData';

export default function CarouselPhone(props) {
  const [currImg, setCurrImg] = useState(0);
  const [currTitle, setCurrTitle] = useState(0);
  const [currSubtitle, setCurrSubtitle] = useState(0);

  const { ko } = props;

  return (
    <div className="carousel">
      <div className="carouselInner">
        <div className="center">
          <img src={images[currImg].img} alt="ko" style={{ width: 150 }} className="carouselPic" />
          <div className="carouselTextBox">
            <p
              style={{
                fontSize: '5vw', fontWeight: 'bold', marginTop: 30, marginBottom: 30,
              }}
              className={ko}
            >
              {images[currImg].title}
            </p>
            <p style={{ fontSize: '4vw', whiteSpace: 'pre-line' }}>{images[currImg].subtitle}</p>
          </div>
        </div>
      </div>
      <div className="carouselPhoneBox">
        <div
          className="left"
          onClick={() => {
            /* eslint no-unused-expressions: 0 */
            currImg > 0
            && (setCurrImg(currImg - 1) && setCurrSubtitle(currSubtitle - 1)
            && setCurrTitle(currTitle - 1));
          }}
          aria-hidden="true"
        >
          <ArrowBackIcon style={{ fontSize: 60, color: '#fff' }} />
        </div>
        <div
          className="right"
          onClick={() => {
            currImg < images.length - 1
            && (setCurrImg(currImg + 1) && setCurrSubtitle(currSubtitle + 1)
            && setCurrTitle(currTitle + 1));
          }}
          aria-hidden="true"
        >
          <ArrowForwardIcon style={{ fontSize: 60, color: '#fff' }} />
        </div>
      </div>
    </div>
  );
}

CarouselPhone.propTypes = {
  ko: string,
};

CarouselPhone.defaultProps = {
  ko: null,
};

import React, { useState } from 'react';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import images from '../Helper/CarouselData';

export default function Carousel() {
  const [currImg, setCurrImg] = useState(0);
  const [currTitle, setCurrTitle] = useState(0);
  const [currSubtitle, setCurrSubtitle] = useState(0);

  return (
    <div className="carousel">
      <div className="carouselInner">
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
          <ArrowBackIcon style={{ fontSize: 50 }} />
        </div>
        <div className="center">
          <img src={images[currImg].img} alt="ko" style={{ width: 250 }} />
          <div>
            <p style={{
              fontSize: 25, fontWeight: 'bold', marginTop: 60, marginBottom: 60,
            }}
            >
              {images[currImg].title}
            </p>
            <p style={{ fontSize: 18, whiteSpace: 'pre-line' }}>{images[currImg].subtitle}</p>
          </div>
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
          <ArrowForwardIcon style={{ fontSize: 50 }} />
        </div>
      </div>
    </div>
  );
}

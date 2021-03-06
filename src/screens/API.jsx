import React, { useState, useEffect } from 'react';
// import dotenv from 'dotenv';
import DehazeIcon from '@material-ui/icons/Dehaze';

import NavigationBarTraining from '../components/NavigationBarTraining';
import joo from '../assets/Background_program_top.png';
import Footer from '../components/Footer';
import Humberger from '../components/HumbergerScreen';

require('dotenv').config();

const env = process.env.REACT_APP_CLIENT_ID;

export default function API() {
  const [images, setImages] = useState([]);
  const [text, setText] = useState('');
  const [query, setQuery] = useState('training');
  const [open, setOpen] = useState(false);
  const humberger = () => {
    setOpen(!open);
  };

  useEffect(() => {
    fetch(`https://api.unsplash.com/search/photos?query=${query}&client_id=${env}`)
      .then((response) => response.json())
      .then((data) => {
        setImages(data.results);
      });
  }, [query]);

  const onSubmit = (event) => {
    event.preventDefault();
    setQuery(text);
  };

  return (
    <>
      <NavigationBarTraining
        navTitle1="TOP"
        navTitle2="Supplement"
        navTitle3="App"
        className="navPhone"
      />
      <div className="navPC">
        <Humberger koko={`${open ? 'IsBlue' : ''}`} navTitlePhone1="TOP" navTitlePhone2="Supplement" navTitlePhone3="App" navTitlePhone4="Contact" link1="/" link2="/supplement" link3="/tremenuApp" link4="/contact" />
      </div>
      <div className="humbergerBox">
        <DehazeIcon className="humberger" style={{ fontSize: '3rem' }} onClick={humberger} />
      </div>
      <div
        style={{ backgroundImage: `url(${joo})`, height: 2000 }}
        className="areaSearchView"
      >
        <div
          className="container"
          style={{
            height: 1900,
          }}
        >
          <div className="subTitleBox">
            <h2>検索サービス</h2>
          </div>
          <div className="searchIntroBox">
            <p className="searchExplain">
              ストックフォトサイト
              <a href="https://unsplash.com/" rel="noreferrer" target="_blank" style={{ color: 'inherit', textDecoration: 'inherit' }}>「Unsplash」</a>
              に登録されている画像を検索できるWebアプリケーションです。
            </p>
            <p className="searchExplain">検索上限の関係からGoogle画像検索などではなく海外サイトを利用しているため、検索は英語の方が適しています。</p>
            <p className="searchExplain">例）腕立て伏せ → Push Up、スクワット → Squat</p>
          </div>
          <div>
            <form onSubmit={onSubmit} className="searchForm">
              <input
                type="text"
                value={text}
                onChange={(event) => setText(event.target.value)}
                className="searchInput"
              />
              <button type="submit">検索</button>
            </form>
          </div>
          <div className="imageBox">
            {
              images.map((image) => (
                <div key={image.id} className="card">
                  <a href={image.urls} rel="noreferrer" target="_blank">
                    <img src={image.urls.regular} className="card-img" alt="検索結果" />
                  </a>
                </div>
              ))
            }
          </div>
        </div>
        <Footer style={{ color: '#fff', marginTop: 60 }} sortOf="footerPhoneSearch" />
      </div>
    </>
  );
}

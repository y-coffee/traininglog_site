import React, { useState, useEffect } from 'react';
// import dotenv from 'dotenv';

import NavigationBarTraining from '../components/NavigationBarTraining';
import joo from '../assets/Background_program_top.png';
import Footer from '../components/Footer';

require('dotenv').config();

const env = process.env.REACT_APP_CLIENT_ID;

export default function API() {
  const [images, setImages] = useState([]);
  const [text, setText] = useState('');
  const [query, setQuery] = useState('training');

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
      />
      <div style={{ backgroundImage: `url(${joo})`, height: 2000 }} className="area10x3View">
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
            <form onSubmit={onSubmit}>
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
        <Footer style={{ color: '#fff', marginTop: 60 }} />
      </div>
    </>
  );
}

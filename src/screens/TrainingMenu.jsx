import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
// import explanationBox from '../components/ExplanationBox';
// import FeatureContentTitle from '../components/FeatureContentTitle';
import Footer from '../components/Footer';
// import NavigationBar3 from '../components/NavigationBarTraining';

import joo from '../assets/Background_program_top.png';
import SubTitleBox from '../components/SubTitleBox';
import NavigationBarTraining from '../components/NavigationBarTraining';

export default function TrainingMenu() {
  return (
    <>
      <NavigationBarTraining navTitle1="TOP" navTitle2="Supplement" navTitle3="App" />
      <div style={{ backgroundImage: `url(${joo})`, height: 900 }} className="areaSupplementView">
        <div className="container" style={{ height: 650 }}>
          <Link to="/531program" style={{ color: 'inherit', textDecoration: 'inherit' }}>
            <div className="trainigMenuIntroBox">
              <SubTitleBox title="5・3・1プログラム" style={{ paddingTop: 0, marginBottom: 0 }} />
              <p>≫忙しい時期でも着実に効率よく鍛えたい</p>
            </div>
          </Link>
          <Link to="/10x3method" style={{ color: 'inherit', textDecoration: 'inherit' }}>
            <div className="trainigMenuIntroBox" style={{ marginTop: 100 }}>
              <SubTitleBox title="10回x3セット法" style={{ paddingTop: 0, marginBottom: 0 }} />
              <p>≫気合を入れてしっかりと筋肥大させたい</p>
            </div>
          </Link>
          <Link to="/piramidmethod" style={{ color: 'inherit', textDecoration: 'inherit' }}>
            <div className="trainigMenuIntroBox" style={{ marginTop: 100 }}>
              <SubTitleBox title="ピラミッド法" style={{ paddingTop: 0, marginBottom: 0 }} />
              <p>≫筋肥大だけでなく筋力もさらに向上させたい</p>
            </div>
          </Link>
          <Link to="/search" style={{ color: 'inherit', textDecoration: 'inherit' }}>
            <div className="trainigMenuIntroBox" style={{ marginTop: 100 }}>
              <SubTitleBox title="検索サービス" style={{ paddingTop: 0, marginBottom: 0 }} />
              <p>≫トレーニング画像を検索してイメージを高める</p>
            </div>
          </Link>
        </div>
        <Footer
          style={{
            color: '#ffffff', marginTop: 30,
          }}
        />
      </div>
    </>
  );
}

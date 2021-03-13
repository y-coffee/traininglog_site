import React, { useState } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import DehazeIcon from '@material-ui/icons/Dehaze';

import Footer from '../components/Footer';

// import joo from '../assets/ダウンロード2-min.png';
import joo from '../assets/Background_program_top.png';
import SubTitleBox from '../components/SubTitleBox';
import NavigationBarTraining from '../components/NavigationBarTraining';
import Humberger from '../components/HumbergerScreen';

export default function TrainingMenu() {
  const [open, setOpen] = useState(false);
  const humberger = () => {
    setOpen(!open);
  };

  return (
    <>
      <NavigationBarTraining navTitle1="TOP" navTitle2="Supplement" navTitle3="App" className="navPhone" />
      <div className="navPC">
        <Humberger koko={`${open ? 'IsBlue' : ''}`} navTitlePhone1="TOP" navTitlePhone2="Supplement" navTitlePhone3="App" navTitlePhone4="Contact" link1="/" link2="/supplement" link3="/tremenuApp" link4="/contact" />
      </div>
      <div className="humbergerBox">
        <DehazeIcon className="humberger" style={{ fontSize: '3rem' }} onClick={humberger} />
      </div>

      <div style={{ backgroundImage: `url(${joo})`, height: 900 }} className="areaTrainingMenuView">
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
          sortOf="footerPhoneTrainingmenu"
        />
      </div>
    </>
  );
}

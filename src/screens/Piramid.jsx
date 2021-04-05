import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DehazeIcon from '@material-ui/icons/Dehaze';

import FeatureContentTitle from '../components/FeatureContentTitle';
import NavigationBarTraining from '../components/NavigationBarTraining';
import AimBox from '../components/AimBox';
import ExplanationMenuBox from '../components/ExplanationMenuBox';
import Footer from '../components/Footer';
import MenuCalculator from '../components/MenuCalculator';

import joo from '../assets/Background_program_top.png';
import Humberger from '../components/HumbergerScreen';

export default function Piramid() {
  const [open, setOpen] = useState(false);
  const humberger = () => {
    setOpen(!open);
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
        <Humberger koko={`${open ? 'IsBlue' : ''}`} navTitlePhone1="TOP" navTitlePhone2="Supplement" navTitlePhone3="App" navTitlePhone4="Contact" link1="/" link2="supplement" link3="tremenuApp" link4="contact" />
      </div>
      <div className="humbergerBox">
        <DehazeIcon className="humberger" style={{ fontSize: '3rem' }} onClick={humberger} />
      </div>

      <div style={{ backgroundImage: `url(${joo})`, height: 2150 }} className="areaPiramidView">
        <div className="container">
          <div className="subTitleBox">
            <h2>ピラミッド法</h2>
          </div>
          <FeatureContentTitle title="トレーニングの狙い" style={{ width: 260 }} />
          <AimBox
            sentence1="筋肥大と筋力を両方とも向上させること。"
            sentence2="速筋を疲弊させた後に遅筋にもアプローチすることができ、筋肥大効率も視野に入っています。"
            style2={{ height: 160, paddingBottom: 0 }}
          />
          <FeatureContentTitle title="トレーニングの方法" style={{ width: 260, marginTop: 50 }} />
          <ExplanationMenuBox
            sentence1="中負荷・高負荷を取り入れたトレーニング法で、1回のトレーニングあたり5セット行います。1セット目60%で8回、2セット目70%で6回、3セット目80%で4回、4セット目70％で限界まで、5セット目60%で限界までという内容です。"
            sentence2="このパーセンテージは1回しか挙げられない重量に対してです。ベンチプレス100kgがMAXの人の80%は80kgになります。イメージとしては、筋肥大→筋力→筋肥大という順でセットごとに狙いがあります。"
            sentence3="基本的に、高重量を扱うことのできる多関節種目で多く採用される方法です。たとえば、ベンチプレスやスクワットそしてデッドリフトやオーバーヘッドプレスなどの種目がこれにあたります。"
            sentence4="もちろん、アームカールなどの単関節種目に適用することも可能ですが、その種の種目はMAX重量が低くなる傾向にありパーセンテージでの管理がし辛くなります。"
            sentence5="したがって、単関節種目や扱う重要の低いものに関しては10×3セット法を用いる方が効果的です。"
            style2={{ height: 800 }}
            piramid="piramid"
          />
          <div className="calcompoPiramid">
            <FeatureContentTitle title="カルキュレーター" style={{ width: 260, marginTop: 50 }} />
            <MenuCalculator menu="ピラミッド法" tablePiramid="tablePramid" />
          </div>
          <div className="menuLink">
            <p>
              <span className="menuLinkHead">●</span>
              <Link to="/531program" style={{ color: 'inherit', textDecoration: 'inherit' }}>5・3・1プログラム</Link>
            </p>
            <p>
              <span className="menuLinkHead">●</span>
              <Link to="/10x3method" style={{ color: 'inherit', textDecoration: 'inherit' }}>10回x3セット法</Link>
            </p>
          </div>
        </div>
        <Footer
          style={{
            color: '#ffffff', marginTop: 1110,
          }}
          sortOf="footerPhonePiramid"
        />
      </div>

    </>
  );
}

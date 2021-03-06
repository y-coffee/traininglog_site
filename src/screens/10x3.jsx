import React, { useState } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import DehazeIcon from '@material-ui/icons/Dehaze';

import joo from '../assets/Background_program_top.png';

import AimBox from '../components/AimBox';
import ExplanationMenuBox from '../components/ExplanationMenuBox';
import FeatureContentTitle from '../components/FeatureContentTitle';
import Footer from '../components/Footer';
import NavigationBarTraining from '../components/NavigationBarTraining';
import Humberger from '../components/HumbergerScreen';

export default function TremenuApp() {
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
      />
      <div className="navPC">
        <Humberger koko={`${open ? 'IsBlue' : ''}`} navTitlePhone1="TOP" navTitlePhone2="Supplement" navTitlePhone3="App" navTitlePhone4="Contact" link1="/" link2="supplement" link3="tremenuApp" link4="contact" />
      </div>
      <div className="humbergerBox">
        <DehazeIcon className="humberger" style={{ fontSize: '3rem' }} onClick={humberger} />
      </div>
      <div style={{ backgroundImage: `url(${joo})`, height: 1450 }} className="area10x3View">
        <div className="container">
          <div className="subTitleBox">
            <h2>10回x3セット法</h2>
          </div>
          <FeatureContentTitle title="トレーニングの狙い" style={{ width: 260 }} />
          <AimBox
            sentence1="筋肥大にフォーカスし効果的にそれを実現すること。"
            sentence2="オーソドックスなトレーニング法で、しっかりと筋肥大に向き合うことを求められます。"
            style2={{ height: 160, paddingBottom: 0 }}
          />
          <FeatureContentTitle title="トレーニングの方法" style={{ width: 260, marginTop: 50 }} />
          <ExplanationMenuBox
            sentence1="MAXの70～80%の重量で10回挙上することを1セットとし、1回のトレーニングでそれを3セット行います。1週間当たりの合計セット数は10セット前後を目安とするので、週に3回ほどトレーニングができるとこのトレーニングは効率的に行うことができます。"
            sentence2="MAXの70～80%の重量で10回挙上すると、最後の5回が「エフェクティブレップ」と呼ばれる筋肥大に効果的な挙上になります。これを可能な限り稼ぐ点からも、10×3セット法は効果が期待できると言われています。"
            sentence3="1週間あたりのトータルボリューム(重量×回数×セット数)は、ベンチプレスのMAXが100kgで80%の重量でトレーニングする場合、8000kgとなります。"
            sentence4="もし90%で5回を1セットとする場合、トータルボリューム8000kgに到達させるためには、1週間当たり18セット必要になり1回のトレーニングでは6セット行う必要がでてきます。扱う重量が大きくなればなるほど、セット間のインターバルは長くなるので、トレーニング時間も自然と長くなってしまいます。"
            sentence5="もしあなたの狙いに合わせてセット重量を上げたいときは、身体のコンディションと使える時間を加味してトレーニング計画を組むように心がけましょう。"
            style2={{ height: 650 }}
          />
          <div className="menuLink">
            <p>
              <span className="menuLinkHead">●</span>
              <Link to="/531program" style={{ color: 'inherit', textDecoration: 'inherit' }}>5・3・1プログラム</Link>
            </p>
            <p>
              <span className="menuLinkHead">●</span>
              <Link to="/piramidmethod" style={{ color: 'inherit', textDecoration: 'inherit' }}>ピラミッド法</Link>
            </p>
          </div>
        </div>
        <Footer
          style={{
            color: '#ffffff', marginTop: 410,
          }}
          sortOf="footerPhone10x3"
        />
      </div>
    </>
  );
}

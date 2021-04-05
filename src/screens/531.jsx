import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DehazeIcon from '@material-ui/icons/Dehaze';

import FeatureContentTitle from '../components/FeatureContentTitle';
import NavigationBarTraining from '../components/NavigationBarTraining';
import AimBox from '../components/AimBox';
import ExplanationMenuBox from '../components/ExplanationMenuBox';
import Footer from '../components/Footer';

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
      <div style={{ backgroundImage: `url(${joo})`, height: 1600 }} className="area531View">
        <div className="container">
          <div className="subTitleBox">
            <h2>5・3・1プログラム</h2>
          </div>
          <FeatureContentTitle title="トレーニングの狙い" style={{ width: 260 }} />
          <AimBox
            sentence1="日常的なストレスや体力的な不安がある場合であっても継続可能な範囲でトレーニングすること。"
            sentence2="継続がし易いだけでなく、ゆるやかに身体的なパフォーマンスを向上させることができます。"
            style2={{ height: 160, paddingBottom: 0 }}
          />
          <FeatureContentTitle title="トレーニングの方法" style={{ width: 260, marginTop: 50 }} />
          <ExplanationMenuBox
            sentence1="ベンチプレス、スクワット、デッドリフト、オーバーヘッドプレスで用いられます。1サイクル4週間。MAX挙上重量の90%を「トレーニングマックス(TM)」とし、下の表に当てはめて重量を計算しトレーニングを行います。"
            sentence2="1週間目は5回、2週間目は3回、3週間目は5・3・1回、4週目はディロード(積極的休養)が目安です。"
            sentence3="ベンチプレスMAX挙上重要が100kgの場合TMは90kgになります。これを上記の表に当てはめると、1週目の1セット目はTMの65%なので、58.5kgを5回挙げるという計算になります。"
            sentence4="3セット目の+αは挙げられなくなるまで挙上してください。なお、4セット目と5セット目を追加して、「ピラミッド法」のページで紹介しているような仕方でトレーニングボリュームを多くすることもできます。4週目のディロードは低負荷で運動します。場合によっては完全に休養しても構いません。"
            sentence5="1サイクル終了したら再度同じ要領で2サイクル目を開始しましょう。ずっと同じ重量で続けても筋力などは向上しないので、サイクル毎に2.5kg重くして挑戦すると効果的です。"
            style2={{ height: 800 }}
            tre531="tre531"
          />
          <div className="menuLink">
            <p>
              <span className="menuLinkHead">●</span>
              <Link to="/10x3method" style={{ color: 'inherit', textDecoration: 'inherit' }}>10回x3セット法</Link>
            </p>
            <p>
              <span className="menuLinkHead">●</span>
              <Link to="/piramidmethod" style={{ color: 'inherit', textDecoration: 'inherit' }}>ピラミッド法</Link>
            </p>
          </div>
        </div>
        <Footer
          style={{
            color: '#ffffff', marginTop: 560,
          }}
          sortOf="footerPhone531"
        />
      </div>

    </>
  );
}

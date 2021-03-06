import React, { useState } from 'react';
import DehazeIcon from '@material-ui/icons/Dehaze';

import '../App.css';

import joo from '../assets/Background_supplement.png';
import loo from '../assets/Savas-protein1.png';
import goo from '../assets/Bitamin1.png';
import ExplanationBox from '../components/ExplanationBox';
import FeatureContentTitle from '../components/FeatureContentTitle';
import Footer from '../components/Footer';
import SubTitleBox from '../components/SubTitleBox';
import NavigationBarSupplement from '../components/NavigationBarSupplement';
import Humberger from '../components/HumbergerScreen';

export default function Supplement() {
  const [open, setOpen] = useState(false);
  const humberger = () => {
    setOpen(!open);
  };

  return (
    <>
      <NavigationBarSupplement navTitle1="TOP" navTitle2="TrainingMenu" navTitle3="App" className="navPhone" />
      <div className="navPC">
        <Humberger koko={`${open ? 'IsBlue' : ''}`} navTitlePhone1="TOP" navTitlePhone2="Training" navTitlePhone3="App" navTitlePhone4="Contact" link1="/" link2="trainingMenu" link3="tremenuApp" link4="contact" />
      </div>
      <div className="humbergerBox">
        <DehazeIcon className="humberger" style={{ fontSize: '3rem' }} onClick={humberger} />
      </div>
      <div style={{ backgroundImage: `url(${joo})` }} className="areaSupplementView">
        <div className="container">
          <SubTitleBox title="サプリメント" />
          <FeatureContentTitle title="プロテイン" />
          <div className="forSupplement">
            <ExplanationBox
              link="https://www.amazon.co.jp/%E6%98%8E%E6%B2%BB-%E3%82%B6%E3%83%90%E3%82%B9-%E3%83%9B%E3%82%A8%E3%82%A4%E3%83%97%E3%83%AD%E3%83%86%E3%82%A4%E3%83%B3100-%E3%82%B3%E3%82%B3%E3%82%A2%E5%91%B3%E3%80%9050%E9%A3%9F%E5%88%86%E3%80%91-050g/dp/B00IEA5210/ref=sr_1_5?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&dchild=1&keywords=%E3%82%B6%E3%83%90%E3%82%B9+%E3%83%9B%E3%82%A8%E3%82%A4&qid=1614821792&sr=8-5"
              loo={loo}
              sentence1="トレーニングは筋肉を破壊する行為です。"
              sentence2="そのため、十分な栄養と休息が必要になり、これらを満たさないと充分な筋肥大は見込めません。栄養摂取もトレーニングの一環です。"
              sentence3="筋合成に役立つサプリメントにプロテインがあります。"
              sentence4="動物性プロテインを摂ることが推奨されます。"
              sentence5="その中でも特にホエイプロテインは栄養吸収効率がよく、筋肥大にとってとても役立つサプリメントの代表例です。"
            />
          </div>
          <FeatureContentTitle title="マルチビタミン" style={{ width: 200, marginTop: 50 }} />
          <div className="forSupplement">
            <ExplanationBox
              link="https://www.amazon.co.jp/%E5%A4%A7%E5%A1%9A%E8%A3%BD%E8%96%AC-%E3%83%8D%E3%82%A4%E3%83%81%E3%83%A3%E3%83%BC%E3%83%A1%E3%82%A4%E3%83%89-%E3%82%B9%E3%83%BC%E3%83%91%E3%83%BC%E3%83%9E%E3%83%AB%E3%83%81%E3%83%93%E3%82%BF%E3%83%9F%E3%83%B3-%E3%83%9F%E3%83%8D%E3%83%A9%E3%83%AB-120%E7%B2%92/dp/B00516RULK/ref=sr_1_18?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&dchild=1&keywords=%E3%83%9F%E3%83%8B%E3%83%83%E3%83%84%E3%83%A1%E3%82%A4%E3%83%89+%E3%83%93%E3%82%BF%E3%83%9F%E3%83%B3&qid=1614821888&sr=8-18"
              loo={goo}
              sentence1="トレーニング後は体力が消耗します。"
              sentence2="その後の身体のリカバリーのために多様な栄養素が必要になります。"
              sentence3="ただでさえビタミンの多くは体外から摂取しなくてはならない栄養素なので、サプリメントを摂ることはとても効果があります。"
              sentence4="もし運動しなかったのであれば足りていたビタミン量であっても、筋合成のためなど、トレーニングをする人はしない人よりも多くのビタミンが求められます。"
              sentence5="また、日常生活のコンディショニングにも大きく寄与するサプリメントです。"
            />
          </div>
        </div>
        <Footer
          style={{
            color: '#ffffff', marginTop: 210,
          }}
          sortOf="footerPhoneSupplement"
        />
      </div>
    </>
  );
}

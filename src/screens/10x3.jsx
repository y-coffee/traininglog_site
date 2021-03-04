import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

import joo from '../assets/Background_program_top.png';

import AimBox from '../components/AimBox';
import ExplanationMenuBox from '../components/ExplanationMenuBox';
import FeatureContentTitle from '../components/FeatureContentTitle';
import Footer from '../components/Footer';
import NavigationBarTraining from '../components/NavigationBarTraining';

export default function TremenuApp() {
  return (
    <>
      <NavigationBarTraining
        navTitle1="TOP"
        navTitle2="Supplement"
        navTitle3="App"
      />
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
          <FeatureContentTitle title="ダウンロード" style={{ width: 200, marginTop: 50 }} />
          <ExplanationMenuBox
            sentence1="MAXの70～80%の重量で10回挙上することを1セットとし、1回のトレーニングでそれを3セット行います。1週間当たりの合計セット数は10セット前後を目安とするので、週に3回ほどトレーニングができるとこのトレーニングは効率的に行うことができます。もし、週に2回しかトレーニングできない場合は、1回のトレーニングで5セット行うようにします。"
            sentence2="また、MAXの70～80%の重量で10回挙上すると、最後の5回が「エフェクティブレップ」と呼ばれる筋肥大に効果的な挙上になります。これを可能な限り稼ぐ視点から観ても、10×3セット法は効果が期待できると言われています。"
            sentence3="このトレーニング法の1週間あたりのトータルボリューム(重量×回数×セット数)は、ベンチプレスのMAXが100kgで80%の重量でトレーニングする場合、8000kgとなります。仮にセット重量を少し重くして90%でやると10回は挙がりませんが、「エフェクティブレップ」は稼ぐことが出来ています。"
            sentence4="そこで、もし90%で5回を1セットとする場合、トータルボリューム8000kgに到達させるためには、1週間当たり18セット必要になり1回のトレーニングでは6セット行う必要がでてきます。扱う重量が大きくなればなるほど、セット間のインターバルは長くなるので、トレーニング時間も自然と長くなってしまいます。"
            sentence5="もしあなたの狙いに合わせてセット重量を上げたいときは、身体のコンディションと使える時間を加味してトレーニング計画を組むように心がけましょう。"
            style2={{ height: 650 }}
          />
          <div className="menuLink">
            <p>
              <span className="menuLinkHead">●</span>
              <Link to="/trainingMenu" style={{ color: 'inherit', textDecoration: 'inherit' }}>5・3・1プログラム</Link>
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
        />
      </div>
    </>
  );
}

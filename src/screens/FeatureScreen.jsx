import React from 'react';
import {
  Link,
} from 'react-router-dom';

import MenuTitle from '../components/MenuTitle';

import foo from '../assets/Icon_program.svg';
import hoo from '../assets/Icon_supplement.svg';
import goo from '../assets/Background_feature.png';

export default function FeatureScreen() {
  return (
    <>

      <div style={{ backgroundImage: `url(${goo})` }} className="backgroundFeature">
        <MenuTitle title="Feature" style={{ marginTop: 30, color: '#ffffff', paddingTop: 60 }} />
        <div className="areaFeatureView">
          <div className="container">
            <div className="featureBox">
              <div className="iconBox">
                <Link to="/trainingMenu" style={{ color: 'inherit', textDecoration: 'inherit' }}>
                  <img src={foo} alt="Icon_program" className="iconFeature" />
                  <p className="iconBoxP">プログラム</p>
                </Link>
              </div>

              <div className="featureDescription">
                <p>
                  効率よくトレーニングを行うために大きく役立つトレーニングプログラムを紹介します。
                  <br />
                  画像検索サービスの活用もできます。
                  <br />
                  <br />
                  例1) 5・3・1プログラム
                  <br />
                  例1) ピラミッド法
                </p>
              </div>
            </div>
            <div className="featureBox">
              <div className="iconBox">
                <Link to="/supplement" style={{ color: 'inherit', textDecoration: 'inherit' }}>
                  <img src={hoo} alt="Icon_program" className="iconFeature" />
                  <p className="iconBoxP">サプリメント</p>
                </Link>
              </div>
              <div className="featureDescription">
                <p>
                  トレーニングの効果を向上させ、パフォーマンスを支えるサプリメントをいくつか紹介しています。
                  <br />
                  <br />
                  例1)プロテイン
                  <br />
                  例2)ビタミン
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

import React from 'react';

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
                <img src={foo} alt="Icon_program" className="iconFeature" />
                <p>プログラム</p>
              </div>
              <div className="featureDescription">
                <p>
                  効率よくトレーニングを行うために大きく役立つトレーニングプログラムをいくつか紹介します。
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
                <img src={hoo} alt="Icon_program" className="iconFeature" />
                <p>サプリメント</p>
              </div>
              <div className="featureDescription">
                <p>
                  トレーニングの効果を向上させ、パフォーマンスを支えるサプリメントを紹介しています。
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

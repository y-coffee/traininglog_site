import { string } from 'prop-types';
import React, { useState } from 'react';
// import FeatureContentTitle from './FeatureContentTitle';

export default function MenuCalculator(props) {
  const { menu, tablePiramid, table531 } = props;
  const [maxNumber, setMaxNumber] = useState('');

  if (tablePiramid) {
    return (
      <>
        <div className="calculatorBox">
          <div style={{ color: '#fff', width: '100%' }}>
            <p>
              あなたのMAX重量を基に
              {menu}
              に適したトレーニング重量を計算します。
            </p>
            <p>下の入力スペースに重量を入力してください。※小数点以下切り捨て</p>
            <div style={{ color: '#fff', width: '100%', marginTop: 50 }}>
              MAX重量：
              <input
                type="number"
                value={maxNumber}
                onChange={(event) => setMaxNumber(event.target.value)}
                style={{ lineHeight: 20, height: 20, fontSize: 18 }}
              />
            </div>
          </div>
          <div className="calPiramidTableBox" style={{ color: '#fff' }}>
            <table className="piramidTable">
              <tbody>
                <tr>
                  <th>1セット目</th>
                  <td>
                    {Math.floor(maxNumber * 0.6)}
                    kg
                    x8回
                  </td>
                </tr>
                <tr>
                  <th>2セット目</th>
                  <td>
                    {Math.floor(maxNumber * 0.7)}
                    kg
                    ×6回
                  </td>
                </tr>
                <tr>
                  <th>3セット目</th>
                  <td>
                    {Math.floor(maxNumber * 0.8)}
                    kg
                    ×4回
                  </td>
                </tr>
                <tr>
                  <th>4セット目</th>
                  <td>
                    {Math.floor(maxNumber * 0.7)}
                    kg
                    ×限界回数
                  </td>
                </tr>
                <tr>
                  <th>5セット目</th>
                  <td>
                    {Math.floor(maxNumber * 0.6)}
                    kg
                    ×限界回数
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </>
    );
  } if (table531) {
    return (
      <>
        <div className="calculatorBox531">
          <div style={{ color: '#fff', width: '100%' }}>
            <p>
              あなたのMAX重量を基に
              {menu}
              に適したトレーニング重量を計算します。
            </p>
            <p>下の入力スペースに重量を入力してください。※小数点以下切り捨て</p>
            <div style={{ color: '#fff', width: '100%', marginTop: 50 }}>
              MAX重量：
              <input
                type="number"
                value={maxNumber}
                onChange={(event) => setMaxNumber(event.target.value)}
                style={{ lineHeight: 20, height: 20, fontSize: 18 }}
              />
            </div>
          </div>
          <div className="calTre531TableBox" style={{ color: '#fff' }}>
            <table className="tre531Table">
              <tbody>
                <tr>
                  <th>&nbsp;&nbsp;</th>
                  <th>1週目</th>
                  <th>2週目</th>
                  <th>3週目</th>
                  <th>4週目</th>
                </tr>
                <tr>
                  <th>1セット目</th>
                  <td>
                    {Math.floor(maxNumber * 0.65)}
                    kg
                    ×5回
                  </td>
                  <td>
                    {Math.floor(maxNumber * 0.70)}
                    kg
                    ×3回
                  </td>
                  <td>
                    {Math.floor(maxNumber * 0.75)}
                    kg
                    ×5回
                  </td>
                  <td>
                    {Math.floor(maxNumber * 0.40)}
                    kg
                    ×5回
                  </td>
                </tr>
                <tr>
                  <th>2セット目</th>
                  <td>
                    {Math.floor(maxNumber * 0.75)}
                    kg
                    ×5回
                  </td>
                  <td>
                    {Math.floor(maxNumber * 0.80)}
                    kg
                    ×3回
                  </td>
                  <td>
                    {Math.floor(maxNumber * 0.85)}
                    kg
                    ×3回
                  </td>
                  <td>
                    {Math.floor(maxNumber * 0.50)}
                    kg
                    ×5回
                  </td>
                </tr>
                <tr>
                  <th>3セット目</th>
                  <td>
                    {Math.floor(maxNumber * 0.85)}
                    kg
                    ×5回+α
                  </td>
                  <td>
                    {Math.floor(maxNumber * 0.90)}
                    kg
                    ×3回+α
                  </td>
                  <td>
                    {Math.floor(maxNumber * 0.95)}
                    kg
                    ×1回+α
                  </td>
                  <td>
                    {Math.floor(maxNumber * 0.60)}
                    kg
                    ×5回
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>

      </>
    );
  }
}

MenuCalculator.propTypes = {
  menu: string.isRequired,
  tablePiramid: string,
  table531: string,
};

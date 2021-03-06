import { shape, string } from 'prop-types';
import React from 'react';

export default function ExplanationMenuBox(props) {
  const {
    sentence1, sentence2, sentence3, sentence4, sentence5, style2, piramid, tre531,
  } = props;
  if (piramid) {
    return (
      <>
        <div className="explanationBox" style={style2}>
          <div>
            <div>
              {sentence1}
              <br />
              <br />
              {sentence2}
              <br />
              <br />
              <div className="piramidTableBox">
                <table className="piramidTable">
                  <tbody>
                    <tr>
                      <th>1セット目</th>
                      <td>60%×8回</td>
                    </tr>
                    <tr>
                      <th>2セット目</th>
                      <td>70%×6回</td>
                    </tr>
                    <tr>
                      <th>3セット目</th>
                      <td>80%×4回</td>
                    </tr>
                    <tr>
                      <th>4セット目</th>
                      <td>70%×限界回数</td>
                    </tr>
                    <tr>
                      <th>5セット目</th>
                      <td>60%×限界回数</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <br />
              <br />
              {sentence3}
              <br />
              <br />
              {sentence4}
              <br />
              <br />
              {sentence5}
            </div>
          </div>
        </div>
      </>
    );
  } if (tre531) {
    return (
      <>
        <div className="explanationBox" style={style2}>
          <div>
            <div>
              {sentence1}
              <br />
              <br />
              {sentence2}
              <br />
              <br />
              <div className="tre531TableBox">
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
                      <td>65%×5回</td>
                      <td>70%×3回</td>
                      <td>75%×5回</td>
                      <td>40%×5回</td>
                    </tr>
                    <tr>
                      <th>2セット目</th>
                      <td>75%×5回</td>
                      <td>80%×3回</td>
                      <td>85%×3回</td>
                      <td>50%×5回</td>
                    </tr>
                    <tr>
                      <th>3セット目</th>
                      <td>85%×5回+α</td>
                      <td>90%×3回+α</td>
                      <td>95%×1回+α</td>
                      <td>60%×5回</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <br />
              <br />
              {sentence3}
              <br />
              <br />
              {sentence4}
              <br />
              <br />
              {sentence5}
            </div>
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <div className="explanationBox" style={style2}>
        <div>
          <p>
            {sentence1}
            <br />
            <br />
            {sentence2}
            <br />
            <br />
            {sentence3}
            <br />
            <br />
            {sentence4}
            <br />
            <br />
            {sentence5}
          </p>
        </div>
      </div>
    </>
  );
}

ExplanationMenuBox.propTypes = {
  sentence1: string,
  sentence2: string,
  sentence3: string,
  sentence4: string,
  sentence5: string,
  style2: shape(),
  piramid: string,
  tre531: string,
};

ExplanationMenuBox.defaultProps = {
  sentence1: null,
  sentence2: null,
  sentence3: null,
  sentence4: null,
  sentence5: null,
  style2: null,
  piramid: null,
  tre531: null,
};

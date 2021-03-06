import { string, shape } from 'prop-types';
import React from 'react';

export default function AimBox(props) {
  const {
    sentence1, sentence2, style2,
  } = props;
  return (
    <>
      <div className="aimBox" style={style2}>
        <div>
          <p>
            {sentence1}
            <br />
            {sentence2}
          </p>
        </div>
      </div>
    </>
  );
}

AimBox.propTypes = {
  sentence1: string.isRequired,
  sentence2: string.isRequired,
  style2: shape().isRequired,
};

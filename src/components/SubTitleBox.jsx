import { shape, string } from 'prop-types';
import React from 'react';

export default function SubTitleBox(props) {
  const { title, style } = props;
  return (
    <>
      <div className="subTitleBox" style={style}>
        <h2>{title}</h2>
      </div>
    </>
  );
}

SubTitleBox.propTypes = {
  title: string.isRequired,
  style: shape(),
};

SubTitleBox.defaultProps = {
  style: null,
};

import React from 'react';
import { shape } from 'prop-types';

export default function Footer(props) {
  const { style } = props;
  return (
    <>
      <footer style={style}>(C)Smash Create 2021</footer>
    </>
  );
}

Footer.propTypes = {
  style: shape().isRequired,
};

Footer.deafultProps = {
  style: null,
};

import React from 'react';
import { shape, string } from 'prop-types';

export default function Footer(props) {
  const { sortOf, style } = props;
  return (
    <>
      <div className={sortOf}>
        <footer style={style}>(C)Smash Create 2021</footer>
      </div>
    </>
  );
}

Footer.propTypes = {
  style: shape().isRequired,
  sortOf: string.isRequired,
};

Footer.deafultProps = {
  style: null,
  sortOf: null,
};

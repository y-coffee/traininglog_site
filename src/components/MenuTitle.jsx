import React from 'react';
import { shape, string } from 'prop-types';
import '../App.css';

export default function MenuTitle(props) {
  const { title, style } = props;
  return (
    <>
      <div className="menuTitleBox" style={style}>
        <h2 className="menuTitle"><span className="space">{ title }</span></h2>
      </div>
    </>
  );
}

MenuTitle.propTypes = {
  title: string.isRequired,
  style: shape(),
};

MenuTitle.defaultProps = {
  style: null,
};

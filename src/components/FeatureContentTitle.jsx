import React from 'react';

export default function featureContentTitle(props) {
  const { title, style } = props;
  return (
    <>
      <div className="featureContentBox" style={style}>
        <h3><span className="space2">{title}</span></h3>
      </div>
    </>
  );
}

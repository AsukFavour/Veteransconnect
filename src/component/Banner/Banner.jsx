import React from 'react';
import './Banner.css'

const Banner =({imgsrc, headerText, bodyText}) => {
  return (
    <div className="banner" style={{ backgroundImage: `url(${imgsrc})` }}>
      <h1 className="banner__header">{headerText}</h1>
      <p className="banner__text">{bodyText}</p>
    </div>
  );
}

export default Banner;

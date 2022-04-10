import React from 'react';

import Firm from '../../assets/images/trending/firm2.png'

import "./firms.scss";

const Firms = () => {
  return (
    <div className="firms__wrapper">
      <div className="firms__container">
        <div className="firms__item">
          <img src={ Firm } alt="" />
        </div>
        <div className="firms__item">
          <img src={ Firm } alt="" />
        </div>
        <div className="firms__item">
          <img src={ Firm } alt="" />
        </div>
        <div className="firms__item">
          <img src={ Firm } alt="" />
        </div>
        <div className="firms__item">
          <img src={ Firm } alt="" />
        </div>
        <div className="firms__item">
          <img src={ Firm } alt="" />
        </div>
      </div>
    </div>
  )
}

export default Firms;
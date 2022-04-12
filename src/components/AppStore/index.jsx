import React from 'react';

import Logo from '../../assets/images/appstore/logo.png'
import GooglePlay from '../../assets/images/appstore/googleplay.png'
import Apple from '../../assets/images/appstore/apple.png'
import Banner from '../../assets/images/appstore/banner.png'
import Menu from '../../assets/images/appstore/Menu.svg'
import RightArrow from '../../assets/images/appstore/rightArrow.svg'


import "./appstore.scss";


const AppStore = () => {
  return (
    <div className="appstore">
      <div className="appstore__container">
        <div className="appstore__title">
          <h1>Shop faster with Abad App</h1>
          <p>Available on both IOS & Android </p>
        </div>
        <div className="platforms__btn">
          <div className="apple">
            <img src={ Apple } alt="" />
            <div className='text'>
              <p className='text__1'>Download on the</p>
              <p className="text__2">App Store</p>
            </div>
          </div>
          <div className="google">
            <img src={ GooglePlay } alt="" />
            <div className='text'>
              <p className='text__1'>Download on the</p>
              <p className="text__2">Google Play</p>
            </div>
          </div>
        </div>
        <div className="phones">
          <div className="phones__item">
            <div className="header">
              <img src={ Logo } alt="" className="logo" />
              <img src={ Menu } alt="" className='img' />
            </div>
            <div className="main">
              <div className="banner">
                <img src={ Banner } alt="" />
              </div>
              <div className="scroll__section">
                <div className="item"></div>
                <div className="item"></div>
              </div>
              <div className="phone__category">
                <div className="phone__category__title">
                  <p className="phone__category__title__item">Category</p>
                  <p className="phone__category__title__link">All Categories
                    <img src={ RightArrow } alt="" />
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="phones__item">
            <div className="header">
              <img src={ Logo } alt="" className="logo" />
              <img src={ Menu } alt="" className='img' />
            </div>
            <div className="main">
              <div className="banner">
                <img src={ Banner } alt="" />
              </div>
              <div className="scroll__section">
                <div className="item"></div>
                <div className="item"></div>
              </div>
              <div className="phone__category">
                <div className="phone__category__title">
                  <p className="phone__category__title__item">Category</p>
                  <p className="phone__category__title__link">All Categories
                    <img src={ RightArrow } alt="" />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AppStore
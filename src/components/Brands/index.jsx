import React from 'react';


import RigthArrow from '../../assets/images/categories/arrow_right.svg'
import Brand from '../../assets/images/brands/brand.png'
import Brand2 from '../../assets/images/brands/brand2.png'
import Brand3 from '../../assets/images/brands/brand3.png'
import Brand4 from '../../assets/images/brands/brand4.png'



import "./brands.scss";


const Brands = () => {
  return (
    <div className="brands__wrapper">
      <div className="brands__title">
        <div className="brands__title__item">
          <h2>Featured Brands</h2>
        </div>
        <div className="brands__title__link">
          <a href="#">All Offers</a>
          <img src={ RigthArrow } alt="" />
        </div>
      </div>
      <div className="brands__container">
        <div className="brands__item">
          <div className="brands__item__img">
            <img src={ Brand } alt="" />
          </div>
          <div className="brands__item__content">
            <div className="brands__item__content__brand">
              <p>APPLE</p>
            </div>
            <div className="brands__item__content__model">
              <p>New Rose gold Iphone 13</p>
            </div>
          </div>
        </div>
        <div className="brands__item">
          <div className="brands__item__img">
            <img src={ Brand2 } alt="" />
          </div>
          <div className="brands__item__content">
            <div className="brands__item__content__brand">
              <p>MICROSOFT</p>
            </div>
            <div className="brands__item__content__model">
              <p>Last Gen Microsoft Surface 4 Pro</p>
            </div>
          </div>
        </div>
        <div className="brands__item">
          <div className="brands__item__img">
            <img src={ Brand3 } alt="" />
          </div>
          <div className="brands__item__content">
            <div className="brands__item__content__brand">
              <p>BEATS</p>
            </div>
            <div className="brands__item__content__model">
              <p>For Every Purchase Get Free Headset</p>
            </div>
          </div>
        </div>
        <div className="brands__item">
          <div className="brands__item__img">
            <img src={ Brand4 } alt="" />
          </div>
          <div className="brands__item__content">
            <div className="brands__item__content__brand">
              <p>SOLGAR</p>
            </div>
            <div className="brands__item__content__model">
              <p>Vitamins 3 Pieces - 25% OFF</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Brands;
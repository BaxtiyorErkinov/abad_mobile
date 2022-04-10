import React from 'react';

import RightArrow from '../../assets/images/trending/rightArrowBlue.svg'
import RightArrowGrey from '../../assets/images/trending/rightArrowGrey.svg'
import RightArrowOrange from '../../assets/images/trending/rightArrowOrange.svg'

import Img from '../../assets/images/trending/tr_card.png'
import Img2 from '../../assets/images/trending/tr_card2.png'
import Img3 from '../../assets/images/trending/tr_card3.png'



import "./products.scss";



const Products = () => {
  return (
    <div className="products__wrapper">
      <div className="products__item primary">
        <div className="left__section">
          <p className="left__section__text">Imagination on <span>Screen</span></p>
          <p className="price">Starts from 599$</p>
          <div className="action">
            <a href="#" className="primary">Shop now</a>
            <img src={ RightArrow } alt="" />
          </div>
        </div>
        <div className="right__section">
          <img src={ Img } alt="" />
        </div>
      </div>
      <div className="products__item grey">
        <div className="left__section">
          <p className="left__section__text"><span>Apple</span> on Your <span>Wrist</span></p>
          <p className="price">Starts from 599$</p>
          <div className="action">
            <a href="#" className="grey">Shop now</a>
            <img src={ RightArrowGrey } alt="" />
          </div>
        </div>
        <div className="right__section">
          <img src={ Img2 } alt="" />
        </div>
      </div>
      <div className="products__item pink">
        <div className="left__section">
          <p className="left__section__text"><span>Get</span> Your <span>iMac</span> Today</p>
          <p className="price">Starts from 599$</p>
          <div className="action">
            <a href="#" className="pink">Shop now</a>
            <img src={ RightArrowOrange } alt="" />
          </div>
        </div>
        <div className="right__section">
          <img src={ Img3 } alt="" />
        </div>
      </div>
    </div>
  )
}

export default Products;


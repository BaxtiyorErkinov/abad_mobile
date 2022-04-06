import React from 'react';
import MainBanner from '../../assets/images/banner.png'
import MiniBanner from '../../assets/images/mini_banner.png'
import MiniBanner2 from '../../assets/images/mini_banner_2.png'
import MiniBanner3 from '../../assets/images/mini_banner_3.png'
import MiniBanner4 from '../../assets/images/mini_banner_4.png'
import MiniBanner5 from '../../assets/images/mini_banner_5.png'
import MiniBanner6 from '../../assets/images/mini_banner_6.png'
import MiniBanner7 from '../../assets/images/mini_banner_7.png'
import SecondBanner from '../../assets/images/second_banner.png'
import SecondBanner2 from '../../assets/images/second_banner_2.png'
import RightArrowGreen from '../../assets/images/rightArrow_green.svg'
import RightArrowOrange from '../../assets/images/rightArrow_orange.svg'



import "./banner.scss";

const Banner = () => {
  return (
    <div className="banner__container">
      <div className="main__banner">
        <div className="banner__content">
          <div className="title">
            Check our huge
          </div>
          <div className="subtitle">
            Smartphones
          </div>
          <div className="price">
            Starts from 599$
          </div>
          <button className="banner__action">Shop now</button>
        </div>
        <div className="banner__img">
          <img src={ MainBanner } alt="" className="banner__img__item" />
        </div>
      </div>
      <div className="mini__banner">
        <div className="mini__banner__item">
          <img src={ MiniBanner } alt="" className="banner__img__item__img" />
        </div>
        <div className="mini__banner__item">
          <img src={ MiniBanner2 } alt="" className="banner__img__item__img" />
        </div>
        <div className="mini__banner__item">
          <img src={ MiniBanner3 } alt="" className="banner__img__item__img" />
        </div>
        <div className="mini__banner__item">
          <img src={ MiniBanner4 } alt="" className="banner__img__item__img" />
        </div>
        <div className="mini__banner__item">
          <img src={ MiniBanner5 } alt="" className="banner__img__item__img" />
        </div>
        <div className="mini__banner__item">
          <img src={ MiniBanner6 } alt="" className="banner__img__item__img" />
        </div>
        <div className="mini__banner__item">
          <img src={ MiniBanner7 } alt="" className="banner__img__item__img" />
        </div>
      </div>
      <div className="second__banner">
        <div className="second__banner__item">
          <div className="left__section">
            <div className="top__text">Top Rated</div>
            <div className="second__text">Gadgets</div>
            <div className="last__text">are on <span className="last__text__item">Sale</span></div>
            <div className="action__text">
              <span>Shop Now</span>
              <img src={ RightArrowOrange } alt="" />
            </div>
          </div>
          <div className="right__section">
            <div className="right__section__item">
              <img src={ SecondBanner } alt="" className="right__section__item__img" />
            </div>
          </div>
        </div>
        <div className="second__banner__item__second">
          <div className="left__section">
            <div className="top__text">Catch Big</div>
            <div className="second__text">Deals on</div>
            <div className="last__text"><span className="last__text__item">Earbuds</span></div>
            <div className="action__text">
              <span>Shop Now</span>
              <img src={ RightArrowGreen } alt="" />
            </div>
          </div>
          <div className="right__section">
            <div className="right__section__item">
              <img src={ SecondBanner2 } alt="" className="right__section__item__img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner;
import React from 'react';

import Camera from '../../assets/images/categories/camera.svg'
import Radio from '../../assets/images/categories/radio.svg'
import Phone from '../../assets/images/categories/phone.svg'
import Monitor from '../../assets/images/categories/monitor.svg'
import Pult from '../../assets/images/categories/pult.svg'
import Headphone from '../../assets/images/categories/headphone.svg'
import Audio from '../../assets/images/categories/audio.svg'
import Fleshka from '../../assets/images/categories/fleshka.svg'
import ArrowRight from '../../assets/images/categories/arrow_right.svg'


import './categories.scss'


const Categories = () => {
  return (
    <div className="categories__wrapper">
      <div className="title__section">
        <div className="title__section__title">
          <h2 className="title__section__title__item">Category</h2>
        </div>
        <div className="title__section__link">
          <a href="#">All Categories</a>
          <img src={ ArrowRight } alt="" />
        </div>
      </div>
      <div className="categories__container">
        <div className="category__item">
          <div className="category__item__img">
            <img src={ Camera } alt="" className="category__item__img__item" />
          </div>
          <div className="category__item__title">
            <p className="category__item__title__item">Cameras, TVs & Audio</p>
          </div>
        </div>
        <div className="category__item">
          <div className="category__item__img">
            <img src={ Radio } alt="" className="category__item__img__item" />
          </div>
          <div className="category__item__title">
            <p className="category__item__title__item">Radios & Subwoofers
            </p>
          </div>
        </div>
        <div className="category__item">
          <div className="category__item__img">
            <img src={ Phone } alt="" className="category__item__img__item" />
          </div>
          <div className="category__item__title">
            <p className="category__item__title__item">Smartphones & GPS</p>
          </div>
        </div>
        <div className="category__item">
          <div className="category__item__img">
            <img src={ Monitor } alt="" className="category__item__img__item" />
          </div>
          <div className="category__item__title">
            <p className="category__item__title__item">Monitors & Desktop</p>
          </div>
        </div>
        <div className="category__item">
          <div className="category__item__img">
            <img src={ Pult } alt="" className="category__item__img__item" />
          </div>
          <div className="category__item__title">
            <p className="category__item__title__item">Playstations & Games</p>
          </div>
        </div>
        <div className="category__item">
          <div className="category__item__img">
            <img src={ Headphone } alt="" className="category__item__img__item" />
          </div>
          <div className="category__item__title">
            <p className="category__item__title__item">Headphones & Airpods</p>
          </div>
        </div>
        <div className="category__item">
          <div className="category__item__img">
            <img src={ Audio } alt="" className="category__item__img__item" />
          </div>
          <div className="category__item__title">
            <p className="category__item__title__item">Speakers & Accessories</p>
          </div>
        </div>
        <div className="category__item">
          <div className="category__item__img">
            <img src={ Fleshka } alt="" className="category__item__img__item" />
          </div>
          <div className="category__item__title">
            <p className="category__item__title__item">Accessories & Devices</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Categories;

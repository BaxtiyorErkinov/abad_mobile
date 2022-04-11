import React from 'react'

import Img from '../../assets/images/carousel/headphone.png'

import "./carousel.scss";


const CarouselItem = ({item}) => {
  console.log(item)
  return (
    <div className="carousel__item">
      <div className="carousel__item__img">
        <img src={ item.thumbnailUrl } alt="" />
      </div>
      <div className="carousel__item__text">
        <p className="model">Wireless Bluetooth Headphones</p>
        <p className="price">UZS 2 670 000</p>
      </div>
    </div>
  )
}

export default CarouselItem
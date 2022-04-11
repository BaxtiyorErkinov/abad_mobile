import React from 'react';

import RightArrow from '../../assets/images/carousel/rightArrow.svg'
import LeftArrow from '../../assets/images/carousel/leftArrow.svg'




import './carousel.scss';

const ProductsCarousel = ({children, setBestSellersPage, totalPages, bestSellersPage, title}) => {

  const nextPage = () => {
    if (totalPages !== totalPages - 1) {
      setBestSellersPage(prev => prev + 1)
    }
  }
  const prevPage = () => {
    if (bestSellersPage > 1) {
      setBestSellersPage(prev => prev - 1)
    }
  }

  return (
    <div className="carousel">
      <div className="carousel__top">
        <div className="carousel__title">
          <h1>{ title }</h1>
        </div>
        <div className="carousel__action">
          <span onClick={ prevPage }>
              <img src={ LeftArrow } alt="" />
              </span>
          <span onClick={ nextPage }>
              <img src={ RightArrow } alt="" />
              </span>
        </div>
      </div>
      { children }
    </div>
  )
}

export default ProductsCarousel;
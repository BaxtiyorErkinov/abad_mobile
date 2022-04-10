import React from 'react';
import Products from './Products'
import Firms from './Firms'

import RightArrow from '../../assets/images/categories/arrow_right.svg'
import Favorite from '../../assets/images/trending/favorite.svg'
import Trending from '../../assets/images/trending/trending.png'
import Star from '../../assets/images/trending/star.svg'
import StarDark from '../../assets/images/trending/dark_star.svg'
import Cart from '../../assets/images/trending/cart.svg'
import View from '../../assets/images/trending/view.svg'


import "./trending.scss";

const TrendingProducts = () => {
  return (
    <div className="trending">
      <div className="trending__title">
        <div className="trending__title__item">
          <h1>Trending Products</h1>
        </div>
        <div className="trending__title__link">
          <a href="#">All Products</a>
          <img src={ RightArrow } alt="" />
        </div>
      </div>
      <div className="trending__items">
        <div className="trending__item">
          <div className="trending__item__top">
            <div className="trending__item__top__action">
              <div className="trending__item__top__action__discount">
                <p>30% OFF</p>
              </div>
              <div className="trending__item__top__action__favorite">
                <span>
                                                      <img src={ Favorite } alt="" />
                                                    </span>
              </div>
            </div>
          </div>
          <div className="trending__item__img">
            <img src={ Trending } alt="" />
          </div>
          <div className="trending__item__bottom">
            <p className="trending__item__bottom__price">UZS 5 835 000</p>
            <p className="trending__item__bottom__model">Smart TV LED 49’’ Ultra HD</p>
            <div className="trending__item__bottom__rating">
              <img src={ Star } alt="" />
              <img src={ Star } alt="" />
              <img src={ Star } alt="" />
              <img src={ Star } alt="" />
              <img src={ StarDark } alt="" />
              <span className="nums">236</span>
            </div>
          </div>
          <div className="trending__item__action">
            <span className="add__to__cart">
                                                  <img src={ Cart } alt="" />
                                                  Add to Cart
                                                </span>
            <span className="view">
                                                  <img src={ View } alt="" />
                                                     Quick view
                                                </span>
          </div>
        </div>
        <div className="trending__item">
          <div className="trending__item__top">
            <div className="trending__item__top__action">
              <div className="trending__item__top__action__discount">
                <p>30% OFF</p>
              </div>
              <div className="trending__item__top__action__favorite">
                <span>
                                                      <img src={ Favorite } alt="" />
                                                    </span>
              </div>
            </div>
          </div>
          <div className="trending__item__img">
            <img src={ Trending } alt="" />
          </div>
          <div className="trending__item__bottom">
            <p className="trending__item__bottom__price">UZS 5 835 000</p>
            <p className="trending__item__bottom__model">Smart TV LED 49’’ Ultra HD</p>
            <div className="trending__item__bottom__rating">
              <img src={ Star } alt="" />
              <img src={ Star } alt="" />
              <img src={ Star } alt="" />
              <img src={ Star } alt="" />
              <img src={ StarDark } alt="" />
              <span className="nums">236</span>
            </div>
          </div>
          <div className="trending__item__action">
            <span className="add__to__cart">
                                                  <img src={ Cart } alt="" />
                                                  Add to Cart
                                                </span>
            <span className="view">
                                                  <img src={ View } alt="" />
                                                     Quick view
                                                </span>
          </div>
        </div>
        <div className="trending__item">
          <div className="trending__item__top">
            <div className="trending__item__top__action">
              <div className="trending__item__top__action__discount">
                <p>30% OFF</p>
              </div>
              <div className="trending__item__top__action__favorite">
                <span>
                                                      <img src={ Favorite } alt="" />
                                                    </span>
              </div>
            </div>
          </div>
          <div className="trending__item__img">
            <img src={ Trending } alt="" />
          </div>
          <div className="trending__item__bottom">
            <p className="trending__item__bottom__price">UZS 5 835 000</p>
            <p className="trending__item__bottom__model">Smart TV LED 49’’ Ultra HD</p>
            <div className="trending__item__bottom__rating">
              <img src={ Star } alt="" />
              <img src={ Star } alt="" />
              <img src={ Star } alt="" />
              <img src={ Star } alt="" />
              <img src={ StarDark } alt="" />
              <span className="nums">236</span>
            </div>
          </div>
          <div className="trending__item__action">
            <span className="add__to__cart">
                                                  <img src={ Cart } alt="" />
                                                  Add to Cart
                                                </span>
            <span className="view">
                                                  <img src={ View } alt="" />
                                                     Quick view
                                                </span>
          </div>
        </div>
        <div className="trending__item">
          <div className="trending__item__top">
            <div className="trending__item__top__action">
              <div className="trending__item__top__action__discount">
                <p>30% OFF</p>
              </div>
              <div className="trending__item__top__action__favorite">
                <span>
                                                      <img src={ Favorite } alt="" />
                                                    </span>
              </div>
            </div>
          </div>
          <div className="trending__item__img">
            <img src={ Trending } alt="" />
          </div>
          <div className="trending__item__bottom">
            <p className="trending__item__bottom__price">UZS 5 835 000</p>
            <p className="trending__item__bottom__model">Smart TV LED 49’’ Ultra HD</p>
            <div className="trending__item__bottom__rating">
              <img src={ Star } alt="" />
              <img src={ Star } alt="" />
              <img src={ Star } alt="" />
              <img src={ Star } alt="" />
              <img src={ StarDark } alt="" />
              <span className="nums">236</span>
            </div>
          </div>
          <div className="trending__item__action">
            <span className="add__to__cart">
                                                  <img src={ Cart } alt="" />
                                                  Add to Cart
                                                </span>
            <span className="view">
                                                  <img src={ View } alt="" />
                                                     Quick view
                                                </span>
          </div>
        </div>
        <div className="trending__item">
          <div className="trending__item__top">
            <div className="trending__item__top__action">
              <div className="trending__item__top__action__discount">
                <p>30% OFF</p>
              </div>
              <div className="trending__item__top__action__favorite">
                <span>
                                                      <img src={ Favorite } alt="" />
                                                    </span>
              </div>
            </div>
          </div>
          <div className="trending__item__img">
            <img src={ Trending } alt="" />
          </div>
          <div className="trending__item__bottom">
            <p className="trending__item__bottom__price">UZS 5 835 000</p>
            <p className="trending__item__bottom__model">Smart TV LED 49’’ Ultra HD</p>
            <div className="trending__item__bottom__rating">
              <img src={ Star } alt="" />
              <img src={ Star } alt="" />
              <img src={ Star } alt="" />
              <img src={ Star } alt="" />
              <img src={ StarDark } alt="" />
              <span className="nums">236</span>
            </div>
          </div>
          <div className="trending__item__action">
            <span className="add__to__cart">
                                                  <img src={ Cart } alt="" />
                                                  Add to Cart
                                                </span>
            <span className="view">
                                                  <img src={ View } alt="" />
                                                     Quick view
                                                </span>
          </div>
        </div>
      </div>
      <Products />
      <Firms />
    </div>
  )
}

export default TrendingProducts;
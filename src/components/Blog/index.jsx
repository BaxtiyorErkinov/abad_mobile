import React from 'react';

import Banner from '../../assets/images/blog/video.jpg'
import ArrowRight from '../../assets/images/blog/arrowRight.svg'


import "./blog.scss"


const Blog = () => {
  return (
    <div className="blog">
      <div className="blog__container">
        <div className="blog__title">
          <h1 className="blog__title__item">Daily Blog</h1>
          <a href="#">All Articles <img src={ ArrowRight } alt="" /></a>
        </div>
        <div className="blogs__container">
          <div className="blogs__item">
            <div className="blogs__item__img">
              <img src={ Banner } alt="" />
            </div>
            <div className="blogs__item__date">
              <p className="username">by Jane Cooper</p>
              <div className="vertical__line"></div>
              <p className="date">March 13</p>
            </div>
            <div className="blogs__item__content">
              <p>
                We Launched Regular Drone Delivery in Tashkent. Watch Demo Video
              </p>
            </div>
          </div>
          <div className="blogs__item">
            <div className="blogs__item__img">
              <img src={ Banner } alt="" />
            </div>
            <div className="blogs__item__date">
              <p className="username">by Jane Cooper</p>
              <div className="vertical__line"></div>
              <p className="date">March 13</p>
            </div>
            <div className="blogs__item__content">
              <p>
                We Launched Regular Drone Delivery in Tashkent. Watch Demo Video
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog
import React from 'react';

import Logo from '../../assets/images/youtube/logo.png'
import User from '../../assets/images/youtube/user1.png'
import User2 from '../../assets/images/youtube/user2.png'
import User3 from '../../assets/images/youtube/user3.png'
import User4 from '../../assets/images/youtube/user4.png'
import User5 from '../../assets/images/youtube/user5.png'
import RightArrow from '../../assets/images/youtube/rightArrow.svg'
import { RiUserAddLine } from 'react-icons/ri'
import VideoImg from '../../assets/images/youtube/video.jpg'

import "./youtube.scss";


const Youtube = () => {
  return (
    <div className="youtube">
      <div className="youtube__wrapper">
        <div className="youtube__container">
          <div className="logo">
            <img src={ Logo } alt="" />
          </div>
          <div className="avatars">
            <div className="users">
              <img src={ User } alt="" className="avatar" />
              <img src={ User2 } alt="" className="avatar" />
              <img src={ User3 } alt="" className="avatar" />
              <img src={ User4 } alt="" className="avatar" />
              <img src={ User5 } alt="" className="avatar" />
              <p className="subscribers">250k+</p>
            </div>
          </div>
          <div className="subscribe__btn">
            <span className=""><RiUserAddLine />Subscribe*</span>
          </div>
          <div className="text">
            <p>*View latest gadgets reviews available for purchase in our store.
            </p>
          </div>
        </div>
        <div className="youtube__videos">
          <div className="title">
            <h1>Latest videos from Abad
                channel</h1>
          </div>
          <div className="action">
            <span>More videos <img src={ RightArrow } alt="" /></span>
          </div>
          <div className="videos">
            <div className="videos__item">
              <div className="img">
                <img src={ VideoImg } alt="" />
                <span className="timer">5:34</span>
              </div>
              <div className="text">
                <p>5 New Cool Cameras You Must See on Abad - Cheap Budget
                </p>
              </div>
            </div>
            <div className="videos__item">
              <div className="img">
                <img src={ VideoImg } alt="" />
                <span className="timer">5:34</span>
              </div>
              <div className="text">
                <p>5 New Cool Cameras You Must See on Abad - Cheap Budget
                </p>
              </div>
            </div>
            <div className="videos__item">
              <div className="img">
                <img src={ VideoImg } alt="" />
                <span className="timer">5:34</span>
              </div>
              <div className="text">
                <p>5 New Cool Cameras You Must See on Abad - Cheap Budget
                </p>
              </div>
            </div>
            <div className="videos__item">
              <div className="img">
                <img src={ VideoImg } alt="" />
                <span className="timer">5:34</span>
              </div>
              <div className="text">
                <p>5 New Cool Cameras You Must See on Abad - Cheap Budget
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Youtube
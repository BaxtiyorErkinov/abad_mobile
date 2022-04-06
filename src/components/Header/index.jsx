import React from 'react';
import Logo from '../../assets/images/logo.png'
import Search from '../../assets/images/search.svg'
import Cart from '../../assets/images/cart.svg'

import "./header.scss"


const Header = () => {
  return (
    <header>
      <div className="header__wrapper">
        <div className="left__section">
          <img src={ Logo } alt="logo" className="logo" />
        </div>
        <div className="right__section">
          <div className="search__btn">
            <img src={ Search } alt="search" />
          </div>
          <div className="cart__btn">
            <span className="cart__badge">4</span>
            <img src={ Cart } alt="" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
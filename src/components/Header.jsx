import React from 'react';
import ButtonCart from './ButtonCart';

import logo from '../assets/img/pizza-logo.svg';

const Header = () => {
    return (
        <div className="header">
        <div className="container">
          <div className="header__logo">
            <img width="38" src={logo} alt="Pizza logo" />
            <div>
              <h1>React Pizza</h1>
              <p>самая вкусная пицца во вселенной</p>
            </div>
          </div>
          <div className="header__cart">
            <ButtonCart cost="520" count="3"/>
          </div>
        </div>
      </div>
    );
}

export default Header;
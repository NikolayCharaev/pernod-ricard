import React from 'react';
import style from './_header.scss';
import logo from '../../images/logo.svg';
import search from '../../images/search.svg';
const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__inner">
          <div className="header__logo">
            <img className="header__logo-image" src={logo} alt="logo" />
          </div>
          <ul className="header__menu">
            <li className="header__menu-item">
              <a className="header__menu-link" href="/">
                Our Group
              </a>
            </li>
            <li className="header__menu-item">
              <a className="header__menu-link" href="/">
                Brands
              </a>
            </li>
            <li className="header__menu-item">
              <a className="header__menu-link" href="/">
                News
              </a>
            </li>
            <li className="header__menu-item">
              <a className="header__menu-link" href="/">
                Investors
              </a>
            </li>
            <li className="header__menu-item">
              <a className="header__menu-link" href="/">
                Careers
              </a>
            </li>
          </ul>
          <div className="header__navigate">
            <div className="languages">
                <a href='/'  className="language">EN</a >
                <span>|</span>
                <a href='/' className="language lang-disabled">FR</a >
            </div>
            <div className="search">
                <p className="search__title">Search</p>
                <img className="search__icon" src={search} alt="search" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

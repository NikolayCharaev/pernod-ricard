import React from 'react';
import style from '../Brand/_brand.scss';
import brandOne from '../../images/brand/brand-1.jpg';
import brandTwo from '../../images/brand/brand-2.jpg';
import brandThree from '../../images/brand/brand-3.jpg';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Brand = () => {
  const settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '120px',
    arrows: false,
    slidesToShow: 1,
    dots: true,
    speed: 500,

    // dots: false,
    // arrows: true,
    // infinite: true,
    // speed: 1000,
    // slidesToShow: 1,
    // slidesToScroll: 1,
    // fade: true,
  };
  return (
    <div className="brand">
      <div className="container">
        <div className="blog__wrapper">
          <h2 className="blog-title">Our Brand Homes</h2>
          <div className="blog__content text-normal">
            <p className="blog__text">
              Experience the heritage and stories behind our brands. Located in the country of their
              brand’s origin, Pernod Ricard’s Brand Homes welcome more than 1.5 million visitors per
              year.
            </p>
            <br />
          </div>
        </div>
      </div>
      <div className="brand__slider">
        <ul className="slider__items">
          <Slider {...settings}>
            <li className="slider__item">
              <img className="slider__image" src={brandOne} alt="" />
              <p className="slider__text">
                Smooth Ambler Distillery in Maxwelton, West Virginia, USA
              </p>
            </li>

            <li className="slider__item">
              <img className="slider__image" src={brandTwo} alt="" />
              <p className="slider__text">
                Smooth Ambler Distillery in Maxwelton, West Virginia, USA
              </p>
            </li>

            <li className="slider__item">
              <img className="slider__image" src={brandThree} alt="" />
              <p className="slider__text">
                Smooth Ambler Distillery in Maxwelton, West Virginia, USA
              </p>
            </li>
          </Slider>
        </ul>
      </div>
      <div className="arrows__slider">
        <svg width="40" height="9" viewBox="0 0 40 9" xmlns="http://www.w3.org/2000/svg">
          <path d="M40 5H1M1 5L3.5 1M1 5L3.5 8.5" />
        </svg>

        <svg width="40" height="9" viewBox="0 0 40 9" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 5H39M39 5L36.5 1M39 5L36.5 8.5" />
        </svg>
      </div>
    </div>
  );
};

export default Brand;

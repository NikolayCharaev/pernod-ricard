import React from 'react';
import style from '../Benefits/_benefits.scss';
import arrow from '../../images/about-slider/arrow-right.svg';

const Benefits = () => {
  return (
    <div className="benefits">
      <div className="container">
        <div className="benefits__inner">
          <ul className="benefits__list">
            <li className="benefits__item">
              <div className="benefits__content">
                <h3 className="benefits__count">160+ </h3>
                <p className="benefits__text">countries in which our brands are distributed</p>
              </div>
              <div>
                <svg
                  width="40"
                  height="9"
                  viewBox="0 0 40 9"
                //   fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 5H39M39 5L36.5 1M39 5L36.5 8.5"  />
                </svg>
              </div>
            </li>

            <li className="benefits__item">
              <div className="benefits__content">
                <h3 className="benefits__count">18 776</h3>
                <p className="benefits__text">employees across the world</p>
              </div>
              <div>
                {/* <img className="benefits__arrow" src={arrow} alt="arrow" /> */}
                <svg
                  width="40"
                  height="9"
                  viewBox="0 0 40 9"
                //   fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 5H39M39 5L36.5 1M39 5L36.5 8.5" />
                </svg>
              </div>
            </li>

            <li className="benefits__item">
              <div className="benefits__content">
                <h3 className="benefits__count">240</h3>
                <p className="benefits__text">production sites in 24 countries</p>
              </div>
              <div>
                <svg
                  width="40"
                  height="9"
                  viewBox="0 0 40 9"
                //   fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 5H39M39 5L36.5 1M39 5L36.5 8.5"  />
                </svg>
              </div>
            </li>
            <button className="button mt-40">Commentiments</button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Benefits;

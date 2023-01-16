import React from 'react';
import style from './_news.scss';

import newsOne from '../../images/news/news-1.jpg'
import newsTwo from '../../images/news/news-2.jpg'
import newsThree from '../../images/news/news-3.jpg'

const News = () => {
  return (
    <div className="news">
      <div className="container">
        <div className="blog__wrapper">
          <h2 className="blog-title">Latest News</h2>
          <div className="blog__content text-normal">
            <div className="news__all">
              <a className="link__all" href="/">
                To all news
              </a>
              <svg width="40" height="9" viewBox="0 0 40 9" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 5H39M39 5L36.5 1M39 5L36.5 8.5" />
              </svg>
            </div>
          </div>
        </div>
        <ul className="news__card">
          <li className="news__item">
            <img className="news__image" src={newsOne}  alt="" />
            <div className="news__date-info">
              <p className="news__date">10/01/2022 </p>
              <p className="news__meaning">SUSTAINABILITY & RESPONSIBILITY</p>
            </div>
            <p className="news__title">
              Boris Kurdi winner of the 22nd Pernod Ricard Corporate Foundation Prize
            </p>
            <a className="news__more" href="/">
              Read more
            </a>
          </li>

          <li className="news__item">
            <img className="news__image" src={newsTwo} alt="" />
            <div className="news__date-info">
              <p className="news__date">10/01/2022 </p>
              <p className="news__meaning">CORPORATE</p>
            </div>
            <p className="news__title">Art Wall: Emmanuelle Lainé selected for the first edition</p>
            <a className="news__more" href="/">
              Read more
            </a>
          </li>

          <li className="news__item">
            <img className="news__image" src={newsThree} alt="" />
            <div className="news__date-info">
              <p className="news__date">10/01/2022 </p>
              <p className="news__meaning">CORPORATE</p>
            </div>
            <p className="news__title">
              Pernod Ricard to acquire leading online spirits retailer The Whisky Exchange
            </p>
            <a className="news__more" href="/">
              Read more
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default News;

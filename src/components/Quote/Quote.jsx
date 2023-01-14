import React from 'react';
import style from '../Quote/_quote.scss';
import quote from '../../images/quote.jpg'
const Quote = () => {
  return (
    <div className="quote">
      <div className="container">
        <div className="blog__wrapper">
          <h2 className="blog-title">Quote</h2>
          <div className="blog__content text-normal">
            <p className="blog__text">
              “We are responsible for building a better world for future generations, together. It’s
              our duty”
            </p>
            <p className="blog__author">A group of Pernod Ricard </p>
          </div>
        </div>
        <div className="quote__bg">
            <img src={quote} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Quote;

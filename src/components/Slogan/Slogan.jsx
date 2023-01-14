import React from 'react';
import style from '../Slogan/_slogan.scss';
import bg from '../../images/slogan-bg.jpg';

const Slogan = () => {
  return (
    <section className="slogan">
      <div className="slogan__container">
        <div className="slogan__inner">
          <h1 className="slogan__title">We Bring good Times from a good Place</h1>
          <h3 className="slogan__text">
            From speciality spirits to bar favourites and leading wines and champagne, Pernod Ricard
            has one of the most comprehensive portfolios in the market.
          </h3>
        </div>
      </div>
    </section>
  );
};

export default Slogan;

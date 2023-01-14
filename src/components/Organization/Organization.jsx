import React from 'react';
import style from '../Organization/_organization.scss';
import Africa from '../../images/organization-africa.jpg'
const Organization = () => {
  return (
    <section className="organization">
      <div className="container">
        <div className="blog__wrapper">
          <div>
            <h2 className="blog-title">Our Organisation</h2>
            <p className="blog__author">A group of Pernod Ricard </p>
          </div>
          <div className="blog__content text-normal">
            <p className="blog__text">
              With a presence in 73 countries and distribution in 160, we are 18,500 convivialists.
              See where and how we operate.
            </p>
            <br />
          </div>
        </div>

        <div className="organization__content">
          <div className="organization__content-left">
                <ul className="organization__list">
                    <li className="organization__item">
                        <p className="organization__link active">South Africa employees</p>
                    </li>

                    <li className="organization__item">
                        <p className="organization__link">Winemakers employees</p>
                    </li>

                    <li className="organization__item">
                        <p className="organization__link">South Africa employees</p>
                    </li>
                </ul>
          </div>
          <div className="organization__content-right">
            <img className="organization-img" src={Africa} alt="" />
            <button className="button">our global</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Organization;

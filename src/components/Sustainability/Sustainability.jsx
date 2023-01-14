import React from 'react';
import style from '../Sustainability/_sustainability.scss';
import bg from '../../images/sustainability-bg.jpg';

import Benefits from '../Benefits/Benefits';

const Sustainability = () => {
  return (
    <>
      <section className="sustainability">
        <div className="container">
          <div className="sustainability__inner">
            <div className="blog__wrapper">
              <h2 className="blog-title">Sustainability</h2>
              <div className="blog__content text-normal">
                <p className="blog__text">
                  True to our founding spirit, we’ve been bringing people together, inviting them to
                  share authentic experiences and making new friends every day through our
                  world-class portfolio of premium wines and spirits.
                </p>
                <br />
                <p className="blog__text">
                  We are passionate hosts - a family of exceptional people who are committing to
                  fighting alcohol misuse and creating a better way to live and work together to
                  bring good times today and for generations to come. We are respectful guests who
                  care for and strive to protect and nurture the terroirs and environments we live
                  in. We partner with local farmers and respect local communities to benefit our
                  planet, our consumers and our business.
                </p>
              </div>
            </div>
            <div className="sustainability__image">
              <img src={bg} alt="" />
              <p className="sustainability__text">
                Discover the four pillars of our Sustainability and Responsibility roadmap that
                address all aspects of our business from grain to glass.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Benefits />
    </>
  );
};

export default Sustainability;

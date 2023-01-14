import React from 'react';
import style from '../About/_about.scss';
import aboutImage from '../../images/about-slider/about-1.jpg';
import arrowLeft from '../../images/about-slider/arrow-left.png';
import arrowRight from '../../images/about-slider/arrow-right.png';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const About = () => {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    // nextArrow: 'asdasd',
    prevArrow: <SamplePrevArrow />,
  };

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: 'block', backgroundImage: arrowRight }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: 'block', backgroundImage: arrowLeft,  }}
        onClick={onClick}
      />
    );
  }

  return (
    <section className="about">
      <div className="container">
        <div className="about__inner">
          <div className="blog__wrapper mini">
            <h2 className="blog-title">about</h2>
            <div className="blog__content ">
              <p className="blog__text">
                We are respectful and responsible hosts, committed to nurturing every terroir and
                its biodiversity. Our people add a human touch to our products with their own
                personality and passion. Our beverages travel the world because, although they are
                born in different lands and cultures, they are made to be shared.
              </p>
              <br />
              <p className="blog__text">
                From speciality spirits to bar favourites and leading wines and champagne, Pernod
                Ricard has one of the most comprehensive portfolios in the market.
              </p>
            </div>
          </div>

          <div className="about__slider">
            <div className="about__arrows">
              <img className="about__arrow-left" src={arrowLeft} alt="" />
              <img className="about__arrow-right" src={arrowRight} alt="" />
            </div>
            <Slider {...settings}>
              <div className="about__slider-item">
                <div className="">
                  <img className="about__slider-img" src={aboutImage} alt="" />
                </div>
                <div className="about__slider-content">
                  <p className="about__slider-small">Barbados</p>
                  <h2 className="about__slider-title">Malibu</h2>
                  <p className="about__slider-description">
                    The world’s best-selling coconut-flavoured rum, made in the Caribbean
                  </p>
                  <a className="about__slider-link" href="/">
                    Learn more
                  </a>
                </div>
              </div>

              <div className="about__slider-item">
                <img className="about__slider-img" src={aboutImage} alt="" />
                <div className="about__slider-content">
                  <p className="about__slider-small">Barbados</p>
                  <h2 className="about__slider-title">Malibu</h2>
                  <p className="about__slider-description">
                    The world’s best-selling coconut-flavoured rum, made in the Caribbean
                  </p>
                  <a className="about__slider-link" href="/">
                    Learn more
                  </a>
                </div>
              </div>

              <div className="about__slider-item">
                <img className="about__slider-img" src={aboutImage} alt="" />
                <div className="about__slider-content">
                  <p className="about__slider-small">Barbados</p>
                  <h2 className="about__slider-title">Malibu</h2>
                  <p className="about__slider-description">
                    The world’s best-selling coconut-flavoured rum, made in the Caribbean
                  </p>
                  <a className="about__slider-link" href="/">
                    Learn more
                  </a>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

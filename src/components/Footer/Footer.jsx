import React from 'react';
import style from './_footer.scss';

import logo from '../../images/footer-logo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <div className="footer__copyright">
            <img className="footer__logo" src={logo} alt="" />
            <p className="copyright__text">© Pernod Ricard 2022. All rights reserved.</p>
          </div>

          <ul className="footer__navigation">
            <p className="footer__navigation-title">Navigation</p>
            <li className="footer__navigation-item">
              <a className="footer__navigation-link" href="/">
                Our Group
              </a>
            </li>

            <li className="footer__navigation-item">
              <a className="footer__navigation-link" href="/">
                Brands
              </a>
            </li>

            <li className="footer__navigation-item">
              <a className="footer__navigation-link" href="/">
                News
              </a>
            </li>

            <li className="footer__navigation-item">
              <a className="footer__navigation-link" href="/">
                Investors
              </a>
            </li>

            <li className="footer__navigation-item">
              <a className="footer__navigation-link" href="/">
                Careers
              </a>
            </li>
          </ul>

          <ul className="footer__information">
            <p className="footer__information-title">Information</p>

            <li className="footer__information-item">
              <a className="footer__information-link" href="/">
                Responsible Drinking
              </a>
            </li>

            <li className="footer__information-item">
              <a className="footer__information-link" href="/">
                Accessibility: Partial Compliance
              </a>
            </li>

            <li className="footer__information-item">
              <a className="footer__information-link" href="/">
                Speak Up – Ethics Line{' '}
              </a>
            </li>

            <li className="footer__information-item">
              <a className="footer__information-link" href="/">
                Sitemap
              </a>
            </li>

            <li className="footer__information-item">
              <a className="footer__information-link" href="/">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__bottom">
          <ul className="footer__messangers">
            <li className="footer__messangers__item">
              <a className="footer__messangers-link" href="/">linkedin</a>
            </li>

            <li className="footer__messangers__item">
              <a className="footer__messangers-link" href="/">telegram</a>
            </li>

            <li className="footer__messangers__item">
              <a className="footer__messangers-link" href="/">twitter</a>
            </li>

            <li className="footer__messangers__item">
              <a className="footer__messangers-link" href="/">youtube</a>
            </li>
          </ul>

         <ul className="regulations">
            <li className="regulations__item">
                <a className="regulations__link" href="/">Privacy policy</a>
            </li>

            <li className="regulations__item">
                <a className="regulations__link" href="/">Terms and conditions</a>
            </li>

            <li className="regulations__item">
                <a className="regulations__link" href="/">Cookies notice</a>
            </li>
         </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

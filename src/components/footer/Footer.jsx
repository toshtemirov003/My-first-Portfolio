import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">TMF</h1>

        <ul className="footer__list">
          <li className="footer__item">
            <a href="#about" className="footer__link">
              About
            </a>
          </li>
          <li className="footer__item">
            <a href="#portfolio" className="footer__link">
              Projects
            </a>
          </li>
          <li className="footer__item">
            <a href="#testimonials" className="footer__link">
              Testimonials
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://www.facebook.com/people/Murodjon-Toshtemirov/100076405026575/"
            className="footer__social-link"
            target="_blank"
          >
            <i className="bx bxl-facebook"></i>
          </a>
          <a
            href="https://www.instagram.com/murodjon_28_09"
            className="footer__social-link"
            target="_blank"
          >
            <i className="bx bxl-instagram"></i>
          </a>
          <a
            href="https://twitter.com/murodjon_28_09"
            className="footer__social-link"
            target="_blank"
          >
            <i className="bx bxl-twitter"></i>
          </a>
        </div>

        <span className="footer__copy">
          &#169; Crypticalcoder. All rigths reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;

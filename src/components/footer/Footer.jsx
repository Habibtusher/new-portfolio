import React from "react";
import "./footer.css"
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_container container">
        <h1 className="footer_title">Habibur Rahman</h1>

        <ul className="footer_list">
          <li>
            <a href="#about" className="footer_link">
              About
            </a>
          </li>
          <li>
            <a href="#portfolio" className="footer_link">
              Projects
            </a>
          </li>
          <li>
            <a href="#skills" className="footer_link">
              Skills
            </a>
          </li>
        </ul>

        <div className="footer_social">
          <a
            href="https://www.facebook.com/habibur00.rahman/"
            className="footer_social-link"
            target="_blank"
          >
            <i class="bx bxl-facebook"></i>
          </a>
          <a
            href="https://www.instagram.com/habibur0.rahman/"
            className="footer_social-link"
            target="_blank"
          >
            <i class="bx bxl-instagram-alt"></i>
          </a>
          <a
            href="https://twitter.com/Habibtusher0"
            className="footer_social-link"
            target="_blank"
          >
            <i class="bx bxl-twitter"></i>
          </a>
        </div>
        <span className="footer_copy">&#169; Habiburrahman. All rigths reserved</span>
      </div>
    </footer>
  );
};

export default Footer;

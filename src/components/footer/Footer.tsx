import React from 'react';
import './footer.css';
import { SocialComponent } from '../home/Social';
import { FaSquareGithub } from 'react-icons/fa6';
import { FaSquareXTwitter } from 'react-icons/fa6';

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Sammy</h1>
        <ul className="footer__list">
          <li>
            <a href="#home" className="footer__link">
              Home
            </a>
          </li>
          <li>
            <a href="#portfolio" className="footer__link">
              Porfolio
            </a>
          </li>
          <li>
            <a href="#project" className="footer__link">
              Project
            </a>
          </li>
        </ul>
        <div className="footer__socials">
          <SocialComponent
            icon={<FaSquareGithub style={{ width: '34px', height: '34px' }} />}
            link="https://github.com/Wsamuell/personal-portfolio"
          />
          <SocialComponent
            icon={
              <FaSquareXTwitter style={{ width: '34px', height: '34px' }} />
            }
            link="https://twitter.com/0sammyboy0"
          />
        </div>
        <p className="footer__dedication">
          © Sammy {date}. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

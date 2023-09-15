import React from 'react';
import './footer.css';
import { SocialComponent } from '../home/Social';
import { FaSquareGithub } from 'react-icons/fa6';
import { FaSquareXTwitter } from 'react-icons/fa6';
import ScrollUp from './ScrollUp';

const Footer = () => {
  return (
    <footer className="footer">
      <ScrollUp />
      <div className="footer__container container">
        <h1 className="footer__title">Sammy</h1>
        <ul className="footer__list">
          <li>
            <a href="#skills" className="footer__link">
              Skills
            </a>
          </li>
          <li>
            <a href="#portfolio" className="footer__link">
              Portfolio
            </a>
          </li>
          <li>
            <a href="#journey" className="footer__link">
              Journey
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
          Copyright © 2021 Samuel Wemimo. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

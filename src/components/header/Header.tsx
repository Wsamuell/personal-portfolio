import { useState, useEffect } from 'react';
import HomeIcon from '@heroicons/react/24/outline/HomeIcon';
import User from '@heroicons/react/24/outline/UserIcon';
import Tool from '@heroicons/react/24/outline/WrenchScrewdriverIcon';
import Photo from '@heroicons/react/24/outline/PhotoIcon';
import Identification from '@heroicons/react/24/outline/IdentificationIcon';
import XMark from '@heroicons/react/24/outline/XMarkIcon';
import Bars3 from '@heroicons/react/24/outline/Bars3Icon';
import Star from '@heroicons/react/24/outline/StarIcon';
import './header.css';

type HeaderProps = {
  title?: string;
  icon: React.ReactNode;
  link: string;
  styles?: string;
  onClick?: () => void;
};

export const TitleComponent = (props: HeaderProps) => {
  return (
    <li className="nav__item">
      <a href={`#${props.link}`} className={`nav__link ${props.styles}`}>
        {props.icon}
        <div>{props.title}</div>
      </a>
    </li>
  );
};

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [activeNavItem, setActiveNavItem] = useState<string>('home');

  useEffect(() => {
    const isElementInViewport = (el: HTMLElement) => {
      const rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight)
      );
    };

    const setActiveNavigationItem = () => {
      const navItems = [
        'about',
        'contact',
        'home',
        'portfolio',
        'projects',
        'skills',
      ];
      navItems.forEach((item) => {
        const section = document.getElementById(item);
        if (section && isElementInViewport(section)) {
          setActiveNavItem(item);
        }
      });
    };

    window.addEventListener('scroll', setActiveNavigationItem);

    setActiveNavigationItem();

    return () => {
      window.removeEventListener('scroll', setActiveNavigationItem);
    };
  }, []);

  return (
    <header>
      <nav className="nav container">
        <a href="index.html" className="nav__logo">
          Sammy
        </a>
        <div className={`${toggle ? 'nav__menu show-menu' : 'nav__menu'}`}>
          <ul className="nav__list grid">
            <TitleComponent
              title="Home"
              link="home"
              styles={activeNavItem === 'home' ? 'active-link' : ''}
              icon={
                <HomeIcon
                  style={{ width: '24px', height: '24px' }}
                  className="nav__icon"
                />
              }
            />
            <TitleComponent
              title="About"
              link="about"
              styles={activeNavItem === 'about' ? 'active-link' : ''}
              icon={
                <User
                  style={{ width: '24px', height: '24px' }}
                  className="nav__icon"
                />
              }
            />
            <TitleComponent
              title="Skills"
              link="skills"
              styles={activeNavItem === 'skills' ? 'active-link' : ''}
              icon={
                <Tool
                  style={{ width: '24px', height: '24px' }}
                  className="nav__icon"
                />
              }
            />
            <TitleComponent
              title="Portfolio"
              link="portfolio"
              styles={activeNavItem === 'portfolio' ? 'active-link' : ''}
              icon={
                <Photo
                  style={{ width: '24px', height: '24px' }}
                  className="nav__icon"
                />
              }
            />

            <TitleComponent
              title="Projects"
              link="projects"
              styles={activeNavItem === 'projects' ? 'active-link' : ''}
              icon={
                <Star
                  style={{ width: '24px', height: '24px' }}
                  className="nav__icon"
                />
              }
            />
            <TitleComponent
              title="Contact"
              link="contact"
              styles={activeNavItem === 'contact' ? 'active-link' : ''}
              icon={
                <Identification
                  style={{ width: '24px', height: '24px' }}
                  className="nav__icon"
                />
              }
            />
          </ul>
          <XMark
            className="icon nav__close"
            onClick={() => setToggle(!toggle)}
          />
        </div>
        <div className="nav__toggle" onClick={() => setToggle(!toggle)}>
          <Bars3 className="icon bars" />
        </div>
      </nav>
    </header>
  );
};

export default Header;

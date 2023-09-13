import React, { useState } from 'react';
import HomeIcon from '@heroicons/react/24/outline/HomeIcon';
import User from '@heroicons/react/24/outline/UserIcon';
import NewspaperIcon from '@heroicons/react/24/outline/NewspaperIcon';
import Photo from '@heroicons/react/24/outline/PhotoIcon';
import Identification from '@heroicons/react/24/outline/IdentificationIcon';
import XMark from '@heroicons/react/24/outline/XMarkIcon';
import Bars3 from '@heroicons/react/24/outline/Bars3Icon';
import Moon from '@heroicons/react/24/outline/MoonIcon';
import './header.css';

type HeaderProps = {
  title?: string;
  icon: React.ReactNode;
  style?: string;
  onClick?: () => void;
};

export const TitleComponent = (props: HeaderProps) => {
  return (
    <li className="nav__item">
      <a href={`#${props.title}`} className={`nav__link ${props.style}`}>
        {props.icon}
        <div>{props.title}</div>
      </a>
    </li>
  );
};

const Header = () => {
  const [toggle, setToggle] = useState(false);

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
              style={'active-link'}
              icon={<HomeIcon className="icon nav__icon" />}
            />
            <TitleComponent
              title="About"
              icon={<User className="icon nav__icon" />}
            />
            <TitleComponent
              title="Skills"
              icon={<NewspaperIcon className="icon nav__icon" />}
            />
            <TitleComponent
              title="Portfolio"
              icon={<Photo className="icon nav__icon" />}
            />
            <TitleComponent
              title="Contact"
              icon={<Identification className="icon nav__icon" />}
            />
            <TitleComponent icon={<Moon className="icon nav__icon" />} />
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

import React from 'react';
import CheveronDoubleDown from '@heroicons/react/24/outline/ChevronDoubleDownIcon';

const ScrollDown = () => {
  return (
    <div className="home__scroll">
      <a href="#about" className="home__scroll-button button--flex">
        <CheveronDoubleDown className="icon icon-button wheel" />
      </a>
    </div>
  );
};

export default ScrollDown;

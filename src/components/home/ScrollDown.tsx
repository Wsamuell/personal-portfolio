import React from 'react';
import CheveronDoubleDown from '@heroicons/react/24/outline/ChevronDoubleDownIcon';
type Props = {};

const ScrollDown = (props: Props) => {
  return (
    <div className="home__scroll">
      <a href="#About" className="home__scroll-button button--flex">
        <CheveronDoubleDown className="icon icon-button wheel" />
      </a>
    </div>
  );
};

export default ScrollDown;

import React from 'react';
import CheveronDoubleUp from '@heroicons/react/24/outline/ChevronDoubleUpIcon';
type Props = {};

const ScrollDown = (props: Props) => {
  return (
    <div className="home__scroll">
      <a href="#about" className="home__scroll-button button--flex">
        <CheveronDoubleUp className="icon icon-button wheel" />
      </a>
    </div>
  );
};

export default ScrollDown;

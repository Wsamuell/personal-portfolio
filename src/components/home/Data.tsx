import React from 'react';
import { CiLocationArrow1 } from 'react-icons/ci';
import { motion } from 'framer-motion';

type Props = {};

const WavingHand = () => {
  return (
    <motion.div
      style={{
        padding: '.5rem',
        display: 'inline-block',
        fontSize: '2.5rem',
      }}
      animate={{ rotate: [0, 20, 0] }}
      transition={{
        duration: 3,
        ease: 'easeInOut',
        repeat: Infinity,
        repeatDelay: 0,
      }}
    >
      👋
    </motion.div>
  );
};

const Data = (props: Props) => {
  return (
    <div className="home__data">
      <h1 className="home__title">
        Samuel Wemimo <WavingHand />
      </h1>
      <h3 className="home__subtitle"> - Software Engineer</h3>
      <p className="home__description">
        I'm a passionate and dedicated web developer, combining the art of
        design with the science of coding.
      </p>
      <a href="#contact" className="button button--flex">
        <div
          style={{ display: 'flex', flexDirection: 'row', alignSelf: 'center' }}
        >
          Say Hello
          <CiLocationArrow1 className="icon button__icon" />
        </div>
      </a>
    </div>
  );
};

export default Data;

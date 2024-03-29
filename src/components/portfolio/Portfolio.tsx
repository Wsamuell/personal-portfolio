import React from 'react';
import './portfolio.css';
import Work from './Work';

type Props = {};

const Portfolio = (props: Props) => {
  return (
    <section className="portfolio section" id="portfolio">
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">Most Recent Work</span>
      <Work />
    </section>
  );
};

export default Portfolio;

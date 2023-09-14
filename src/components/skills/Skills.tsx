import React from 'react';
import './skills.css';
import Fronend from './Frontend';
import Backend from './Backend';

type Props = {};

const Skills = (props: Props) => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My technical level</span>
      <div className="skills__container container grid">
        <Fronend />
        <Backend />
      </div>
    </section>
  );
};

export default Skills;

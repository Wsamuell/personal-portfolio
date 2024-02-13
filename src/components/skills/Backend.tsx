import React from 'react';
import { SkillComponent } from './Frontend';
import { Level } from './enum';

type Props = {};

const Backend = (props: Props) => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Backend Developer</h3>

      <div className="skills__box">
        <div className="skills__group">
          <SkillComponent name={'Node Js'} level={Level.Basic} />
          <SkillComponent name={'Express'} level={Level.Intermediate} />
          <SkillComponent name={'PostgreSQL'} level={Level.Intermediate} />
          <SkillComponent name={'ReasonML'} level={Level.Intermediate} />
          <SkillComponent name={'Firebase'} level={Level.Intermediate} />
          <SkillComponent name={'SQL'} level={Level.Intermediate} />
          <SkillComponent name={'AWS'} level={Level.Basic} />
          <SkillComponent name={'Ocaml'} level={Level.Intermediate} />
        </div>
      </div>
    </div>
  );
};

export default Backend;

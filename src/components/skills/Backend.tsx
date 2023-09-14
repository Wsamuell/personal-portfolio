import React from 'react';
import { SkillComponent } from './Frontend';

type Props = {};

const Backend = (props: Props) => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Backend Developer</h3>

      <div className="skills__box">
        <div className="skills__group">
          <SkillComponent name={'Node Js'} level={'Basic'} />
          <SkillComponent name={'Express'} level={'Intermediate'} />
          <SkillComponent name={'PostgreSQL'} level={'Intermediate'} />
          <SkillComponent name={'ReasonML'} level={'Intermediate'} />
          <SkillComponent name={'Firebase'} level={'Intermediate'} />
          <SkillComponent name={'SQL'} level={'Intermediate'} />
        </div>
      </div>
    </div>
  );
};

export default Backend;

import React from 'react';
import CheckBadge from '@heroicons/react/24/outline/CheckBadgeIcon';
import { Level } from './enum';

type SkillProps = {
  name: string;
  level: string;
};

export const SkillComponent = (props: SkillProps) => {
  return (
    <div className="skills__data">
      <CheckBadge className="badge-icon" />
      <div>
        <h3 className="skills__name">{props.name}</h3>
        <span className="skills__level">{props.level}</span>
      </div>
    </div>
  );
};

const Fronend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Frontend Developer</h3>

      <div className="skills__box">
        <div className="skills__group">
          <SkillComponent name={'HTML'} level={Level.Basic} />
          <SkillComponent name={'CSS'} level={Level.Intermediate} />
          <SkillComponent name={'Javascript'} level={Level.Intermediate} />
          <SkillComponent name={'Typescript'} level={Level.Intermediate} />
          <SkillComponent name={'GraphQL'} level={Level.Intermediate} />
          <SkillComponent name={'React Native'} level={Level.Intermediate} />
          <SkillComponent name={'React'} level={Level.Intermediate} />
          <SkillComponent name={'Swift'} level={Level.Intermediate} />
        </div>
      </div>
    </div>
  );
};

export default Fronend;

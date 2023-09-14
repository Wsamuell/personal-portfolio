import React from 'react';
import Briefcase from '@heroicons/react/24/outline/BriefcaseIcon';
import CodeBracket from '@heroicons/react/24/outline/CodeBracketSquareIcon';
import PuzzlePiece from '@heroicons/react/24/outline/PuzzlePieceIcon';

type InfoProps = {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
};

const InfoComponent = (props: InfoProps) => {
  return (
    <div className="about__box">
      {props.icon}
      <h3 className="about__title">{props.title}</h3>
      <span className="about__subtitle">{props.subtitle}</span>
    </div>
  );
};

const Info = () => {
  const date = new Date();
  const year = date.getFullYear();
  const calculateExperience = (year: number) => {
    return year - 2021;
  };
  return (
    <div className="about__info grid">
      <InfoComponent
        icon={<Briefcase className="icon about__icon" />}
        title={'Experience'}
        subtitle={`${calculateExperience(year)}+ Years Experience`}
      />
      <InfoComponent
        icon={<CodeBracket className="icon about__icon" />}
        title={'Completed'}
        subtitle={'15+ Projects'}
      />
      <InfoComponent
        icon={<PuzzlePiece className="icon about__icon" />}
        title={'Support'}
        subtitle={'Problem Solver'}
      />
    </div>
  );
};

export default Info;

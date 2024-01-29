import React from 'react';
import './journey.css';
import GradCap from '@heroicons/react/24/outline/AcademicCapIcon';
import BriefcaseIcon from '@heroicons/react/24/outline/BriefcaseIcon';
import CalenderDays from '@heroicons/react/24/outline/CalendarDaysIcon';

type QualificationProps = {
  title: string;
  subtitle: string;
  date: string;
};
enum ToggleState {
  education = 'education',
  experience = 'experience',
}

export const LeftQualificationComponent = (props: QualificationProps) => {
  return (
    <div className="qualification__data">
      <div>
        <h3 className="qualification__title">{props.title}</h3>
        <span className="qualification__subtitle">{props.subtitle}</span>
        <div className="qualification__calender">
          <CalenderDays
            style={{ marginRight: '4px', width: '24px', height: '24px' }}
            className=" qualification__calender-icon"
          />{' '}
          {props.date}
        </div>
      </div>
      <div>
        <span className="qualification__rounder"></span>
        <span className="qualification__line"></span>
      </div>
    </div>
  );
};

export const RightQualificationComponent = (props: QualificationProps) => {
  return (
    <div className="qualification__data">
      <div></div>
      <div>
        <span className="qualification__rounder"></span>
        <span className="qualification__line"></span>
      </div>
      <div>
        <h3 className="qualification__title">{props.title}</h3>
        <span className="qualification__subtitle">{props.subtitle}</span>
        <div className="qualification__calender">
          <CalenderDays
            style={{ marginRight: '4px', width: '24px', height: '24px' }}
            className=" qualification__calender-icon"
          />{' '}
          {props.date}
        </div>
      </div>
    </div>
  );
};

const Journey = () => {
  const [toggleState, setToggleState] = React.useState<ToggleState>(
    ToggleState.experience
  );
  const toggleTab = (index: ToggleState) => {
    setToggleState(index);
  };
  return (
    <section className="qualification section" id="journey">
      <h2 className="section__title">Journey</h2>
      <span className="section__subtitle">
        Personal | Professional Experience
      </span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === ToggleState.education
                ? 'qualification__button button--flex qualification__active'
                : 'qualification__button button--flex'
            }
            data-target="#education"
            onClick={() => toggleTab(ToggleState.education)}
          >
            <GradCap
              style={{ marginRight: '4px', width: '24px', height: '24px' }}
            />
            Education
          </div>
          <div
            className={
              toggleState === ToggleState.experience
                ? 'qualification__button button--flex qualification__active'
                : 'qualification__button button--flex'
            }
            data-target="#experience"
            onClick={() => toggleTab(ToggleState.experience)}
          >
            <BriefcaseIcon
              className="qualification__icon"
              style={{ marginRight: '4px', width: '24px', height: '24px' }}
            />{' '}
            Experience
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={
              toggleState === ToggleState.education
                ? 'qualification__content qualification__content-active'
                : 'qualification__content'
            }
          >
            {' '}
            <LeftQualificationComponent
              title="Full Stack Web Developement"
              subtitle="University of Arizona"
              date="2021"
            />
            <RightQualificationComponent
              title={`B.S. in Biological Sciences & Biochemistry`}
              subtitle="Arizona State University"
              date="2013 - 2018"
            />
          </div>
          <div
            className={
              toggleState === ToggleState.experience
                ? 'qualification__content qualification__content-active'
                : 'qualification__content'
            }
          >
            <RightQualificationComponent
              title="Frontend Software Engineer"
              subtitle="Upwork"
              date=" September 2023 - Present"
            />
            <LeftQualificationComponent
              title="Full Stack Software Engineer"
              subtitle="Qwick"
              date="January 2023 - August 2023"
            />
            <RightQualificationComponent
              title="Junior Full Stack Software Engineer"
              subtitle="Qwick"
              date="January 2022 - December 2022"
            />
            <LeftQualificationComponent
              title="Software Engineer Resident Intern"
              subtitle="Metromile Insurance"
              date="October 2021 - January 2022"
            />
            <RightQualificationComponent
              title="Freelance Software Engineer"
              subtitle="Upwork"
              date="April 2021 - January 2022"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;

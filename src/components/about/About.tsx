import React from 'react';
import './about.css';
import AboutMeImg from '../../assets/about-me-img.jpg';
import Bookmark from '@heroicons/react/24/outline/BookmarkIcon';
import Info from './Info';
import Resume from '../../assets/resume.pdf';

type Props = {};

const About = (props: Props) => {
  const date = new Date();
  const year = date.getFullYear();
  const calculateExperience = (year: number) => {
    return year - 2021;
  };

  return (
    <section className="about section" id="about">
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">My Introduction</span>
      <div className="about__container container grid">
        <img src={AboutMeImg} alt="" className="about__img" />
        <div className="about__data">
          <Info />
          <p className="about__description">
            Frontend Developer with over {''}
            {calculateExperience(year)} years of hands-on experience, dedicated
            to crafting engaging and user-friendly web experiences through a
            combination of creative design and clean, efficient code.
          </p>
          <a
            download={'Sammy-Resume'}
            href={Resume}
            className="button button--flex"
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignSelf: 'center',
              }}
            >
              Download CV <Bookmark className="button__icon" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;

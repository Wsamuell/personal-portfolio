import React from 'react';
import Hero from '../Hero';
import '../About-me/style.css';

function About() {
  return (
    <div className="about">
      <Hero />
      <div className="flex flex-wrap w-screen justify-center items-center">
        <p className="name">Samuel Odubamowo</p>
        <article className="flex flex-wrap space-x-4 tools">
          <div className="text-center  about-paragraph flex-1 bg-white shadow-2xl rounded-lg my-20">
            <div className="flex justify-center">
              <img
                className="w-20 h-20 text-center ux-img object-center"
                src={require('../../asset/img/front-end.png').default}
                alt="ux-img"
              />
            </div>
            <div className="">
              <p className="tool-title">Front-End</p>
              <br />
              <p className="">
                {' '}
                Valuing the UX/UI perspective design of a website is crucial as
                it directly impacts customer engagement and business success. A
                well-designed user experience enhances satisfaction, encourages
                longer site visits, and boosts conversions. Prioritizing
                usability, accessibility, and aesthetics ensures seamless
                navigation and clear call-to-actions, ultimately leading to
                higher customer retention rates. By analyzing user behavior and
                feedback, you can continuously optimize the website, driving
                better results and achieving business goals more effectively
              </p>
              <br />
              <p className="tool-title-sm">My Tools</p>
              <br />
              <ul>
                <li>React.Js</li>
                <li>Javascript</li>
                <li>CSS</li>
                <li>Bootstrap</li>
                <li>TypeScript</li>
                <li>TailwindCSS</li>
                <li>ReasonML</li>
              </ul>
            </div>
          </div>
          <div className="text-center about-paragraph flex-1 bg-white shadow-2xl rounded-lg my-20">
            <div className="flex justify-center">
              <img
                className="w-20 h-20 text-center ux-img"
                src={require('../../asset/img/back-end.png').default}
                alt="ux-img"
              />
            </div>
            <p className="tool-title">Back-End</p>
            <br />
            <p className="">
              The backend serves as the foundation of any structure, providing
              strength and support to the entire stack. As an experienced
              developer, I have a strong grasp of various backend technologies
              and frameworks. I thrive on challenges and constantly seek
              opportunities to expand my skillset by learning new tools and
              technologies to bolster my stack further. With a robust backend in
              place, I can confidently build scalable, efficient, and secure
              applications that deliver exceptional performance and meet diverse
              business needs.{' '}
            </p>
            <br />
            <p className="tool-title-sm"> My Tools</p>
            <br />

            <ul>
              <li>GraphQL</li>
              <li>PostgreSQL </li>
              <li>TablePlus</li>
            </ul>
          </div>
        </article>
        <div className="about-paragraph max-w-3xl bg-white shadow-xl rounded-lg my-20">
          <div className="md:justify-center -mt-16">
            <img
              className="w-20 h-20 object-cover rounded-full"
              src={require('../../asset/img/mini.png').default}
              alt="authors-img"
            />
            <h1 className="intro text-center">
              Hello There! I'm Sam... Welcome to my portfolio!
            </h1>
          </div>
          <div className="about-text text-justify">
            <p>
              I am a passionate and dedicated web developer, combining the art
              of design with the science of coding.
            </p>
            <br />
            <p>
              With a focus on creating intuitive and delightful user
              experiences, I strive to craft websites that leave a lasting
              impression. From front-end magic to back-end robustness, I am
              constantly expanding my skillset to take on new challenges. Let's
              turn ideas into reality and build something extraordinary
              together.
            </p>
            <br />
            <p>
              Explore my projects and let's connect to embark on exciting web
              adventures!{' '}
            </p>
            <br />
            <p>Samuel O.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

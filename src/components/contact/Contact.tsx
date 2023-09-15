import React from 'react';
import './contact.css';
import { motion } from 'framer-motion';
import Envelop from '@heroicons/react/24/outline/EnvelopeIcon';
import Phone from '@heroicons/react/24/outline/PhoneIcon';
import { TiSocialLinkedin } from 'react-icons/ti';

type ContactProps = {
  icon: React.ReactNode;
  title?: string;
  newPage?: boolean;
  data: string;
  link: string;
  linkText?: string;
};

export const ContactComponent = (props: ContactProps) => {
  return (
    <a
      href={props.link}
      target={props.newPage ? '_blank' : '_self'}
      rel="noreferrer"
      className="contact__button"
    >
      {props.icon}
      {props.title && <h3 className="contact__card-title">{props.title}</h3>}
      {props.data}
    </a>
  );
};

const Contact = () => {
  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Get In Touch</h2>
      <span className="section__subtitle">Contact Me</span>
      <div className="contact__container container">
        <p className="contact__description">
          Open to new opportunities & collaborations.
        </p>
        <div className="contact__info">
          <ContactComponent
            link="mailto:wemsamuel@gmail.com"
            data="wemsamuel@gmail.com"
            title="Email"
            icon={
              <motion.div
                style={{}}
                animate={{ y: [0, 20, 0] }}
                transition={{
                  duration: 1,
                  ease: 'easeInOut',
                  repeat: Infinity,
                  repeatDelay: 3,
                }}
              >
                <Envelop
                  style={{
                    marginBottom: '0.7rem',
                    width: '24px',
                    height: '24px',
                  }}
                  className="contact__button-icon"
                />
              </motion.div>
            }
          />
          <ContactComponent
            link="https://www.linkedin.com/in/samuel-odubamowo-567229207/"
            data="Samuel Wemimo"
            title="LinkedIn"
            newPage={true}
            icon={
              <TiSocialLinkedin
                style={{
                  marginBottom: '0.7rem',
                  width: '24px',
                  height: '24px',
                }}
                className="contact__button-icon"
              />
            }
          />
          <ContactComponent
            link="tel:4807657968"
            data="(480)-765-7968"
            title="Phone"
            icon={
              <motion.div
                animate={{ rotate: [0, -10, 0] }}
                transition={{
                  duration: 1,
                  ease: 'easeInOut',
                  repeat: Infinity,
                  repeatDelay: 4,
                }}
              >
                <Phone
                  style={{
                    marginBottom: '0.7rem',
                    width: '24px',
                    height: '24px',
                  }}
                  className="contact__button-icon"
                />
              </motion.div>
            }
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;

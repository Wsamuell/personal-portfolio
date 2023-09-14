import React from 'react';
import { PiGithubLogo } from 'react-icons/pi';
import { TiSocialLinkedin } from 'react-icons/ti';
import { TbBrandUpwork } from 'react-icons/tb';

type SocialProps = {
  icon: React.ReactNode;
  link: string;
};

export const SocialComponent = (props: SocialProps) => {
  return (
    <a href={props.link} className="home__social-icon" target="_blank">
      {props.icon}
    </a>
  );
};

const Social = () => {
  return (
    <div className="home__social">
      <SocialComponent
        icon={<PiGithubLogo className="icon" />}
        link={'https://github.com/Wsamuell'}
      />
      <SocialComponent
        icon={<TiSocialLinkedin className="icon" />}
        link={'https://www.linkedin.com/in/samuel-odubamowo-567229207/'}
      />
      <SocialComponent
        icon={<TbBrandUpwork className="icon" />}
        link={'https://www.upwork.com/freelancers/~0132e18337d157621a'}
      />
    </div>
  );
};

export default Social;

import React from 'react';
import '../Footer/style.css';

function Footer() {
  return (
    <footer className="footer bg-white pt-1 border-b-2 flex flex-col p-3 border-t-2 border-gray-300">
      <div className="sm:w-2/3 text-center py-6 ">
        <p className=" font-bold mb-2">
          © 2021 Created and styled by <span>Samuel O.</span>
        </p>
      </div>
      <div className="flex flex-row justify-center">
        <a href="mailto:wemsamuel@gmail.com" className="p-3">
          <img
            className="w-20 h-20"
            src={require('../../asset/img/gmail.png').default}
            alt="gmail-icon"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/samuel-odubamowo-567229207/"
          target="_blank"
          className="p-3"
        >
          <img
            className="w-20 h-20 ux-img"
            src={require('../../asset/img/linkedin.png').default}
            alt="linkedin-icon"
          />
        </a>
        <a href="https://github.com/Wsamuell" target="_blank" className="p-3">
          {' '}
          <img
            className="w-20 h-20 ux-img"
            src={require('../../asset/img/github.png').default}
            alt="github-icon"
          />
        </a>
      </div>
    </footer>
  );
}

export default Footer;

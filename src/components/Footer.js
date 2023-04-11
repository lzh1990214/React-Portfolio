import React from 'react';
// import icons from react-icons dependency: https://www.npmjs.com/package/react-icons
import { FaGithub, FaLinkedin, FaStackOverflow } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="text-light py-5 mt-3">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-4 text-center mb-2 mb-md-0">
            <a href="https://github.com/lzh1990214">
              <FaGithub className="" size={30} />
            </a>
            <a href="https://www.linkedin.com/in/zhihao-li-559a7b164/">
              <FaLinkedin className="" size={30} />
            </a>
            <a href="https://stackoverflow.com/users/21611778">
              <FaStackOverflow size={30} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

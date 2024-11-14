import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa';

const Navbar = () => {
  return (
    <div>
      <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
          <h1 className="text-3xl pl-10">Sam</h1>
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
          <a
            className="icon-container"
            href="https://www.linkedin.com/in/surender-243a81222/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            className="icon-container"
            href="https://github.com/surender18"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            className="icon-container"
            href="https://x.com/Surender251032?t=YPq5guaM6RiDvIEGgiAtgw&s=09"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
          <a
            className="icon-container"
            href="https://instagram.com/surender_18_?igshid=MzNlNGNkZWQ4Mg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </div>
      </nav>
      <style jsx>{`
        .icon-container {
          position: relative;
          display: inline-block;
          color: inherit;
          text-decoration: none;
        }

        .icon-container::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -4px;
          width: 0;
          height: 2px;
          background-color: white;
          transition: width 0.3s ease;
        }

        .icon-container:hover::after {
          width: 100%;
        }
      `}</style>
    </div>
  );
};

export default Navbar;

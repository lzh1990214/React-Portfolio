import React, { useState } from 'react';

function NavTabs({ currentPage, handlePageChange }) {

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleNavbar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light ms-3 me-3">
      <div className="container-fluid">
        <a className="navbar-brand" href="#" id='nav-brand-text'>ZHIHAO LI</a>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNavbar}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`collapse navbar-collapse ${isExpanded ? 'show' : ''}`}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a href="#"
                onClick={() => handlePageChange('About')}
                // Check to see if the currentPage is `About`, and if so, the element uses the active link class from bootstrap. Otherwise, set the class to a normal nav-link
                className={currentPage === 'About' ? 'nav-link active' : 'nav-link'} id={currentPage === 'About' ? 'about' : 'about-fade'}>About</a>
            </li>
            <li className="nav-item">
              <a href="#"
                onClick={() => handlePageChange('Portfolio')}
                className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'} id={currentPage === 'Portfolio' ? 'portfolio' : 'portfolio-fade'}>Portfolio</a>
            </li>
            <li className="nav-item">
              <a href="#" onClick={() => handlePageChange('Contact')}
                className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'} id={currentPage === 'Contact' ? 'contact' : 'contact-fade'}>Contact</a>
            </li>
            <li className="nav-item">
              <a href="#"
                onClick={() => handlePageChange('Resume')}
                // checks to see if the current page is "Resume".
                // If it is, set the current page to 'nav-link-active', otherwise set it to 'nav-link'
                className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
                id={currentPage === 'Resume' ? 'resume' : 'resume-fade'}
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );

}

export default NavTabs;

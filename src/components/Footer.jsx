import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer bg-dark text-white text-center py-4">
      <div className="container centered-layout">
        <div className="social-icons mb-3">
          <a href="https://www.instagram.com/ronniereddickpresents" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          {/* Add other social media links here */}
        </div>
        <p className="mb-0">&copy; {currentYear} Ronnie Reddick Presents. All Rights Reserved.</p>
        <p>Website designed by You.</p>
      </div>
    </footer>
  );
};

export default Footer;

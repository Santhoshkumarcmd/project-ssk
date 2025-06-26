import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Santhosh Kumar</h3>
            <p>Full-Stack Developer specializing in building robust and scalable web applications.</p>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/portfolio">Portfolio</Link></li>
              <li><Link to="/skills">Skills</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Contact</h4>
            <p>Tamil Nadu, India</p>
            <p>santhoshkumar20129@gmail.com</p>
            <p>+91 9345721720</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Santhosh Kumar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
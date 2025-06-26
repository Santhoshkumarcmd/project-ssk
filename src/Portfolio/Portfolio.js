import React, { useEffect, useRef } from 'react';
import './Portfolio.css';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Adjust the import path as necessary

const typewriterTexts = [
  'Full-Stack Developer',
  'Trader',
  'App Developer',
  'Game Developer'
];

const Portfolio = () => {
  const typingRef = useRef(null);

  useEffect(() => {
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 120;
    let pauseTime = 1500;
    let timeoutId;

    function type() {
      const currentText = typewriterTexts[textIndex];
      if (typingRef.current) {
        if (isDeleting) {
          typingRef.current.textContent = currentText.substring(0, charIndex - 1);
          charIndex--;
          typingSpeed = 60;
        } else {
          typingRef.current.textContent = currentText.substring(0, charIndex + 1);
          charIndex++;
          typingSpeed = 120;
        }

        if (!isDeleting && charIndex === currentText.length) {
          typingSpeed = pauseTime;
          isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
          isDeleting = false;
          textIndex = (textIndex + 1) % typewriterTexts.length;
        }
        timeoutId = setTimeout(type, typingSpeed);
      }
    }

    timeoutId = setTimeout(type, 500);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="portfolio-bg">
      <div className="portfolio-background-shapes">
        <div className="portfolio-shape portfolio-shape-1"></div>
        <div className="portfolio-shape portfolio-shape-2"></div>
        <div className="portfolio-shape portfolio-shape-3"></div>
      </div>
      <div className="portfolio-container">
        <div className="portfolio-profile-container">
          <img
           src="/myphoto.jpg"
            alt="Profile"
            className="portfolio-profile-image"
          />
        </div>
        <h1 className="portfolio-name">Santhosh Kumar S</h1>
        <div className="portfolio-typewriter-container">
          <h1 className="portfolio-typewriter-text">
            I'm a <span ref={typingRef}></span>
          </h1>
        </div>
        <p className="portfolio-specialty">
          I specialize in <span>building web and mobile applications</span> using modern technologies and clean coding practices.
        </p>
        <div className="portfolio-buttons">
          <a href="#" className="portfolio-btn portfolio-btn-primary">Download Resume</a>
          <Link to="/contact" className="portfolio-btn portfolio-btn-secondary">Contact Me</Link>
        </div>
        <div className="portfolio-social-icons">
          <a href="https://twitter.com/" className="portfolio-twitter" aria-label="Twitter">
           <FaTwitter />
          </a>
          <a href="https://www.linkedin.com/" className="portfolio-linkedin" aria-label="LinkedIn">
            {/* <i className="fab fa-linkedin-in"></i> */}
            <FaLinkedin />
          </a>
          <a href="https://github.com/Santhoshkumarcmd" className="portfolio-github" aria-label="GitHub">
            {/* <i className="fab fa-github"></i> */}
            <FaGithub />
          </a>
        </div>
        <div className="portfolio-footer">
          <p>©  {new Date().getFullYear()} Santhosh Kumar S | Portfolio</p>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
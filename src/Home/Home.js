import React from 'react';
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import './Home.css';
import ThreeBackground from '../Common/ThreeBackground/ThreeBackground';
// import Portfolio from '../Portfolio/Portfolio';

const Home = () => {
  return (
    <section className="home">
      <ThreeBackground />
      <div className="home-content">
        <div className="intro">
          <h1>Hi, I'm <span>Santhosh Kumar S</span></h1>
          <div className="typewriter">
            <Typewriter
              options={{
                strings: [
                  'Full-Stack Developer',
                  'Trader',
                  'App Developer',
                  'Game Developer'
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
                delay: 70,
              }}
            />
          </div>
          <p>I specialize in building robust and scalable web, App applications using modern technologies.</p>
          <div className="cta-buttons">
            <Link to="./portfolio" className='btnprimary'>Portfolio</Link>
            <Link to="./projects" className="btnsecondary">Projects</Link>
          </div>
        </div>

        <div className="social-icons">
          <a href="https://github.com/Santhoshkumarcmd" target="_blank" rel="noopener noreferrer" className='ic'><FaGithub /></a>
          <a href="https://www.linkedin.com/" target='_blank' rel="noopener noreferrer" className='ic'><FaLinkedin /></a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className='ic'><FaTwitter /></a>
        </div>
      </div>
    </section>
  );
};

export default Home;

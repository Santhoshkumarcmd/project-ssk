import React from 'react';
import './About.css'; // Assuming you have some styles for the about page
import Footer from '../Common/Footer/Footer'; // Adjust the import path as necessary
import { Link } from 'react-router-dom'; // For navigation links

const AboutPage = () => {
  return (
    <div className="about-container">
      {/* Hero Section */}
      <div className="about-hero">
        <div className="hero-content">
          <h1>Santhosh Kumar</h1>
          <h2>Computer Science Student at Chendhuran College of Engineering and Technology</h2>
          <p>3rd Year | Anna University Affiliated</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="about-content">
        {/* Introduction */}
        <section className="about-section">
          <h3 className="section-title">My Journey</h3>
          <div className="section-content">
            <p>
              I'm currently pursuing my Bachelor's degree in Computer Science Engineering at Chendhuran College of Engineering and Technology, affiliated with Anna University. As a 3rd-year student, I've developed a strong foundation in computer science principles while actively expanding my practical skills in software development.
            </p>
            <p>
              My academic journey has equipped me with problem-solving abilities and a systematic approach to tackling complex technical challenges. I thrive in environments that require both analytical thinking and creative solutions.
            </p>
          </div>
        </section>

        {/* Education */}
        <section className="about-section">
          <h3 className="section-title">Education</h3>
          <div className="section-content">
            <div className="education-item">
              <h4>Bachelor of Engineering in Computer Science</h4>
              <p className="institution">Chendhuran College of Engineering and Technology</p>
              <div className="education-details">
                <span>Affiliated with Anna University</span>
                <span>2021 - Present</span>
                <span>Currently in 3rd Year</span>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Foundation */}
        <section className="about-section">
          <h3 className="section-title">Technical Foundation</h3>
          <div className="section-content">
            <p>
              Throughout my academic journey, I've built a solid technical foundation across multiple programming paradigms and technologies. I'm proficient in:
            </p>
            <ul className="skills-overview">
              <li><strong>Frontend Development:</strong> HTML, CSS, JavaScript, React.js, Bootstrap</li>
              <li><strong>Backend Development:</strong> Java, Spring Boot, C#, Python</li>
              <li><strong>Other Technologies:</strong> C, Unity, Blender</li>
            </ul>
            <p>
              This diverse skill set allows me to approach problems from multiple perspectives and develop comprehensive solutions.
            </p>
          </div>
        </section>

        {/* Aspirations */}
        <section className="about-section">
          <h3 className="section-title">Future Aspirations</h3>
          <div className="section-content">
            <p>
              As I progress through my academic journey, I'm focusing on deepening my expertise in full-stack development while exploring emerging technologies. I'm particularly interested in the intersection of web technologies and interactive media.
            </p>
            <p>
              My goal is to leverage my engineering education to build innovative solutions that address real-world challenges. I'm actively seeking opportunities to apply my skills in practical settings and contribute to meaningful projects.
            </p>
          </div>
        </section>

        {/* Connect */}
        <section className="about-section connect-section">
          <h3 className="section-title">Let's Connect</h3>
          <div className="section-content">
            <p>
              I'm always open to discussing technology, collaboration opportunities, or potential projects. Feel free to reach out through my contact page if you'd like to connect.
            </p>
            <div className="cta-container">
              <Link to="/contact" className="cta-button">Get in Touch</Link>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
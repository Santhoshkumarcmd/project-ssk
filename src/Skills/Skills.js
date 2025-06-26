import React from 'react';
import { FaCode, FaDatabase, FaTools, FaLayerGroup, FaCheckCircle } from 'react-icons/fa';
import './Skills.css';
import Footer from '../Common/Footer/Footer';

const skillCategories = [
  {
    name: "Languages",
    icon: <FaCode />,
    items: ["JavaScript", "Python", "Java", "C", "Html","Css"]
  },
  {
    name: "Frameworks",
    icon: <FaLayerGroup />,
    items: ["React", "Node.js", "Bootstrap", "Three.js", "Spring Boot","Hibernate"]
  },
  {
    name: "Databases",
    icon: <FaDatabase />,
    items: ["H2-DB", "MongoDB", "MySQL"]
  },
  {
    name: "Tools & Cloud",
    icon: <FaTools />,
    items: ["Git", "Docker", "Kubernets", "Github", "GCP"]
  }
];

const Skills = () => (
  <section className="skills-section">
    <div className="skills-header">
      <h2>My <span>Skills</span></h2>
      <p className="skills-subtitle">
        A blend of modern technologies and tools for robust solutions.
      </p>
    </div>
    <div className="skills-cards">
      {skillCategories.map((cat, idx) => (
        <div className="skill-card" key={cat.name}>
          <div className="skill-icon">{cat.icon}</div>
          <h3>{cat.name}</h3>
          <ul>
            {cat.items.map(skill => (
              <li key={skill}>
                <FaCheckCircle className="check-icon" /> {skill}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
    {/* <Footer /> */}
  </section>
);

export default Skills;
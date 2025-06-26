import React from 'react';
import ProjectCard from './ProjectCard';
import './Projects.css';
import Footer from '../Common/Footer/Footer';

const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-featured e-commerce platform with product listings, shopping cart, and secure checkout.",
    images: [
      "https://th.bing.com/th/id/OIP.6SkSLaMBB6WfP_jPWTFgZwHaJQ?w=151&h=189&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
      "https://th.bing.com/th/id/OIP.HGmhU0_gytY7by3hXjybZwHaIz?w=159&h=189&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
    ]
  },
  {
    title: "Social Media App",
    description: "A social media application for sharing updates, photos, and connecting with friends.",
    images: [
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
    ]
  },
  {
    title: "Task Management Tool",
    description: "A task management tool to help users organize their tasks and projects efficiently.",
    images: [
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80"
    ]
  },
  {
    title: "Personal Finance Tracker",
    description: "A personal finance tracker to manage budgets, track expenses, and set financial goals.",
    images: [
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80"
    ]
  },
  {
    title: "Recipe Sharing App",
    description: "A recipe sharing app where users can discover, save, and share their favorite recipes.",
    images: [
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80"
    ]
  },
  {
    title: "Travel Planning App",
    description: "A travel planning app to help users plan their trips, discover destinations, and book accommodations.",
    images: [
      "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=600&q=80",
      "https://th.bing.com/th/id/OIP.4icnLASfIxhTwv_riepjDQHaFj?w=219&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
    ]
  }
];

const Projects = () => (
  <section className="projects">
    <div className="container">
      <h2>Projects</h2>
      <p className="subtitle">A selection of projects I've worked on.</p>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            images={project.images}
          />
        ))}
      </div>
    </div>
    {/* <hr/> */}
    <Footer />
  </section>
);

export default Projects;
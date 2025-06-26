import React from 'react';
import Slider from 'react-slick';
import './Projects.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ProjectCard = ({ title, description, images }) => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    adaptiveHeight: true
  };

  return (
    <div className="project-card">
      <div className="project-slider">
        <Slider {...sliderSettings}>
          {images.map((img, idx) => (
            <div key={idx} className="slider-img-wrapper">
              <img src={img} alt={title + ' screenshot'} className="slider-img" />
            </div>
          ))}
        </Slider>
      </div>
      <div className="project-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className="project-footer">
        <button className="btn">Upcoming...</button>
      </div>
    </div>
  );
};

export default ProjectCard;
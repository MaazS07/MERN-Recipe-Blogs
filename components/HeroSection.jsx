import React from 'react';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import './stylesheets/HeroSection.css';


const HeroSection = ({ title, title2, description, image, isEven }) => {
  const contentStyle = {
    order: isEven ? 2 : 1,
  };

  const imageStyle = {
    order: isEven ? 1 : 2,
  };

  return (
    <>

    <div className={`hero-section ${isEven ? 'even' : 'odd'}`}>
      <div className="hero-content" style={contentStyle}>
        <FaQuoteLeft className="quote-icon left" />
        <h1 className="hero-title">{title}</h1>
        <h3 className="hero-title2">{title2}</h3>
        <p className="hero-description">{description}</p>
        <FaQuoteRight className="quote-icon right" />
      </div>
      <div className="hero-image" style={imageStyle}>
        <img src={image} id="burgerr" alt="Hero" />
      </div>
    </div>
    </>
  );
};

export default HeroSection;

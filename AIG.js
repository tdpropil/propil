import React from "react";
import './Services.css'; 

const ServiceCard = ({ image, title, description }) => {
  return (
    <div className="service-card">
      <img src={image} alt={title} className="service-image" />
      <h2 className="service-title">{title}</h2>
      <p className="service-description">{description}</p>
    </div>
  );
};

const Services = () => {
  return (
    <div className="services-container">
      <ServiceCard
        image="farm-management.jpg"
        title="Farm Management"
        description="Our farm management service helps you optimize resources, track progress, and make data-driven decisions to improve overall productivity."
      />
      <ServiceCard
        image="land-leasing.jpg" 
        title="Land Leasing"
        description="Unlock growth potential by leasing quality agricultural land with flexible terms, expanding your reach and capabilities for profitable farming."
      />
    </div>
  );
};

export default Services;

import React from "react";
import './HeroSection.css'; 


const HeroSection = () => {
  return (
    <div className="hero-container">
      <div className="hero-overlay">
        <div className="hero-text">
          <p className="hero-subtitle">Empower Your Farming</p>
          <h1 className="hero-title">Welcome To Krushak</h1>
          <p className="hero-description">
            A modern platform enhancing farming productivity and growth opportunities for Indian farmers.
          </p>
          <button className="hero-button">Explore More</button>
        </div>
      </div>
    </div>
  );
};



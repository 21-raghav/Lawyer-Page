// import React from 'react';
import './Hero.css'; 

const Hero = () => {
  return (
    <section className="hero">
      <picture className="hero_image">
        <source media="(min-width: 768px)" srcSet="./images/team_desk.jpg"/>
        <img src="./images/team.jpg" alt="A group of lawyers, dressed in formal attire, stand together in a well-lit chamber."/>
      </picture>
      <div className="hero_text">
        <h1>Welcome to Our Law Firm</h1>
        <p>Expert legal services tailored to your needs.</p>
        <button className="hero-button">Learn More</button>
      </div>
    </section>
  );
};

export default Hero;

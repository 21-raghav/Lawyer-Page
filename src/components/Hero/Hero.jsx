import { Link } from "react-router-dom";
// import React from 'react';
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero_section">
      <div className="hero">
      <picture className="hero_image">
        <source media="(min-width: 768px)" srcSet="./images/team_desk.jpg" />
        <img
          src="./images/team.jpg"
          alt="A group of lawyers, dressed in formal attire, stand together in a well-lit chamber."
        />
      </picture>
      <div className="hero_text">
        <h1>Welcome to Our Law Firm</h1>
        <p>
          Expert legal services tailored to your needs. We specialize in civil,
          criminal, corporate, real estate, property, and family law, and also
          offer pro bono services. Our commitment is to deliver top-notch legal
          services, ensuring our clients receive swift and efficient
          pre-litigation and litigation support.
        </p>
        <Link to={"about"} className="hero-button">Learn More</Link>
      </div>
      </div>
    </section>
  );
};

export default Hero;

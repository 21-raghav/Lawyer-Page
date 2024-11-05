// import React from 'react';
import './Introduction.css'; // Import the CSS file

const Introduction = () => {
  return (
    <div className="family-lawyers-ad">
      <div className="image-container">
        <img 
          src="path_to_image" 
          alt="Family Lawyer" 
          className="lawyer-image" 
        />
      </div>
      <div className="text-container">
        <h2>FAMILY LAWYERS</h2>
        <p>
          Are you considering or experiencing a divorce? Meet the lawyers who can protect your legal rights during life &apos;s unexpected challenges.
        </p>
        <button className="learn-more-button">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Introduction;

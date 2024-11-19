// import React from 'react';
import "./QuantifyBanner.css"; // Import the CSS file

const QuantifyBanner = () => {
  return (
      <div className="banner__quantify">
        <h2 className="banner__quantify__heading">You can always count on our expert guidance</h2>
        <div className="banner__quantify__numbers">
          <div>
            <h2>1400+</h2>
            <p>Clients Consulted</p>
          </div>
          <div>
            <h2>1400+</h2>
            <p>Case completed</p>
          </div>
          <div>
            <h2>92%</h2>
            <p>Successful cases</p>
          </div>
        </div>
      </div>
  );
};

export default QuantifyBanner;

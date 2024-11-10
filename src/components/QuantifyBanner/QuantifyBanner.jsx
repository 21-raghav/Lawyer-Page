// import React from 'react';
import "./QuantifyBanner.css"; // Import the CSS file

const QuantifyBanner = () => {
  return (
    <section className="stats_section">
      <div className="stats">
        <h2 className="stats_heading">You always receive expert guidance</h2>
        <div className="stats_numbers">
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
        {/* <div>
          <h2>700+</h2>
          <p>Projects completed</p>
        </div> */}
      </div>
    </section>
  );
};

export default QuantifyBanner;

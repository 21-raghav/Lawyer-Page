// import React from 'react';
import SocialLinks from '../SocialLinks/SocialMediaLinks';
import './Footer.css'; // Import the CSS file

const Footer = () => {
  return (
   
      <div className="footer">
        <div className="footer__address">
          <h2>Advocate Yash Rawat</h2>
          <p>Chamber No. 332, Western Wing</p>
          <p>Tis Hazari Court, Delhi-110054</p>
        </div>
        <SocialLinks className="footer__links"/>
      </div>
    
  );
};

export default Footer;

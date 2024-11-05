// import React from 'react';
import './Footer.css'; // Import the CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="contact">
        <div className="contact_address">
          <h2>Advocate Yash Rawat</h2>
          <p>Chamber No. 332, Western Wing</p>
          <p>Tis Hazari Court, Delhi-110054</p>
        </div>
        <div className="contact_links">
          <a href="mailto:m.bluth@example.com"><img src="./mail_icon.svg" alt="mail envelope"/></a>
          <a href="tel:+123456789"><img src="./phone_icon.svg" alt="phone reciever"/></a>
          <a href="https://www.instagram.com/yash_ki_baaten/"><img src="./insta_icon.svg" alt="camera"/></a>
        </div>
      </div>
      {/* <div className="links">
        <div className="policy-links">
          <a href="#">Privacy Policy</a>
          <br />
          <a href="#">Disclosure</a>
        </div>
        <div className="credits">
          <p>Built by Clique Studios</p>
        </div>
      </div> */}
    </footer>
  );
};

export default Footer;

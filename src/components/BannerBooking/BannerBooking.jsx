import { Link } from "react-router-dom";

// import React from 'react';
import "./BannerBooking.css"; // Import the CSS file

const BannerBooking = () => {
  return (
      <div className="booking_banner_wrapper">
        <h2>Need Legal Advice?</h2>
        <p>
          Discover a lawyer who offers top-notch legal advice and consultation,
          all conveniently available under one roof near you.
        </p>
        <Link to={"/contact"} className="booking_banner_button">Connect with us</ Link>
      </div>
  );
};

export default BannerBooking;

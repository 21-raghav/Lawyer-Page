import { Link } from "react-router-dom";

import "./BannerBooking.css"; 

const BannerBooking = () => {
  return (
    <div className="Banner_Booking">
      <div className="Banner_Booking_Content_Wrapper">
        <h2>Need Legal Advice?</h2>
        <p>
          Discover a lawyer who offers top-notch legal advice and consultation,
          all conveniently available under one roof near you.
        </p>
        <Link to={"/contact"} className="Banner_Booking_Button">
          Get Free Consultation
        </Link>
      </div>
      <div className="Banner_Booking_Timetable_Wrapper">
        <h2>Working Hours</h2>
        <ul>
          <li className="Banner_Booking_Listitem">
            <span className="Banner_Booking_Listitem_Span--align">
              Monday – Saturday
            </span>{" "}
            <span>10am - 07pm</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BannerBooking;

import { Link } from "react-router-dom";
import SocialLinks from "../SocialLinks/SocialMediaLinks";

// import iconLocation from "../../../public/icons/icon-location-svg.svg";
// import iconPhone from "../../../public/icons/icon-phone-svg.svg";
// import iconEmail from "../../../public/icons/icon-email-svg.svg";
// import iconArrow from "../../../public/icons/icon-right-arrow-svg.svg";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-box">
        <section>
          <h2 className="footer__heading">Contact</h2>
          <div>
            {/* change h4 content to firm name or firm logo */}
            <h4 className="footer__contact__name">Yash Rawat</h4>
            <address>
              <ul className="footer__list">
                <li>
                  <img
                    src="./icons/icon-location-svg.svg"
                    alt="Location of Yash Rawat's office."
                  />
                  <a
                    href="https://maps.app.goo.gl/J19ipJQL4CK49XRZ9"
                    target="_blank"
                    aria-label="Location of Yash Rawat's office on Google Maps"
                  >
                    Chamber No. 332, Western Wing
                    <br />
                    Tis Hazari Court, Delhi-110054
                  </a>
                </li>
                <li>
                  <img src="./icons/icon-phone-svg.svg" alt="phone icon" />
                  <a href="tel:+91-9818920431" aria-label="Call Yash Rawat">
                    +91 98189 20431
                  </a>
                </li>
                <li>
                  <img src="./icons/icon-email-svg.svg" alt="email icon" />
                  <a
                    href="mailto:yashrawat776@gmail.com"
                    aria-label="Email Yash Rawat"
                  >
                    YashRawat776@gmail.com
                  </a>
                </li>
              </ul>
            </address>
          </div>
        </section>
        <section>
          <h2 className="footer__heading">Useful Links</h2>
          <ul className="footer__list">
            <li>
              <img src="./icons/icon-right-arrow-svg.svg" alt="arrow icon" />
              <Link to={"/"} aria-label="Go to Home Page">
                Home
              </Link>
            </li>
            <li>
              <img src="./icons/icon-right-arrow-svg.svg" alt="arrow icon" />
              <Link to={"about"} aria-label="Go to About Page">
                About
              </Link>
            </li>
            <li>
              <img src="./icons/icon-right-arrow-svg.svg" alt="arrow icon" />
              <Link to={"services"} aria-label="Go to Services Page">
                Services
              </Link>
            </li>
            <li>
              <img src="./icons/icon-right-arrow-svg.svg" alt="arrow icon" />
              <Link to={"contact"} aria-label="Go to Contact Page">
                Contact
              </Link>
            </li>
          </ul>
        </section>
        <section>
          <h2 className="footer__heading">Connect</h2>
          <SocialLinks />
        </section>
      </div>
    </footer>
  );
};

export default Footer;

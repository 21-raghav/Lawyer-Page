import { Link } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuIconClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar_wrapper">
      <div className="navbar">
        <div className="navbar__logo">
          <Link to="/">Yash Rawat</Link>
        </div>
        <ul
          className={
            !isMenuOpen
              ? "navbar__menu"
              : "navbar__menu navbar__menu--state-active"
          }
        >
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="about">About</Link>
          </li>
          <li>
            <Link to="contact">Contact</Link>
          </li>
        </ul>
        <button
          className="navbar__menu__icon"
          onClick={handleMenuIconClick}
          type="button"
        >
          <img src="./ham_menu_icon.svg" alt="menu" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

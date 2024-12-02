import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef();

  const handleMenuIconClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      closeMenu();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, );

  return (
    <nav ref={menuRef} className="navbar_wrapper">
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
          <li onClick={handleMenuIconClick}>
            <Link to="/">Home</Link>
          </li>
          <li onClick={handleMenuIconClick}>
            <Link to="about">About</Link>
          </li>
          <li onClick={handleMenuIconClick}>
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

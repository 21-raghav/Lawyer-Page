import {useState} from 'react';
import './Navbar.css'; 

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuIconClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <a href="/">Yash Rawat</a>
      </div>
      <ul className={!isMenuOpen ? "navbar__menu" : "navbar__menu navbar__menu--state-active"}>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
      <a className="navbar__menu__icon" onClick={handleMenuIconClick}><img src="./ham_menu_icon.svg" alt="menu"/></a>
    </nav>
  );
};

export default Navbar;

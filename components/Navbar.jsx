// Navbar.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

import './stylesheets/nav.css';
import logo from "./assets/app-logo.png"

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
         <img src={logo} alt="" id="logo" />
         <h1>GourmentChronicles</h1>
        </Link>
        <FaBars className="menu-icon" onClick={toggleMenu} />
        <ul className={`nav-menu ${showMenu ? 'active' : ''}`}>
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={toggleMenu}>
              Home
            </Link>
          </li>
          {/* <li className="nav-item">
            <Link to="/about" className="nav-link" onClick={toggleMenu}>
              About
            </Link>
          </li> */}
          <li className="nav-item">
            <Link to="/search" className="nav-link" onClick={toggleMenu}>
              Search
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/recipes" className="nav-link" onClick={toggleMenu}>
              Recipes
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/blogs" className="nav-link" onClick={toggleMenu}>
              Blogs
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contactus" className="nav-link" onClick={toggleMenu}>
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

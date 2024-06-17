import React from 'react';
import './Navbar.css';
import logo from 'images/logo.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <a href="/" className="navbar-brand-link">
          <img src={logo} alt="Event Ticketing Logo" className="navbar-logo" />
          Event Ticketing
        </a>
      </div>
      <ul className="navbar-links">
        <li><a href="/events">Events</a></li>
        <li><a href="/about">About Us</a></li>
        <li><a href="/login">login/signup</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;

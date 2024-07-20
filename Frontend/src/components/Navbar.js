import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from 'images/logo.png';
import { useLogin } from 'LoginContext';

const Navbar = () => {
  const {isOrganizer} = useLogin();
  const { user } = useLogin();
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" className="navbar-brand-link">
          <img src={logo} alt="Event Ticketing Logo" className="navbar-logo" />
          Event Ticketing
        </Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/events">Events</Link></li>
        <li><Link to="/aboutus">About Us</Link></li>
        {isOrganizer && <li><Link to="/organizer/myevents">My Events</Link></li>}
        <li>{user.name ? <Link to="/profile">{user.name}</Link> : <Link to="/login">login/signup</Link>}</li>
      </ul>
    </nav>
  );
}

export default Navbar;

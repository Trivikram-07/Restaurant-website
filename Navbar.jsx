import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';
import logo from './main app logo.jpg';  // Importing the logo image

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg custom-navbar navbar-transparent ">
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          <img src={logo} alt="Logo" className="navbar-logo" />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink
                exact
                className="nav-link"
                to="/Home"
                // activeClassName="active"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/About"> 
                About Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Menu
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/OrderOnline">
                Order Online 
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Catering">
                Catering
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/ContactUs">
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
 
export default NavBar;

import React from 'react';
import './Footer.css';  // Assuming the CSS is in a separate file
import logo from './main app logo.jpg';  // Importing the logo image
import insta from './insta.png';
import fb from './fb.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-overlay">
        <div className="footer-content">
          {/* Correctly using the imported logo */}
          <img src={logo} alt="Golconda Express" className="footer-logo" />  
          <p className="footer-description">
            We offer a wide variety of Hyderabadi dishes, including biryani, haleem, kebabs, and tikka masala. We also have a selection of vegetarian and vegan options.
          </p>
          <div className="footer-links">
            <a href="/" className="footer-link">Home</a> - 
            <a href="/about" className="footer-link">About Us</a> - 
            <a href="/contact" className="footer-link">Contact Us</a>
          </div>
          <div className="social-media">
            <a href="#" className="social-icon"><img src={insta} alt="Instagram" /></a>
            <a href="your-facebook-link" className="social-icon"><img src={fb} alt="Facebook" /></a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            Copyright © 2023 Golconda Express Indian Kitchen ® - All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

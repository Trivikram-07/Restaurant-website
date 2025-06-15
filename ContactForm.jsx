import React from 'react';
import './ContactForm.css'; // Separate CSS file for styling
import foodImage from './Biryani.jpg'; // Replace with your image path

const ContactForm = () => {
  return (
    <div className="contact-section">
      <div className="contact-form-container">
        <div className="form-left">
          <h2>Contact Us</h2>
          <form>
            <div className="form-group">
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
            </div>
            <div className="form-group">
              <input type="text" placeholder="Phone" />
              <input type="text" placeholder="Address" />
            </div>
            <div className="form-group">
              <input type="text" placeholder="Subject" />
            </div>
            <div className="form-group">
              <textarea placeholder="Write A Message" />
            </div>
            <button type="submit" className="submit-btn">Submit</button>
          </form>
        </div>
        <div className="form-right">
          <img src={foodImage} alt="Delicious food" />
        </div>
      </div>
    </div>
  );
};

export default ContactForm;

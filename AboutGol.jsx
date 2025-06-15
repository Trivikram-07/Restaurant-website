import React from 'react';
import './AboutGol.css';
import foodImage from './aboutGOL.webp'; // Adjust the path accordingly

const AboutGol = () => {
  return (
    <div className="about-section">
      <div className="about-image">
        <img src={foodImage} alt="Indian food" />
      </div>
      <div className="about-text">
        <h2>About Golconda Express</h2>
        <p>
          Golconda Express is the perfect place for all your Indian food needs.
          We offer a wide variety of Indian dishes, from curries and tandooris
          to biryanis and street food. We also have a selection of vegetarian
          and vegan options to suit any taste. Our food is made fresh to order,
          and we use only the highest quality ingredients. We strive to bring
          our customers the best Indian cuisine with a focus on authenticity and
          flavor. So come and enjoy the taste of India with us at Golconda
          Express.
        </p>
      </div>
    </div>
  );
};

export default AboutGol;

import React from 'react';
import back from './greyBG.webp';

const AboutGol2 = () => {
  const sectionStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    padding: '20px',
    backgroundImage: `url('${back}')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  const contentBoxStyle = {
    backgroundColor: '#fff',
    padding: '30px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    maxWidth: '1400px',
    width: '90%',
    maxHeight: '80vh',
    overflowY: 'auto',
    textAlign: 'left',
    fontFamily: "'Arial', sans-serif",
  };

  const headingStyle = {
    fontFamily: "'Brush Script MT', cursive",
    fontSize: '4.5rem',
    marginBottom: '20px',
    color: '#333',
  };

  const paragraphStyle = {
    fontSize: '1.4rem',
    color: '#333',
    lineHeight: '1.6',
  };

  // Define media queries as JavaScript object
  const responsiveStyles = {
    '@media (max-width: 1200px)': {
      contentBoxStyle: {
        maxWidth: '90%',
      },
      headingStyle: {
        fontSize: '3.5rem',
      },
      paragraphStyle: {
        fontSize: '1.2rem',
      }
    },
    '@media (max-width: 768px)': {
      contentBoxStyle: {
        padding: '20px',
        maxWidth: '95%',
      },
      headingStyle: {
        fontSize: '3rem',
      },
      paragraphStyle: {
        fontSize: '1rem',
      }
    },
    '@media (max-width: 480px)': {
      contentBoxStyle: {
        padding: '15px',
      },
      headingStyle: {
        fontSize: '2.5rem',
      },
      paragraphStyle: {
        fontSize: '0.9rem',
      }
    }
  };

  // Function to convert JS media queries to CSS text
  const buildMediaQueries = (styles) => {
    return Object.entries(styles).reduce((css, [query, style]) => {
      css += `${query} {`;
      for (const [key, value] of Object.entries(style)) {
        css += `.${key} {`;
        for (const [property, val] of Object.entries(value)) {
          css += `${property}: ${val};`;
        }
        css += `}`;
      }
      css += `}`;
      return css;
    }, '');
  };

  return (
    <div style={sectionStyle}>
      <style>{buildMediaQueries(responsiveStyles)}</style>
      <div style={contentBoxStyle} className="contentBoxStyle">
        <h2 style={headingStyle} className="headingStyle">About Us</h2>
        <p style={paragraphStyle} className="paragraphStyle">
          Golconda Express is a cloud kitchen that specializes in Hyderabadi cuisine. We
          are named after the historic Golconda Fort in Hyderabad, which is one of the most
          important landmarks in the city. 
        </p>
        <p style={paragraphStyle} className="paragraphStyle">
          We offer a wide variety of Hyderabadi dishes, including biryani, haleem, kebabs,
          and tikka masala. We also have a selection of vegetarian and vegan options. Our
          food is made to order, so you can be sure that it is always fresh and delicious.
        </p>
        <p style={paragraphStyle} className="paragraphStyle">
          We are committed to providing our customers with a high-quality dining
          experience. Our cloud kitchen is located in a central location, and we offer both
          dine-in and delivery options. 
        </p>
        <p style={paragraphStyle} className="paragraphStyle">
          We believe that Golconda Express is the perfect place to experience the flavors
          of Hyderabad. Whether you are a local or a visitor, we invite you to come and try
          our food. We are sure that you will be impressed.
        </p>
      </div>
    </div>
  );
};

export default AboutGol2;
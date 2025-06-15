import React from 'react';
import foodImage from './headBackGround.webp'; // Replace with your image path

const AboutCont = () => {
  const styles = {
    heroSection: {
      position: 'relative',
      height: '40vh',
      width: '100%',
      overflow: 'hidden',
    },
    heroImage: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
    overlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      zIndex: 1,
    },
    heroText: {
      position: 'absolute',
      bottom: '20%',
      left: '10%',
      color: '#fff',
      zIndex: 2,
    },
    heading: {
      fontSize: '4.5rem',
      margin: '0 0 10px 0',
      fontFamily: 'Brush Script MT, cursive',
      color: 'orange',
    },
  };

  const responsiveStyles = `
    @media (max-width: 1024px) {
      .hero-text {
        left: 5%;
      }
      .hero-heading {
        font-size: 4rem;
      }
    }
    @media (max-width: 768px) {
      .hero-section {
        height: 30vh;
      }
      .hero-text {
        bottom: 15%;
      }
      .hero-heading {
        font-size: 3.5rem;
      }
    }
    @media (max-width: 480px) {
      .hero-section {
        height: 25vh;
      }
      .hero-text {
        bottom: 10%;
        left: 5%;
      }
      .hero-heading {
        font-size: 2.5rem;
      }
    }
  `;

  return (
    <>
      <style>{responsiveStyles}</style>
      <div style={styles.heroSection} className="hero-section">
        <img src={foodImage} alt="Indian food" style={styles.heroImage} />
        <div style={styles.overlay}></div>
        <div style={styles.heroText} className="hero-text">
          <h2 style={styles.heading} className="hero-heading">Contact Us</h2>
        </div>
      </div>
    </>
  );
};

export default AboutCont;
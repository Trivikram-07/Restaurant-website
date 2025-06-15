import React, { useState, useEffect } from 'react';
import logo from './main app logo.jpg';
import whatsappLogo from './whatsapp.jpeg';

const FloatingButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleChatBox = () => setIsOpen(!isOpen);
  const expandChatBox = () => setIsExpanded(true);
  const collapseChatBox = () => setIsExpanded(false);

  const redirectToPage = () => {
    window.open("https://wa.me/1234567890?text=Hi,%20I%20would%20like%20to%20know%20more%20about%20your%20services.", "_blank");
  };

  const styles = {
    outerCircle: {
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      width: '70px',
      height: '70px',
      backgroundColor: 'red',
      borderRadius: '50%',
      display: isOpen ? 'none' : 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.3)',
      zIndex: 1000,
      cursor: 'pointer',
    },
    innerCircle: {
      backgroundColor: 'yellow',
      width: '60px',
      height: '60px',
      borderRadius: '50%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    icon: {
      color: 'red',
      fontSize: '30px',
    },
    chatBox: {
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      width: windowWidth < 768 ? '90%' : (isExpanded ? '450px' : '350px'),
      height: windowWidth < 768 ? '80vh' : (isExpanded ? '400px' : '600px'),
      backgroundColor: 'white',
      borderRadius: '2rem',
      boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)',
      transition: 'width 0.3s ease, height 0.3s ease',
      zIndex: 999,
      display: isOpen ? 'flex' : 'none',
      flexDirection: 'column',
    },
    chatHeader: {
      backgroundColor: 'black',
      color: 'white',
      padding: '10px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottom: '1px solid #ddd',
    },
    chatBody: {
      padding: '10px',
      flex: 1,
      overflowY: 'auto',
      backgroundImage: 'url(https://www.transparenttextures.com/patterns/flower.png)',
      backgroundSize: 'cover',
    },
    inputArea: {
      borderTop: '1px solid #ddd',
      display: 'flex',
      alignItems: 'center',
      padding: '10px',
    },
    input: {
      flex: 1,
      padding: '10px',
      borderRadius: '20px',
      border: '1px solid #ccc',
      marginRight: '10px',
    },
    sendButton: {
      backgroundColor: 'transparent',
      border: 'none',
      cursor: 'pointer',
      fontSize: '20px',
      color: '#007bff',
    },
    adminTag: {
      backgroundColor: '#007bff',
      color: 'white',
      borderRadius: '4px',
      padding: '2px 6px',
      marginLeft: '10px',
      fontSize: '12px',
      fontWeight: 'bold',
    },
    logo: {
      height: '40px',
      marginRight: '10px',
      borderRadius: '50%',
    },
    whatsappButton: {
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      border: 'none',
      background: `url(${whatsappLogo}) no-repeat center center`,
      backgroundSize: 'cover',
      cursor: 'pointer',
      marginLeft: '30px',
    },
    expandedContent: {
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    expandButton: {
      marginTop: '20px',
      padding: '10px 20px',
      backgroundColor: '#25d366',
      color: 'black',
      borderRadius: '8px',
      cursor: 'pointer',
      fontSize: '16px',
      marginLeft: '10px',
    },
    collapseButton: {
      marginTop: windowWidth < 768 ? '60px' : '120px',
      padding: '10px 20px',
      backgroundColor: 'black',
      color: 'white',
      borderRadius: '8px',
      cursor: 'pointer',
      fontSize: '16px',
    },
  };

  return (
    <>
      <div style={styles.outerCircle} onClick={toggleChatBox}>
        <div style={styles.innerCircle}>
          <i className="fa-solid fa-comments" style={styles.icon}></i>
        </div>
      </div>

      <div style={styles.chatBox}>
        <div style={styles.chatHeader}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src={logo} alt="Logo" style={styles.logo} />
            <span style={{ fontSize: '18px', fontWeight: 'bold' }}>Golconda Express</span>
          </div>
          <button onClick={toggleChatBox} style={{ border: 'none', background: 'none', cursor: 'pointer', fontSize: '20px', color: 'white' }}>
            ✖
          </button>
        </div>

        {isExpanded ? (
          <div style={styles.expandedContent}>
            <p>We're available on WhatsApp during Tue - Sun, 09:00 AM - 09:00 PM. We'd love to hear from you.</p>
            <button style={styles.expandButton} onClick={redirectToPage}>
              Open WhatsApp
            </button>
            <button style={styles.collapseButton} onClick={collapseChatBox}>
              Go Back
            </button>
          </div>
        ) : (
          <div style={styles.chatBody}>
            <div style={{ marginBottom: '15px' }}>
              <p style={{ fontWeight: 'bold' }}>
                Golconda Express <span style={styles.adminTag}>Admin</span>
              </p>
              <p style={{ background: '#f1f1f1', padding: '10px', borderRadius: '10px' }}>
                Leave us a message and we'll reply as soon as we can.
              </p>
            </div>
          </div>
        )}

        {!isExpanded && (
          <div style={styles.inputArea}>
            <input type="text" placeholder="Write your message..." style={styles.input} />
            <button style={styles.sendButton}>
              <i className="fas fa-paper-plane"></i>
            </button>
          </div>
        )}

        {!isExpanded && (
          <button style={styles.whatsappButton} onClick={expandChatBox}></button>
        )}
      </div>
    </>
  );
};

export default FloatingButton;
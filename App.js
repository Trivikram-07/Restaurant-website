import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import ContactUs from './ContactUs';
import NavBar from './components/Navbar';
import About from './About';
import Menu from './Menu';

const App = () => {
  return (
    <Router>
     
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;
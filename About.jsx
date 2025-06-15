import React from 'react'
import AboutGol from './components/AboutGol'
import Footer from './components/Footer'
import NavBar from './components/Navbar'
import AboutHead from './components/AboutHead'
import AboutGol2 from './components/AboutGol2'
import FloatingButton from './components/FloatingButon'
import useFadeIn from './components/FadeIn';
import useDocumentTitle from './components/Tittle';
const About = () => {
  const fadeInStyle = useFadeIn();
  useDocumentTitle('About Us | Golconda Express');
  return (
    <div style={fadeInStyle}>

     <NavBar/>
     <AboutHead/>
      <AboutGol/>
      <AboutGol2/>
      <FloatingButton/>
      <Footer/>
    </div>
  )
}

export default About

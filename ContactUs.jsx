import React from 'react'
import NavBar from './components/Navbar'
import Footer from './components/Footer'
import AboutCont from './components/AboutCont'
import ContactForm from './components/ContactForm'
import NumberPanel from './components/NumberPanel'
import MapComponent from './components/Map'
import FloatingButton from './components/FloatingButon'
import useFadeIn from './components/FadeIn';
import useDocumentTitle from './components/Tittle';
const ContactUs = () => {
  const fadeInStyle = useFadeIn();
  useDocumentTitle('Contact Us | Golconda Express');
  return (
    <div style={fadeInStyle}>
      <NavBar/>
     <AboutCont/>
     <NumberPanel/>
     <ContactForm/>
     <MapComponent/>
     <FloatingButton/>
      <Footer/>
    </div>
  )
}

export default ContactUs

import React from 'react'
import Footer from './components/Footer'
import NavBar from './components/Navbar'
import FloatingButton from './components/FloatingButon'
import useFadeIn from './components/FadeIn';
import useDocumentTitle from './components/Tittle';
const Home = () => {
  const fadeInStyle = useFadeIn();
  useDocumentTitle('Home | Golconda Express');
  return (
    <div style={fadeInStyle}>
        <NavBar/>
      <Footer/>
      <FloatingButton/>
    </div>
  )
}

export default Home

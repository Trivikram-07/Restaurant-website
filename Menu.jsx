import React from 'react'
import NavBar from './components/Navbar'
import Footer from './components/Footer'
import MenuCard from './components/Menucard'
import FloatingButton from './components/FloatingButon'
import useFadeIn from './components/FadeIn';
import useDocumentTitle from './components/Tittle';
const Menu = () => {
  const fadeInStyle = useFadeIn();
  useDocumentTitle('Menu | Golconda Express');
  return (
    <div style={fadeInStyle}>
    <div>
      <NavBar/>
     <MenuCard/>
<FloatingButton/>
      <Footer/>

    </div>
    </div>
  )
}

export default Menu

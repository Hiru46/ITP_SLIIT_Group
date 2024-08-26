import React from 'react'
import HomeNavbar from './components/NavBar/HomeNavbar'
import HeroSection from './Pages/Home/HeroSection'
import AboutSection from './Pages/Home/AboutSection'
import Offer from './Pages/Home/Offer'
import Footer from './components/Footer/Footer'

function App() {
    return (
        <div>


            <HomeNavbar />
            <HeroSection />
            <AboutSection />
            <Offer />
            <Footer />


        </div>
    )
}

export default App
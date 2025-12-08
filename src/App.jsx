// import React from 'react'
// import Navbar from './components/Navbar/Navbar'
// import Hero from './components/Hero/Hero'
// import ArtiflexShowcase from './components/Hero/ArtiflexShowcase'
// import TrustedBy from './components/Hero/TrustedBy'
// import FeatureSections from './components/Hero/FeatureSections'
// import Footer from './components/Footer/Footer'
// import WhyChoose from './components/Hero/WhyChoose'
// import AboutHero from './components/AboutHero/AboutHero'
// import HeroAboutUs from './components/AboutHero/AboutHero'
// import AboutUsPage from './components/AboutHero/AboutHero'

// const App = () => {
//   return (
//     <div>
//       <Navbar/>
//       <AboutUsPage/>
//       <Hero/>
//       <ArtiflexShowcase/>
//       <TrustedBy/>
//       <FeatureSections/>
//       <WhyChoose/>
//       <Footer/>
//     </div>
//   )
// }

// export default App

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import ContactUs from "./pages/ContactUs";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import WhatsAppWidget from "./components/WhatsAppWidget";

import Galaxy from './components/Galaxy'; 


function App() {
  return (
    <div style={{ position: 'relative', minHeight: '100vh', width: '100%' }}>
      {/* Galaxy Background */}
      <Galaxy
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1,
        }}
        transparent={true}
        hueShift={180}
        glowIntensity={0.4}
        density={1.1}
        speed={0.9}
        mouseRepulsion={true}
        twinkleIntensity={0.5}
        rotationSpeed={0.08}
      />

      <Router>
        <WhatsAppWidget />
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;

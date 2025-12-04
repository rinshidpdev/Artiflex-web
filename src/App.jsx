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
import Navbar from './components/Navbar/Navbar';
import Services from "./pages/Services";


function App() {
  return (
    <Router>
      <Navbar/>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<AboutUs/>} />
        <Route path="/services" element={<Services/>} />
      
      </Routes>

  
    </Router>
  );
}

export default App;

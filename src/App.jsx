import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import ArtiflexShowcase from './components/Hero/ArtiflexShowcase'
import TrustedBy from './components/Hero/TrustedBy'
import FeatureSections from './components/Hero/FeatureSections'
import Footer from './components/Footer/Footer'
import WhyChoose from './components/Hero/WhyChoose'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <ArtiflexShowcase/>
      <TrustedBy/>
      <FeatureSections/>
      <WhyChoose/>
      <Footer/>
    </div>
  )
}

export default App

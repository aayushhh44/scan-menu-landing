import React from 'react'
import Navbar from '../components/Navbar'
import Features from '../components/Features'
import Whyus from '../components/Whyus'
import CreateQR from '../components/CreateQR'
import Clients from '../components/clients/Clients1'
import FAQ from '../components/FAQs'
import Demo from '../components/Demo'
import Plans from '../components/Plans'
import Hero from '../components/Hero'

const Main = () => {
  return (
    <div>
          <Navbar />
          <Hero/>
          <Features />
          <Whyus />
          <CreateQR />
          <Clients />
          <FAQ />
          <Demo />
          <Plans />
      
    </div>
  )
}

export default Main

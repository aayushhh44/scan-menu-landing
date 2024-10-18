import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Whyus from './components/Whyus'
import CreateQR from './components/CreateQR'
import FAQs from './components/FAQs'
// import Clients from './components/clients/clients'

import Demo from './components/Demo'
import Clients from './components/clients/Clients1'


const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Features/>
      <Whyus/>
      <CreateQR/>
      <Clients/>
      <FAQs/>
      <Demo/>
    </div>
  )
}

export default App

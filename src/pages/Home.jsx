import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import Hero from '../components/Hero/Hero'
import Top3News from '../components/Top3News/Top3News'


const Home = () => {
  return (
    <div className='container'>
      <Navbar />
      <Hero />
      <Top3News />
      <Footer />
    </div>
  )
}

export default Home

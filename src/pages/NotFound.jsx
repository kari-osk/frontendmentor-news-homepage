import React from 'react'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'

const NotFound = () => {
  return (
    <div className='container mx-auto'>
      <Navbar />
      <h3 className='h-full items-center'>404 error</h3>
      <p>Page not found</p>
      <Footer />
    </div>
  )
}

export default NotFound

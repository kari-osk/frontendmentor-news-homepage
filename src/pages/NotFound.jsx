import React from 'react'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'

const NotFound = () => {
  return (
    <div>
      <Navbar />
      <h3 className='h-full'>404 error</h3>
      <p>Sorry. Page not found</p>
      <Footer />
    </div>
  )
}

export default NotFound

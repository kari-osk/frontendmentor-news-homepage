import React from 'react'
import imgMobile from '../../assets//images/image-web-3-mobile.jpg'
// import imgDesktop from '../../assets//images/image-web-3-desktop.jpg'
import SideNew from '../SideNew/SideNew'

const Hero = () => {

  return (
    <div className='flex flex-row flex-wrap gap-4'>
      <main className='max-w-[727px] flex flex-col'>
        <img
          className='max-h-[300px] object-cover'
          src={imgMobile}
          alt='Illustration with geometric shapes'
        />
        <section className='flex flex-row' >
          <h1
            className='w-text-left text-3xl text-dark text-bold'
          >
            The Bright Future of Web 3.0?
          </h1>
          <div className='text-left'>
            <p
              className='text-left text-base text-dark-gray'
            >
              We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?
            </p>
            <button
              className=' bg-red p-3 text-uppercase text-light text-sm'
            >
              READ MORE
            </button>
          </div>
        </section >
      </main >
      <SideNew />
    </div >
  )
}

export default Hero

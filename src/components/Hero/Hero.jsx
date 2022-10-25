import React from 'react'
import imgMobile from '../../assets//images/image-web-3-mobile.jpg'
// import imgDesktop from '../../assets//images/image-web-3-desktop.jpg'
import SideNew from '../SideNew/SideNew'

const Hero = () => {

  return (
    <div className='flex flex-col flex-wrap gap-4 lg:flex-row'>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 pb-4'>
        {/* <main className='max-w-[727px] flex flex-col pb-4'> */}
        <main className='col-span-2'>
          <img
            className='w-full max-h-[300px] object-cover'
            src={imgMobile}
            alt='Illustration with geometric shapes'
          />
          {/* <section className='TEXT flex flex-col lg:flex-row' > */}
          <section className='grid lg:grid-cols-2'>
            <h1 className='text-left text-4xl text-dark text-bold py-3 pr-4'>
              The Bright Future of Web 3.0?
            </h1>
            <div className=' text-left'>
              <p className=' text-left text-base text-dark-gray py-5 leading-8'
              >
                We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?
              </p>
              <button className=' w-[186px] bg-red p-3 text-uppercase text-light text-sm'
              >
                READ MORE
              </button>
            </div>
          </section >
        </main >
        <SideNew />
      </div >
    </div >
  )
}

export default Hero

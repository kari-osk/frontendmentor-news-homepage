import React from 'react'
import imgMobile from '../../assets//images/image-web-3-mobile.jpg'
// import imgDesktop from '../../assets//images/image-web-3-desktop.jpg'
import SideNew from '../SideNew/SideNew'

const Hero = () => {

  return (
    <div className='flex gap-4'>
      <main>
        <img className='w-[727px] max-h-[300px] object-cover' src={imgMobile} alt='Illustration with geometric shapes' />
        < section className='flex' >
          <h1 className='text-left text-3xl text-dark text-bold'>The Bright Future of Web 3.0?</h1>
          <div className='text-left'>
            <p className='text-left text-base text-dark-gray'>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people.
              But is it really fulfilling its promise?</p>
            <button className=' bg-red p-3 text-uppercase text-light text-sm'>READ MORE</button>
          </div>
        </section >
      </main >
      <SideNew />
    </div >
  )
}

export default Hero

import React from 'react'
import imgMobile from '../../assets//images/image-web-3-mobile.jpg'
import imgDesktop from '../../assets//images/image-web-3-desktop.jpg'


const Hero = () => {

  return (
    <div>
      <img src={imgMobile} alt='Illustration with geometric shapes' />
      <section >
        <h1 className='text-left'>The Bright Future of Web 3.0?</h1>
        <div>
          <p className='text-left'>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people.
            But is it really fulfilling its promise?</p>
          <button>READ MORE</button>
        </div>
      </section>
    </div>
  )
}

export default Hero

import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav className='flex flex-wrap justify-between items-center p-5'>
        <h1 className='text-5xl font-serif font-bold'>W.</h1>
        <ul className='flex flex-row gap-9 '>
          <li className='hover:text-red text-bold'><a href='#' >Home</a></li>
          <li className='hover:text-red text-bold'><a href='#'>New</a></li>
          <li className='hover:text-red text-bold'><a href='#'>Popular</a></li>
          <li className='hover:text-red text-bold'><a href='#'>Trending</a></li>
          <li className='hover:text-red text-bold'><a href='#'>Categories</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar

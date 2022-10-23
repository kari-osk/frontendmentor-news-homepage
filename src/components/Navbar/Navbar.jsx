import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav className='flex flex-row justify-between p-5'>
        <h1>W.</h1>
        <ul className='flex flex-row gap-4'>
          <li>Home</li>
          <li>New</li>
          <li>Popular</li>
          <li>Trending</li>
          <li>Categories</li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar

import React from 'react'
import { LinkedinFilled, GithubFilled } from '@ant-design/icons'

const Footer = () => {
  return (
    <footer className="attribution text-sm text-center text-dark-gray py-4">
      <h4>
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" rel="noreferrer" target="_blank">Frontend Mentor</a>.
      </h4>
      <h4>
        Coded by <a href="https://github.com/kari-osk/frontendmentor-news-homepage">Karina Osuka</a>.
      </h4>
      <div className='flex flex-row gap-3 justify-center items-center'>
        <a className='text-[24px]' href='www.linkedin.com/in/karinaosuka'><LinkedinFilled /></a>
        <a className='text-[24px]' href='https://github.com/kari-osk'><GithubFilled /></a>
      </div>
    </footer>

  )
}

export default Footer

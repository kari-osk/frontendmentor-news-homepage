import React, { useState } from 'react'
import { X, List } from "phosphor-react";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="flex items-center justify-between py-8">
      <a href='/' className='text-5xl font-serif font-bold'>W.</a>

      <nav>
        <section className="MOBILE-MENU flex lg:hidden">
          <div
            className="HAMBURGER-ICON space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <List className='w-8 h-8 text-dark hover:text-red' />
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="absolute top-6 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)}
            >
              <X className='w-8 h-8 text-dark hover:text-red' />
            </div>

            <ul className="flex flex-col text-left placeholder:justify-between min-h-[250px]">
              <li className="text-dark my-4 hover:text-red hover: text-bold">
                <a href="/">Home</a>
              </li>
              <li className="text-dark my-4 hover:text-red hover: text-bold">
                <a href="/new">New</a>
              </li>
              <li className="text-dark my-4 hover:text-red hover: text-bold">
                <a href="/popular">Popular</a>
              </li>
              <li className="text-dark my-4 hover:text-red hover: text-bold">
                <a href="/trending">Trending</a>
              </li>
              <li className="text-dark my-4 hover:text-red hover: text-bold">
                <a href="/categories">Categories</a>
              </li>
            </ul>

          </div>
        </section>

        <ul className="DESKTOP-MENU hidden space-x-8 lg:flex">
          <li className="text-dark my-4 hover:underline p-1">
            <a href="/">Home</a>
          </li>
          <li className="text-dark my-4 hover:underline p-1">
            <a href="/new">New</a>
          </li>
          <li className="text-dark my-4 hover:underline p-1">
            <a href="/popular">Popular</a>
          </li>
          <li className="text-dark my-4 hover:underline p-1">
            <a href="/trending">Trending</a>
          </li>
          <li className="text-dark my-4 hover:underline p-1">
            <a href="/categories">Categories</a>
          </li>
        </ul>
      </nav>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        right: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </div>
  );
}

export default Navbar
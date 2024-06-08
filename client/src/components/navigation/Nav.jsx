import React from 'react'
import { Link as ReactScroll } from 'react-scroll'

const Nav = () => {
  return (
    <nav class="backdrop-blur-md bg-white bg-opacity-75 fixed w-full z-20 top-0 start-0 border-b border-gray-200">
      <div className="max-w-screen-lg flex flex-wrap items-center justify-between mx-auto p-4">
        <div>
          <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse text-black opacity-90 font-bold">
            <p className="text-2xl mr-[-12px]">Job</p>
            <p className="text-2xl">Connect</p>
          </a>
        </div>
        
        <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
        </button>

        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="text-black opacity-90 font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-white dark:border-gray-700">
            <li>
              <ReactScroll
                className="explore-btn cursor-pointer hover:text-purple-500"
                to="home-page"
                smooth={true}
                offset={-120}
                duration={500}
                >Home
              </ReactScroll>
            </li>
            <li>
              <ReactScroll
                className="explore-btn cursor-pointer hover:text-purple-500"
                to="reviews-page"
                smooth={true}
                offset={-120}
                duration={500}
                >Reviews
              </ReactScroll>
            </li>
            <li>
              <ReactScroll
                className="explore-btn cursor-pointer hover:text-purple-500"
                to="about-page"
                smooth={true}
                offset={-120}
                duration={500}
                >About
              </ReactScroll>
            </li>
          </ul>
        </div>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <a href="/login" type="button" className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-6 py-2 text-center me-2 mb-2" style={{ cursor: 'pointer' }}>LOGIN</a>
        </div>
      </div>
    </nav>
  )
}

export default Nav
import React from 'react'
import Home from './Home'
import Reviews from './Reviews'
import About from './About'
import Nav from '../../components/navigation/Nav'

const LandingPage = () => {
  return (
    <>
      <Nav/>
     <div id="home-page" className="flex items-center px-4 relative w-[1024px] mx-auto mt-20 flex-col gap-20 border border-red-600">
      <Home/>
      <Reviews/>
      <About />
    </div>
    </>
   
  )
}

export default LandingPage
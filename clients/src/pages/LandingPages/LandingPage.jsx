import Home from './Home'
import Reviews from './Reviews'
import About from './About'
import Nav from '../../components/navigation/Nav'
import { useContext } from 'react'
import {AppContext} from '../../context/ContextProvider'

const LandingPage = () => {
  const { auth } = useContext(AppContext)
  
  console.log(auth);
  return (
    <>
      <Nav/>
      <div id="home-page" className="flex items-center px-4 relative w-[1024px] mx-auto mt-20 flex-col gap-20">
        <Home/>
        <Reviews/>
        <About />
      </div>
    </>
   
  )
}

export default LandingPage
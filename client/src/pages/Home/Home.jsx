import React from 'react'
import { FlipWords } from '../../components/ui/FlipWords.tsx'

const Home = () => {
  const words = ["Future", "Career", "Goals" , "Dreams" , "Jobs" ];
  return (
    <div className="h-[40rem] flex justify-center items-center px-4">
      <div className="text-[40px] mx-auto font-bold tracking-tight">
       Empowering Your  <span className="bg-gradient-to-r from-blue-500 via-purple-700 to-red-500 text-transparent bg-clip-text ">
            Career Journey
            </span><br />
        <span className='ml-80'>
        Find Your  </span>
        <FlipWords words={words}/> 
        <span className=''>Today </span>
       
       
      </div>
    </div>
  )
}

export default Home
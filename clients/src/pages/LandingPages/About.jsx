import React from 'react'

import JobCard from "../../components/card/JobCard"

const About = () => {
  return (
    <div id="about-page" className="h-[40rem] mt-[-72px] bg-white flex flex-col items-center justify-center w-[1024px] border border-red-600">
      <h1 className="text-center font-bold text-3xl mb-[24px] opacity-90">About</h1>
      <JobCard />
    </div>
  )
}

export default About
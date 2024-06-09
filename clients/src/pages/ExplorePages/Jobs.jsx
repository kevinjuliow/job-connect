import React from 'react'
import { JobList } from "../../components/dummy/JobList"
import JobCard from "../../components/card/JobCard"

const Jobs = () => {
  return (
    <div className="flex flex-wrap items-center justify-center max-w-[1200px] mx-auto pt-6 pb-12">
      {JobList.map((data) => {
        return(
          <JobCard key={data.id} data={data} />
        )
      })}
    </div>
  )
}

export default Jobs
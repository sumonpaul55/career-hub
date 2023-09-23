import React, { useEffect, useState } from 'react'
import Job from '../../job/Job';

function FeaturedJobs() {
  const [jobs, setjobs] = useState([]);
  const [dataLength, setDatalength] = useState([4])
  useEffect(() => {
    fetch("jobs.json")
      .then(res => res.json())
      .then(data => setjobs(data))
  }, [])
  return (
    <div className='container mx-auto py-20'>
      <div className='text-center space-y-5'>
        <h1 className='text-xl md:text-5xl text-center'>Featured Jobs</h1>
        <p className=''>Explore thousands of job opportunities with all the information you need. Its your future</p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-16 max-w-[1200px] mt-14 mx-auto'>
        {
          jobs.slice(0, dataLength).map((job, idx) => (
            <Job key={idx} job={job}></Job>
          ))
        }
      </div>
      <div className={`text-center mt-20 rounded-md ${dataLength === jobs.length && "hidden"}`}>
        <button className='bg-[#7E90FE] px-4 py-2 text-white' onClick={() => setDatalength(jobs.length)}>See All Jobs</button>
      </div>
    </div>
  )
}

export default FeaturedJobs
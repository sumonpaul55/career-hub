import React, { useEffect, useState } from "react"
import { useLoaderData } from "react-router"
import { getStoredapplication } from "../../utility/LocalStorage";
import { } from "react-router-dom";
import Jobapplied from "../appliedjob/Jobapplied";
function AppliedJobs() {
  const [appliedjob, setAppliedJob] = useState([])
  const jobs = useLoaderData();

  useEffect(() => {
    const storedData = getStoredapplication();
    const appliedjob = []
    if (storedData.length > 0) {
      for (const id of storedData) {
        const selectedJob = jobs.find((job) => job.id === id);
        appliedjob.push(selectedJob)
      }
    }
    // console.log(appliedjob)
    setAppliedJob(appliedjob)
  }, [jobs])
  return (
    <div className="container mx-auto">
      <h1>AppliedJobs</h1>
      <div>
        {appliedjob.map((job, idx) => <Jobapplied key={idx} appliedjob={job}></Jobapplied>)}
      </div>
    </div>
  )
}

export default AppliedJobs
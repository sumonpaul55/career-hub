import React, { useEffect } from "react"
import { useLoaderData } from "react-router"
import { getStoredapplication } from "../../utility/LocalStorage";
function AppliedJobs() {
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
    console.log(appliedjob)
  }, [])
  return (
    <div className="container mx-auto">
      <h1>AppliedJobs</h1>

    </div>
  )
}

export default AppliedJobs
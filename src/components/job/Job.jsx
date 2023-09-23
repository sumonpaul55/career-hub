import React from 'react'
import PropTypes from "prop-types"
import { GoLocation } from "react-icons/go"
import { BiDollarCircle } from "react-icons/bi"
import { Link } from 'react-router-dom'
function Job({ job }) {
    // console.log(job)
    const { id, logo, job_title, company_name, remote_or_onsite, job_type, location, salary } = job
    return (
        <div className='border p-10 rounded-lg'>
            <img src={logo} className='w-28' alt="" />
            <h2 className='mt-4 font-semibold text-xl md:text-3xl text-gray-600'> {job_title}</h2>
            <p className='my-4 text-gray-500 text-lg md:text-xl'>{company_name}</p>
            <div className='space-x-4 mt-6'>
                <button className='py-2 px-4 border font-extrabold rounded-md border-[#7E90FE] text-[#7E90FE]'>{remote_or_onsite}</button>
                <button className='py-2 px-4 border font-extrabold rounded-md border-[#7E90FE] text-[#7E90FE]'>{job_type}</button>
            </div>
            <div className="flex gap-4 mt-5">
                <div className='flex items-center gap-2'>
                    <span className='text-lg text-gray-600 font-semibold'><GoLocation /></span>
                    <span className='text-lg text-gray-600 font-semibold'>{location}</span>
                </div>
                <div className='flex items-center gap-2'>
                    <span className='text-lg text-gray-600 font-semibold'><BiDollarCircle /></span>
                    <span className='text-lg text-gray-600 font-semibold'>{salary}</span>
                </div>
            </div>
            <Link to={`/job-detail/${id}`}>
                <button className='bg-[#7E90FE] px-4 py-2 rounded-md text-white mt-4'>View Details</button>
            </Link>
        </div>
    )
}
Job.propTypes = {
    job: PropTypes.object
}
export default Job
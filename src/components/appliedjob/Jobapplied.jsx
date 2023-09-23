/* eslint-disable no-unused-vars */
import React from 'react'
import PropTypes from "prop-types"
import { GoLocation } from "react-icons/go"
import { BsCurrencyDollar } from "react-icons/bs"
function Jobapplied({ appliedjob }) {
    console.log(appliedjob
    )
    const { id, logo, job_title, location, company_name, salary, remote_or_onsite, job_type } = appliedjob
    return (
        <div className='p-4 border m-5 flex gap-5 items-center'>
            <div className='flex gap-3'>
                <div className='bg-gray-200 px-5 py-14'><img src={logo} alt="" className='w-32' /></div>
            </div>
            <div className='flex-grow'>
                <h1 className='text-lg md:text-2xl font-semibold text-gray-600'>{job_title}</h1>
                <span className='font-semibold text-md md:text-lg text-gray-500'>{company_name}</span>
                <div className='space-x-4 mt-1'>
                    <button className='border px-4 py-2 border-indigo-400 text-indigo-400 font-semibold'>{remote_or_onsite}</button>
                    <button className='border px-4 py-2 border-indigo-400 text-indigo-400 font-semibold'>{job_type}</button>
                </div>
                <div className='mt-2 flex items-center gap-5 text-gray-500'>
                    <span className='flex items-center gap-3 text-xl'><GoLocation />{location}</span>
                    <span className='flex items-center gap-3 text-xl'><BsCurrencyDollar />{salary}</span>
                </div>
            </div>
            <div className=''><button className='px-4 py-2 text-white bg-indigo-400'>View Detail</button></div>
        </div>
    )
}
Jobapplied.propTypes = {
    appliedjob: PropTypes.object
}

export default Jobapplied
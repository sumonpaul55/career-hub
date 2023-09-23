import React from 'react'
import { useLoaderData, useParams, } from 'react-router'
import { BiDollarCircle } from "react-icons/bi"
import { GrDocumentUser } from "react-icons/gr"
import { MdEmail } from "react-icons/md"
import { GoLocation } from "react-icons/go"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function JobDetail() {
    const alljob = useLoaderData();
    const { id } = useParams();
    const targetedJob = alljob.find((job) => job.id === parseInt(id))
    // console.log(targetedJob)
    const handleApply = () => {
        toast("You have applied successfully")
    }
    return (
        <div className='container mx-auto py-20'>
            <h1 className='text-2xl md:text-4xl font-bold text-center mb-5 text-gray-700'>Job Details : {targetedJob.job_title}</h1>
            <div className="layout grid grid-cols-1 md:grid-cols-3 gap-16">
                <div className='md:col-span-2 space-y-5 text-xl'>
                    <div className='space-y-14'>
                        <p><span className='font-bold text-gray-500'>Job Description:</span>{targetedJob.job_description}</p>
                        <p><span className='font-bold text-gray-500'>Job Description:</span>{targetedJob.job_responsibility}</p>
                    </div>
                    <div className='space-y-14'>
                        <div>
                            <h2 className='font-bold'>Educational Requirments: </h2>
                            <p className='text-gray-600'>{targetedJob.educational_requirements}</p>
                        </div>
                        <div>
                            <h2 className='font-bold'>Experience</h2>
                            <p className='text-gray-600'>{targetedJob.experiences}</p>
                        </div>
                    </div>
                </div>

                <div>
                    <div className='bg-[#9873ff1a] p-4'>
                        <div className=''>
                            <h1 className='text-xl md:text-2xl font-bold border-b py-3 text-gray-600'>Job Detail</h1>
                            <div className='space-y-6'>
                                <div className='font-semibold flex items-center gap-2 text-xl mt-3 text-gray-600'>  <BiDollarCircle /> Salary {targetedJob.salary} (Per Month)</div>
                                <div className='font-semibold flex items-center gap-2 text-xl mt-3 text-gray-600'><GrDocumentUser />Job title {targetedJob.salary} (Per Month)</div>
                            </div>
                            <div className='mt-5 space-y-6'>
                                <h1 className="text-xl md:text-2xl font-bold border-b py-3 text-gray-600">
                                    Contact Information
                                </h1>
                                <div className='font-semibold flex items-center gap-2 text-xl mt-3 text-gray-600'><GrDocumentUser />Phone {targetedJob.contact_information.phone}</div>
                                <div className='font-semibold flex items-center gap-2 text-xl mt-3 text-gray-600'><MdEmail />Email {targetedJob.contact_information.email}</div>
                                <div className='font-semibold flex items-center gap-2 text-xl mt-3 text-gray-600'><GoLocation />location {targetedJob.location}</div>
                            </div>
                        </div>
                    </div>
                    <button onClick={handleApply} className='px-5 py-4 text-center bg-indigo-400 text-white mt-6 w-full rounded-lg'>Apply Now</button>
                </div>
            </div>
            <ToastContainer position="bottom-right" />
        </div>
    )
}

export default JobDetail
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Rating from 'react-rating';
import { HiStar, HiOutlineStar } from "react-icons/hi";

const CollegeDetails = () => {
    
    const { collegeDetails, setCollegeDetails } = useState([])
    
     const collegeDetailsData = useLoaderData([])
     console.log(collegeDetailsData);

     const { id } = useParams();
    const collegeData = collegeDetailsData && collegeDetailsData.find(data => data._id == id)

    const {college_image, college_name, rating, admission_dates, research_history, sports}= collegeData
    return (
        <div>
            <h1 className='text-3xl text-cyan-400 text-center mt-5'>College Details</h1>
            <div className="hero container rounded-xl shadow-xl bg-green-100 my-10">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={college_image} className="w-[50%] rounded-lg shadow-2xl" alt='Toy Image' />
                    <div className='w-[50%] flex-col gap-3 pl-5'>
                        <h1 className="my-5 text-lg md:text-3xl"><span className='font-bold'>College Name:</span> {college_name}</h1>
                        <h2><span className='font-bold'>Admission Dates:</span></h2>
                        <h2 className=""><span className='font-bold'>Start Date</span> {admission_dates.fall}</h2>
                        <h2><span className='font-bold'>Expire Date</span> {admission_dates.spring}</h2>

                        <p className='mt-5'><span className='font-bold'>Research History:</span> {research_history}</p>
                        <p className='mt-5'><span className='font-bold'>Sports:</span> {sports}</p>
                        <Rating
                             className='text-yellow-500' 
                            readonly
                            placeholderRating={rating}
                            emptySymbol={<HiOutlineStar/>}
                            placeholderSymbol={<HiStar />}
                            fullSymbol={<HiStar />}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CollegeDetails;
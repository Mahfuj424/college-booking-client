// /* eslint-disable no-unused-vars */
// import React, { useEffect, useState } from 'react';
// import { useLoaderData, useParams } from 'react-router-dom';
// import Rating from 'react-rating';
// import { HiStar, HiOutlineStar } from "react-icons/hi";

// const CollegeDetails = () => {
    
//     const { collegeDetails, setCollegeDetails } = useState([])
    
//     useEffect(() => {
//         fetch(`/public/`)
//     },[])

//     const { id } = useParams();
//     const singleToy = toyData && toyData.find(data => data._id == id)

//     const { image, name, quantity, description, sellerEmail, sellerName, subcategory, rating, price } = singleToy;
//     return (
//         <div>
//             <h1 className='text-3xl text-center mt-5'>Toy Details</h1>
//             <div className="hero min-h-screen rounded-xl shadow-xl bg-green-100 my-10">
//                 <div className="hero-content flex-col lg:flex-row-reverse">
//                     <img src={image} className="w-[40%] rounded-lg shadow-2xl" alt='Toy Image' />
//                     <div className='w-[60%] flex-col gap-3 pl-5'>
//                         <h1 className="py-3"><span className='font-bold'>Name:</span> {name}</h1>
//                         <h2><span className='font-bold'>Seller Name:</span> {sellerName}</h2>
//                         <h2 className="py-3"><span className='font-bold'>Seller Email:</span> {sellerEmail}</h2>
//                         <h2><span className='font-bold'>SubCategory:</span> {subcategory}</h2>
//                         <h2 className="py-3"><span className='font-bold'>Quantity:</span> {quantity}</h2>
//                         <h2><span className='font-bold'>Price:</span> ${price}</h2>

//                         <p><span className='font-bold'>Description:</span> {description}</p>
//                         <Rating
//                              className='text-yellow-500' 
//                             readonly
//                             placeholderRating={rating}
//                             emptySymbol={<HiOutlineStar/>}
//                             placeholderSymbol={<HiStar />}
//                             fullSymbol={<HiStar />}
//                         />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default CollegeDetails;
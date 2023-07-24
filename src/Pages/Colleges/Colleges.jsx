
import { useContext, useEffect, useState } from 'react';
// import Swal from 'sweetalert2';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Componet/AuthProvider/AuthProvider';
import { HiOutlineStar, HiStar } from 'react-icons/hi';
import Rating from 'react-rating';
// import Rating from 'react-rating';
// import { HiOutlineStar, HiStar, } from "react-icons/hi";
const Colleges = () => {

     const [colleges, setColleges] = useState([])

     const { user } = useContext(AuthContext)
     const navigate = useNavigate()

     useEffect(() => {
          fetch('http://localhost:5000/college')
               .then(res => res.json())
               .then(data => setColleges(data))
     }, [])

     const handleCollegeDetails = (id) => {

          if (!user?.email) {
               navigate('/login')
          }
          console.log(id)
     }

     // console.log(colleges);
     return (
          <div>
               <h1 className='text-cyan-400 text-center my-3 text-4xl'>Colleges</h1>
               <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 container my-5'>
                    {
                         colleges.map(college => {
                              return <div key={college._id} className="card card-compact w-96 bg-base-100 shadow-xl">
                                   <figure><img src={college.college_image} alt="Shoes" /></figure>
                                   <div className="card-body">
                                        <h2 className="card-title">{college.college_name}</h2>
                                        <p className='font-bold'>Admission Dates:</p>
                                        <p>{college.admission_dates.fall}</p>
                                        <p>{college.admission_dates.spring}</p>
                                        <Rating
                                             className='text-yellow-500'
                                             readonly
                                             placeholderRating={college.rating}
                                             emptySymbol={<HiOutlineStar />}
                                             placeholderSymbol={<HiStar />}
                                             fullSymbol={<HiStar />}
                                        />
                                        <div className="card-actions justify-center">
                                             <Link to={`/collegeDetails/${college._id}`}>
                                                  <button onClick={handleCollegeDetails} className='button'>Details</button>
                                             </Link>
                                        </div>
                                   </div>
                              </div>
                         })
                    }

               </div>
          </div>
     );
};




export default Colleges;
import { useContext } from "react";
import { HiOutlineStar, HiStar } from "react-icons/hi";
import Rating from "react-rating";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Componet/AuthProvider/AuthProvider";


const CollegeDetail = ({ collegeData }) => {
     
     const navigate = useNavigate()

     const { user } = useContext(AuthContext);

     const handleCollegeDetails = (id) => {
          if (!user?.email) {
               navigate('/login')
          }
     }

     console.log(collegeData);
     const { _id, college_image, college_name, admission_dates, rating } = collegeData;

     return (
          <div>
               <div key={_id} className={`card card-compact mx-auto md:w-96 w-40 mb-5 bg-base-100 transition-transform hover:scale-105 shadow-xl`}>
                    <figure><img src={college_image} alt="Shoes" /></figure>
                    <div className="card-body">
                         <h2 className="card-title">{college_name}</h2>
                         <p className='font-bold'>Admission Dates:</p>
                         <p>{admission_dates.fall}</p>
                         <p>{admission_dates.spring}</p>
                         <Rating
                              className='text-yellow-500'
                              readonly
                              placeholderRating={rating}
                              emptySymbol={<HiOutlineStar />}
                              placeholderSymbol={<HiStar />}
                              fullSymbol={<HiStar />}
                         />
                         <div className="card-actions justify-center">
                              <Link to={`/collegeDetails/${_id}`}>
                                   <button onClick={handleCollegeDetails} className='button'>Details</button>
                              </Link>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default CollegeDetail;
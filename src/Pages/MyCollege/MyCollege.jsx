import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Componet/AuthProvider/AuthProvider";
import Swal from "sweetalert2";


const MyCollege = () => {

     const { user } = useContext(AuthContext)
     const [myCollegeData, setMyCollegeData] = useState([])
     useEffect(() => {
          fetch(`https://college-booking-server-mu-eight.vercel.app/myCollege`)
               .then(res => res.json())
               .then(data => setMyCollegeData(data))
     }, [])

     const myCollege = myCollegeData && myCollegeData.filter(college => college.StudentEmail == user?.email)

     console.log(myCollege)

     return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 container my-10">
               {
                    myCollege.map(collegeData => {
                         return <div key={collegeData._id} className="card card-compact mb-5 md:mx-0 mx-auto md:w-96 w-[350px] bg-base-100 shadow-xl transition-transform hover:scale-105">
                              <figure><img src={collegeData.image} alt="Shoes" /></figure>
                              <div className="card-body">
                                   <h2 className="card-title">{collegeData.name}</h2>
                                   <h2 className="text-lg">Student Name: {collegeData.StudentName}</h2>
                                   <p className='font-bold'>Subjects: {collegeData.Subjects}</p>
                                   <p>Address: {collegeData.Address}</p>
                                   <p>Phone: {collegeData.Phone}</p>
                                   <p>Date Of Birth: {collegeData.DateOfBirth}</p>
                                   <p>University Details: <br />{collegeData.CollegeDetails}</p>
                                   <div className="form-control">
                                        <input type="number" name="review" id="review" className="border-cyan-400 border-2 rounded py-2 px-3 w-full" placeholder="Review Hare" />
                                        <button className="button">Add</button>
                                   </div>
                              </div>
                         </div>
                    })
               }

          </div>
     );
};

export default MyCollege;
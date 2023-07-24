import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Componet/AuthProvider/AuthProvider";
import Swal from "sweetalert2";


const MyCollege = () => {

     const { user } = useContext(AuthContext)
     const [myCollegeData, setMyCollegeData] = useState([])
     // console.log(myCollegeData);
     useEffect(() => {
          fetch(`http://localhost:5000/myCollege`)
               .then(res => res.json())
               .then(data => setMyCollegeData(data))
     }, [])

     const myCollege = myCollegeData && myCollegeData.filter(college => college.StudentEmail == user?.email)
     console.log(myCollege)

     // const { image, name, } = myCollege;

     // const handleSubmit = (e) => {
     //      e.preventDefault()
     //      const form = e.target;
          
     //      const image = form.image.innerText;
     //      const name = form.name.innerText;



     //      fetch('http://localhost:5000/myCollege', {
     //           method: "POST",
     //           headers: {
     //                'content-type': 'application/json'
     //           },
     //           body: JSON.stringify()
     //      })
     //           .then(res => res.json())
     //           .then(data => {

     //                console.log(data);

     //                if (data.insertedId) {
     //                     return Swal.fire({
     //                          title: 'Success!',
     //                          text: 'Review Done',
     //                          icon: 'success',
     //                          confirmButtonText: 'Success'
     //                     })
     //                }
     //           })
     // }


     return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 container my-10">
               {
                    myCollege.map(collegeData => {
                         return <div key={collegeData._id} className="card card-compact w-96 bg-base-100 shadow-xl">
                              <figure><img src={collegeData.image} alt="Shoes" /></figure>
                              <div className="card-body">
                                   <h2  className="card-title">{collegeData.name}</h2>
                                   <h2 className="text-lg">Student Name: {collegeData.StudentName}</h2>
                                   <p className='font-bold'>Subjects: {collegeData.Subjects}</p>
                                   <p className=''>Address: {collegeData.Address}</p>
                                   <p className=''>Phone: {collegeData.Phone}</p>
                                   <p className=''>Date Of Birth: {collegeData.DateOfBirth}</p>
                                   <p className=''>University Details: <br />{collegeData.CollegeDetails}</p>
                                   {/* <Rating
                                   className='text-yellow-500'
                                   readonly
                                   placeholderRating={"college.rating"}
                                   emptySymbol={<HiOutlineStar />}
                                   placeholderSymbol={<HiStar />}
                                   fullSymbol={<HiStar />}
                              /> */}
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
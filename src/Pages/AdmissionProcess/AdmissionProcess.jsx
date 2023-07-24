import { useContext } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../Componet/AuthProvider/AuthProvider";
import Swal from "sweetalert2";


const AdmissionProcess = () => {
     const singleStudent = useLoaderData([]);

     const { id } = useParams();
     const { user } = useContext(AuthContext)

     const student = singleStudent && singleStudent.find(data => data._id == id);

     const { name, image, country, college_Details } = student;
     console.log(country);

     const navigate = useNavigate();

     const handleSubmit = (e) => {
          e.preventDefault()
          const form = e.target;
          const image = form.image.value;
          const name = form.name.value;
          const StudentName = form.StudentName.value;
          const StudentEmail = form.StudentEmail.value;
          const Subjects = form.Subjects.value;
          const Phone = form.Phone.value;
          const DateOfBirth = form.DateOfBirth.value;
          const Address = form.Address.value;
          const CollegeDetails = form.CollegeDetails.value;
          const country = form.country.value;
          const myUniversity = { country, image, name, StudentEmail, StudentName, Subjects, Phone, DateOfBirth, Address, CollegeDetails }
          console.log(myUniversity);


          fetch('http://localhost:5000/myCollege', {
               method: "POST",
               headers: {
                    'content-type': 'application/json'
               },
               body: JSON.stringify(myUniversity)
          })
               .then(res => res.json())
               .then(data => {

                    console.log(data);

                    if (data.insertedId) {
                         return Swal.fire({
                              title: 'Success!',
                              text: 'Successfully Admit',
                              icon: 'success',
                              confirmButtonText: 'Success'
                         })
                    }
               })
          navigate('/admission')
     }


     return (
          <div className="container">
               <form onSubmit={handleSubmit} className='bg-green-100 my-10 p-5 rounded-xl shadow-md'>
                    <div className="flex w-full gap-5 mx-auto ">
                         <div className='w-1/2'>
                              <div className="mb-4 ">
                                   <label htmlFor="image" className="block mb-2">Image:</label>
                                   <input readOnly type="text" name="image" id="image" defaultValue={image} className="border rounded py-2 px-3 w-full" />
                              </div>

                              <div className="mb-4">
                                   <label htmlFor="name" className="block mb-2">University Name:</label>
                                   <input type="text" name="name" id="name" defaultValue={name} readOnly className="border rounded py-2 px-3 w-full" />
                              </div>

                              <div className="mb-4">
                                   <label htmlFor="StudentName" className="block mb-2">Student Name:</label>
                                   <input type="text" name="StudentName" id="StudentName" readOnly defaultValue={user?.displayName} className="border rounded py-2 px-3 w-full" />
                              </div>

                              <div className="mb-4">
                                   <label htmlFor="StudentEmail" className="block mb-2">Student Email:</label>
                                   <input type="email" name="StudentEmail" id="StudentEmail" readOnly defaultValue={user?.email} className="border rounded py-2 px-3 w-full" />
                              </div>
                         </div>
                         <div className='w-1/2'>
                              <div className="mb-4">
                                   <label htmlFor="Subjects" className="block mb-2">Subjects:</label>
                                   <select name="Subjects" id="Subjects" className="border rounded py-2 px-3 w-full">
                                        <option value="Mathematics">Mathematics</option>
                                        <option value="Computer Science ">Computer Science </option>
                                        <option value="Economics and Finance">Economics and Finance</option>
                                        <option value="Psychology">Psychology</option>
                                        <option value="Education and Teaching">Education and Teaching</option>
                                   </select>
                              </div>
                              <div className="mb-4">
                                   <label htmlFor="Phone" className="block mb-2">Phone:</label>
                                   <input type="number" name="Phone" id="Phone" className="border rounded py-2 px-3 w-full" />
                              </div>
                              <div className="mb-4">
                                   <label htmlFor="DateOfBirth" className="block mb-2">date of birth:</label>
                                   <input type="text" name="DateOfBirth" id="DateOfBirth" min="0" max="5" step="0.1" className="border rounded py-2 px-3 w-full" />
                              </div>

                              <div className="mb-4">
                                   <label htmlFor="Address" className="block mb-2">Address:</label>
                                   <input type="text" name="Address" id="Address" className="border rounded py-2 px-3 w-full" />
                              </div>


                         </div>
                    </div>
                    <div className="mb-4">
                         <label htmlFor="country" className="block mb-2">Country:</label>
                         <input type="text" name="country" id="country" defaultValue={country} className="border rounded py-2 px-3 w-full" />
                    </div>
                    <div className="mb-4">
                         <label htmlFor="CollegeDetails" className="block mb-2">University Details:</label>
                         <textarea defaultValue={college_Details} readOnly name="CollegeDetails" id="CollegeDetails" rows="4" cols="50" className="border rounded py-2 px-3 w-full"></textarea>
                    </div>
                    <div className="mb-4 text-center">
                         <button type="submit" className="button">Submit</button>
                    </div>
               </form>
          </div>
     );
};

export default AdmissionProcess;
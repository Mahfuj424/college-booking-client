import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Componet/AuthProvider/AuthProvider";


const Admission = () => {
     const [collegeName, setCollegeName] = useState([]);
     console.log(collegeName);
     useEffect(() => {
          fetch(`http://localhost:5000/collegeName`)
               .then(res => res.json())
               .then(data => setCollegeName(data))
     }, [])

     const navigate = useNavigate();
     const { user } = useContext(AuthContext)


     const handleAdmission = (id) => {
          if (!user?.email) {
               navigate('/login')
          }
     }


     return (
          <div className="container py-7">
               <h1 className="text-3xl text-cyan-400 text-center my-10">Available College <br /> <span className="text-black">Admission Now</span></h1>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-center md:text-center justify-center lg:grid-cols-3 border border-5">
                    {
                         collegeName.map(college => {
                              return <div key={college._id}>
                                   <Link to={`/admissionProcess/${college._id}`}>
                                        <button onClick={handleAdmission} className="button">{college.name}</button>
                                   </Link>
                              </div>
                         })
                    }
               </div>
          </div>
     );
};

export default Admission;
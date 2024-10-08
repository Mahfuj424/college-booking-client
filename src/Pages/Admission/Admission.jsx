import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Componet/AuthProvider/AuthProvider";

const Admission = () => {
  const [collegeName, setCollegeName] = useState([]);
  console.log(collegeName);
  useEffect(() => {
    fetch(`https://college-booking-server-mu-eight.vercel.app/collegeName`)
      .then((res) => res.json())
      .then((data) => setCollegeName(data));
  }, []);

  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const handleAdmission = (id) => {
    if (!user?.email) {
      navigate("/login");
    }
  };

  return (
    <div className="container py-7">
      <h1 className="text-3xl  text-center my-10">
        Available College
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-center md:text-center justify-center lg:grid-cols-3 ">
        {collegeName.map((college) => {
          return (
            <div key={college._id}>
              <Link to={`/admissionProcess/${college._id}`}>
                <button onClick={handleAdmission} className="button">
                  {college.name}
                </button>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Admission;

import { useEffect, useState } from "react";
import CollegeDetail from "../CollegeDetail/CollegeDetail";


const College = () => {
     const [allCollege, setAllCollege] = useState([]);
     console.log(allCollege);

     useEffect(() => {
          fetch(`https://college-booking-server-mu-eight.vercel.app/college`)
               .then(res => res.json())
               .then(data => setAllCollege(data))
     }, [])



     // const [showAll, setShowAll] = useState(false);
     // const visibleCollege = showAll ? allCollege : allCollege.slice(0, 3);

     return (
          <div>
               <div className='container'>
                    <h1 className='text-center text-cyan-400 font-bold text-3xl'>College</h1>
                    <div className='mt-10 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8'>
                         {
                              allCollege.map(collegeData => <CollegeDetail key={collegeData._id} collegeData={collegeData} />)
                         }
                    </div>
                    <div className='text-center my-10'>
                              <button className='button' onClick={() => setShowAll(true)}>
                                   See More
                              </button>
                    </div>
               </div>
          </div>
     );
};

export default College;
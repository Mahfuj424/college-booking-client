import { useEffect, useState } from "react";
import CollegeDetail from "../CollegeDetail/CollegeDetail";


const College = () => {
     const [allCollege, setAllCollege] = useState([]);
     console.log(allCollege);

     useEffect(() => {
          fetch(`/public/college.json`)
               .then(res => res.json())
               .then(data => setAllCollege(data))
     }, [])


     const [showAll, setShowAll] = useState(false);
     const visibleCollege = showAll ? allCollege : allCollege.slice(0, 3);

     return (
          <div>
               <div className='container'>
                    <h1 className='text-center text-cyan-400 font-bold text-3xl'>College</h1>
                    <div className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                         {
                              visibleCollege.map(collegeData => <CollegeDetail key={collegeData._id} collegeData={collegeData} />)
                         }
                    </div>
                    <div className='text-center my-10'>
                         {!showAll && (
                              <button className='button' onClick={() => setShowAll(true)}>
                                   See More
                              </button>
                         )}
                    </div>
               </div>
          </div>
     );
};

export default College;
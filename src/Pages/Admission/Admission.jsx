

const Admission = () => {
     return (
          <div>
               <div className="overflow-x-auto mx-5 md:mx-0 my-10">
                    <table className="table">
                         {/* head */}
                         <thead>
                              <tr>
                                   <th>SL</th>
                                   <th>College Name</th>
                                   <th>Govt/privet</th>
                                   <th>Division</th>
                              </tr>
                         </thead>
                         <tbody>
                              {/* row 1 */}
                              <tr className="hover:bg-gray-100">
                                   <th>1</th>
                                   <td>Sunamganj Govt college</td>
                                   <td>Govt</td>
                                   <td>Sunamganj</td>
                              </tr>
                              {/* row 2 */}
                              <tr className="hover:bg-gray-100">
                                   <th>2</th>
                                   <td>Sylhet Govt college</td>
                                   <td>Govt</td>
                                   <td>Sylhet</td>
                              </tr>
                              {/* row 3 */}
                              <tr className="hover:bg-gray-100">
                                   <th>3</th>
                                   <td>Pouro College</td>
                                   <td>Privet</td>
                                   <td>Sunamganj</td>
                              </tr>
                              <tr className="hover:bg-gray-100">
                                   <th>4</th>
                                   <td>Moulvibazar Govt college</td>
                                   <td>Govt</td>
                                   <td>Moulvibazar</td>
                              </tr>
                              <tr className="hover:bg-gray-100">
                                   <th>5</th>
                                   <td>Sylhet cantonment college</td>
                                   <td>Privet</td>
                                   <td>Sylhet</td>
                              </tr>
                         </tbody>
                    </table>
               </div>
          </div>
     );
};

export default Admission;
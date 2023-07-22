
import img4 from '../../Home/Banner/images/banner4.jpg'
const College = () => {
     return (
          <div>
               <h1 className='text-green-500 text-center my-3 text-4xl'>Colleges</h1>
               <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 container my-5'>
                    <div className="card card-compact w-96 bg-base-100 shadow-xl">
                         <figure><img src={img4} alt="Shoes" /></figure>
                         <div className="card-body">
                              <h2 className="card-title">Shoes!</h2>
                              <p>If a dog chews shoes whose shoes does he choose?</p>
                              <div className="card-actions justify-end">
                                   <button className="btn btn-primary">Buy Now</button>
                              </div>
                         </div>
                    </div>
                    <div className="card card-compact w-96 bg-base-100 shadow-xl">
                         <figure><img src={img4} alt="Shoes" /></figure>
                         <div className="card-body">
                              <h2 className="card-title">Shoes!</h2>
                              <p>If a dog chews shoes whose shoes does he choose?</p>
                              <div className="card-actions justify-end">
                                   <button className="btn btn-primary">Buy Now</button>
                              </div>
                         </div>
                    </div>
                    <div className="card card-compact w-96 bg-base-100 shadow-xl">
                         <figure><img src={img4} alt="Shoes" /></figure>
                         <div className="card-body">
                              <h2 className="card-title">Shoes!</h2>
                              <p>If a dog chews shoes whose shoes does he choose?</p>
                              <div className="card-actions justify-end">
                                   <button className="btn btn-primary">Buy Now</button>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default College;
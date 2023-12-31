import gallery from '../../Pages/Gallery/images/gallery4.jpg'

const Graduation = () => {
     return (
          <div className='container'>
               <div className='grid md:container my-20 grid-cols-1 md:grid-cols-2'>
                    <div>
                       <img className='rounded-xl md:w-[400px] md:mx-0 mx-auto md:h-[450px] w-[350px] h-[370px]' src={gallery} alt="" />
                    </div>
                    <div className='mt-5 w-3/4 mx-auto'>
                         <h1 className='text-5xl font-bold mb-5'>Inspiring The Next <br /> Generation Of <br /> Engineers Course</h1>
                         <p>Nullam suscipit id ante bibendum bibendum. Vivamus interdum gravida justo id venenatis. tempus velit sed, lobortis metus. Donec id tincidunt libero, eget dapibus quam. Aenean felis ex, blandit pretium pharetra eu.</p>
                         <button className='button mt-5'>More Details</button>
                    </div>
               </div>
          </div>
     );
};

export default Graduation;
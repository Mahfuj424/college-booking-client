
import image from './career.jpg'
const Career = () => {
     return (
          <div>
               <div className='grid container my-20 grid-cols-1 md:grid-cols-2'>
                    <div>
                       <img className='rounded-xl md:w-full w-3/4 mx-auto' src={image} alt="" />
                    </div>
                    <div className='mt-20 md:w-full w-3/4 mx-auto'>
                         <h1 className='text-5xl font-bold mb-5'>Helping People Grow Their Careers.</h1>
                         <p>Pellentesque ultrices orci id justo vehicula, non aliquam erat lacinia. Mauris rhoncus venenatis tempor. Proin egestas euismod felis a ullamcorper. Nullam lacus nisi, blandit eget lacus ac, lobortis finibus augue.</p>
                         <button className='button mt-5'>Start Learning</button>
                    </div>
               </div>
          </div>
     );
};

export default Career;
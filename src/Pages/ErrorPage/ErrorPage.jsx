import errorPage from './errorPage.gif'
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='bg-base-200'>
              <img className='max-h-screen w-full relative' src={errorPage} alt="" />
              <h1 className='absolute text-9xl left-[40%] text-success font-bold top-5'>404</h1>
            <Link to='/'><button className='btn btn-outline btn-success top-10 left-5 absolute font-bold'>←Back to Home Page</button></Link>
        </div>
    );
};

export default ErrorPage;
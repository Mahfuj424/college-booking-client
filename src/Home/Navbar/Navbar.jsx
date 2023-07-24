import { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { RxAvatar } from 'react-icons/rx'
import { BiArrowFromLeft } from 'react-icons/bi'
import { AuthContext } from '../../Componet/AuthProvider/AuthProvider';
import { BsBook } from "react-icons/bs";
const Navbar = () => {
     const { user, logOut } = useContext(AuthContext)

     const [college, setCollege] = useState([])

     const [searchText, setSearchText] = useState('')

     const handleSearch = () => {
          fetch(`https://aeroplane-toy-server.vercel.app/searchText?search=${searchText}`)
              .then(res => res.json())
              .then(data => setCollege(data))
      };



     const navItem = <div className='md:space-x-8 space-y-3 text-white md:text-black items-center md:space-y-0 pb-2 mb:pb-0 md:flex'>
          <p className='text-lg hover:text-cyan-500 transition-all'><NavLink className={({ isActive }) => isActive ? 'border-b-2 pb-2 text-cyan-500 border-cyan-500' : ''} to='/'>Home</NavLink></p>
          <p className='text-lg hover:text-cyan-500 transition-all'><NavLink className={({ isActive }) => isActive ? 'border-b-2 pb-2 text-cyan-500 border-cyan-500' : ''} to='/colleges'>Colleges</NavLink></p>
          <p className='text-lg hover:text-cyan-500 transition-all'>{user && <NavLink className={({ isActive }) => isActive ? 'border-b-2 pb-2 text-cyan-500 border-cyan-500' : ''} to='/admission'>Admission</NavLink>}</p>
          <p className='text-lg hover:text-cyan-500 transition-all'>{user && <NavLink className={({ isActive }) => isActive ? 'border-b-2 pb-2 text-cyan-500 border-cyan-500' : ''} to='/myCollege'>My College</NavLink>}</p>
          
          <div className="form-control grid grid-cols-2">
               <input onChange={(e) => setSearchText(e.target.value)} type="text" placeholder="Search" className="input input-bordered w-[150px] md:w-auto" />
               <input onClick={handleSearch} className='button w-[100px]' type="submit" value="Search" />
          </div>
          <p className='text-lg hover:text-cyan-500 transition-all '> {
               user ?
                    <NavLink onClick={() => logOut()}><span className='flex items-center gap-1'>
                         <span>LogOut</span> <BiArrowFromLeft /></span></NavLink>
                    :
                    <NavLink className={({ isActive }) => isActive ? 'border-b-2 pb-2 text-cyan-500 border-cyan-500' : ''} to='/login'>Login</NavLink>

          }</p>



     </div>

     return (
          <div className='fixed md:bg-green-100 font-semibold pt-4 w-full z-10 opacity-80'>
               <div className="navbar container p-0">
                    <div className="navbar-start">
                         <div className="dropdown">
                              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                              </label>
                              <ul tabIndex={0} className="menu text-black menu-sm dropdown-content mt-3 p-2 shadow bg-black rounded-box w-52 md:flex items-center">
                                   {navItem}
                              </ul>
                         </div>
                         <Link to='/' className="text-xl  flex items-center cursor-pointer">
                              <BsBook className='w-10 text-cyan-500' /> <span className='text-cyan-500 ms-2'>College Booking</span>
                         </Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                         <ul className="menu menu-horizontal items-center px-1">
                              {navItem}
                         </ul>
                    </div>
                    <div className="navbar-end">
                         <div className="avatar">
                              <div className=" w-[50px] rounded-full ">
                                   {user ? <img title={user?.displayName} src={user?.photoURL} /> : <RxAvatar className='text-black cursor-pointer' size={40} />}
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Navbar;
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FiGithub } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import { updateProfile } from 'firebase/auth';
import { AuthContext } from '../../Componet/AuthProvider/AuthProvider';

const Login = () => {
    const { loginUser, googleUser, githubUser, } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation()
    const pathName = location.state?.from?.pathname || '/'
    console.log(pathName);


    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        if ((email, password)) {
            loginUser(email, password)
                .then((result) => {
                    console.log(result.user);
                    navigate('/')
                })
                .catch(error => {
                    console.log(error.message);
                })
        }
    }


    const handleGoogleUser = () => {
        googleUser()
            .then((result) => {
                console.log(result.user)
                navigate(pathName)
            })
            .catch(error => {
                console.log(error.message);
            })
    }

    const handleGithubUser = () => {
        githubUser()
            .then(result => {
                console.log(result.user);
                navigate(pathName)
            })
            .catch(error => {
                console.log(error.message);
            })
    }


    return (
        <div>
            <div className="hero min-h-screen mt-5 mb-3">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold text-center">Please Login</h1>

                    </div>
                    <div className="card flex-shrink-0 mx-auto md:w-[450px] w-80 transition-transform hover:scale-105 max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered input-info" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered input-info" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-[#52FFBF] hover:bg-[#52FFBF]">Login</button>
                            </div>
                            <p>Are you new user? <Link className='link font-semibold' to='/register'>Please Register</Link></p>
                            <div>
                                <button className='button w-full' onClick={handleGoogleUser}><span><FcGoogle /></span>Google</button>
                            </div>
                            <div>
                                <button className='button w-full' onClick={handleGithubUser}><span><FiGithub /></span>GitHub</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
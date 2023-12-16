import  { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiGithub } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import { updateProfile } from 'firebase/auth';
import { AuthContext } from '../../Componet/AuthProvider/AuthProvider';


const Register = () => {
    const { registerUser,updateUserProfile, googleUser, githubUser, setReload } = useContext(AuthContext);
    const navigate = useNavigate();

    const [error, setError] = useState('');



    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');
        const form = e.target;
        const name = form.name.value;
        const imgUrl = form.image.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, imgUrl);


        if (!/(?=.*[0-9])/.test(password)) {
            setError('password must one number');
            return
        }
        if (!/(?=.*[A-Z])/.test(password)) {
            setError('password must one uppercase');
            return
        }
        if (password.length < 6) {
            setError('password must be 6 character')
        }
        if (name, imgUrl, email, password) {
            registerUser(email, password)
                .then(result => {
                    updateUserProfile(name, imgUrl)
                        .then(() => {
                            setReload(Date.now())
                            navigate('/')
                    })
                })
                .catch(err => {
                    console.log(err.message);
                })
        }

    }

    const handleGoogleUser = () => {
        googleUser()
            .then((result) => {
                console.log(result.user)
                navigate('/')
            })
            .catch(error => {
                console.log(error.message);
            })
    }

    const handleGithubUser = () => {
        githubUser()
            .then(result => {
                console.log(result.user);
                navigate('/')
            })
            .catch(error => {
                console.log(error.message);
            })
    }



    return (
        <div>
            <div className="hero min-h-screen mt-10 mb-3">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold text-center">Please Register</h1>

                    </div>
                    <div className="card flex-shrink-0 mx-auto md:w-96 w-80 transition-transform hover:scale-105 max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="name" className="input input-bordered input-info" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">imgURL</span>
                                </label>
                                <input type="text" name='image' placeholder="ImgURl" className="input input-bordered input-info" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="email" className="input input-bordered input-info" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered input-info" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <p className='text-error'>{error}</p>
                            <div className="form-control mt-6">
                                <button className="btn btn-info">Register</button>
                            </div>
                            <p>You have already account? <Link className='link link-info' to='/login'>Please Login</Link></p>
                            <div>
                                <button className='button w-full ' onClick={handleGoogleUser}><span><FcGoogle/></span>Google</button>
                            </div>
                            <div>
                                <button className='button w-full' onClick={handleGithubUser}><span><FiGithub/></span>GitHub</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
import React, { useContext, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import img from '../../../public/assets/images/login/login.svg'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { signInUser, signInWithGoogle,signInWithGithub } = useContext(AuthContext);
  // const [data,setData] = useState([]);
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const pass = form.password.value;
        if(pass.length<6){
            alert("password must be more that 6 charecter !!")
        }
        console.log(email,pass);
        signInUser(email, pass)
            .then((userCredential) => {
                const user = userCredential.user;
                if (user) {
                    setShowModal(true);
                    setTimeout(() => {
                        navigate('/');
                        setShowModal(false);

                    }, 1500);

                }
                e.target.reset();
            })
            .catch(error => {
                alert("Login Failed!!")
                console.log(error.message)
            });

    };
    return (
        <div className='flex flex-col-reverse lg:flex-row mx-4 my-2 lg:mx-24 gap-8 justify-around'>
            <div className='lg:w-1/2'>
                <img src={img} alt="" />
            </div>
            <div className='lg:w-1/2'>
                <p className='text-3xl font-bold text-center my-4'>Log in</p>
                <form  className='shadow-lg border p-12 rounded-lg' onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block clr text-sm font-semibold mb-2" htmlFor="email">Email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            className="appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:border-cyan-700"
                            placeholder="Enter your email"
                            
                            
                            required
                        />
                    </div>
                    <div className="mb-4 relative">
                        <label className="block clr text-sm font-semibold mb-2" htmlFor="password">Password</label>
                        <input
                            type={showPassword ? 'text' : 'password'}
                            name="password"
                            id="password"
                            className="appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:border-cyan-700 pr-10"
                            placeholder="Enter your password"
                           
                            required
                        />
                        <button
                            type="button"
                            className="absolute top-9 right-0 flex items-center justify-center px-3 bg-transparent focus:outline-none"
                            onClick={togglePasswordVisibility}
                        >
                            {showPassword ? <FaEyeSlash className="h-5 w-5 text-black" /> : <FaEye className="h-5 w-5 text-black" />}
                        </button>
                    </div>
                    <button
                        type="submit"
                        className="w-full text-white bg font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Login
                    </button>
                    <p className='text-gray-700 text-sm py-2 '>Don't have any account? please <Link className='underline text-blue-600' to="/register">register</Link> </p>
                    <div className="text-black flex text-3xl items-center justify-center gap-2 pt-2 border-t-2 mt-6">
                        <div onClick={signInWithGoogle} className='hover:bg-gray-200 p-2 cursor-pointer rounded-full'><FcGoogle /> </div>
                        <p className='text-lg font-bold'>or</p>
                        <div onclick={signInWithGithub} className='hover:bg-gray-200 p-2 cursor-pointer rounded-full'><FaGithub /></div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
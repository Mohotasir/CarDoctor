
import img from '../../../public/assets/images/login/login.svg'
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { updateProfile } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const { createUser } = useContext(AuthContext);
    const [viewModal, setShowModal] = useState(false);
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const name = form.name.value;
        const photoURL = form.photoURL.value;


        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        if (!passwordRegex.test(password)) {
            alert("password must be at least one uppercase,one lowerCase and 6 characters")
        }
        createUser(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                return updateProfile(user, {
                    displayName: name,
                    photoURL: photoURL
                });
            })
            .then(result => {
                setShowModal(true);
                setTimeout(() => {
                    navigate('/');
                    setShowModal(false);

                }, 1000);


                e.target.reset();
            })
            .catch(error => {
                console.log(error.message);
            })

    };
    return (
        <div className='flex flex-col-reverse lg:flex-row mx-4 my-2 lg:mx-24 gap-8 justify-around'>
            <div className='lg:w-1/2'>
                <img src={img} alt="" />
            </div>
            <div className='lg:w-1/2'>
                <p className='text-3xl font-bold text-center my-4'>Register</p>
                <form className='shadow-lg border p-12 rounded-lg' onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block g-color text-sm font-bold mb-2" htmlFor="name">Name</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            className="appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:border-cyan-700"
                            placeholder="Enter your name"
                           
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block g-color text-sm font-bold mb-2" htmlFor="email">Email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            className="appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:border-cyan-700"
                            placeholder="Enter your email"
                           
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block g-color text-sm font-bold mb-2" htmlFor="photoURL">Photo URL</label>
                        <input
                            type="text"
                            name="photoURL"
                            id="photoURL"
                            className="appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:border-cyan-700"
                            placeholder="Enter your photo URL"
                            
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block g-color text-sm font-bold mb-2" htmlFor="password">Password</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            className="appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:border-cyan-700"
                            placeholder="Enter your password"
                          
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg  font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Register
                    </button>
                    <div className="mt-4 text-center">
                    <p className="text-gray-700 text-sm">Already have an account? <Link to="/login" className="text-cyan-500">Login here</Link></p>
                </div>
                </form>
               
            </div>
            {
                viewModal && (
                    <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
                        <div className="bg-white flex flex-col items-center justify-center p-5 md:p-12 rounded-lg shadow-lg text-black">
                            <div className='py-2 text-5xl t-clr font-semibold'><IoMdCheckmarkCircleOutline /></div>
                            <p className="text-2xl t-clr font-semibold mb-2">Congratulations!!</p>
                            <p className='text-sm'>You have successfully registered</p>
                        </div>
                    </div>
                )}
        </div>

    );
};

export default Signup;
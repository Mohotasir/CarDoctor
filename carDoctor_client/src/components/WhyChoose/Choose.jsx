import React from 'react';
import Title from '../Title/Title';
import img1 from '../../../public/assets/chooseus/Group 71.svg'
import img2 from '../../../public/assets/chooseus/Group 38729.svg'
import img3 from '../../../public/assets/chooseus/Group 38730.svg'
import img4 from '../../../public/assets/chooseus/Group 38731.svg'
import img5 from '../../../public/assets/chooseus/Group.svg'
import img6 from '../../../public/assets/chooseus/Wrench (1).svg'
const Choose = () => {
    return (
        <div className='my-24'>
            <Title
            menu="Core features"
            heading="Why Choose Us"
            para="the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "
            ></Title>
            <div className='grid gap-4 grid-cols-3 md:grid-cols-6 mt-8'>
                <div className='p-6 bg-white hover:bg-black hover:text-white rounded-lg border text-center flex flex-col items-center justify-center'>
                    <img className='' src={img1} alt="" />
                    <h1>Expert Team</h1>
                </div>
                <div className='p-4 bg-white hover:bg-black hover:text-white rounded-lg border text-center flex flex-col items-center justify-center'>
                    <img className='bg rounded-lg' src={img2} alt="" />
                    <h1>Expert Team</h1>
                </div>
                <div className='p-4 bg-white hover:bg-black hover:text-white rounded-lg border text-center flex flex-col items-center justify-center'>
                    <img className='' src={img3} alt="" />
                    <h1>Expert Team</h1>
                </div>
                <div className='p-4 bg-white hover:bg-black hover:text-white rounded-lg border text-center flex flex-col items-center justify-center'>
                    <img className='' src={img4} alt="" />
                    <h1>Expert Team</h1>
                </div>
                <div className='p-4 bg-white hover:bg-black hover:text-white rounded-lg border text-center flex flex-col items-center justify-center'>
                    <img className='' src={img5} alt="" />
                    <h1>Expert Team</h1>
                </div>
                <div className='p-4 bg-white hover:bg-black hover:text-white rounded-lg border text-center flex flex-col items-center justify-center'>
                    <img className='' src={img6} alt="" />
                    <h1>Expert Team</h1>
                </div>
                
            </div>
        </div>
    );
};

export default Choose;
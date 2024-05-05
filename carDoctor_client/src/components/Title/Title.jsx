import React from 'react';

const Title = ({menu,heading,para,}) => {
    return (
        <div className='flex flex-col items-center justify-center'>
            <p className='text-lg font-bold clr'>{menu}</p>
            <h1 className='text-4xl font-bold my-2'>{heading}</h1>
            <p className='text-gray-500 md:w-[50%] mx-auto text-center'>{para}</p>
        </div>
    );
};

export default Title;
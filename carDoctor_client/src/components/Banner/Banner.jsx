import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './banner.css'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Banner = () => {
    return (
        <>
            <Swiper
                
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper rounded-lg"
            >

                <SwiperSlide className='bg-cover  bg-no-repeat' style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 1)), url('../../../public/assets/images/homeCarousel/slide1.webp')` }}>
                    <div className='md:w-[50%] md:ml-24'>
                        <h1 className='text-4xl md:text-6xl font-bold text-white'>Affordable Price For Car Servicing</h1>
                        <p className='text-lg   py-3 font-light text-white'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='flex gap-4 '>
                            <button className='btn bg-yellow-400 outline-none border-none'>Discover More</button>
                            <button className='btn btn-outline btn-warning '>Latest Project</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='' style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 1)), url('../../../public/assets/images/homeCarousel/2.jpg')` }}>
                <div className='md:w-[50%] md:ml-24'>
                        <h1 className='text-4xl md:text-6xl font-bold text-white'>Affordable Price For Car Servicing</h1>
                        <p className='text-lg   py-3 font-light text-white'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='flex gap-4 '>
                            <button className='btn bg-yellow-400 outline-none border-none'>Discover More</button>
                            <button className='btn btn-outline btn-warning '>Latest Project</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='' style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 1)),url('../../../public/assets/images/homeCarousel/3.jpg')` }}>
                <div className='md:w-[50%] md:ml-24'>
                        <h1 className='text-4xl md:text-6xl font-bold text-white'>Affordable Price For Car Servicing</h1>
                        <p className='text-lg   py-3 font-light text-white'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='flex gap-4 '>
                            <button className='btn bg-yellow-400 outline-none border-none'>Discover More</button>
                            <button className='btn btn-outline btn-warning '>Latest Project</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='' style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 1)), url('../../../public/assets/images/homeCarousel/1.jpg')` }}>
                <div className='md:w-[50%] md:ml-24'>
                        <h1 className='text-4xl md:text-6xl font-bold text-white'>Affordable Price For Car Servicing</h1>
                        <p className='text-lg   py-3 font-light text-white'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='flex gap-4 '>
                            <button className='btn bg-yellow-400 outline-none border-none'>Discover More</button>
                            <button className='btn btn-outline btn-warning '>Latest Project</button>
                        </div>
                    </div>
                </SwiperSlide>



            </Swiper>
        </>
    );
};

export default Banner;
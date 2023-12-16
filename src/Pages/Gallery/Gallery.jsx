import { Swiper, SwiperSlide } from "swiper/react";
// import {  Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import './styles.css'

import group1 from './images/group1.jpg'
import group2 from './images/group2.jpg'
import group3 from './images/group3.jpg'
import group4 from './images/group4.jpg'
import group5 from './images/group5.jpg'
import group6 from './images/group6.jpg'
import group7 from './images/group7.jpg'
import group8 from './images/group8.jpg'

const Gallery = () => {
    return (
        <section className="">
            <h1 className="text-4xl text-bold text-center text-green-500">Gallery</h1>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                
                pagination={{
                    clickable: true,
                }}
                // modules={[Pagination]}
                className="mySwiper my-20"
            >
                <SwiperSlide>
                    <img src={group1} alt="" />
                    <h2 className="absolute card-hover text-lg text-gray-300 bottom-2">University of Oxford</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={group2} alt="" />
                    <h2 className="absolute card-hover text-lg text-gray-200 bottom-2">Harvard University</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={group6} alt="" />
                    <h2 className="absolute card-hover text-lg text-gray-200 bottom-2">University of Cambridge </h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={group4} alt="" />
                    <h2 className="absolute card-hover text-lg text-gray-200 bottom-2">University of Tokyo</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={group5} alt="" />
                    <h2 className="absolute card-hover text-lg text-gray-200 bottom-2"> University of ETH Zurich</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={group3} alt="" />
                    <h2 className="absolute card-hover text-lg text-gray-200 bottom-2">University of Toronto</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={group7} alt="" />
                    <h2 className="absolute card-hover text-lg text-gray-200 bottom-2">National University of Singapore</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={group8} alt="" />
                    <h2 className="absolute card-hover text-lg text-gray-200 bottom-2">University of Melbourne</h2>
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Gallery;
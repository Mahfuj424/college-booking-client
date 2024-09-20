// import {  Pagination } from "swiper";



import group2 from "./images/group2.jpg";
import group3 from "./images/group3.jpg";
import group4 from "./images/group4.jpg";
import group5 from "./images/group5.jpg";
import group6 from "./images/group6.jpg";
import group7 from "./images/group7.jpg";
import group8 from "./images/group8.jpg";
import Marquee from "react-fast-marquee";

const Gallery = () => {
  return (
    <div>
      <h1 className="text-4xl  text-center mb-10 font-semibold">Our College Gallery</h1>
      <Marquee speed={100} pauseOnHover={true} className="flex gap-5">
        
        <div>
          <img src={group2} alt="" />
          <h2 className="absolute card-hover text-4xl font-bold text-gray-200 bottom-2">
            Harvard University
          </h2>
        </div>
        <div className="mx-5">
          <img src={group6} alt="" />
          <h2 className="absolute card-hover text-4xl font-bold text-gray-200 bottom-2">
            University of Cambridge{" "}
          </h2>
        </div>
        <div>
          <img src={group4} alt="" />
          <h2 className="absolute card-hover text-4xl font-bold text-gray-200 bottom-2">
            University of Tokyo
          </h2>
        </div>
        <div  className="mx-5">
          <img src={group5} alt="" />
          <h2 className="absolute card-hover text-4xl font-bold text-gray-200 bottom-2">
            {" "}
            University of ETH Zurich
          </h2>
        </div>
        <div>
          <img src={group3} alt="" />
          <h2 className="absolute card-hover text-4xl font-bold text-gray-200 bottom-2">
            University of Toronto
          </h2>
        </div>
        <div  className="mx-5">
          <img src={group7} alt="" />
          <h2 className="absolute card-hover text-4xl font-bold text-gray-200 bottom-2">
            National University of Singapore
          </h2>
        </div>
        <div>
          <img src={group8} alt="" />
          <h2 className="absolute card-hover text-4xl font-bold text-gray-200 bottom-2">
            University of Melbourne
          </h2>
        </div>
      </Marquee>
    </div>
  );
};

export default Gallery;

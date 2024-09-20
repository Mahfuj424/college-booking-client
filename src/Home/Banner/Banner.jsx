import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import img4 from "../Banner/images/banner2.jpeg";
import img1 from "../Banner/images/banner1.jpg";
import img6 from "../Banner/images/banner3.jpg";

const Banner = () => {
  return (
    <div className="h-screen">
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        interval={3000}
      >
        <div className="relative h-screen">
          <img
            className="object-cover h-screen w-full"
            src={img4}
            alt="College Banner 1"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white">
            <h2 className="text-4xl font-bold">Welcome to Our College</h2>
            <p className="mt-4 text-lg">
              Excellence in education and student life.
            </p>
          </div>
        </div>
        <div className="relative h-screen">
          <img
            className="object-cover h-screen w-full"
            src={img1}
            alt="College Banner 2"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white">
            <h2 className="text-4xl font-bold">Advanced Research Programs</h2>
            <p className="mt-4 text-lg">
              Pioneering research in various fields of science and technology.
            </p>
          </div>
        </div>
        <div className="relative h-screen">
          <img
            className="object-cover h-screen w-full"
            src={img6}
            alt="College Banner 3"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white">
            <h2 className="text-4xl font-bold">Join Our Vibrant Community</h2>
            <p className="mt-4 text-lg">
              Engage in academic, social, and cultural activities.
            </p>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Slides = () => {
  const imagesArr = [
    "../src/assets/first.png",
    "../src/assets/second.png",
    "../src/assets/third.png",
    "../src/assets/fourth.png",
    "../src/assets/fifth.png",
  ];
  const [slideIndex, setSlideIndex] = useState(0);
  useEffect(() => {
    const timer = setTimeout(() => {
      setSlideIndex((prevIndex) =>
        prevIndex + 1 === imagesArr.length ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearTimeout(timer);
  }, [slideIndex]);

  return (
    <div className="text-center roboto-font h-screen md:flex md:items-center md:mb-0">
      <div className="relative w-full h-[calc(100vh-100px)] overflow-hidden flex flex-col items-center justify-around sm:flex-row sm:h-fit sm:mt-20 md:mt-0">
        <div className="text-center text-balance sm:w-[50%] sm:text-left sm:flex sm:flex-col">
          <h1 className="text-primary text-[32px]">
            Drive in Style, Arrive with Class.
          </h1>
          <p className="text-secondary mt-4 text-2xl leading-tight">
            Choose from our fleet of premium cars and enjoy comfort,
            reliability, and elegance — wherever your journey takes you.
          </p>
          <Link
            to="/book"
            className="mt-8 btn-primary hidden sm:inline sm:w-fit"
          >
            Book Now
          </Link>
        </div>
        <img
          className="h-[250px] max-h-[350px] mt-6 w-full object-contain sm:w-[50%]"
          src={imagesArr[slideIndex]}
        />

        <Link to="/book" className="mt-8 btn-primary sm:hidden">
          Book Now
        </Link>
      </div>
    </div>
  );
};

export default Slides;

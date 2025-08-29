import React from "react";
import bg from "../src/assets/testimonial-chopper.png";

const Testimonials = () => {
  return (
    <div className="text-center mb-12">
      <h3 className="text-secondary text-2xl">Testimonials</h3>
      <div className="w-full p-6 flex gap-2 justify-around items-center">
        <div
          style={{
            backgroundImage: `url(${bg})`,
          }}
          className="h-[100px] min-w-[100px] w-[100px] bg-cover bg-center rounded-[50%] mr-6 self-center border-2"
        ></div>
        <p className="text-neutral-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
    </div>
  );
};

export default Testimonials;

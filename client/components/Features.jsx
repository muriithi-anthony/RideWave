import React from "react";
import { Link } from "react-router-dom";

const Features = () => {
  return (
    <div className="bg-base-200 rounded-md text-center text-neutral-500 px-6">
      <div className="py-6 border-b-2">
        <h3 className="text-secondary  text-[24px]">Features</h3>
        <ol className="flex flex-col gap-2 pt-6">
          <li>Delivery services</li>
          <li>Insurance included</li>
          <li>24/7 Support</li>
        </ol>
      </div>

      <div className="flex flex-col py-6">
        <p className="text-neutral-500 text-base">
          Book your ride with us today.
        </p>
        <Link to="/book" className="mt-6 mx-auto btn-primary w-[50%]">
          Book now
        </Link>
      </div>
    </div>
  );
};

export default Features;

import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="text-neutral-500 mt-6 p-2">
      <h3 className="text-primary bebas-font text-2xl">RideWave</h3>
      <div className="flex mt-6">
        <div className="w-[50%]">
          <p>Quick links</p>
          <div className="flex flex-col gap-2 mt-2">
            <Link to="/">Home</Link>
            <Link to="/book">Bookings</Link>
            <Link to="/fleet">Fleet</Link>
            <Link to="/about">About</Link>
          </div>
        </div>
        <div className="flex flex-col w-[50%]">
          <p>Contact us</p>
          <div className="flex flex-col gap-2 mt-2">
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                className="w-full p-2 rounded-md outline-none border focus:text-neutral-400 focus:border-neutral-400 focus:border-2"
                placeholder="example@gmail.com"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="text">Message</label>
              <textarea
                id="text"
                rows={3}
                cols={20}
                className="border rounded-md focus:text-neutral-400 focus:border-neutral-400 focus:border-2"
              ></textarea>
              <button className="text-info btn-accent - mt-2">Send</button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center mt-6 gap-2">
        <div>
          <Link className="mr-2 pr-2 border-r-2">Terms of services</Link>
          <Link>Privacy policy</Link>
        </div>
        <p>© {new Date().getFullYear()} RideWave Co.</p>
        <p> All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;

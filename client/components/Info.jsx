import { DollarSignIcon } from "lucide-react";
import React from "react";

const Info = () => {
  return (
    <div className=" pt-4 h-auto max-h-screen bg-base-200 rounded-md flex w-full flex-col text-neutral-500 sm:flex-row mb-12">
      <div>
        <h3 className="text-secondary text-[24px] text-center">Key Benefits</h3>
        <ol className="text-base mt-4 px-2 text-center text-balance flex flex-col gap-2">
          <li>
            Affordable pricing - Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Velit, excepturi.
          </li>
          <li>
            Wide fleet - Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Velit, excepturi.
          </li>
          <li>
            Easy boking - Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Velit, excepturi.
          </li>
        </ol>
      </div>
      <div className="mt-6 sm:my-12 sm:flex sm:flex-col sm:mt-0 sm:border-l-2">
        <h3 className="text-secondary text-[24px] text-center">How it works</h3>
        <ul className="text-base mt-4 px-2 text-center text-balance flex flex-col gap-2">
          <li>
            Choose a car - Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Velit, excepturi.
          </li>
          <li>
            Pick your dates - Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Velit, excepturi.
          </li>
          <li>
            Confirm and drive - Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Velit, excepturi.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Info;

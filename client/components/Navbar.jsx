import React, { useState } from "react";
import { Menu, MoonIcon, SunIcon, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = ({ isDark, setIsDark }) => {
  const [isHamburgerVisible, setIsHamburgerVisible] = useState(true);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <div className="w-full flex text-[32px] justify-between sm:text-[40px] md:text-[48px]">
      <div className="bebas-font text-primary">RideWave</div>
      <div className="hidden md:flex md:text-[32px] md:gap-10 md:items-center">
        <Link
          className={`${
            isActive("/") ? "text-primary font-semibold" : "text-neutral-500"
          } hover:text-[#88c0d0] hover:font-semibold`}
          to="/"
          onClick={() => setIsHamburgerVisible(true)}
        >
          <div>Home</div>
        </Link>
        <Link
          className={`${
            isActive("/fleet")
              ? "text-primary font-semibold"
              : "text-neutral-500"
          } hover:text-[#88c0d0] hover:font-semibold`}
          to="/"
          onClick={() => setIsHamburgerVisible(true)}
        >
          <div>Fleet</div>
        </Link>
        <Link
          className={`${
            isActive("/pricing")
              ? "text-primary font-semibold"
              : "text-neutral-500"
          } hover:text-[#88c0d0] hover:font-semibold`}
          to="/"
          onClick={() => setIsHamburgerVisible(true)}
        >
          <div>Pricing</div>
        </Link>
        <Link
          className={`${
            isActive("/contact")
              ? "text-primary font-semibold"
              : "text-neutral-500"
          } hover:text-[#88c0d0] hover:font-semibold`}
          to="/"
          onClick={() => setIsHamburgerVisible(true)}
        >
          <div>Contact</div>
        </Link>
      </div>
      <div className="text-neutral-500 flex items-center justify-center gap-4">
        <button onClick={() => setIsDark((prev) => !prev)}>
          {isDark ? (
            <SunIcon className="size-8 hover:text-[#88c0d0] hover:cursor-pointer sm:size-10" />
          ) : (
            <MoonIcon className="size-8 hover:text-[#88c0d0] hover:cursor-pointer sm:size-10" />
          )}
        </button>
        <button
          className="md:hidden"
          onClick={() => setIsHamburgerVisible((prev) => !prev)}
        >
          {isHamburgerVisible && (
            <Menu className="size-8 hover:text-[#88c0d0] hover:cursor-pointer md:size-10" />
          )}
        </button>
        {!isHamburgerVisible && (
          <nav className="absolute z-50 bg-base-200 h-[200px] w-[150px] top-0 right-0 flex flex-col p-2 m-2 text-base justify-center md:hidden">
            <button
              onClick={() => setIsHamburgerVisible(true)}
              className="absolute z-30 top-0 right-0 "
            >
              <X className="size-8" />
            </button>
            <div>
              <Link
                className={`${
                  isActive("/")
                    ? "text-primary font-semibold"
                    : "text-neutral-500"
                } hover:text-[#88c0d0] hover:font-semibold`}
                to="/"
                onClick={() => setIsHamburgerVisible(true)}
              >
                <div>Home</div>
              </Link>
              <Link
                className={`${
                  isActive("/browse-cars")
                    ? "text-primary font-semibold"
                    : "text-neutral"
                } hover:text-[#88c0d0] hover:font-semibold`}
                to="/"
                onClick={() => setIsHamburgerVisible(true)}
              >
                <div>Browse Cars</div>
              </Link>
              <Link
                className={`${
                  isActive("/pricing")
                    ? "text-primary font-semibold"
                    : "text-neutral"
                } hover:text-[#88c0d0] hover:font-semibold`}
                to="/"
                onClick={() => setIsHamburgerVisible(true)}
              >
                <div>Pricing</div>
              </Link>
              <Link
                className={`${
                  isActive("/contact")
                    ? "text-primary font-semibold"
                    : "text-neutral"
                } hover:text-[#88c0d0] hover:font-semibold`}
                to="/"
                onClick={() => setIsHamburgerVisible(true)}
              >
                <div>Contact</div>
              </Link>
            </div>
            <div className="border-t-2 mt-2 pt-2">
              <Link
                className={`${
                  isActive("/about")
                    ? "text-primary font-semibold"
                    : "text-neutral"
                } hover:text-[#88c0d0] hover:font-semibold`}
                to="/"
                onClick={() => setIsHamburgerVisible(true)}
              >
                <div>About</div>
              </Link>
              <Link
                className={`${
                  isActive("/faq")
                    ? "text-primary font-semibold"
                    : "text-neutral"
                } hover:text-[#88c0d0] hover:font-semibold`}
                to="/"
                onClick={() => setIsHamburgerVisible(true)}
              >
                <div>FAQ</div>
              </Link>
              <Link
                className={`${
                  isActive("/auth")
                    ? "text-primary font-semibold"
                    : "text-neutral"
                } hover:text-[#88c0d0] hover:font-semibold`}
                to="/"
                onClick={() => setIsHamburgerVisible(true)}
              >
                <div>Login / Register</div>
              </Link>
            </div>
          </nav>
        )}
      </div>
    </div>
  );
};

export default Navbar;

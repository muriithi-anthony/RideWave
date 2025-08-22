import React, { useState } from "react";
import { Menu, MoonIcon, SunIcon, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = ({ isDark, setIsDark }) => {
  const [isHamburgerVisible, setIsHamburgerVisible] = useState(true);
  const location = useLocation();
  console.log(location.pathname);

  const isActive = (path) => location.pathname === path;

  return (
    <div className="w-full flex text-primary text-[32px] justify-between">
      <div>RideWave</div>

      <div className="text-neutral-500 flex items-center justify-center gap-4">
        <button onClick={() => setIsDark((prev) => !prev)}>
          {isDark ? (
            <SunIcon className="size-8 hover:text-[#88c0d0] hover:cursor-pointer" />
          ) : (
            <MoonIcon className="size-8 hover:text-[#88c0d0] hover:cursor-pointer" />
          )}
        </button>
        <button onClick={() => setIsHamburgerVisible((prev) => !prev)}>
          {isHamburgerVisible && (
            <Menu className="size-8 hover:text-[#88c0d0] hover:cursor-pointer" />
          )}
        </button>
        {!isHamburgerVisible && (
          <nav className="absolute bg-base-200 h-75 w-50 top-0 right-0 flex flex-col p-2 m-2 text-base justify-center">
            <button
              onClick={() => setIsHamburgerVisible(true)}
              className="absolute z-30 top-0 right-0 "
            >
              <X className="size-8" />
            </button>
            <div>
              <Link
                className={`${
                  isActive("/") ? "text-primary font-semibold" : "text-neutral"
                }`}
                to={"/"}
                onClick={() => setIsHamburgerVisible(true)}
              >
                <div>Home</div>
              </Link>
              <Link
                className={`${
                  isActive("/browse-cars")
                    ? "text-primary font-semibold"
                    : "text-neutral"
                }`}
                to={"/"}
                onClick={() => setIsHamburgerVisible(true)}
              >
                <div>Browse Cars</div>
              </Link>
              <Link
                className={`${
                  isActive("/pricing")
                    ? "text-primary font-semibold"
                    : "text-neutral"
                }`}
                to={"/"}
                onClick={() => setIsHamburgerVisible(true)}
              >
                <div>Pricing</div>
              </Link>
              <Link
                className={`${
                  isActive("/contact")
                    ? "text-primary font-semibold"
                    : "text-neutral"
                }`}
                to={"/"}
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
                }`}
                to={"/"}
                onClick={() => setIsHamburgerVisible(true)}
              >
                <div>About</div>
              </Link>
              <Link
                className={`${
                  isActive("/faq")
                    ? "text-primary font-semibold"
                    : "text-neutral"
                }`}
                to={"/"}
                onClick={() => setIsHamburgerVisible(true)}
              >
                <div>FAQ</div>
              </Link>
              <Link
                className={`${
                  isActive("/auth")
                    ? "text-primary font-semibold"
                    : "text-neutral"
                }`}
                to={"/"}
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

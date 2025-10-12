import React from "react";
import { assets } from "../assets/assets";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const navigate = useNavigate();

  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(true);

  return (
    <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-">
      <img
        className="w-44 cursor-pointer"
        src="https://cdn.prod.website-files.com/63e56114746188c54e2936e0/640f0a97221c6ef017a17057_Screen_Shot_2022-04-12_at_10.57.20_AM.png"
        alt=""
      />
      <ul className="hidden md:flex items-start gap-5 font-medium ">
        <NavLink to={"/"}>
          <li className="py-1">Home</li>
          <hr className="border-none outline-none h-0.5 bg-blue-600 w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to={"/doctors"}>
          <li className="py-1">All Doctors</li>
          <hr className="border-none outline-none h-0.5 bg-blue-600  w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to={"/about"}>
          <li className="py-1">About</li>
          <hr className="border-none outline-none h-0.5 bg-blue-600  w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to={"contact"}>
          <li className="py-1">Contact</li>
          <hr className="border-none outline-none h-0.5 bg-blue-600  w-3/5 m-auto hidden" />
        </NavLink>
      </ul>
      <div className="flex item-center gap-4">
        {token ? (
          <div className="relative group">
            {/* Profile Button */}
            <button className="flex items-center gap-2 cursor-pointer focus:outline-none">
              <img
                className="w-8 h-8 rounded-full border border-gray-300 group-hover:scale-105 transition-transform duration-200"
                src={assets.profile_pic}
                alt="Profile"
              />
              <img
                className="w-3 transition-transform duration-200 group-hover:rotate-180"
                src={assets.dropdown_icon}
                alt="Dropdown icon"
              />
            </button>

            {/* Fixed Dropdown Menu */}
            <div className="absolute right-0 top-full mt-2 bg-white shadow-lg rounded-xl w-48 py-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div className="flex flex-col text-sm text-gray-700 font-medium">
                <button
                  onClick={() => navigate("/my-profile")}
                  className="px-4 py-2 text-left hover:bg-gray-100 hover:text-black transition-colors"
                >
                  My Profile
                </button>
                <button
                  onClick={() => navigate("/my-appointments")}
                  className="px-4 py-2 text-left hover:bg-gray-100 hover:text-black transition-colors"
                >
                  My Appointments
                </button>
                <hr className="my-2 border-gray-200" />
                <button
                  onClick={() => setToken(false)}
                  className="px-4 py-2 text-left text-red-500 hover:bg-red-50 hover:text-red-600 transition-colors"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="bg-blue-600 text-white px-8 py-3 rounded-full font-light hidden md:block"
          >
            Login
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;

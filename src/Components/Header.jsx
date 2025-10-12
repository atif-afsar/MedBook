import React from "react";
import { assets } from "../assets/assets";

const Header = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-between bg-blue-600 rounded-2xl px-6 md:px-10 lg:px-20 py-10 md:py-16 overflow-hidden">
      {/* Left Section */}
      <div className="flex flex-col justify-center md:w-1/2 space-y-6 text-white">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
          Book Appointment <br /> With Trusted Doctors
        </h2>

        <div className="flex items-center gap-4">
          <img
            className="w-24 md:w-28"
            src={assets.group_profiles}
            alt="Doctors group"
          />
          <p className="text-sm md:text-base font-light leading-relaxed">
            Browse our extensive list of trusted doctors,{" "}
            <br className="hidden md:block" />
            choose your preferred one, and book your appointment easily.
          </p>
        </div>

        <a
          href="#speciality"
          className="flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-full font-medium w-fit hover:bg-blue-800 hover:text-white transition-all duration-300 shadow-md"
        >
          Book Appointment
          <img src={assets.arrow_icon} alt="Arrow" className="w-4 md:w-5" />
        </a>
      </div>

      {/* Right Section */}
      <div className="md:w-1/2 flex justify-center relative mb-8 md:mb-0">
        <img
          className="w-full md:max-w-md lg:max-w-lg rounded-xl object-cover"
          src={assets.header_img}
          alt="Doctor consultation"
        />
      </div>
    </div>
  );
};

export default Header;

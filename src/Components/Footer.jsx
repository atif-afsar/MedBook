import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-gray-800 md:mx-10 mt-40 rounded-xl shadow-sm">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-10 md:gap-14 p-6 md:p-10 text-sm leading-relaxed">
        {/* Left Section */}
        <div>
          <img
            className="w-40 mb-4"
            src="https://cdn.prod.website-files.com/63e56114746188c54e2936e0/640f0a97221c6ef017a17057_Screen_Shot_2022-04-12_at_10.57.20_AM.png"
            alt="MedBook Logo"
          />
          <p className="text-gray-600 text-justify">
            At MedBook, we prioritize patient convenience and comfort. Our
            platform enables users to search for healthcare providers, compare
            their qualifications and services, and book appointments with ease.
            We ensure a smooth and user-friendly experience, allowing patients
            to focus on their health while we handle the rest.
          </p>
        </div>

        {/* Center Section */}
        <div>
          <h3 className="font-semibold text-lg mb-3 text-gray-900">Company</h3>
          <ul className="space-y-2 text-gray-600">
            <li className="hover:text-blue-600 cursor-pointer">Home</li>
            <li className="hover:text-blue-600 cursor-pointer">About</li>
            <li className="hover:text-blue-600 cursor-pointer">Contact Us</li>
            <li className="hover:text-blue-600 cursor-pointer">Privacy Policy</li>
          </ul>
        </div>

        {/* Right Section */}
        <div>
          <h3 className="font-semibold text-lg mb-3 text-gray-900">Get in Touch</h3>
          <ul className="space-y-2 text-gray-600">
            <li>📞 +1 (123) 456-7890</li>
            <li>📧 atifafsar648@gmail.com</li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-200 py-4 text-center text-gray-500 text-xs">
        © 2025 <span className="font-semibold text-gray-700">MedBook</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

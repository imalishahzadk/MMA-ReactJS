import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-gray-700 to-black text-white p-6 sticky bottom-0">
      <h4 className="text-center">All Rights Reserved &copy; MMA</h4>
      <p className="text-center mt-3">
        <Link
          to="/about"
          className="text-white hover:text-yellow-300 hover:border-b border-yellow-300 px-2"
        >
          About
        </Link>
        |
        <Link
          to="/contact"
          className="text-white hover:text-yellow-300 hover:border-b border-yellow-300 px-2"
        >
          Contact
        </Link>
        |
        <Link
          to="/policy"
          className="text-white hover:text-yellow-300 hover:border-b border-yellow-300 px-2"
        >
          Privacy Policy
        </Link>
      </p>
    </div>
  );
};

export default Footer;

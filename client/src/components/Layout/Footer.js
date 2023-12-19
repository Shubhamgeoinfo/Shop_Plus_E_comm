import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className=" footer ">
      <p className="text-center mt-3">
        <h1> All rights reserved</h1>
        <Link to="/about">About us</Link>|<Link to="/contact">Contact us</Link>|
        <Link to="/policy">Privacy Policy</Link>
      </p>
    </div>
  );
};

export default Footer;
//
//

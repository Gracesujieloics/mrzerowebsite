import React from 'react';
import { BsLinkedin } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="bg-black pb-8 pt-16 ">
      <div className="container mx-auto text-center">
        <h3 className="text-2xl text-white font-bold mb-4">MRZERO</h3>
        <div className="flex justify-center space-x-4 mb-4">
          <a href="#" className="text-gold text-2xl hover:text-white">
           <BsLinkedin />
          </a>
          <a href="#" className="text-gold text-2xl hover:text-white">
          <FaFacebookSquare />

          </a><a href="#" className="text-gold text-2xl hover:text-white">
          <FaSquareInstagram />
          </a><a href="#" className="text-gold text-2xl hover:text-white">
          <FaTwitter />
          </a><a href="#" className="text-gold text-2xl hover:text-white">
          <IoLogoYoutube />
          </a>
        </div>
        <p className="text-gray-400 mb-2">
          420 West 14th St., Ste. 2NE New York, NY 10014
        </p>
        <p className="text-gray-400">Designed by TPD Design House</p>
      </div>
    </footer>
  );
};

export default Footer;
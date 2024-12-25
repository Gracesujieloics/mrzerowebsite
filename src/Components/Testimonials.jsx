import React from 'react'
import background from "../Assets/testimon.jpg";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import usericon from "../Assets/User_icon.png"



const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Mike Hudson",
      image: usericon,
      text: "Quick can manor smart money hopes worth too. Comfort produce husband boy her had hearing. Law others theirs passed but wishes.",
      social: { facebook: "#", twitter: "#", instagram: "#" },
      border: "border-yellow-500",
    },
    {
      id: 2,
      name: "Margo Perry",
      image: usericon,
      text: "He an thing rapid these after going drawn or. Timed she his law the spoil round defer. In surprise concerns informed betrayed he learning is ye.",
      social: { facebook: "#", twitter: "#", instagram: "#" },
      border: "border-blue-500",
    },
    {
      id: 3,
      name: "Mila Loo",
      image:usericon,
      text: "Quick can manor smart money hopes worth too. Comfort produce husband boy her had hearing. Law others theirs passed but wishes.",
      social: { facebook: "#", twitter: "#", instagram: "#" },
      border: "border-blue-500",
    },
    {
      id: 4,
      name: "Paul Larson",
      image: usericon,
      text: "He an thing rapid these after going drawn or. Timed she his law the spoil round defer. In surprise concerns informed betrayed he learning is ye.",
      social: { facebook: "#", twitter: "#", instagram: "#" },
      border: "border-yellow-500",
    },
  ];
  return (
    <div>
        <div
        style={{
          backgroundImage: `url(${background})`, 
          height: "500px",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover", 
          backgroundAttachment: "fixed", 
        }}
        className="flex items-center justify-center"
      >
        <h1 className="text-5xl text-white">MRZERO EVENT MANAGEMENT</h1>
      </div>
      <div className="grid grid-cols-1  gap-6 py-12 bg-gray-100 ">
      {/* Row 1 - Left Card */}
      <div className="flex justify-end">
        <div className="relative flex flex-col items-center p-6 mr-20 rounded-lg shadow-lg border-4 border-gold bg-white w-[500px] animate-slideInLeft">
          <img
            src={testimonials[0].image}
            alt={testimonials[0].name}
            className="w-24 h-24 rounded-full border-4 border-black -mt-12 mb-4"
          />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            {testimonials[0].name}
          </h3>
          <p className="text-gray-600 text-sm text-center">
            {testimonials[0].text}
          </p>
          <div className="flex gap-4 mt-4">
            <a href={testimonials[0].social.facebook} className="text-blue-600">
              <i className="fab fa-facebook-f"><FaFacebookSquare /></i>
            </a>
            <a href={testimonials[0].social.twitter} className="text-blue-400">
              <i className="fab fa-twitter">< FaTwitter/></i>
            </a>
            <a
              href={testimonials[0].social.instagram}
              className="text-pink-500"
            >
              <i className="fab fa-instagram"><FaSquareInstagram/></i>
            </a>
          </div>
        </div>
      </div>

      {/* Row 1 - Right Card */}
      <div className="flex justify-start">
        <div className="relative flex flex-col items-center ml-20 p-6 rounded-lg shadow-lg border-4 border-black bg-white w-[500px] animate-slideInRight">
          <img
            src={testimonials[1].image}
            alt={testimonials[1].name}
            className="w-24 h-24 rounded-full border-4 border-gold -mt-12 mb-4"
          />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            {testimonials[1].name}
          </h3>
          <p className="text-gray-600 text-sm text-center">
            {testimonials[1].text}
          </p>
          <div className="flex gap-4 mt-4">
            <a href={testimonials[1].social.facebook} className="text-blue-600">
              <i className="fab fa-facebook-f"><FaFacebookSquare /></i>
            </a>
            <a href={testimonials[1].social.twitter} className="text-blue-400">
              <i className="fab fa-twitter">< FaTwitter/></i>
            </a>
            <a
              href={testimonials[1].social.instagram}
              className="text-pink-500"
            >
              <i className="fab fa-instagram"><FaSquareInstagram/></i>
            </a>
          </div>
        </div>
      </div>

      {/* Row 2 - Left Card */}
      <div className="flex justify-end">
        <div className="relative flex flex-col items-center mr-20 p-6 rounded-lg shadow-lg border-4 border-gold bg-white w-[500px] animate-slideInLeft">
          <img
            src={testimonials[2].image}
            alt={testimonials[2].name}
            className="w-24 h-24 rounded-full border-4 border-black -mt-12 mb-4"
          />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            {testimonials[2].name}
          </h3>
          <p className="text-gray-600 text-sm text-center">
            {testimonials[2].text}
          </p>
          <div className="flex gap-4 mt-4">
            <a href={testimonials[2].social.facebook} className="text-blue-600">
              <i className="fab fa-facebook-f"><FaFacebookSquare /></i>
            </a>
            <a href={testimonials[2].social.twitter} className="text-blue-400">
              <i className="fab fa-twitter">< FaTwitter/></i>
            </a>
            <a
              href={testimonials[2].social.instagram}
              className="text-pink-500"
            >
              <i className="fab fa-instagram"><FaSquareInstagram/></i>
            </a>
          </div>
        </div>
      </div>

      {/* Row 2 - Right Card */}
      <div className="flex justify-start">
        <div className="relative flex flex-col items-center ml-20 p-6 rounded-lg shadow-lg border-4 border-black bg-white w-[500px] animate-slideInRight">
          <img
            src={testimonials[3].image}
            alt={testimonials[3].name}
            className="w-24 h-24 rounded-full border-4 border-gold -mt-12 mb-4"
          />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            {testimonials[3].name}
          </h3>
          <p className="text-gray-600 text-sm text-center">
            {testimonials[3].text}
          </p>
          <div className="flex gap-4 mt-4">
            <a href={testimonials[3].social.facebook} className="text-blue-600">
              <i className="fab fa-facebook-f"><FaFacebookSquare /></i>
            </a>
            <a href={testimonials[3].social.twitter} className="text-blue-400">
              <i className="fab fa-twitter">< FaTwitter/></i>
            </a>
            <a
              href={testimonials[3].social.instagram}
              className="text-pink-500"
            >
              <i className="fab fa-instagram"><FaSquareInstagram/></i>
            </a>
          </div>
        </div>
      </div>
    </div>
      
    </div>
  )
}

export default Testimonials

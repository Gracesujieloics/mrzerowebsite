import React, { useState, useEffect } from "react";
import image1 from "../Assets/carousel1.jpeg";
import image2 from "../Assets/carousel2.jpeg";
import image3 from "../Assets/carousel3.jpeg";

const images = [
  { id: 1, src: image1, alt: "B2B Events" },
  { id: 2, src: image2, alt: "Corporate Events" },
  { id: 3, src: image3, alt: "Consumer Events" },
];

const Platform = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval); 
  }, []);

  const getClassName = (index) => {
    const relativeIndex = (index - currentIndex + images.length) % images.length;

    
    if (relativeIndex === 0) {
      return "z-20 scale-110 opacity-100 transition-all duration-1000 ease-in-out"; 
    }
    if (relativeIndex === 1) {
      return "z-0 scale-100 opacity-50 transition-all duration-1000 ease-in-out translate-x-[360px]"; 
    }
    if (relativeIndex === 2) {
      return "z-0 scale-100 opacity-50 transition-all duration-1000 ease-in-out -translate-x-[360px]"; 
    }

    return "opacity-0"; 
  };

  return (
    <div className="relative h-[600px] w-full overflow-hidden bg-gray-50 flex flex-col items-center justify-center">
      
      <div className="text-center mb-5 mt-10">
        <p className="text-lg font-semibold text-gray-500">IN-PERSON | VIRTUAL | HYBRID EVENTS</p>
        <h2 className="text-3xl font-bold mt-2">One Event Platform, </h2>
        <h2 className="text-3xl font-bold mt-2">Powerful Solutions for All</h2>
      </div>
      
      <div className="relative flex items-center justify-center w-full h-full">
        {images.map((image, index) => (
          <div
            key={image.id}
            className={`absolute transition-transform duration-3000 ease-in-out h-[220px] w-[320px] rounded-md  overflow-hidden shadow-lg m-2 ${getClassName(index)}`}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center text-white text-lg font-semibold">
              {image.alt}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Platform;

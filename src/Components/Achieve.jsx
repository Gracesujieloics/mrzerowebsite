import React, { useState, useEffect, useRef } from 'react';
import 'tailwindcss/tailwind.css';
import achive1 from "../Assets/Images/image1.jpg";
import achive2 from "../Assets/Images/image2.jpg";
import achive3 from "../Assets/Images/image3.jpg";

const Achieve = () => {
  const [hoveredIndex, setHoveredIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const images = [achive1, achive2, achive3];
  const contents = [
    {
      title: "Create Memorable Events",
      description: "Create unforgettable experiences with personalized features, leaving a lasting impact on attendees."
    },
    {
      title: "Optimize Event Management",
      description: "Seamlessly organize events from start to finish, ensuring smooth operations and boosted productivity."
    },
    {
      title: "Maximize ROI",
      description: "Optimize event outcomes with strategic planning and enhanced attendee experiences, ensuring maximum return on investment."
    }
  ];

  const contentRef = useRef(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  useEffect(() => {
    if (!isHovered) {
      const intervalId = setInterval(() => {
        setHoveredIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000); 

      return () => clearInterval(intervalId);
    }
  }, [isHovered, images.length]);

  return (
    <div className="container mx-auto p-6 sm:p-8 lg:p-12">
      <div className="text-center mb-10 mt-8">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">Achieve All Your Goals in One Place</h1>
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-center">
        <div className="w-full lg:w-1/2 p-4 relative overflow-hidden" style={{ height: contentRef.current?.clientHeight || 'auto' }}>
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Display ${index}`}
              className={`absolute top-0 left-0 w-full h-full object-cover transition-transform duration-1000 transform-gpu ${hoveredIndex === index ? 'translate-x-0' : 'translate-x-full'}`}
              style={{ transform: hoveredIndex === index ? 'translateX(0)' : 'translateX(100%)' }}
            />
          ))}
        </div>
        <div ref={contentRef} className="w-full lg:w-1/2 p-4 space-y-6">
          {contents.map((content, index) => (
            <div
              key={index}
              className={`p-4 border rounded shadow-lg cursor-pointer transition-all duration-1000 transform ${hoveredIndex === index ? 'border-gold border-2 shadow-2xl scale-105' : 'border-gray-300'}`}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              style={{
                background: hoveredIndex === index ? 'white' : 'transparent',
              }}
            >
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold">{content.title}</h2>
              <p className="mt-2 text-gray-600 text-sm sm:text-base lg:text-lg">
                {content.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="text-center mt-8">
        <button className="px-6 py-2 bg-black text-white font-semibold rounded hover:bg-gray-700 transition-colors duration-300">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Achieve;

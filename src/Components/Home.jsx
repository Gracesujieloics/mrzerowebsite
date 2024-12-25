import React, { useState, useEffect } from "react";
import Platform from "./Platform";
import Contact from "./Contact";
import Achieve from "./Achieve";
import highlightimg from "../Assets/Images/image1.jpg"
import megaphoneImage from "../Assets/megaphone.png"

const Home = () => {
  const words = ["Efficient", "Scalable", "Simplified", "Digitized"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000); // Change word every 2 seconds

    return () => clearInterval(interval);
  }, []);

  const brands = [
    "Nestle",
    "Coca-Cola",
    "Pepsi",
    "Nike",
    "Adidas",
    "Samsung",
    "Apple",
    "Microsoft",
    "Google",
    "Sony",
  ];
  const highlights = [
    {
      year: 2024,
      title: "USA Today",
      description: "Raising the Bar: 23 Layers’ Pursuit of Excellence in the Events Industry",
    },
    {
      year: 2024,
      title: "Patlna Conference",
      description: "Jessica Boskoff, talks event design.",
    },
    {
      year: 2024,
      title: "Best Corporate Event Concept",
      description: "Attentive Mobile | Thread Conference",
    },
    {
      year: 2023,
      title: "Museum of Matrimony",
      description:
        "Neon River, creative wedding division, builds the Museum of Matrimony showcase",
    },
    {
      year: 2023,
      title: "Swaay",
      description:
        "How Jessica Boskoff created dedicated brands in the event space to service her clients' needs.",
    },
    {
      year: 2020,
      title: "Best Events of the Decade: Best Corporate Event Concept",
      description: "New York Interconnect Brand Launch",
    },
  ];

  return (
    <div>
    <div className="bg-black text-white h-[550px] flex flex-col items-center pt-14">
      {/* Main Content */}
      <main className="flex-1 flex w-full flex-col items-center text-center px-6 py-8 md:py-12 lg:py-16  xl:w-3/4">
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-tight font-amar">
          <span className="block sm:inline">Event Management,</span>
          <span
            key={currentWordIndex}
            className="text-gold inline-block animate-sunrise"
          >
            {words[currentWordIndex]}
          </span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl  mt-6 px-4 md:px-12 lg:px-32">
          Eventtia’s all-in-one event management platform guarantees a seamless
          attendee experience, optimizes event planning, and boosts ROI.
        </p>
        <button className="mt-6 bg-white text-black px-8 sm:px-12 py-2 rounded-3xl text-base md:text-lg">
          Get Started
        </button>
      </main>

      {/* Infinite Carousel */}
      <div className="w-full overflow-hidden pb-8 lg:pb-24">
        <div className="flex animate-marquee whitespace-nowrap">
          {brands.concat(brands).map((brand, index) => (
            <div
              key={index}
              className="text-white text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold mx-4 sm:mx-6 md:mx-8 flex-shrink-0"
            >
              {brand}
            </div>
          ))}
        </div>
      </div>
      
    </div>
    <Platform/>

    <section className="bg-black py-10">
  <div className="max-w-7xl mx-auto  md:mx-20 px-4 sm:px-6 lg:px-8">
    {/* Section Title */}
    <h2 className="text-center text-2xl sm:text-3xl font-semibold text-gold mb-8 border-b border-gray-300 pb-8">
      HIGHLIGHTS
    </h2>

    {/* Highlights Content */}
    <div className="space-y-8">
      {highlights.map((highlight, index) => (
        <div
          key={index}
          className={`flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 border-b border-gray-300 pb-4`}
        >
          {/* Year */}
          <div className="text-gold font-bold text-lg min-w-[80px] text-center relative">
            {highlight.year}

            {/* Image in the second row */}
            {index === 1 && (
  <img
    src={highlightimg}
    alt="Highlight Image"
    className="absolute left-10 sm:left-24 -top-16 w-[150px] sm:w-[200px] md:w-[400px] h-[130px] transform rotate-6 border-2 border-white hidden md:block"
  />
)}
          </div>

          {/* Title and Description */}
          <div className="text-center md:text-left md:pl-36 px-4">
            <h3 className="text-lg sm:text-xl font-semibold text-white">
              {highlight.title}
            </h3>
            <p className="text-gray-400 text-sm sm:text-base">{highlight.description}</p>
          </div>
        </div>
      ))}
    </div>

    {/* Reviews Section */}
    <div className="mt-8 text-center">
      <h1 className="text-white text-2xl sm:text-3xl lg:text-4xl mb-5">Our Reviews</h1>
      <button className="border-gold border text-white px-5 py-2 rounded-2xl mt-5 hover:bg-gold hover:text-black transition duration-300">
        Testimonials
      </button>
    </div>
  </div>
</section>



<Achieve/>

<div className="flex flex-col lg:flex-row md:h-[350px] m-6 sm:m-12 lg:m-20">
  {/* Left Section */}
  <div className="flex-1 bg-black p-6 sm:p-8 flex flex-col justify-center items-start">
    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">WHY OUR EVENTS WORK</h1>
    <p className="text-lg sm:text-xl lg:text-2xl text-white mb-6">Like really, really work. Let us show you.</p>
    <button className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-gray-500 font-semibold rounded-full border-2 border-gold hover:bg-white hover:text-black transition-colors duration-300">
      COMING SOON
    </button>
  </div>
  {/* Right Section */}
  <div className="flex-1 bg-gold p-6 sm:p-8 flex justify-center items-center lg:relative">
    <img
      src={megaphoneImage}
      alt="Megaphone"
      className="object-contain w-full h-full sm:w-2/3 lg:w-auto lg:h-auto lg:absolute lg:bottom-0 lg:left-0 ml-12  md:ml-36 md:pl-2"
    />
  </div>
</div>

    
      
      <Contact/>
    </div>
  );
};

export default Home;

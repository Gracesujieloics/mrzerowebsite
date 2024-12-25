import React, { useState } from "react";
import image1 from "../Assets/Images/image1.jpg";
import image2 from "../Assets/Images/image2.jpg";
import image3 from "../Assets/Images/image3.jpg";
import image4 from "../Assets/Images/image4.jpg";
import image5 from "../Assets/Images/image5.jpg";
import image6 from "../Assets/Images/image6.jpg";
import image7 from "../Assets/Images/image7.jpg";
import image8 from "../Assets/Images/image8.jpg";
import image9 from "../Assets/Images/image9.jpg";
import image10 from "../Assets/Images/image10.jpg";
import image11 from "../Assets/Images/image11.jpg";
import image12 from "../Assets/Images/image12.jpg";
import image13 from "../Assets/Images/image13.jpg";
import image14 from "../Assets/Images/image14.jpg";
import image15 from "../Assets/Images/image15.jpg";
import image16 from "../Assets/Images/image16.jpg";
import image17 from "../Assets/Images/image17.jpg";
import image18 from "../Assets/Images/image18.jpg";
import image19 from "../Assets/Images/image19.jpg";
import image20 from "../Assets/Images/image20.jpg";
import image21 from "../Assets/Images/image21.jpg";
import image22 from "../Assets/Images/image22.jpg";
import image23 from "../Assets/Images/image23.jpg";
import image24 from "../Assets/Images/image24.jpg";
import image25 from "../Assets/Images/image25.jpg";
import image26 from "../Assets/Images/image26.jpg";
import image27 from "../Assets/Images/image27.jpg";
import image28 from "../Assets/Images/image28.jpeg"
import image29 from "../Assets/Images/image29.jpg";
import image30 from "../Assets/Images/image30.jpg";

const tabs = [
  { id: 1, heading: "ALL" },
  { id: 2, heading: "CORPORATE + EXPERIENTAL" },
  { id: 3, heading: "MILESTONES + CELEBRATIONS" },
  { id: 4, heading: "PHOTOSHOOTS + STYLING" },
  { id: 5, heading: "POP UP + RETAIL" },
];

const photos = [
  { id: 1, Image: image1, category: "CORPORATE + EXPERIENTAL" },
  { id: 2, Image: image2, category: "MILESTONES + CELEBRATIONS" },
  { id: 3, Image: image3, category: "PHOTOSHOOTS + STYLING" },
  { id: 4, Image: image4, category: "POP UP + RETAIL" },
  { id: 5, Image: image5, category: "CORPORATE + EXPERIENTAL" },
  { id: 6, Image: image6, category: "MILESTONES + CELEBRATIONS" },
  { id: 7, Image: image7, category: "PHOTOSHOOTS + STYLING" },
  { id: 8, Image: image8, category: "POP UP + RETAIL" },
  { id: 9, Image: image9, category: "CORPORATE + EXPERIENTAL" },
  { id: 10, Image: image10, category: "MILESTONES + CELEBRATIONS" },
  { id: 11, Image: image11, category: "PHOTOSHOOTS + STYLING" },
  { id: 12, Image: image12, category: "POP UP + RETAIL" },
  { id: 13, Image: image13, category: "CORPORATE + EXPERIENTAL" },
  { id: 14, Image: image14, category: "MILESTONES + CELEBRATIONS" },
  { id: 15, Image: image15, category: "PHOTOSHOOTS + STYLING" },
  { id: 16, Image: image16, category: "POP UP + RETAIL" },
  { id: 17, Image: image17, category: "CORPORATE + EXPERIENTAL" },
  { id: 18, Image: image18, category: "MILESTONES + CELEBRATIONS" },
  { id: 19, Image: image19, category: "PHOTOSHOOTS + STYLING" },
  { id: 20, Image: image20, category: "POP UP + RETAIL" },
  { id: 21, Image: image21, category: "CORPORATE + EXPERIENTAL" },
  { id: 22, Image: image22, category: "MILESTONES + CELEBRATIONS" },
  { id: 23, Image: image23, category: "PHOTOSHOOTS + STYLING" },
  { id: 24, Image: image24, category: "POP UP + RETAIL" },
  { id: 25, Image: image25, category: "CORPORATE + EXPERIENTAL" },
  { id: 26, Image: image26, category: "MILESTONES + CELEBRATIONS" },
  { id: 27, Image: image27, category: "PHOTOSHOOTS + STYLING" },
  { id: 28, Image: image28, category: "POP UP + RETAIL" },
  { id: 29, Image: image29, category: "CORPORATE + EXPERIENTAL" },
  { id: 30, Image: image30, category: "MILESTONES + CELEBRATIONS" },
];

const Gallery = () => {
  const [activeTab, setActiveTab] = useState("ALL");

  const filteredPhotos =
    activeTab === "ALL"
      ? photos
      : photos.filter((photo) => photo.category === activeTab);

  return (
    <div>
      {/* Header Section */}
      <div className="h-96 lg:h-[585px] w-full bg-black flex items-center justify-center">
        <div className="md:mx-20 mx-5">
          <h1 className="font-bold xl:text-8xl animate-sunrise text-gold mb-5 lg:text-7xl md:text-4xl text-2xl tracking-wider">
            EXPLORE YOUR WORK
          </h1>
          <p className="text-wrap md:text-2xl text-gray-400 font-medium">
            With an unrelenting demand for perfection, 23 Layers is devoted to
            providing clients with exceptional creative design work. We go
            beyond the norm. We push the envelope.
          </p>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="md:h-36 bg-[#efefef] lg:flex items-center justify-around mb-5">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`cursor-pointer p-3 ${
              activeTab === tab.heading ? "font-bold bg-white" : ""
            }`}
            onClick={() => setActiveTab(tab.heading)}
          >
            {tab.heading}
          </div>
        ))}
      </div>

      {/* Photos Section */}
      <div
        className="grid gap-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 p-5"
        style={{
          transition: "transform 0.5s ease-out, opacity 0.5s ease-out",
        }}
      >
        {filteredPhotos.map((photo) => (
          <img
            key={photo.id}
            src={photo.Image}
            alt={`Photo ${photo.id}`}
            className="h-72 w-full object-cover transform hover:scale-105 transition-transform duration-300 ease-in-out"
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;

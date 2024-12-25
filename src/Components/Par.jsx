import React from 'react';
import background from "../Assets/carousel1.jpeg";

const Par = () => {
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
        className="flex items-center justify-center mb-5"
      >
        <h1 className="text-5xl text-white">MRZERO EVENT MANAGEMENT</h1>
      </div>
    </div>
  );
};

export default Par;

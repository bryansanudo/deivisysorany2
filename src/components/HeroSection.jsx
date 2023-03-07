import React from "react";


import heroImg from "@/assets/heroImage.png";

const HeroSection = () => {
  

 

  return (
    <div
      name="invitacion"
      className="flex items-end justify-center   w-full h-screen text-center  "
    >
      <img
        src={heroImg}
        className=" object-cover h-full w-full absolute -z-10"
      />
      
    </div>
  );
};

export default HeroSection;

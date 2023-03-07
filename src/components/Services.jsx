import React from "react";
import invitacionImg from "@/assets/invitacion.png";
import PageSection from "@/components/PageSection";
import invitacionVideo from '@/assets/invitacion.mp4'
const Services = () => {
  return (
    <PageSection
      
      
      
    >
      <div className="flex flex-col lg:flex-row items-center justify-center gap-10 ">
        

        <div className="w-full  flex justify-center">
          
            <img
              src={invitacionImg}
              className="rounded-lg shadow-xl shadow-thPrimary  object-cover  w-[350px] md:h-[589px] "
            />
          
        </div>
        <div className="w-full  flex justify-center">
          
            <video
              src={invitacionVideo}
              loop
              autoPlay
              muted
              type="video/mp4"
              playsInline
              className="rounded-lg shadow-xl shadow-thPrimary object-cover w-[350px] md:h-[589px]"
            ></video>
          
        </div>
      </div>
    </PageSection>
  );
};

export default Services;

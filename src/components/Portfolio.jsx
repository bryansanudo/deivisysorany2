import React from "react";


import iglesia from '@/assets/itinerario/iglesia.jpg'
import fotos from '@/assets/itinerario/fotos.jpg'
import novios from '@/assets/itinerario/novios.jpg'
import cena from '@/assets/itinerario/cena.jpg'
import vela from '@/assets/itinerario/vela.jpg'
import fiesta from '@/assets/itinerario/fiesta.jpg'
import despedida from '@/assets/itinerario/despedida.jpg'
import iglesiaVideo from '@/assets/itinerario/cartagena1.mp4'
import monterreyVideo from '@/assets/itinerario/monterrey.mp4'
import {  SiGooglemaps } from "react-icons/si";



import { useState } from "react";



import {  GrLinkPrevious,GrLinkNext } from "react-icons/gr";
import {  FaBaby } from "react-icons/fa";



const ARRAY_IMG = [
  iglesia,fotos,novios,cena,vela,fiesta,despedida
]

const Portfolio = () => {
  const [index, setIndex] = useState(0);
    const handleClickNext = () => {
        index === ARRAY_IMG.length - 1 ? setIndex(0) : setIndex(index + 1);
    };
    const handleClickPrev = () => {
        index === 0 ? setIndex(ARRAY_IMG.length - 1) : setIndex(index - 1);
    };

  return (
    <>
    <h1 className="text-black" name="itinerario">
        .
      </h1>
    <div className="max-w-screen-xl mx-auto h-fit" >
        <div className="my-40 mx-8 text-center lg:text-left">
          <h1 className="text-4xl lg:text-5xl text-center">Itinerario</h1>
          <div className="my-8 flex flex-col gap-5 items-center justify-center font-semibold">Adoramos a los niños, pero creemos que merecen descansar  ¡Niños, dulces sueños! <FaBaby size={40}/> </div>
            
          <p className="font-semibold my-8 text-center">( solo adultos)</p>
      
        <div className="flex  justify-center items-center  md:gap-20 gap-4 mx-8">
          
            
           
            <button className="flex  items-center justify-center  " onClick={handleClickPrev}>
                    <GrLinkPrevious size={40} />
                </button>
            <img
                src={ARRAY_IMG[index]}
               /*  className="aspect-[16/13] w-full object-cover md:aspect-[16/18] md:cursor-pointer rounded-md  2xl:max-h-[500px]" */
                className="rounded-lg shadow-xl shadow-thPrimary  object-cover "
            />
            
                
                <button
                    className=" flex  items-center justify-center"
                    onClick={handleClickNext}
                >
                    <GrLinkNext size={40} />
                </button>
           
           
          
        </div>
        
        <div className="grid gap-8 md:p-12 grid-cols-1 lg:grid-cols-2 mt-20 ">
        

        {/* imagen 1 */}
        <div className="rounded-lg shadow-xl shadow-thPrimary mx-auto ">
                
                  <div className="flex flex-col items-center justify-center  ">
                  <video
              src={iglesiaVideo}
              loop
              autoPlay
              muted
              type="video/mp4"
              playsInline
              className="rounded-t-lg  object-cover md:h-[400px]"
            />
                    <p className="m-4 capitalize text-sm md:text-lg text-thPrimary font-semibold text-center">
                    Iglesia Catedral Santa <br /> Catalina De Alejandria
                    </p>
                    <p className="m-4 text-sm md:text-lg font-semibold text-center">Calle De Los Santos De Piedra <br /> CRA 4 Cartagena,Bolivar</p>
                    <p className="m-4 text-sm md:text-lg font-semibold text-center">3:00 PM</p>
                      <div className="mb-6 hover:scale-110 duration-300">
                    <a href="https://www.google.com/maps/place/Catedral+de+Santa+Catalina+de+Alejandr%C3%ADa/@10.4236564,-75.550932,17z/data=!3m1!4b1!4m6!3m5!1s0x8ef62f9ff3e34a7b:0xe48918f3f4c4ecdd!8m2!3d10.4236564!4d-75.550932!16s%2Fm%2F0g5681n" target="_blank" rel="noreferrer">

                    <SiGooglemaps size={30} fill={"black"}  />
                    </a>
                      </div>
                  </div>
                
              </div>
              {/* imagen 2 */}
              <div className="rounded-lg shadow-xl shadow-thPrimary mx-auto ">
                
                  <div className="flex flex-col items-center justify-center  ">
                  <video
              src={monterreyVideo}
              loop
              autoPlay
              muted
              type="video/mp4"
              playsInline
              className="rounded-t-lg  object-cover md:h-[400px]"
            />
                    <p className="m-4 capitalize text-sm md:text-lg text-thPrimary font-semibold text-center">
                      Recepcion <br /> Hotel Monterrey                    </p>
                    <p className="m-4 text-sm md:text-lg font-semibold text-center">CRA 8B # 25-100 <br /> La Matuna, Cartagena, Bolivar</p>
                    <p className="m-4 text-sm md:text-lg font-semibold text-center">5:00 PM</p>
                      <div className="mb-6 hover:scale-110 duration-300">
                    <a href="https://www.google.com/maps/place/Hotel+Monterrey/@10.4216641,-75.549846,17z/data=!3m1!4b1!4m9!3m8!1s0x8ef62f75838b9b25:0x95117324d7db4fd0!5m2!4m1!1i2!8m2!3d10.4216641!4d-75.5476573!16s%2Fg%2F1ygb7ndty?coh=164777&entry=tt&shorturl=1" target="_blank" rel="noreferrer">

                    <SiGooglemaps size={30} fill={"black"}  />
                    </a>
                      </div>
                  </div>
                
              </div>



      </div>
        </div>
      
        </div>
        </>
  );
};

export default Portfolio;

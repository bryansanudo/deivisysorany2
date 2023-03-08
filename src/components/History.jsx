import React from "react";



import photo2 from '@/assets/history/photo2.jpg'
import photo3 from '@/assets/history/photo3.jpg'
import photo4 from '@/assets/history/photo4.jpg'
import photo5 from '@/assets/history/photo5.jpg'
import photo6 from '@/assets/history/photo6.jpg'

import photo8 from '@/assets/history/photo8.jpg'
import photo9 from '@/assets/history/photo9.jpg'
import photo10 from '@/assets/history/photo10.jpg'
import photo11 from '@/assets/history/photo11.jpg'
import photo12 from '@/assets/history/photo12.jpg'
import photo13 from '@/assets/history/photo13.jpg'
import photo14 from '@/assets/history/photo14.jpg'


import { useState } from "react";



import {  GrLinkPrevious,GrLinkNext } from "react-icons/gr";




const ARRAY_IMG = [
  photo2,photo3,photo4,photo5,photo6,photo8,photo9,photo10,photo11,photo12,photo13,photo14
]

const History = () => {
  
  const [index, setIndex] = useState(0);
    const handleClickNext = () => {
        index === ARRAY_IMG.length - 1 ? setIndex(0) : setIndex(index + 1);
    };
    const handleClickPrev = () => {
        index === 0 ? setIndex(ARRAY_IMG.length - 1) : setIndex(index - 1);
    };
 /*  const portfolios = [
    {
      id: 1,
      src: photo1,
      title: "Texto Relevante",
      code: "",
      hour: "DD/MM/AA",
    },
    {
      id: 2,
      src: photo2,
      title: "Texto Relevante",
      code: "",
      hour: "DD/MM/AA",
    },
    {
      id: 3,
      src: photo3,
      title: "Texto Relevante",
      code: "",
      hour: "DD/MM/AA",
    },
    {
      id: 4,
      src: photo4,
      title: "Texto Relevante",
      code: "",
      hour: "DD/MM/AA",
    },
    {
      id: 5,
      src: photo5,
      title: "Texto Relevante",
      code: "",
      hour: "DD/MM/AA",
    },
    {
      id: 6,
      src: photo6,
      title: "Texto Relevante",
      code: "",
      hour: "DD/MM/AA",
    },
    {
      id: 7,
      src: photo7,
      title: "Texto Relevante",
      code: "",
      hour: "DD/MM/AA",
    },
    {
      id: 8,
      src: photo8,
      title: "Texto Relevante",
      code: "",
      hour: "DD/MM/AA",
    },
    {
      id: 9,
      src: photo9,
      title: "Texto Relevante",
      code: "",
      hour: "DD/MM/AA",
    },
    {
      id: 10,
      src: photo10,
      title: "Texto Relevante",
      code: "",
      hour: "DD/MM/AA",
    },
    {
      id: 11,
      src: photo11,
      title: "Texto Relevante",
      code: "",
      hour: "DD/MM/AA",
    },
    {
      id: 12,
      src: photo12,
      title: "Texto Relevante",
      code: "",
      hour: "DD/MM/AA",
    },
    {
      id: 13,
      src: photo13,
      title: "Texto Relevante",
      code: "",
      hour: "DD/MM/AA",
    },
    {
      id: 14,
      src: photo14,
      title: "Texto Relevante",
      code: "",
      hour: "DD/MM/AA",
    },
    
    
  ]; */

  return (
    <>
    <h1 className="text-black" name="ceremonia">
        .
      </h1>
    <div className="max-w-screen-xl mx-auto h-fit" >
        <div className="my-40 mx-8 text-center lg:text-left">
          <h1 className="text-4xl lg:text-5xl text-center">Nuestra Historia</h1>
          <div className="my-8 flex flex-col gap-5 items-center justify-center font-semibold">El día que decidimos unir nuestras vidas, lo hicimos con la sincera intención de caminar, reír, llorar y superarlo todo juntos.  
          </div>
            
        
      
        <div className="flex  justify-center items-center  md:gap-20 gap-4 mx-8">
          
            
           
            <button className="flex  items-center justify-center  " onClick={handleClickPrev}>
                    <GrLinkPrevious size={40} />
                </button>
            <img
                src={ARRAY_IMG[index]}
               /*  className="aspect-[16/13] w-full object-cover md:aspect-[16/18] md:cursor-pointer rounded-md  2xl:max-h-[500px]" */
                className="rounded-lg shadow-xl shadow-thPrimary  object-cover w-[400px] h-[450px]   "
            />
            
                
                <button
                    className=" flex  items-center justify-center"
                    onClick={handleClickNext}
                >
                    <GrLinkNext size={40} />
                </button>
           
        </div>
      </div>
    </div>
        </>
  );
};

export default History;

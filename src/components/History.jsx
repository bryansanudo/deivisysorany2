import React from "react";
import PageSection from "@/components/PageSection";

import photo1 from '@/assets/history/photo1.jpg'
import photo2 from '@/assets/history/photo2.jpg'
import photo3 from '@/assets/history/photo3.jpg'
import photo4 from '@/assets/history/photo4.jpg'
import photo5 from '@/assets/history/photo5.jpg'
import photo6 from '@/assets/history/photo6.jpg'
import photo7 from '@/assets/history/photo7.jpg'
import photo8 from '@/assets/history/photo8.jpg'
import photo9 from '@/assets/history/photo9.jpg'
import photo10 from '@/assets/history/photo10.jpg'
import photo11 from '@/assets/history/photo11.jpg'
import photo12 from '@/assets/history/photo12.jpg'
import photo13 from '@/assets/history/photo13.jpg'
import photo14 from '@/assets/history/photo14.jpg'

import {  FaCameraRetro } from "react-icons/fa";

const History = () => {
  const portfolios = [
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
    
    
  ];

  return (
    <PageSection
      name="nuestra historia"
      title="Nuestra Historia"
      subtitle={`
      El día que decidimos unir nuestras vidas, lo hicimos con la sincera intención de caminar, reír, llorar y superarlo todo juntos.`}
    >
      <div className="w-full  text-white">
        <div className="mx-auto flex h-full w-full max-w-screen-lg flex-col justify-center p-4 ">
          <div className="grid gap-8 md:p-12 grid-cols-1 lg:grid-cols-3">
            {portfolios.map(({ id, src, title, hour,code }) => (
              <div
                key={id}
                className="rounded-lg shadow-xl shadow-thPrimary    mx-auto "
              >
                
                  <div className="flex flex-col items-center justify-center  ">
                    <img
                      src={src}
                      className=" object-cover rounded-t-xl w-[320px] h-[300px] "
                    />
                    <p className="m-4 capitalize text-sm md:text-lg text-thPrimary">
                      {title}
                    </p>
                    <p className="m-4 text-sm md:text-lg">{hour}</p>
                      <div className="mb-6 hover:scale-110 duration-300">
                    <a href={code}>

                    <FaCameraRetro size={30} fill={"black"}  />
                    </a>
                      </div>
                  </div>
                
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageSection>
  );
};

export default History;

import React from "react";
import padresDeivis from "@/assets/fathers/padresDeivis.jpg";
import padresSorany from "@/assets/fathers/padresSorany.jpg";
import padrinosSacramento from "@/assets/fathers/padrinosSacramento.jpg";
import padrinosArras from "@/assets/fathers/padrinosArras.jpg";
import padrinosAnillos from "@/assets/fathers/padrinosAnillos.jpg";
import padrinosLazo from "@/assets/fathers/padrinosLazo.jpg";

import { useState } from "react";
import { GrLinkPrevious, GrLinkNext } from "react-icons/gr";
import { GiDiamondRing } from "react-icons/gi";

import { motion } from "framer-motion";

import { staggerContainer } from "@/utils/motion";
import { fadeIn, zoomIn } from "@/utils/motion";

const ARRAY_IMG = [
  padresDeivis,
  padresSorany,
  padrinosSacramento,
  padrinosArras,
  padrinosAnillos,
  padrinosLazo,
];

const Ceremony = () => {
  const [index, setIndex] = useState(0);
  const handleClickNext = () => {
    index === ARRAY_IMG.length - 1 ? setIndex(0) : setIndex(index + 1);
  };
  const handleClickPrev = () => {
    index === 0 ? setIndex(ARRAY_IMG.length - 1) : setIndex(index - 1);
  };

  return (
    <>
      <h1 className="text-black" name="ceremonia">
        .
      </h1>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="max-w-screen-xl mx-auto h-fit"
      >
        <div className="my-40 mx-8 text-center lg:text-left">
          <h1 className="text-4xl lg:text-5xl text-center">Ceremonia</h1>
          <div className="my-8 flex flex-col gap-5 items-center justify-center font-semibold">
            ¡Nos Casamos! Con nuestro amor, la bendición de dios y la de
            nuestros padres <GiDiamondRing size={40} />{" "}
          </div>

          <motion.div
            variants={zoomIn(1, 2)}
            className="flex  justify-center items-center  md:gap-20 gap-4 mx-8"
          >
            <button
              className="flex  items-center justify-center  "
              onClick={handleClickPrev}
            >
              <GrLinkPrevious size={40} />
            </button>
            <img
              src={ARRAY_IMG[index]}
              className="rounded-lg shadow-xl shadow-thPrimary  object-cover "
            />

            <button
              className=" flex  items-center justify-center"
              onClick={handleClickNext}
            >
              <GrLinkNext size={40} />
            </button>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default Ceremony;

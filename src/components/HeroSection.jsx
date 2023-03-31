import React from "react";

import heroImg from "@/assets/home.svg";
import { motion } from "framer-motion";

import { staggerContainer } from "@/utils/motion";
import { fadeIn, zoomIn } from "@/utils/motion";

const HeroSection = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="min-h-screen flex flex-col justify-start items-center p-5 text-center  "
    >
      <motion.img
        /*  variants={zoomIn(1, 1)} */
        src={heroImg}
        className="lg:h-full lg:w-[800px] object-cover mt-[200px] md:mt-[0px] object-top "
      />
    </motion.div>
  );
};

export default HeroSection;

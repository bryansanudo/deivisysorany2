import React from "react";
import invitacionImg from "@/assets/invitacion.png";
import PageSection from "@/components/PageSection";
import invitacionVideo from "@/assets/invitacion.mp4";
import { motion } from "framer-motion";

import { staggerContainer } from "@/utils/motion";
import { fadeIn, zoomIn } from "@/utils/motion";
const Services = () => {
  return (
    <PageSection name="invitacion" title="Invitación">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="flex flex-col lg:flex-row items-center justify-center gap-10 "
      >
        <div className="w-full  flex justify-center">
          <motion.img
            variants={fadeIn("right", "spring", 0.5, 4)}
            src={invitacionImg}
            className="rounded-lg shadow-xl shadow-thPrimary  object-cover  w-[350px] md:h-[589px] "
          />
        </div>
        <div className="w-full  flex justify-center">
          <motion.video
            variants={fadeIn("left", "spring", 0.5, 4)}
            src={invitacionVideo}
            loop
            autoPlay
            muted
            type="video/mp4"
            playsInline
            className="rounded-lg shadow-xl shadow-thPrimary object-cover w-[350px] md:h-[589px]"
          />
        </div>
      </motion.div>
    </PageSection>
  );
};

export default Services;

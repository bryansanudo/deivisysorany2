import React from "react";

import PageSection from "@/components/PageSection";
import contact from "@/assets/contact.jpg";
import ContactForm from "@/components/ContactForm";
import { motion } from "framer-motion";

import { staggerContainer } from "@/utils/motion";
import { fadeIn, zoomIn } from "@/utils/motion";
const Contact = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="flex flex-col lg:flex-row items-center justify-center gap-10 "
    >
      <PageSection name="asistencia" title="Asistencia">
        <motion.div
          variants={zoomIn(1, 2)}
          className="flex flex-col lg:flex-row items-center  md:gap-20 gap-4"
        >
          <div className="w-full lg:w-1/2 h-full p-4 flex items-center content-center flex-col  ">
            <img
              src={contact}
              className="object-cover duration-300 h-[600px] shadow-xl shadow-thPrimary rounded-lg"
            />
          </div>
          <div className="md:w-1/2 lg:w-1/2 h-full rounded-xl ">
            <ContactForm />
          </div>
        </motion.div>
      </PageSection>
    </motion.div>
  );
};

export default Contact;

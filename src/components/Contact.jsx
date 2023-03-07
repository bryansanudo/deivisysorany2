import React from "react";

import PageSection from "@/components/PageSection";
import contact from "@/assets/contact.jpg";
import ContactForm from "@/components/ContactForm";

const Contact = () => {
  return (
    <PageSection name="asistencia" title="Asistencia">
      <div className="flex flex-col lg:flex-row items-center  md:gap-20 gap-4">
        
        <div className="w-full lg:w-1/2 h-full p-4 flex items-center content-center flex-col  ">
          <img
            src={contact}
            className="object-cover duration-300 h-[600px] shadow-xl shadow-thPrimary rounded-lg"
          />

          
        </div>
        <div className="md:w-1/2 lg:w-1/2 h-full rounded-xl ">
          <ContactForm />
        </div>
      </div>
    </PageSection>
  );
};

export default Contact;

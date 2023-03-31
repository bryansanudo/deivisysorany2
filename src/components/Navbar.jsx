import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import logoBoda from "@/assets/logoBoda.jpg";

import { motion } from "framer-motion";

import { staggerContainer } from "@/utils/motion";
import { fadeIn, zoomIn } from "@/utils/motion";

const Navbar = () => {
  const [isMenuShown, setIsMenuShown] = useState(false);
  const links = [
    {
      id: 2,
      link: "invitacion",
    },
    {
      id: 3,
      link: "asistencia",
    },
    {
      id: 4,
      link: "itinerario",
    },
    {
      id: 5,
      link: "nuestra historia",
    },
    {
      id: 6,
      link: "ceremonia",
    },
  ];

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
    >
      <div className=" w-full h-36  bg-black text-white z-20 ">
        <div className="flex justify-between lg:justify-center md:gap-5 items-center max-w-screen-xl mx-auto px-4 h-full">
          <motion.img
            variants={fadeIn("right", "spring", 0.5, 0.1)}
            src={logoBoda}
            alt=""
            className="rounded-full object-cover  h-28 w-28  duration-300 shadow-xl cursor-pointer shadow-thSecondary hover:shadow-thPrimary"
          />

          <div className="hidden lg:flex items-center">
            <ul className="flex">
              {links.map(({ id, link }) => (
                <Link key={id} to={link} smooth duration={500}>
                  <motion.li
                    variants={fadeIn("down", "spring", id * 0.5, 0.1)}
                    className="p-4 uppercase duration-300 hover:text-thSecondary cursor-pointer"
                  >
                    {link}
                  </motion.li>
                </Link>
              ))}
            </ul>
          </div>

          <motion.div
            onClick={() => setIsMenuShown(!isMenuShown)}
            className="block lg:hidden cursor-pointer"
            variants={zoomIn(1, 1)}
          >
            {isMenuShown ? <FaTimes size={30} /> : <FaBars size={30} />}
          </motion.div>
        </div>
      </div>

      <div
        className={`absolute w-full bg-black text-white z-10 left-0 h-fit py-12 lg:hidden flex justify-center text-center text-2xl duration-500 mt-[48px] ${
          isMenuShown ? "top-[95px] rounded-b-2xl opacity-95" : "top-[-100%]"
        }`}
      >
        <ul>
          {links.map(({ id, link }) => (
            <Link
              onClick={() => setIsMenuShown(!isMenuShown)}
              to={link}
              smooth
              duration={500}
              key={id}
            >
              <li className="p-4 uppercase cursor-pointer duration-300 hover:text-thSecondary">
                {link}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default Navbar;

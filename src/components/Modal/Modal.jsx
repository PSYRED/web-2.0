import React from "react";
import { Link } from "react-router-dom";
import { animate, motion } from "framer-motion";

const Modal = ({ handletoggle,isAnimating }) => {
   
  
  return (
    <>
      <motion.div
        animate={{ y: 35 }}
        transition={{ duration: 0.5 }}
        div
        className="absolute text-lg lg:hidden z-50
                    inset-x-4 top-[4rem] bottom-[8rem]
                    flex flex-col items-center
                    rounded-2xl
                    bg-black/95 backdrop-blur-sm
                    p-2 
                    font-roboto
                    text-red-500
                    shadow-2xl shadow-red-900/40
                    border border-red-800/40
                    space-y-2
                    animate-in fade-in slide-in-from-top-4"
      >
        <Link
          to={"/"}
          className="hover:border-b-2 border-b-purple-500 p-2 transition-all duration-100"
          onClick={handletoggle}
        >
          Home
        </Link>
        <Link
          to="about"
          className="hover:border-b-2 border-b-purple-500 p-2 transition-all duration-100"
          onClick={handletoggle}
        >
          About Us
        </Link>

        <Link
          to="services"
          className="hover:border-b-2 border-b-purple-500 p-2 transition-all duration-100"
          onClick={handletoggle}
        >
          Our products
        </Link>

        <Link
          to={"services/product_one"}
          className="hover:border-b-2 border-b-red-400"
          onClick={handletoggle}
        >
          BRP
        </Link>
        <Link
          to={"services/product_two"}
          className="hover:border-b-2 border-b-red-400"
          onClick={handletoggle}
        >
          BRP 2
        </Link>
        <Link
          to={"services/product_three"}
          className="hover:border-b-2 border-b-red-400 "
          onClick={handletoggle}
        >
          BRP 3
        </Link>

        <Link
          to="gallery"
          className="hover:border-b-2 border-b-purple-500 p-2 transition-all duration-100"
          onClick={handletoggle}
        >
          Portfolio
        </Link>

        <Link
          to="contact"
          className="hover:border-b-2 border-b-purple-500 p-2 transition-all duration-100"
          onClick={handletoggle}
        >
          Contact us
        </Link>
      </motion.div>
    </>
  );
};

export default Modal;

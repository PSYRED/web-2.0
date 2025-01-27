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
        className="absolute font-roboto lg:hidden z-50 items-start pl-4 pt-4 pb-4  inset-5 top-[4rem] bottom-[8rem]      flex flex-col bg-slate-100 bg-gradient-to-b from-white   text-blue-400 space-y-6"
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

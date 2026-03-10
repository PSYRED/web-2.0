import React from "react";
import { Link } from "react-router-dom";
import { animate, motion } from "framer-motion";
import { useAuth } from "../../auth/SupabaseContext";
import { useNavigate } from "react-router-dom";




const Modal = ({ handletoggle,isAnimating }) => {
    const {session,handleLogout} = useAuth()
    const navigate = useNavigate()
    
  

  const handleClick = ()=> {
    if (session) {
        handleLogout()
        handletoggle()
   
      }
    else {
      navigate('/sign_up')
      handletoggle()
    }
  }

   
  
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
                    animate-in fade-in slide-in-from-top-4
                    overflow-y-auto no-scrollbar"
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
          to="products"
          className="hover:border-b-2 border-b-purple-500 p-2 transition-all duration-100"
          onClick={handletoggle}
        >
          Our products
        </Link>

        <Link
          to={"products/product_one"}
          className="hover:border-b-2 border-b-red-400"
          onClick={handletoggle}
        >
          BRP
        </Link>
        <Link
          to={"products/product_two"}
          className="hover:border-b-2 border-b-red-400"
          onClick={handletoggle}
        >
          BRP 2
        </Link>
        <Link
          to={"products/product_three"}
          className="hover:border-b-2 border-b-red-400 "
          onClick={handletoggle}
        >
          BRP 3
        </Link>

         

        <Link
          to="contact"
          className="hover:border-b-2 border-b-purple-500 p-2 transition-all duration-100"
          onClick={handletoggle}
        >
          Contact us
        </Link>

        <button onClick={handleClick}>
          <div className="hover:border-b-2 border-b-purple-500 p-2 transition-all duration-100">
            <p className="  ">
              {session ? 'Sign Out' : 'Sign in'}
            </p>
          </div>
        </button>

      </motion.div>
    </>
  );
};

export default Modal;

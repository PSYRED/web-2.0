import logo from "../../assets/psyred_assets/official_logo.png";
import { useState, useEffect } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";
import Modal from "../Modal/Modal";
import { Link } from "react-router-dom";
import { BiChevronDown } from "react-icons/bi";
import { useAuth } from "../../auth/SupabaseContext";
import { useNavigate } from "react-router-dom";
const Nav = () => {
  //change nav color when scrolling
  const [isScrolled, setIsScrolled] = useState(false);
  const {session,handleLogout} = useAuth()
  const navigate = useNavigate()
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [ openModal, setOpenModal] = useState(false);
   
  const handletoggle = () => { 
    setOpenModal(!openModal) 
        
    }

  const handleClick = ()=> {
    if (session) {
        handleLogout()
   
      }
    else {
      navigate('/sign_up')
    }
  }

  return (
    <>
      <nav
        className={
          isScrolled
            ? `nav-scrolled flex  font-nunito  items-center p-2 py w-full lg:fixed   text-white z-10 lg:py-[2rem]  lg:px-[10rem] justify-between`
            : `flex bg-black    items-center p-2 w-full lg:fixed font-nunito  text-white z-10  lg:px-[10rem] justify-between`
        }
      >
        <Link to={"/"}>
          <img src={logo} alt="" className="h-auto w-[100px] md:w-[180px] lg:w-[200px]    " />
        </Link>
         
          <ul className="md:flex items-middle hidden   font-roboto font-semibold space-x-4 ">
            <Link
              to={"/"}
              className="hover:border-b-2 border-b-red-400 p-2 transition-all duration-100"
            >
              Home
            </Link>
            
            <Link  to={"products"} className=" group flex  items-center relative hover:transition-colors duration-150 p-1 ">
              Products
              
                <BiChevronDown size={30} />
              
              <div className="  px-4 whitespace-nowrap group-hover:flex group-hover:transition-all group-hover:duration-100 flex-col hidden absolute top-10    border rounded-md space-y-2 py-2 ">
                <Link
                  to={"products/product_one"}
                  className="hover:border-b-2 border-b-red-400"
                >
                  BRP
                </Link>
                <Link
                  to={"products/product_two"}
                  className="hover:border-b-2 border-b-red-400"
                >
                  BRP 2
                </Link>
                <Link
                  to={"products/product_three"}
                  className="hover:border-b-2 border-b-red-400 "
                >
                  BRP 3
                </Link>
              </div>
            </Link>

             <Link
              to={"About"}
              className="hover:border-b-2 border-b-red-400 p-2 transition-all duration-100"
            >
              About us 
            </Link>

            <Link
              to={"contact"}
              className="hover:border-b-2 border-b-red-400 p-2 transition-all duration-100"
            >
              Contact us 
            </Link>

            {session &&  <Link
              to={"/dashboard/home"}
              className="hover:border-b-2 border-b-red-400 p-2 transition-all duration-100"
            >
              Dashboard
            </Link>}
     
          </ul>
        
        <button onClick={handleClick}>
          <div className="space-x-4 items-center hover:bg-red-600 transition-colours duration-300  lg:flex hidden">
            <p className="px-4 py-2 font-bold font-nunito border-white border-2 text-white ">
              {session ? 'Sign Out' : 'Sign in'}
            </p>
          </div>
        </button>

        <div className="lg:hidden text-4xl text-white " onClick={handletoggle}>
          {openModal ? <IoMdClose /> : <BiMenuAltRight />}
        </div>

        {/* navigation modal */}

        {openModal && <Modal handletoggle={handletoggle} />}
      </nav>
    </>
  );
};
export default Nav;

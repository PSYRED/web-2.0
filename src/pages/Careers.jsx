import truck from "../assets/truck.jpg";
import ship from "../assets/ship.jpg";
import plane from "../assets/plane.jpg";
import { IoIosTimer } from "react-icons/io";
import { RiGlobalLine } from "react-icons/ri";
import { MdDeliveryDining } from "react-icons/md";
import customs from "../assets/customs.jpg";
import warehouse from "../assets/warehouse.jpg";
import pack from "../assets/package.jpg";
import { IoCheckbox } from "react-icons/io5";
import { FaTruck } from "react-icons/fa";
import { FaHandHolding } from "react-icons/fa";
import Accordion2 from "../components/Accordion2/Accordion2";

const Careers = () => {
  return (
    <>
      <div className="backgroundImage1  -z-10 bg-cover bg-center relative  ">
        <div className=" -z-20  overlay" />
        <div className="pb-[10rem] pt-[5rem]    ">
          <div className=" w-3/4 h-72 font-nunito mx-auto flex flex-col items-center pt-24 text-center  ">
            <h1 className=" pb-10 text-white text-[2.7rem] z-50 font-bold  w-100 h-16 text-6xl mt-4">
              Why Karibu Tech
            </h1>

            <p className=" text-white max-w-2xl text-left text-xl lg:text-xl font-light font-roboto mt-4">
              At Karibu Tech, we are on a mission to revolutionize the digital
              world across Africa. We believe in the power of technology to
              drive growth, create opportunities, and foster sustainable
              development. If you are passionate about Web development,Mobile
              App development ,Digital Marketing and making a meaningful impact,
              we invite you to join our dynamic and diverse team.
            </p>

            <p className="text-white max-w-2xl text-left text-xl lg:text-2xl font-light font-roboto mt-4      "></p>
          </div>
        </div>
      </div>

      {/* header text  */}
 

      <div className=" w-full   ">
    <div className="md:flex flex-col font-nunito justify-start lg:px-[18rem] px-[4rem] pt-[2rem] pb-[4rem] bg-white space-y-10 lg:space-y-0  mb-[3rem]      ">
          <h2 className="font-bold lg:text-md max-w-3xl      text-3xl ">
            Current open Position
          </h2>
          <div className="pt-[5rem]">
            <Accordion2 />
          </div>
        </div>
      </div>
    </>
  );
};

export default Careers;

import { RiGlobalLine } from "react-icons/ri";
import { IoIosTimer } from "react-icons/io";
import { FaLightbulb } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { MdDeliveryDining } from "react-icons/md";
import { Carousel } from "react-responsive-carousel";
import ship2 from "../assets/ship2.jpg";
import air from "../assets/air.jpg";
import trucks from "../assets/trucks.jpg";
import Card from "../components/Card/Card";
import Header from "../sections/OurServices/Header";
import CardNoBtn from "../components/Card/CardNoBtn";
import paul from './../assets/paul.jpg'
import { CiSettings } from "react-icons/ci";
import { FaShieldAlt } from "react-icons/fa";

const About = () => {
   
  return (
    <>
      {/* header image */}
      <Header title={"About us"} />
      {/* header text  */}

      <div className=" w-full pt-[4rem] bg-slate-100 bg-gradient-to-b from-white">
        <div className="md:flex justify-evenly  pb-10   ">
          <div className=" font-nunito md:w-[50%]   pl-6  md:h-[15rem]">
            {/* </div> */}
            <h1 className="mt-[0.5rem] text-[1.8rem]  font-semibold">
              Welcome to <span className="text-red-700">Psyred</span>
            </h1>
            <p className="mt-[1.2rem] text-lg">
              At Psyred, we are passionate about crafting exceptional overlanding equipment that drives adventure and reliability across America's most challenging landscapes. Based in the Rocky Mountains, our engineering team is dedicated to harnessing the power of innovative design to transform your truck into the ultimate adventure companion.


            </p>
            {/* <p className="mt-[1.2rem] font-nunito">
              Founded in 2022{" "}
              <span className="text-red-700 font-semibold ">
                Psyred
              </span>{" "}
          is a dynamic team of skilled engineers, manufacturing experts, and adventure enthusiasts. Our diverse expertise spans various terrains and industries, enabling us to understand the unique challenges and opportunities within the North American overlanding market. We are committed to excellence, innovation, and continuous improvement, ensuring we stay at the forefront of the ever-evolving outdoor equipment landscape.
            </p> */}
          </div>
          {/* <div className=" md:h-[23rem] xl:w-[32rem] md:w-[30rem] sm:w-[10rem] sm:h-[40rem] block justify-end px-4 py-2 ">
            <span className="flex justify-end ">
              <img
                src="https://i.ibb.co/ggfVWRm/10001.jpg"
                alt=""
                className=" mt-2 md:w-[29rem] rounded-md"
              />
            </span>

            <span className=" flex justify-end ">
              <p className="mt-3 font-semibold text-slate-500">
                Innovation Lab
              </p>
            </span>
          </div> */}
        </div>
      </div>

    
      <div className="md:flex-row md:h-[50vh] bg-red-900  flex flex-col  md:justify-around lg:space-y-0 space-y-4  items-center px-[2rem]   h-full md:pt-20 lg:py-10  lg:space-x-8 py-8  mx-auto">
          <div className="xl:h-36 flex items-center space-x-6 min-h-[10rem]   ">
            <h1 className=" text-4xl font-semibold text-white outline outline-1 p-4 rounded-md">
              M
            </h1>
            <div className="">
              <p className="pt-7 text-white font-bold text-3xl">Our mission</p>
              <p className="text-white max-w-sm">
                To design rugged, reliable, and intelligently engineered products that simplify everyday
work for tradespeople, adventurers, and builders. We’re committed to delivering secure,
weather‑ready solutions that protect what matters, while providing an exceptional
customer experience as we grow to serve our first 1,000 customers and beyond.
              </p>
            </div>
          </div>

          <div className="   xl:h-36  flex items-center space-x-4  min-h-[10rem]    ">
            <h1 className=" text-4xl font-semibold text-white  outline outline-1 px-5 py-4 rounded-md">
              V
            </h1>
            <div className=" ">
              <p className="mt-[-1rem] lg:mt-[-1rem]  text-white text-3xl font-bold">
                Our vision
              </p>
              <p className="text-white max-w-sm">
                To become the most trusted name in innovative cargo and utility solutions — a brand
known for durability, smart technology, and user‑first design
              </p>
            </div>
          </div>

          <div className="   xl:h-36 flex items-center space-x-4   ">
            <h1 className=" text-4xl font-semibold text-white outline outline-1 py-4 px-5 rounded-md">
              C
            </h1>
            <div>
              <p className="pt-7 text-white text-3xl font-bold ">
                Core values
              </p>
              <p className="text-white max-w-sm">
                Craftsmanship and design for reliability, our products are made by both machines and
humans with the goal of fulfilling the customer’s need and build trust
              </p>
            </div>
          </div>
        </div>
      

      {/* Why choose us */}
      <div className="bg-slate-100 pb-[12rem] ">

      <h1 className="font-nunito text-center text-5xl text-black font-bold py-[5rem]">
        Why choose us
      </h1>
      <div className="md:flex md:mt-[-4rem]   font-nubito  xl:justify-evenly h-full w-full gap-2 p-5 xl:pr- xl:pl-20 transition duration-500">
        <CardNoBtn
          title={"Innovation is the goal"}
          content={
            `Psyred goal is to build products with innovation at heart, with a product designed 
            specifically for a customer's needs, innovation brings convenience.`
          }
          icon={
        <FaLightbulb 
 className="text-white text-5xl group-hover:text-black   transition-colors duration-500 delay-150 " />
          }
        />

        <CardNoBtn
          title={"Fully customizable"}
          content={
            `Designing for everyday storage, construction or agriculture. Psyred builds for all
needs and to benefit all.`
          }
          icon={
            <CiSettings className="text-white text-5xl group-hover:text-black transition-colors duration-500 delay-150 " />
          }
        />

        <CardNoBtn
          title={"Reliability"}
          content={
            `Our products go through quality inspection to ensure no defects before shipping.
Our products are built to last years without fail. This is made possible through our
skilled personnel and our premium material selection.`
          }
          icon={
            <FaShieldAlt 
 className="text-white text-5xl group-hover:text-black transition-colors duration-500 delay-150 " />
          }
        />
      </div>
      </div>

      {/* Team members  */}
      {/* <div className="bg-[#F3F5F5] lg:px-[8rem] px-[1rem] mt-[4rem] pb-[5rem]">
        <h2 className="text-center text-5xl font-semibold py-8 text-red-700 font-nunito   ">
          Meet the team
        </h2>
        <Carousel
          showArrows={true}
          stopOnHover={true}
          infiniteLoop={true}
          useKeyboardArrows={true}
          interval={2000}
          autoPlay={true}
        >
          {testimonies.map((item) => {
            return (
              <div className="flex md:flex-row bg-white flex-col items-center px-[1rem] justify-evenly py-8 ">
                <div className="md:w-1/2 flex flex-col space-y-6">
                  <p className=" text-2xl font-nunito">{item.name}</p>
                  <p className="font-bold text-4xl font-nunito ">{item.title}</p>
                </div>
                <div className="">
                  <img
                    src={item.mainImage}
                    className="lg:h-[40vh] md:h-[30vh] hover:brightness-50 transition-all duration-300 translate-y-[-10]"
                    alt=""
                  />
                </div>
              </div>
            );
          })}
        </Carousel>
      </div> */}
    </>
  );
};

export default About;

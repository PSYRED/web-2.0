
import "./App.css";
 import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

// import Form from "../components/Form/Form";
import { Link } from "react-router-dom";
import { IoIosTimer } from "react-icons/io";
import { RiGlobalLine } from "react-icons/ri";
import { MdDeliveryDining } from "react-icons/md";

import { IoTrendingUp } from "react-icons/io5";
// import fabpic from "./assets/fabpic.png"


import { CiMobile1 } from "react-icons/ci";
 
import ydrone from "./assets/ydrone.png";
import robot from "./assets/robot.jpg";
import pport from "./assets/pport.png"
// import gen from "./assets/gen.png";  
 

import Accordion from "./components/Accordion/Accordion";
import roboy from "./assets/roboy.png";
import arm from "./assets/arm.png";

import corpo from './assets/corpo.jpg'
import corpo4 from './assets/studioRender.png'
import Card from "./components/Card/Card";

import { GiSpiderWeb } from "react-icons/gi";
import Button1 from "./components/Button/Button1";
import { Button, Carousel } from "flowbite-react";
import CardComponent from "./components/Card/CardComponent";

import { Avatar, Blockquote } from "flowbite-react";
import Testimonial from "./components/Testimonial/Testimonial";
import { Accordion3 } from "./components/Accordion3/Accordion3";
import Form from "./components/Form/Form";

import blu from './assets/Blu-logistics.png'


import { RotatingLines } from "react-loader-spinner";
import { useState } from "react";
import CarouselComp from "./components/Carousel/Carousel";

import trucks from "./assets/10001.jpg";

function App() {
   

   
  const   [isLoading,setIsLoading] =useState(false)

  return (
    <>
      <div className="relative     ">
        {!isLoading && (
          <div className=" justify-center flex h-[100vh] bg-purple-200">
            <RotatingLines
              strokeColor="red"
              width="150"
              animationDuration="4s"
            />
          </div>
        )}
        <div className="lg:h-[100vh] flex justify-center     ">
          <div className="object-cover brightness-75    w-full lg:h-[100vh] h-[50vh]">
            <img
              src={corpo4}
              className="lg:h-[100vh] h-[50vh] lg:w-full lg:object-cover lg:object-right-bottom object-cover object-center  "
              alt=""
              srcset=""
              onLoad={() => setIsLoading(true)}
            />
          </div>

          <div className="md:flex justify-center   font-nunito lg:top-[25rem] top-[8rem] items-center    fadeInDown text-white absolute lg:px-[5rem] px-[2rem] space-y-10 lg:space-y-0  lg:mb-[7rem]       ">
            <div className=" flex-col items-center flex  space-y-[3rem]  lg:space-y-[2rem]   ">
              <h1 className="font-bold text-center lg:text-4xl     text-3xl ">
                Experience Ultimate Freedom With The
                <span className=" text-red-400"> 3:0:0:0</span>
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* About us */}

      <div className="  flex   lg:items-center flex-col         lg:space-y-0   space-y-[3rem]  bg-black font-nunito text-center text-white  pb-[10rem]    ">
        <h3 className="text-4xl mt-8 ">
          <span className="text-red-400">3:0:0:0</span>
        </h3>
        <p className="text-3xl py-4 border-b-4 border-red-500 ">
          Revolutionizing Mobile Living
        </p>
        <div className="space-y-10 text-xl pt-10">
          <p>Say Goodbye to RV Parks Forever</p>
          <p>Freedom from Utility Connections </p>
          <p>100% Solar Powered</p>
          <p>Electric Tow Vehicle Charging</p>
          <p>Compatible With Gas and Diesel Tow Vehicles</p>
          <p>Unlimited Water From Air Creation & Recycling</p>
          <p> Apple iPad Wireless Control </p>
          <p>Folding Patio & Gear-Hauler Ramp</p>
        </div>
      </div>

      {/* carousel */}
      <CarouselComp />

      <div className="  flex   lg:items-center flex-col  md:mt-[-3rem]        lg:space-y-0   space-y-[3rem]  bg-black font-nunito text-center text-white  pb-6    ">
        <p className="text-3xl py-4 border-b-4 border-red-500 ">
          Secure your spot today
        </p>
        <div className="space-y-10 text-xl pt-10">
          <p>
            Join the <span className="text-red-400">3:0:0:0</span> waitlist now
            with a fully refundable $100 deposit.
          </p>
          <p>Starting at $175,000 </p>
          <p>Deliveries start in 2025</p>
          <Button1 text={"Reserve Now"} />
        </div>
      </div>

      <div className="lg:mt-0      ">
        <img
          src={trucks}
          className="lg:h-[100vh] h-[100vh]  w-full   -z-40   object-cover object-bottom    

                      "
          alt=""
        />
      </div>  

      {/* Our services */}
      <div className=" w-full lg:pt-[8rem] pt-[4rem] text-white   lg:mt-0 lg:border-b  lg:border-b-red-400  mb-0 lg:px-10 px-4  pb-24 bg-gradient-to-b  bg-black   ">
        <div className=" flex flex-col items-center  ">
          <h3 className="lg:text-4xl text-2xl text-center max-w-screen-lg font-nunito pb-4 mb-4 font-semibold justify-center ">
            Why the <span className="text-red-400">3:0:0:0</span>
          </h3>
        </div>

        <div className="flex lg:flex-row flex-col   ">
          <div className="lg:w-1/3 flex lg:px-6 px-1 items-center font-nunito ">
            <Card
              color={"border-red-400 "}
              icon={
                <GiSpiderWeb className=" text-white text-5xl group-hover:text-red-400  transition-colors duration-500 delay-150" />
              }
              title={"Web development"}
              content={
                "We specialize in creating high-quality, responsive websites that are tailored to meet the unique needs of your business."
              }
            />
          </div>

          <div className="lg:w-1/3 flex lg:px-6 px-1  items-center font-nunito">
            <Card
              color={"border-purple-500 "}
              icon={
                <CiMobile1 className=" text-white text-5xl group-hover:text-red-400 transition-colors duration-500 delay-150" />
              }
              title={"Mobile App development"}
              content={
                "At Karibu Tech, we specialize in creating powerful, intuitive mobile applications that elevate your business and engage your users."
              }
            />
          </div>

          <div className="lg:w-1/3 flex lg:px-6 px-1 items-center font-nunito">
            <Card
              color={"border-purple-500 "}
              icon={
                <IoTrendingUp className=" text-white text-5xl group-hover:text-red-400 transition-colors duration-500 delay-150" />
              }
              title={"Digital marketing "}
              content={
                "Our digital marketing services are designed to help you build a strong online presence, attract your target audience, and drive sustainable growth."
              }
            />
          </div>
        </div>
      </div>

       
        
    </>
  );
}

export default App;

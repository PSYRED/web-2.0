
import "./App.css";
 import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

// import Form from "../components/Form/Form";
import { Link } from "react-router-dom";
import { IoIosTimer } from "react-icons/io";
import { RiGlobalLine } from "react-icons/ri";
import { MdDeliveryDining } from "react-icons/md";

import { IoTrendingUp } from "react-icons/io5";
import fabpic from "./assets/fabpic.png"


import { CiMobile1 } from "react-icons/ci";
 
import ydrone from "./assets/ydrone.png";
import robot from "./assets/robot.jpg";
import pport from "./assets/pport.png"
import gen from "./assets/gen.png";
 

import Accordion from "./components/Accordion/Accordion";
import roboy from "./assets/roboy.png";
import arm from "./assets/arm.png";

import corpo from './assets/corpo.jpg'
import corpo4 from './assets/corp4.jpg'
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
function App() {
   

  // const slide = [
  //   {
  //     text: "Beyond Automation, The Art and Science of Robotic Arms",
  //     pic: air,
  //   },
  //   {
  //     text: "Exploring the Latest in Robotic Arm Technology",
  //     pic: trucks,
  //   },

  //   {
  //     text: "From Assembly Lines to Precision Partners",
  //     pic: ship2,
  //   },
  // ];

  const   [isLoading,setIsLoading] =useState(false)

  return (
    <>
      <div className="relative     ">
        {!isLoading && (
          <div className=" justify-center flex h-[100vh] bg-purple-200">
            <RotatingLines
              strokeColor="purple"
              width="150"
              animationDuration="4s"
            />
          </div>
        )}
        <div className="lg:h-[100vh] flex justify-center    ">
          <div className="object-cover brightness-50  bg-red-300 w-full lg:h-[100vh] h-[60vh]">
            <img
              src={corpo4}
              className="lg:h-[100vh] h-[60vh] lg:w-full object-cover object-top  "
              alt=""
              srcset=""
              onLoad={() => setIsLoading(true)}
            />
          </div>

          <div className="md:flex justify-center   font-nunito lg:top-[15rem] items-center  top-10 fadeInDown text-white absolute lg:px-[5rem] px-[2rem] space-y-10 lg:space-y-0  lg:mb-[7rem]       ">
            <div className=" flex-col items-center flex  space-y-[3rem]  lg:space-y-[2rem]   ">
              <h1 className="font-semibold   pl-2 lg:text-4xl     text-3xl ">
                From Concept to Success...
                <span className=" text-purple-400">Karibu</span> Tech
              </h1>

              <p className="font-light text-xl   max-w-lg">
                We are dedicated to transforming your innovative ideas into
                dynamic digital solutions.
              </p>
              <div className="flex ">
                <Link to={"contact"}>
                  <Button1 text="Contact us" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* About us */}

      <div className="  flex   lg:items-center flex-col         lg:space-y-0   space-y-[3rem]       ">
        <div className=" bg-purple-100 hover:border-purple-500 hover:border-2 hover:transition-colors duration-300  rounded-2xl my-[1rem] pt-8 lg:my-[4rem] lg:h-[85vh]  shadow-md">
          <div className="flex lg:flex-row  flex-col space-y-12 lg:items-center px-[2rem]  lg:space-x-[5rem] lg:container lg:mx-auto">
            <div className="lg:w-[40vw] md:w-[80vw]  lg:p-[5rem]   lg:space-y-4  ">
              <img src={robot} className="rounded-lg" alt="" />
              <p className="font-semibold text-[#3A3A3A]  lg:text-left md:text-right text-center py-4 lg:py-0 text-sm max-w-xl">
                Rwanda's trusted Digital Agency{" "}
              </p>
            </div>
            <div className="space-y-3 font-nunito flex-col flex lg:items-start items-center   ">
              <div className="flex flex-col mb-14 mt-0  lg:items-start items-center space-y-8">
                <h2 className="lg:text-5xl text-3xl text-black lg:text-left text-center font-semibold font-roboto ">
                  Who Are We?
                </h2>
                <p className=" lg:max-w-md max-w-md text-lg lg:text-md lg:text-left text-center font-roboto font-light  ">
                  <span className="text-purple-900 font-bold">Karibu Tech</span>{" "}
                  ,where creativity meets cutting-edge technology. Founded in
                  2020, we are a passionate team of developers, designers, and
                  strategists dedicated to transforming ideas into impactful
                  digital experiences. Our expertise spans across web
                  development, mobile app creation, and digital strategy,
                  allowing us to offer comprehensive solutions tailored to the
                  unique needs of each client.
                </p>
                <div className="lg:pb-20 flex justify-center  md:pb-20 pb-6">
                  <Link
                    to={"about"}
                    className=" px-10 py-3 md border-2 border-[#03396C]  hover:text-white transition text-[#03396C] hover:bg-[#03396C]  rounded-full "
                  >
                    Know more
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Our services */}
      <div className=" w-full lg:pt-[8rem] pt-[4rem]  from-purple-100 lg:mt-44 lg:my-32 mb-0 lg:px-10 px-4  pb-24 bg-gradient-to-b  to-white   ">
        <div className=" flex flex-col items-center  ">
          <h3 className="lg:text-5xl text-2xl text-center max-w-screen-lg font-nunito pb-4 mb-4 font-semibold justify-center ">
            Transforming Ideas Into Reality With Cutting Edge Solutions
          </h3>
          <p className="text-xl font-light text-center font-nunito pb-4 mb-4 max-w-screen-md  ">
            At Karibu Tech, we offer a range of innovative services and
            solutions that empower businesses to thrive in the digital age. From
            web development to AI-powered applications, we have the expertise to
            transform your ideas into reality.
          </p>
        </div>

        <div className="flex lg:flex-row flex-col   ">
          <div className="lg:w-1/3 flex lg:px-6 px-1 items-center font-nunito ">
            <Card
              color={"border-purple-500 "}
              icon={
                <GiSpiderWeb className=" text-white text-5xl group-hover:text-blue-900  transition-colors duration-500 delay-150" />
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
                <CiMobile1 className=" text-white text-5xl group-hover:text-blue-900  transition-colors duration-500 delay-150" />
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
                <IoTrendingUp className=" text-white text-5xl group-hover:text-blue-900  transition-colors duration-500 delay-150" />
              }
              title={"Digital marketing "}
              content={
                "Our digital marketing services are designed to help you build a strong online presence, attract your target audience, and drive sustainable growth."
              }
            />
          </div>
        </div>
      </div>

      <div className=" bg-gradient-to-b to-white  text-black ">
        <div className="text-center lg:text-5xl text-3xl font-bold font-nunito mb-24">
          Projects We Worked On
        </div>
        <div className="lg:grid grid-cols-3 lg:gap-x-1 space-y-4 lg:space-y-0 lg:ml-14 mx-8 ">
          <CardComponent
            imgSrc={blu}
            title={"Blu-Channel Logistics Web App"}
            link={"https://blue-channel.vercel.app"}
          />
          <CardComponent
            imgSrc={fabpic}
            title={"Fablab Web App"}
            link={"https://fablabrwanda.vercel.app/"}
          />
          <CardComponent
            imgSrc={pport}
            title={"Personal Web Portfolio"}
            link={"https://pportfolio-rk7n.vercel.app/#about"}
          />
        </div>
      </div>

      {/* TESTIMONIALS */}
      <div className="bg-purple-200/50 space-y-12 py-14 my-14 ">
        <h1 className="font-nunito  text-center text-5xl    font-bold  ">
          Testimonials
        </h1>

        <Carousel className="py-8  ">
          <Testimonial />

          <Testimonial />
        </Carousel>
      </div>

      {/* faq */}
      <div className="flex font-nunito  lg:flex-row flex-col mb-44  items-center">
        <div className="flex  lg:w-1/2   text-center lg:pt-[4rem] px-[4rem] lg:ml-14 lg:text-left  ">
          <div className="space-y-4 lg:pb-[8rem]">
            <h2 className="text-4xl font-bold">FAQ</h2>
            <p className="font-light lg:text-3xl text-xl   lg:max-w-sm  ">
              Answers to some questions you might have.{" "}
            </p>
          </div>
        </div>

        <div className="lg:w-1/2 w-full  lg:px-14 px-5 lg:mt-[8rem] mt-[3rem] text-black font-nunito ">
          <Accordion3 />
        </div>
      </div>

      {/* CONTACT FORM */}
      <div>
        <Form />
      </div>
    </>
  );
}

export default App;

import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import Form from "../components/Form/Form";

const Contact = () => {
  return (
    <>
      {/* header image */}
      <div className="backgroundImage -z-10 bg-cover bg-bottom relative bg-blue-600 ">
        <div className="bg-e-global-color-1046ecd transition-all -z-20 duration-300 overlay" />
        <div className="lg:pt-52 pt-34  ">
          <div className=" w-3/4 h-72 mx-auto align-center pt-24 text-center  ">
            <span className="">
              <h1 className=" pb-10 text-white text-[2.7rem] font-bold  w-100 h-16 text-6xl mt-4">
                Contact Us{" "}
              </h1>
            </span>
            <span>
              <p className=" text-white text-xl lg:text-2xl font-light font-roboto mt-4">
                Connecting Continents, Fast-tracking Success
              </p>
            </span>
          </div>
        </div>
      </div>
      {/* header text  */}
      <div className=" w-full font-nunito pb-24 pt-[4rem] px-8 bg-slate-100 bg-gradient-to-b from-white">
        <div className="md:flex justify-evenly   ">
          <div className="  lg:w-1/2 p-6   ">
            <h1 className="uppercase lg:text-4xl text-2xl font-semibold">
              Contact details
            </h1>
            <p className="mt-6 max-w-lg ">
              If you have any questions about what we offer for consumers or for
              business, you can always email us or call us via the below
              details. We’ll reply within 24 hours.
            </p>
            <div className="flex flex-col  items-start text-black  container mx-auto">
              <div className=" md:w-[40rem]  xl:h-36 flex items-center space-x-6  ">
                <h1 className=" text-4xl font-semibold  outline outline-1 p-4 rounded-md">
                  <CiLocationOn />
                </h1>
                <div>
                  <p className="pt-7 font-roboto font-bold ">Visit us</p>
                  <p className=" max-w-sm">
                    Kigali City,Kicukiro 314st. We meet our customers’ demands
                    for a personal & profesional service by offering innovative
                    digital solutions.
                  </p>
                </div>
              </div>

              <div className=" md:w-[40rem] xl:h-36 flex items-center space-x-4   ">
                <h1 className=" text-4xl font-semibold   outline outline-1 px-5 py-4 rounded-md">
                  <FaPhoneAlt />
                </h1>
                <div>
                  <p className="pt-7 font-bold ">Call us on</p>
                  <p className=" max-w-sm">
                    We proactively and constantly look for new possibilities.
                    Therefore, an important part of our vision is to attract &
                    retain.{" "}
                  </p>
                </div>
              </div>

              <div className=" md:w-[40rem] xl:h-36 flex items-center space-x-4   ">
                <h1 className=" text-4xl font-semibold  outline outline-1 py-4 px-5 rounded-md">
                  <CiMail />
                </h1>
                <div>
                  <p className="pt-7 font-bold font-roboto ">Mail us on</p>
                  <p className=" max-w-sm">
                    We meet our customers’ demands for a personal & profesional
                    service by offering innovative supply chain solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* working hours section */}

          <div className="lg:w-1/4 mt-8  ">
            <div className="p-4 border-2">
              <h2 className="uppercase font-semibold text-3xl pt-1">
                Working hours
              </h2>
              <p className="pt-4">These are our office working hours </p>
              <div className="justify-between flex mt-4 border-b-2 p-4">
                <p>Monday</p>
                <p>9:00am-17.00 pm </p>
              </div>
              <div className="justify-between flex mt-4 border-b-2 p-4">
                <p>Tuesday</p>
                <p>9:00am-17.00 pm </p>
              </div>
              <div className="justify-between flex mt-4 border-b-2 p-4">
                <p>Wednesday</p>
                <p>9:00am-17.00 pm </p>
              </div>
              <div className="justify-between flex mt-4 border-b-2 p-4">
                <p>Thursday</p>
                <p>9:00am-17.00 pm </p>
              </div>
              <div className="justify-between flex mt-4 border-b-2 p-4">
                <p>Friday</p>
                <p>9:00am-17.00 pm </p>
              </div>
              <div className="justify-between flex mt-4   p-4">
                <p>Sat & Sunday</p>
                <p className=" text-red-500">Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* contact form  */}
      <Form />

      {/* embedded map  */}
      <div className="">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15949.846923851153!2d30.107238399999996!3d-1.9693568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2srw!4v1722002073419!5m2!1sen!2srw"
          width="w-full"
          height="450"
          className="w-full"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>  
      </div>
    </>
  );
};

export default Contact;

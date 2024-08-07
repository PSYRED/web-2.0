import React, { useState } from "react";
import axios from "axios";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Form = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [text, setText] = useState("");
  const [isLoading, setIsLoading] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);

    if (name && email && text && subject) {
      axios
        .post("https://blu-channel-backend.onrender.com/send-email", {
          email,
          name,
          subject,
          text,
        })
        .then(() => {
          toast.success("Email sent succesfully");
          console.log("Email sent succesfully");
          setEmail("");
          setName("");
          setSubject("");
          setText("");
        })
        .catch((error) => {
          console.error("Error sending email", error);
          toast.error("Error sending email");
        });
    } else return toast.error("Fill in the fields correctly");
  };

  return (
    <>
      <ToastContainer />
      <div className="lg:pb-8   mb-32  lg:mb-[-5rem]   relative font-nunito  ">
        <div className="bg-image-2   " />
        <div className="lg:mt-4 top-1    lg:pb-12 bg-purple-100 rounded-xl  flex flex-col md:flex-row absolute lg:w-[50%] md:w-[75%]     lg:top-[1rem] md:left-[8rem] md:top-[55rem] py-[2rem] md:pb-[10rem] pb-[0rem] w-full">
          <form className="flex flex-col px-8  md:w-2/3 space-y-10   ">
            <h2 className="text-purple-500 text-center lg:text-left font-nunito text-2xl font-semibold font-roboto">
              Contact us 
            </h2>

            <input
              type="text"
              placeholder="Name"
              value={name}
              name=""
              id=""
              className=" rounded-lg outline-none hover:border-purple-400 border-2  border-gray-400  px-3 py-1"
              required
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              className=" outline-none hover:border-purple-400 border-2  border-gray-400 rounded-lg px-3 py-1 "
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              placeholder="Subject"
              value={subject}
              className=" outline-none hover:border-purple-400 border-2  border-gray-400 rounded-lg px-3 py-1"
              required
              onChange={(e) => setSubject(e.target.value)}
            />
            <input
              type="text"
              placeholder="Message"
              value={text}
              className="border-gray-400  outline-none hover:border-purple-400   border-2 rounded-lg px-3 py-8"
              required
              onChange={(e) => setText(e.target.value)}
            />
            <div className=" justify-center flex lg:justify-start">
              <button
                onClick={(e) => handleSubmit(e)}
                className="px-4 py-2 bg-purple-600 focus:bg-black rounded-md text-white font-semibold"
              >
                {isLoading ? "Sending mail..." : "Send mail"}
              </button>
            </div>
          </form>

          <div className="md:w-1/3 flex flex-col items-center  space-y-2 pt-[4rem] pb-[4rem]  ">
            <div>
              <h2 className="font-bold text-xl text-[#3A3A3A] text-center">
                Address
              </h2>
              <p className="text-[#3A3A3A]">KK 314 st, Kigali</p>
            </div>

            <div>
              <h2 className="font-bold text-xl text-[#3A3A3A] text-center">
                Email
              </h2>
              <p className="text-[#3A3A3A]">KaribuTech12@gmail.com</p>
            </div>

            <div>
              <h2 className="font-bold text-xl text-[#3A3A3A] text-center">
                Phone
              </h2>
              <p className="text-[#3A3A3A]">+2507848 24 525</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;

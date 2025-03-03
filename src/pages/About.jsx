import { RiGlobalLine } from "react-icons/ri";
import { IoIosTimer } from "react-icons/io";
import { GiAfrica } from "react-icons/gi";
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
const About = () => {
  const testimonies = [
    {
      name: "Kabalisa Paul",
      mainImage: paul,
      title: "Founder",
    },
    {
      name: "Kabalisa Paul",
      mainImage: paul,
      title: "Developer",
    },
    {
      name: "Kabalisa",
      mainImage: paul,
      title: "Business Analyst",
    },
  ];
  return (
    <>
      {/* header image */}
      <Header title={"About us"} />
      {/* header text  */}

      <div className=" w-full pt-[4rem] bg-slate-100 bg-gradient-to-b from-white">
        <div className="md:flex justify-evenly   md:h-[30rem]">
          <div className=" font-nunito md:w-[37rem] pl-6 md:h-[29rem]">
            {/* </div> */}
            <h1 className="mt-[0.5rem] text-[1.8rem]  font-semibold">
              Welcome to <span className="text-purple-500">Karibu Tech</span>
            </h1>
            <p className="mt-[1.2rem]">
              At Karibu Tech, we are passionate about crafting exceptional
              digital experiences that drive success for businesses across
              Africa and beyond. Based in the heart of Africa, our digital
              agency is dedicated to harnessing the power of technology to
              transform visions into reality
            </p>
            <p className="mt-[1.2rem] font-nunito">
              Founded in 2020,{" "}
              <span className="text-purple-500 font-semibold ">
                Karibu Tech
              </span>{" "}
              is a dynamic team of skilled developers, creative designers, and
              strategic thinkers. Our diverse expertise spans various
              industries, enabling us to understand the unique challenges and
              opportunities within the African market. We are committed to
              excellence, innovation, and continuous learning, ensuring we stay
              at the forefront of the ever-evolving digital landscape.
            </p>
          </div>
          <div className=" md:h-[23rem] xl:w-[32rem] md:w-[30rem] sm:w-[10rem] sm:h-[40rem] block justify-end px-4 py-2 ">
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
          </div>
        </div>
      </div>

      <div className=" bg-purple-900/70 font-nunito w-full   ">
        <div className="md:flex-row flex flex-col md:justify-around lg:space-y-0 space-y-4  items-center px-[2rem]   h-full md:pt-20 lg:py-10 md:pb-20 lg:space-x-8 py-8  mx-auto">
          <div className="    xl:h-36 flex items-center space-x-6 min-h-[10rem]   ">
            <h1 className=" text-4xl font-semibold text-white outline outline-1 p-4 rounded-md">
              M
            </h1>
            <div className="">
              <p className="pt-7 text-white font-bold text-3xl">Our mission</p>
              <p className="text-white max-w-sm">
                Our mission is to empower African businesses and organizations
                by providing cutting-edge web applications that enhance
                efficiency, engagement, and profitability
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
                Our Vision To be the leading digital agency in Africa, driving
                transformation and innovation across the continent.
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
                Our Core-value is client centric design.Our clients are at the
                heart of our business.We prioritize understanding their needs,
                goals, and challenges to provide tailored solutions that drive
                their success.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Why choose us */}
      <h1 className="font-nunito text-center text-5xl text-black font-bold my-[5rem]">
        Why choose us
      </h1>
      <div className="md:flex md:mt-[-4rem]  font-nubito  xl:justify-evenly h-full w-full gap-2 p-5 xl:pr- xl:pl-20 transition duration-500">
        <CardNoBtn
          title={"Local Expertise "}
          content={
            "With a deep understanding of the African market, we create solutions that are culturally relevant and resonate with your audience"
          }
          icon={
            <GiAfrica className="text-white text-5xl group-hover:text-blue-900  transition-colors duration-500 delay-150 " />
          }
        />

        <CardNoBtn
          title={"Client Centric Approach"}
          content={
            "Your success is our priority. We work closely with you throughout the project, ensuring your vision is realized and your expectations are exceeded"
          }
          icon={
            <FaUser className="text-white text-5xl group-hover:text-blue-900  transition-colors duration-500 delay-150 " />
          }
        />

        <CardNoBtn
          title={"Proven Track Record"}
          content={
            "Our portfolio showcases a wide range of successful projects that demonstrate our ability to deliver high-quality, impactful digital solutions"
          }
          icon={
            <IoIosTimer className="text-white text-5xl group-hover:text-blue-900  transition-colors duration-500 delay-150 " />
          }
        />
      </div>

      {/* Team members  */}
      <div className="bg-[#F3F5F5] lg:px-[8rem] px-[1rem] mt-[4rem] pb-[5rem]">
        <h2 className="text-center text-3xl font-semibold py-8 text-purple-500 font-nunito   ">
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
      </div>
    </>
  );
};

export default About;


import "./App.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { FaToolbox } from "react-icons/fa";
import { IoIosCheckmark } from "react-icons/io";
import corpo4 from './assets/psyred_assets/shot2.png'
import Card from "./components/Card/Card";
import { GiWeightLiftingUp } from "react-icons/gi";
import Button1 from "./components/Button/Button1";
import { RotatingLines } from "react-loader-spinner";
import { useState } from "react";
import CarouselComp from "./components/Carousel/Carousel";

import trucks from "./assets/psyred_assets/shot4.png";
import Form from "./components/Form/Form";

import { ToastContainer,toast } from "react-toastify";
function App() {
   

   
  const [isLoading,setIsLoading] =useState(false)
  const [isOpen,setIsOpen] = useState(false);
  const [isForming,setIsForm] = useState(false)

  const [email, setEmail] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("")

  console.log('Name :',fname)

  const handleWaitingList = async (e,type)=> {
    e.preventDefault();
    
    try {
      setIsForm(true)
      console.log('Fields in try...',fname,email,type)

      const res = await fetch('http://localhost:3000/api/subscribe',{
        method:'POST',
        headers:{'Content-Type' :'application/json'},
        body:JSON.stringify({email,fname,type})
      });

      console.log('Fields after:',email,fname,type)
      const data = await res.json();

      if(res.ok) {
        
        toast.success(data.message)

      }else {
        alert(data.error || 'Sub Failed');
        console.log(data.error)
      }
    }
      catch(err){
        console.error(err)
        setIsForm(false);

        alert('Network Error');
      }
      setFname('');
      setEmail('')
      setIsForm(false);
  }

  return (
    <>
    <ToastContainer/>
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

        


        {/* Hero section */}
        <div className="lg:h-[100vh] h-[50vh]  flex justify-center     ">
          <div className="object-cover brightness-125    w-full lg:h-[100vh] h-[70vh]">
            <img
              src={corpo4}
              className="lg:h-[100vh] h-[50vh] md:w-full lg:w-full lg:object-cover lg:object-right-bottom object-cover object-center w-full  "
              alt=""
              srcset=""
              onLoad={() => setIsLoading(true)}
            />
          </div>

           
              <h1 className=" absolute
                top-[10rem] sm:top-[11rem] lg:top-[18rem]
                w-full
                flex flex-col lg:flex-row
                items-center justify-center
                px-4 sm:px-8 lg:px-[5rem]
                font-nunito font-bold
                text-white text-xl
                 sm:text-3xl md:text-4xl lg:text-5xl
                space-y-6 lg:space-y-0 lg:space-x-10
                fadeInDown ">
                Tough racks for every journey
              </h1>
             
            
          
        </div>
      </div>

      {/* About us */}

      <div className="  flex   lg:items-center flex-col lg:space-y-0   space-y-[2rem]  bg-black font-nunito text-center text-white  pb-[10rem]    ">
        <h3 className="text-4xl text-red-500 mt-8 ">BED RACK PROJECT [BRP]</h3>
        <div className="md:space-y-10 px-6 text-xl pt-10 space-y-9 ">
          <p>Built for adventure</p>
          <p>Customizable Design </p>
          <p>Reliable Performance</p>
          <p>Durable construction</p>
          <p>Easy Installation</p>
          <p>Weather resistance</p>
          <p>Optimized storage</p>
        </div>
      </div>

      {/* carousel */}
      <CarouselComp />

      {isOpen && <div className=" fadeInDown fixed inset-20 justify-center md:justify-start left-[1rem]  md:inset-16 lg:inset-32   md:w-1/2 lg:w-1/3 rounded-2xl flex items-center  bg-slate-900 transition-all duration-300 ease-in  ${open ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6 pointer-events-none'}">
          <form onSubmit={(e)=>handleWaitingList(e,'waitinglist')} className="flex flex-col px-8  md:w-2/3 space-y-10   ">
            <h2 className="text-red-500 text-center lg:text-left font-nunito text-2xl font-semibold font-roboto">
              Request a quote
            </h2>

            <button
              class="absolute top-3 right-3 p-2 rounded-full hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-300"
              aria-label="Close" onClick={()=>setIsOpen(false)}
>
  ✕ 
</button>

            <input
              type="text"
              placeholder="First Name"
              value={fname}
              name=""
              id=""
              className=" rounded-lg outline-none hover:border-red-700 border-2  border-gray-400  px-3 py-1"
              required
              onChange={(e) => setFname(e.target.value)}
            />



            <input
              type="email"
              placeholder="Email"
              value={email}
              className=" outline-none hover:border-red-700 border-2  border-gray-400 rounded-lg px-3 py-1 "
              required
              onChange={(e) => setEmail(e.target.value)}
            />

            <div className=" justify-center flex lg:justify-start">
              <button
                type="submit" 
                className="px-4 py-2 bg-red-400 focus:bg-black rounded-md text-white font-semibold"
              >
                {isForming ? "Requesting..." : "Get a quote"}
              </button>
            </div>
          </form>

          
          
        </div>
        }

      <div className="  flex   lg:items-center flex-col  md:mt-[-3rem]        lg:space-y-0   space-y-[3rem]  bg-black font-nunito text-center text-white  pb-6    ">
        <p className="text-3xl py-4 lg:border-b-4 lg:border-red-500 ">
          Book your Bedrack today.
        </p>
        <div className="space-y-10 text-xl pt-10">
          <p> 
            Customize yours for free starting today 
          </p>
          <p>Starting at $599 </p>
          <p>Beta testers will receive a $250 discounts </p>
          <Button1 onClick={()=>{
            setIsOpen(true)
            console.log('click')} } text={"Get a quote"} />
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
            Why the <span className="text-red-400">BED RACK PROJECT?</span>
          </h3>
        </div>

        <div className="flex lg:flex-row flex-col   ">
          <div className="lg:w-1/3 flex lg:px-6 px-1 items-center font-nunito ">
            <Card
              color={"border-red-400 "}
              icon={
                <GiWeightLiftingUp className=" text-white text-5xl group-hover:text-red-400  transition-colors duration-500 delay-150" />
              }
              title={"Built for strength"}
              content={
                "Made from heavy-duty steel, our bed racks are built to handle tough loads and rough roads without breaking a sweat."
              }
            />
          </div>

          <div className="lg:w-1/3 flex lg:px-6 px-1  items-center font-nunito">
            <Card
              color={"border-purple-500 "}
              icon={
                <IoIosCheckmark className=" text-white text-5xl group-hover:text-red-400 transition-colors duration-500 delay-150" />}
              title={"Perfect Fit"}
              content={
                "Each rack is precision-designed to fit your truck perfectly — no drilling, no gaps, just a seamless match"
              }
            />
          </div>

          <div className="lg:w-1/3 flex lg:px-6 px-1 items-center font-nunito">
            <Card
              color={"border-purple-500 "}
              icon={
                <FaToolbox  className=" text-white text-5xl group-hover:text-red-400 transition-colors duration-500 delay-150"/>
                
              }
              title={"Simple setup "}
              content={
                "Install in minutes with easy-fit parts and clear instructions — no tools, no hassle, just ready to roll."
              }
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

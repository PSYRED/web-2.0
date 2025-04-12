import React from 'react'
import gmc1 from "../assets/psyred_assets/GMC1.png";
import f_153 from "../assets/psyred_assets/F153.png";
import brp3 from "../assets/psyred_assets/BRP3.png";
import gmc2 from "../assets/psyred_assets/GMC2.png";


import trucks from "../assets/psyred_assets/shot4.png";
import ram_1500 from "../assets/psyred_assets/RAM1500.png";
import ram12 from "../assets/psyred_assets/RAM12.png";


const Product_three = () => {
  return (
    <div className="relative">
      <div className="lg:h-[100vh] h-[50vh]  flex justify-center     ">
        <div className="object-cover brightness-125    w-full lg:h-[100vh] h-[70vh]">
          <img
            src={gmc1}
            className="lg:h-[100vh] h-[50vh] md:w-full lg:w-full lg:object-cover lg:object-right-bottom object-cover object-center  "
            alt=""
            srcset=""
            onLoad={() => setIsLoading(true)}
          />
        </div>

        <div className="md:flex justify-center   font-nunito top-[10rem]    lg:top-[18rem] items-center    fadeInDown text-white absolute lg:px-[5rem] px-[1rem] space-y-10 lg:space-y-0  lg:mb-[7rem]       ">
          <div className=" flex-col items-center flex  space-y-[3rem]  lg:space-y-[2rem]   ">
            <h1 className="font-bold  lg:text-5xl     text-2xl ">
              Meet the BRP Three
            </h1>
          </div>
        </div>
      </div>

      <div className="flex lg:flex-row flex-col space-y-4 lg:space-y-0 mt-8 py-8">
        <div className="lg:w-1/2 w">
          <img src={f_153} alt="" />
        </div>
        <div className="lg:w-1/2 flex-col flex justify-center px-4 mx-8 space-y-4">
          <h2 className="lg:text-4xl text-2xl  font-semibold font-nunito">
            Security automated 
          </h2>
          <p className="font-nunito lg:text-lg ">
          The BRP III is compatible with trucks of all sizes, model and year. This enables it with security features that put owners at ease, with a live security camera that can be streamed from any device.
          </p>
        </div>
      </div>
      <div className="flex lg:flex-row-reverse flex-col space-y-4 lg:space-y-0 mt-0 py-0">
        <div className="lg:w-1/2 w">
          <img src={brp3} alt="" />
        </div>
        <div className="lg:w-1/2 flex-col flex justify-center px-4 mx-8 space-y-4">
          <h2 className="lg:text-4xl text-2xl  font-semibold font-nunito">
            Innovative Key System 
          </h2>
          <p className="font-nunito lg:text-lg ">
          Like all our bed racks, the system comes with a key tag that can unlock storage with a push of a button. The tag can be connected to your phone for more accessibility and remote control.
          </p>
        </div>
      </div>

      <div className="flex lg:flex-row flex-col space-y-4 lg:space-y-0 mt-8 py-8">
        <div className="lg:w-1/2 w">
          <img src={gmc2} alt="" />
        </div>
        <div className="lg:w-1/2 flex-col flex justify-center px-4 mx-8 space-y-4">
          <h2 className="lg:text-4xl text-2xl  font-semibold font-nunito">
            Rigid design 
          </h2>
          <p className="font-nunito lg:text-lg ">
          The BRP III weighs 155 lbs in total and is built to withstand 650 lbs of load on top. Not only does it give you overall strength but it is designed to your truck a rigid look to standout on the road.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Product_three
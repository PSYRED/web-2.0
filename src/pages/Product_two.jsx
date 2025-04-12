import React from 'react'
import shot1 from '../assets/psyred_assets/shot1.png'
import shot5 from "../assets/psyred_assets/shot5.png";
import shot6  from "../assets/psyred_assets/shot6.png";
import ram12 from "../assets/psyred_assets/RAM12.png";
import shader  from "../assets/psyred_assets/shader.png";


const Product_two = () => {
  return (
    <div className="relative">
      <div className="lg:h-[100vh] h-[50vh]  flex justify-center     ">
        <div className="object-cover brightness-125    w-full lg:h-[100vh] h-[70vh]">
          <img
            src={shot1}
            className="lg:h-[100vh] h-[50vh] md:w-full lg:w-full lg:object-cover lg:object-right-bottom object-cover object-center  "
            alt=""
            srcset=""
            onLoad={() => setIsLoading(true)}
          />
        </div>

        <div className="md:flex justify-center   font-nunito top-[12rem]    lg:top-[18rem] items-center    fadeInDown text-white absolute lg:px-[5rem] px-[1rem] space-y-10 lg:space-y-0  lg:mb-[7rem]       ">
          <div className=" flex-col items-center flex  space-y-[3rem]  lg:space-y-[2rem]   ">
            <h1 className="font-bold  lg:text-5xl     text-2xl ">
              Meet the New BRP Two
            </h1>
          </div>
        </div>
      </div>

      <div className="flex lg:flex-row flex-col space-y-4 lg:space-y-0 mt-8 py-8">
        <div className="lg:w-1/2 w">
          <img src={shot6} alt="" />
        </div>
        <div className="lg:w-1/2 flex-col flex justify-center px-4 mx-8 space-y-4">
          <h2 className="lg:text-4xl text-2xl  font-semibold font-nunito">
            Storage Cabin
          </h2>
          <p className="font-nunito lg:text-lg ">
          Our BRP II model comes with a new standout look for bed truck racks and their possible utility. BRP II is made for truck owners that are looking for more space while maximising truck look.
          </p>
        </div>
      </div>
      <div className="flex lg:flex-row-reverse flex-col space-y-4 lg:space-y-0 mt-0 py-0">
        <div className="lg:w-1/2 w">
          <img src={shot5} alt="" />
        </div>
        <div className="lg:w-1/2 flex-col flex justify-center px-4 mx-8 space-y-4">
          <h2 className="lg:text-4xl text-2xl  font-semibold font-nunito">
            Innovative key
          </h2>
          <p className="font-nunito lg:text-lg ">
          No more having to look for your keys. BRP II cabin and storage opens just when pushing a button. Keeping your materials safe
          </p>
        </div>
      </div>

      <div className="flex lg:flex-row flex-col space-y-4 lg:space-y-0 mt-8 py-8">
        <div className="lg:w-1/2 w">
          <img src={shader} alt="" />
        </div>
        <div className="lg:w-1/2 flex-col flex justify-center px-4 mx-8 space-y-4">
          <h2 className="lg:text-4xl text-2xl  font-semibold font-nunito">
            Extra accessories
          </h2>
          <p className="font-nunito lg:text-lg ">
          The side rails on the rack for the BRP II system enable different kinds of accessory attachment to be added on the system. From securing mountain bikes to ladders, BRP II increases utility and eases load out time and effort.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Product_two
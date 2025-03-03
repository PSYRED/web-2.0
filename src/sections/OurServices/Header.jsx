import React from 'react'

const Header = ({title}) => {
  return (
    <>
      <div className="backgroundImage  -z-10 bg-cover  relative bg-purple-300 ">
        <div className=" transition-all -z-20 duration-300 overlay" />
        <div className="pt-34 lg:pt-0  ">
          <div className=" w-3/4 h-72 mx-auto align-center pt-24 text-center  ">
            <span className="">
              <h1 className=" pb-10 text-white text-4xl lg:text-[2.7rem] font-bold  w-100 h-16   mt-4">
                {title}
              </h1>
            </span>
            <span>
              <p className=" text-white text-xl lg:text-2xl font-light font-roboto mt-4">
                From Concept to Success...Karibu Tech 
             </p>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header
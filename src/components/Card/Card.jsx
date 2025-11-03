import React from 'react'
import { IoIosTimer } from "react-icons/io";
import Button1 from '../Button/Button1';
import { Link } from 'react-router-dom';

function  Card({title,content,icon,color}) {
    const borderColor = "border-red-400"
    
   return (
     <div
       className={`group py-4   lg:p-5 md:w-[70rem] border-1  ${borderColor} rounded-lg  hover:border-2 hover:rounded-lg mt-3 transition-all duration-100 flex flex-col items-center space-y-4 mx-auto `}
     >
       <div
         className="bg-red-500 group-hover:bg-white group-hover:border-4 group-hover:border-red-400 w-24 h-24 rounded-full flex items-center  justify-center mt-6  mx-auto
           "  
       >
         {icon}
       </div>
       <h2 className="-200 mt-5 flex justify-center font-semibold text-xl">
         {title}
       </h2>
       <p className=" mt-8 text-center max-w-xs lg:text-left    font-nunito">
         {content}
       </p>

       <Link to={"products"}>
         <Button1 text={"Learn more"} />
       </Link>
     </div>
   );
}

export default Card
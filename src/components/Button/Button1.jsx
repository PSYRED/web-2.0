import { useState } from "react";
import React from 'react';



function Button1({text,onClick}) {
  return (
    <button onClick={onClick} className="px-4 py-2 bg-red-500 hover:bg-red-300 hover:text-black transition-all duration-200 delay-150 text-lg font-semibold   text-white rounded-sm font-roboto  ">
      {text}
    </button>
  );
}

export default Button1
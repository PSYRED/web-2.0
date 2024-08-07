import React from 'react'

function Button1({text}) {
  return (
    <button className="px-4 py-2 bg-purple-500 hover:bg-purple-300 hover:text-black transition-all duration-200 delay-150 text-lg font-semibold   text-white rounded-md font-roboto  ">
      {text}
    </button>
  );
}

export default Button1
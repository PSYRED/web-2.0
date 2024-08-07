import React, { useRef, useState } from "react";
import { FaPlus } from "react-icons/fa";

const Accordion2 = () => {
  const [activeIndex, setActiveindex] = useState(null);
  const contentRef = useRef(null);
  const handleClick = (index) => {
    if (activeIndex === index) {
      setActiveindex(null);
    } else {
      setActiveindex(index);
    }
  };
  const questions = [
    {
      title: "Backend Engineer",
      answer: "BackEnd engineers needed and wanted if interested Contact us   ",
    },
    {
      title: "Business Analyst ",
      answer: "Business Analyst needed and wanted if interested Contact us ",
    },
  ];

  const MappedComponent = React.memo(({ index, item }) => {
    return (
      <div
        className="bg-slate-200 flex flex-col   mb-4 rounded-lg  overflow-hidden transition-opacity "
        ref={contentRef}
      >
        <div
          key={index}
          onClick={() => handleClick(index)}
          className=" p-4 hover:border-2 hover:border-sky-900 transition-colors delay-400 duration-300  rounded-lg  justify-around  items-center  flex   w-full"
        >
          <p className="text-2xl font-bold ">{item.title}</p>
          <div className="text-xl text-blue-900">
            <FaPlus />
          </div>
        </div>

        <p
          className={`.accordion-body ${
            activeIndex === index
              ? "open active font-semibold fadeInDown    p-6 rounded-lg   text-black       "
              : ""
          }`}
        >
          {activeIndex === index && item.answer}
        </p>
      </div>
    );
  });
  return (
    <div className="">
      {questions.map((item, index) => {
        return <MappedComponent item={item} index={index} />;
      })}
    </div>
  );
};

export default Accordion2;
  
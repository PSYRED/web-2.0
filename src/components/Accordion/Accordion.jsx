import React, { useRef, useState } from "react";
import { FaPlus } from "react-icons/fa";

const Accordion = () => {
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
      title: "Question 1",
      answer: "Answer 1 content...",
    },
    {
      title: "Question 2",
      answer: "Answer 2 content...",
    },
    {
      title: "Question 3",
      answer: "Answer 3 content...",
    },
    {
      title: "Question 4",
      answer: "Answer 4 content...",
    },
  ];

  const MappedComponent = React.memo(({ index, item }) => {
    return (
      <>
        <div
          className="bg-slate-200 flex flex-col relative   mb-2 rounded-lg  overflow-hidden transition-opacity "
          ref={contentRef}
        >
          <div
            key={index}
            onClick={() => handleClick(index)}
            className=" p-4 hover:border-2 hover:border-sky-900 transition-colors delay-400 duration-300  rounded-lg  justify-around  items-center  flex  w-full"
          >
            <p className="text-2xl font-bold ">{item.title}</p>
            <div className="text-xl text-blue-900">
              <FaPlus />
            </div>
          </div>
        </div>
        <p
          className={` ${
            activeIndex === index
              ? "  bg-slate-200 fadeInDown mb-2 absolute z-20 lg:w-[35rem] w-[15rem] mt-[-0.5rem]    p-6 rounded-b-lg   text-black       "
              : ""
          }`}
        >
          {activeIndex === index && item.answer}
        </p>
      </>
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

export default Accordion;

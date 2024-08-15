import React from 'react'
import { Carousel } from "react-responsive-carousel";
import ship2 from "../../assets/10001.jpg";
import air from "../../assets/10002.jpg";
import trucks from "../../assets/10003.jpg";


const CarouselComp = () => {

    const slide = [
      {
        text: "Bienvenue chez Grace Global Logistics ",
        pic: air,
      },
      {
        text: "Bienvenue chez Grace Global Logistics",
        pic: trucks,
      },

      {
        text: "Bienvenue chez Grace Global Logistics ",
        pic: ship2,
      },
    ];
  return (
    <div className="relative h-[65vh] lg:h-full   ">
  

      <Carousel
        animationHandler="fade"
        swipeable={false}
        autoPlay={true}
        interval={8000}
        infiniteLoop={true}
        className="     "
        showIndicators={false}
      >
        {slide.map((item) => {
          return (
            <>
              <div className="lg:mt-0      ">
                <img
                  src={item.pic}
                  className="lg:h-[100vh] h-[100vh]     -z-40   object-cover object-bottom    

                      "
                  alt=""
                />

                
              </div>
            </>
          );
        })}
      </Carousel>
    </div>
  );
}



export default CarouselComp
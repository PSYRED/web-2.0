import React from "react";
import ship2 from "../assets/ship2.jpg";
import air from "../assets/air.jpg";
import trucks from "../assets/trucks.jpg";
import PhotoAlbum from "react-photo-album";
import RoadRender from "../assets/RoadRender.png";
import { FaRoad } from "react-icons/fa";

import CardComponent from "./../components/Card/CardComponent";
import blu from "./../assets/Blu-logistics.png";
import fabpic from "./../assets/fabpic.png";
import pport from "./../assets/pport.png";
import Header from "../sections/OurServices/Header";


const Gallery = () => {
  const photos = [
    {
      width: 500,
      src: trucks,
      height: 500,
    },
    {
      width: 500,
      src: air,
      height: 500,
    },
     
    {
      width: 500,
      src: RoadRender,
      height: 500,
    },
  ];
  return (
    <>
      {/* header image */}
      <Header title={"Portfolio"} />

      <div className="my-[10rem]">
        <div className="lg:grid grid-cols-3 lg:gap-x-1 space-y-4 lg:space-y-0 lg:ml-14 mx-8 ">
          <CardComponent
            link={"https://blue-channel.vercel.app"}
             imgSrc={blu}
            title={"Blu-Channel Logistics Web App"}
          />
          <CardComponent
            link={"https://fablabrwanda.vercel.app/"}
            imgSrc={fabpic}
            title={"Fablab Web App"}
          />
          <CardComponent
            link={"https://pportfolio-rk7n.vercel.app/#about"}
            imgSrc={pport}
            title={"Personal Web Portfolio"}
          />
        </div>
      </div>
    </>
  );
};

export default Gallery;

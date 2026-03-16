import React from "react";
import Header from "../sections/OurServices/Header";
import TwoColumn from "../sections/OurServices/TwoColumn";
import { Outlet } from "react-router-dom";
import headerImg from '../assets/10003.jpg?format=webp&quality=80'


const Products = () => {
  return (
    <div>
      <Header title={"Our Products"} imgLink={headerImg} />
      <TwoColumn/>
       
    </div>
  );
};

export default Products;

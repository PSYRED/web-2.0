import React from "react";
import Header from "../sections/OurServices/Header";
import TwoColumn from "../sections/OurServices/TwoColumn";
import { Outlet } from "react-router-dom";

const Products = () => {
  return (
    <div>
      <Header title={"Our Products"} />
      <TwoColumn/>
       
    </div>
  );
};

export default Products;

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Outlet, Routes,Route } from "react-router-dom";

import Nav from "./components/Navbar/Nav.jsx";

import About from "./pages/About.jsx"
import Contact from "./pages/Contact.jsx";
import Gallery from "./pages/Gallery.jsx";
import Careers from "./pages/Careers.jsx"
import Product_one from "./pages/Product_one.jsx";
import Product_two from "./pages/Product_two.jsx"; 
import Product_three from "./pages/Product_three.jsx";

import Services from "./pages/Services.jsx";

import ScrollToTop from "./components/ScrollToTop/ScrollToTop.jsx";
import Footer3 from "./components/Footer/Footer3.jsx";
const Layout = () => {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer3/>
    </>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<App />} />
          <Route path="about" element={<About />} />
          <Route path="careers" element={<Careers />} />
          <Route path="contact" element={<Contact />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="services" element={<Services />} />
          <Route path="services/product_one" element={<Product_one />} />
          <Route path="services/product_two" element={<Product_two />} />
          <Route path="services/product_three" element={<Product_three />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

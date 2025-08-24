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
import Sign_up from "./pages/Sign_up.jsx";

import { AuthProvider } from "./auth/AuthContext.jsx";
import Checkout from "./dashboard/Checkout.jsx";
import Home from "./dashboard/Home.jsx";
import { Studio } from "./dashboard/Studio.jsx";
const Layout = () => {
  return (
    <>
          <AuthProvider>
            <Nav />
            <Outlet />
            <Footer3/>

          </AuthProvider>
      
   
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
          <Route path="sign_up" element={<Sign_up />} />
          <Route path="dashboard/Home" element={<Home/>} />
          <Route path="dashboard/Studio" element={<Studio/>} />

          <Route path="dashboard/Checkout" element={<Checkout/>} />
          
        </Route>
      </Routes>
     
    </BrowserRouter>
  </React.StrictMode>
);

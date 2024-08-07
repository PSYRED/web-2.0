import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Outlet, Routes,Route } from "react-router-dom";

import Nav from "./components/Navbar/Nav.jsx";
import Footer from "./components/Footer/Footer.jsx";
import About from "./pages/About.jsx"
import Contact from "./pages/Contact.jsx";
import Gallery from "./pages/Gallery.jsx";
import Careers from "./pages/Careers.jsx"
import { Footer2 } from "./components/Footer/Footer2.jsx";
import Services from "./pages/Services.jsx";

import ScrollToTop from "./components/ScrollToTop/ScrollToTop.jsx";
const Layout = () => {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer2 />
    </>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
    <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<App />} />
          <Route path="about" element={<About />} />
          <Route path="careers" element={<Careers />} />
          <Route path="contact" element={<Contact />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="services" element={<Services />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

import React from "react";
import Slider from "../components/Slider";
import Navbar from "../components/Navbar";
import Sales from "../components/Sales";
import Categories from "../components/Categories";
import Newslatter from "../components/Newslatter";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      
      <Navbar/>
      <Slider/>
      <Categories/>
    <Sales/>
      <Newslatter/>
      <Footer/>
    </div>
  );
};

export default Home;
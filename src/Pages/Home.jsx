import React from "react";
import { Link } from "react-router-dom";
import Hero from "../Components/Hero";
import TopSellers from "../Components/topSellers";
import SubscribeBox from "../Components/SubscribeBox";

const Home = () => {

  return (

    <>
    
      <Hero />
      <TopSellers />
      <SubscribeBox />
    </>
  );
};

export default Home;

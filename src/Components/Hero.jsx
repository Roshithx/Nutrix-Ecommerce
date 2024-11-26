import React from "react";
import { assets, banner } from "../assets/assets";
import { Link } from "react-router-dom";
const Hero = () => {

  
  return (
    <div className="flex flex-col sm:flex-row border border-gray-300 shadow mt-10 ">
      <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0 bg-black text-white ">
        <div className="text-[#414141]">
          <div className="flex items-center gap-2">
            <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
            <p className="font-medium  text-white text-sm md:text-base "> {banner[0].product}</p>
          </div>
          <h1 className="text-5xl  text-white sm:py-3 lg:text:5xl leading-relaxed">
            {banner[0].title}
          </h1>
          <div className="flex items-center gap-2">
            <Link to={'/shop'} className="bg-[#414141] text-white py-2 px-4">
            {banner[0].button}
            </Link>
            <p className="  text-white text-sm md:text-base">Limited Time Offer</p>
          </div>
        </div>
      </div>
      <img className="w-full sm:w-1/2" src={banner[0].image.hero_img} alt="" />
    </div>
  );
};

export default Hero;

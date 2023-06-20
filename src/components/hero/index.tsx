import React from "react";
import { IoIosArrowDown } from "react-icons/io";

const HeroSection = () => {
  return (
    <div className="h-[100vh] bg-[url('/hero/background.png')]  bg-cover bg-center bg-no-repeat relative">
      {/* heading */}
      <div className=" max-w-7xl mx-auto flex flex-row items-center justify-between gap-5 pt-2">
        <h1 className="text-[#5F5F5F] text-sm font-light">Jewelry & Accessories</h1>
        <h1 className="text-[#5F5F5F] text-sm font-light border-b-2 border-black ">
          Clothing & Shoes
        </h1>
        <h1 className="text-[#5F5F5F] text-sm font-light">Home & Living</h1>
        <h1 className="text-[#5F5F5F] text-sm font-light">Wedding & Party</h1>
        <h1 className="text-[#5F5F5F] text-sm font-light">Toys & Entertainment</h1>
        <h1 className="text-[#5F5F5F] text-sm font-light">Art & Collectibles</h1>
        <h1 className="text-[#5F5F5F] text-sm font-light">Craft Supplies & Tools</h1>
        <h1 className="text-[#5F5F5F] text-sm font-light">Vintage</h1>
      </div>
      <div className="max-w-7xl mx-auto flex flex-row items-center justify-between">
        <div className="flex flex-col gap-9 mt-16">
          <h1 className="font-normal text-sm"> 100% QUALITY, 100% SATISFACTION </h1>
          <h1 className="font-extrabold text-7xl leading-[5rem]">
            Where the world <br /> comes to shop.
          </h1>
          <h1 className="font-normal text-2xl text-[#000002]">
            Life is hard enough already. Let us make it a little <br /> easier, Vision of Snipshop
            for a better outlook.
          </h1>
          <div className="flex flex-row items-end justify-between">
            <button className="bg-[#2B2B2B] rounded-3xl px-6 py-2 text-white">shop now</button>
            <h1 className="font-normal text-[#262626]">
              start from <br />
              <span className="font-bold text-xl text-black">110.00$</span>
            </h1>
          </div>
        </div>
        <div className="flex flex-col gap-5 items-center">
          <img src={"/hero/cam2.png"} className="h-[100px] w-[100px]" />
          <h1>
            Fuji 14mm <br /> Lens
          </h1>
          <img src={"/hero/cam1.png"} className="h-[100px] w-[100px]" />
          <h1>Camera stand</h1>
          <button className="bg-black text-white p-2 rounded-full">
            <IoIosArrowDown />
          </button>
        </div>
      </div>
      <div className="absolute right-[32rem] top-[5rem] flex flex-col items-center gap-10">
        <img
          src={"/hero/camera.png"}
          className="h-[30rem] w-[30rem] border-[10px] rounded-full border-[#2062FF66]"
        />
        <div className="flex flex-row items-center justify-center gap-4">
          <button className=" text-[#2062FF66] text-sm uppercase">PREV</button>
          <button className="h-2 w-2 bg-[#1D65FF] rounded-full"></button>
          <button className="h-2 w-2 bg-[#2062FF66] rounded-full"></button>
          <button className="h-2 w-2 bg-[#2062FF66] rounded-full"></button>
          <button className="h-2 w-2 bg-[#2062FF66] rounded-full"></button>
          <button className=" text-[#2062FF66] text-sm uppercase">Next</button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

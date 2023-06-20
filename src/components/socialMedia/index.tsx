import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

const SocialMediaComponent = () => {
  const Items = [
    { image: "/socialMedia/image50.png", price: "22", logo: "/socialMedia/fb.svg" },
    { image: "/socialMedia/image51.png", price: "24", logo: "/socialMedia/ins.svg" },
    { image: "/socialMedia/image52.png", price: "56", logo: "/socialMedia/tw.svg" },
  ];
  return (
    <div className="flex flex-row items-center justify-center gap-10 p-20 bg-[#F4FCFF]">
      <div className="w-[37%] h-[600px] pl-10 flex flex-col justify-center gap-10">
        <h1 className="text-3xl font-bold font-spectral">Sell Easily on Socialmedia</h1>
        <h1 className="text-sm font-normal font-poppins">
          Life is hard enough already. Let us <br />
          make it a little easier.
        </h1>
        <button className="flex flex-row items-center font-poppins">
          See All <IoIosArrowRoundForward className="h-8 w-8" />
        </button>
      </div>
      <div className="w-[30%] h-[500px] bg-[url('/socialMedia/Vector1.svg')] bg-no-repeat flex flex-row flex-wrap items-center justify-center relative">
        <div className="bg-[#FFB082] w-[300px] h-[300px] blur-none opacity-40 left-28 rounded-3xl absolute" />
        <div className="bg-[url('/socialMedia/person.png')] bg-no-repeat w-[300px] h-[300px] blur-none left-44 bottom-40 rounded-2xl absolute" />
        <div className=" flex flex-row flex-wrap items-center justify-center gap-10 z-30 absolute bottom-28 left-28">
          {Items.map((data) => {
            return (
              <div key={data.image} className="rounded-lg relative border-0">
                <img src={data.image} className="h-[7rem] w-[6rem] relative" />
                <div className="flex flex-col items-start justify-between gap-14 left-2 top-2 w-full absolute">
                  <img src={data.logo} className=" left-0 top-0" />
                  <h1 className="font-medium">${data.price}</h1>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SocialMediaComponent;

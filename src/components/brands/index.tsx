import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

const Brands = () => {
  const Brands = [
    { image: "/brands/Apple.svg" },
    { image: "/brands/BMW.svg" },
    { image: "/brands/fila.svg" },
    { image: "/brands/Nike.svg" },
    { image: "/brands/mi.svg" },
    { image: "/brands/adi.svg" },
  ];
  return (
    <div className="flex flex-row items-center justify-center gap-10 p-20 mt-10 bg-[#F4FCFF]">
      <div className="w-[37%] h-[600px] bg-[url('/brands/Vector.svg')] bg-no-repeat flex flex-row flex-wrap items-center justify-center relative">
        <div className="bg-[#D6C5FF] w-[400px] h-[400px] blur-none opacity-40 rounded-2xl absolute" />
        <div className="flex flex-row flex-wrap items-center justify-center gap-10 z-30">
          {Brands.map((data) => {
            return (
              <div key={data.image} className="bg-white p-5 rounded-lg">
                <img src={data.image} className="h-[6rem] w-[6rem]" />
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-[37%] h-[600px] pl-10 flex flex-col justify-center gap-10">
        <h1 className="text-3xl font-bold font-spectral">
          Explore Most Popular <br /> Brands
        </h1>
        <h1 className="text-sm font-normal font-poppins">
          Life is hard enough already. Let us <br />
          make it a little easier.
        </h1>
        <button className="flex flex-row items-center font-poppins">
          See All <IoIosArrowRoundForward className="h-8 w-8" />
        </button>
      </div>
    </div>
  );
};

export default Brands;

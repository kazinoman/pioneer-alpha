import React from "react";
import { IoIosArrowBack, IoIosArrowForward, IoIosArrowRoundForward } from "react-icons/io";

const FeaturedProducts = () => {
  const Products = [
    {
      name: "VERSACE",
      image: "/featurecProducts/image.png",
      price: "285",
      description: "EROS - W",
      gender: " - Women",
    },
    {
      name: "N.5 CHANEL",
      image: "/featurecProducts/image(1).png",
      price: "258",
      description: "EAU DE PARFUM - M",
      gender: " - Man",
    },
    {
      name: "GABRIELLE",
      image: "/featurecProducts/image(2).png",
      price: "234",
      description: "CHANEL PARIS- M",
      gender: " - Man",
    },
  ];

  return (
    <div className="mt-[10rem]">
      <div className="max-w-5xl mx-auto">
        <div className=" mt-10 relative text-center flex flex-row gap-5 items-center justify-center">
          <div className=" text-center flex flex-row gap-5 items-center justify-center">
            <h1 className="text-3xl font-bold font-spectral">
              Featured Product For <br /> Pre-Order
            </h1>
          </div>
          <div className="absolute right-0 flex flex-row items-center text-sm font-normal">
            Discover Our Products <IoIosArrowRoundForward className="h-8 w-8" />
          </div>
        </div>
      </div>
      <div className="flex flex-row px-10 mt-40 gap-10 items-center justify-around rounded-lg ">
        <div className="h-[400px] w-[400px] flex flex-row items-center justify-end">
          <button className={`p-1 rounded-2xl border-solid border-black bg-black border-2 mr-3 `}>
            <IoIosArrowBack className={`text-white`} />
          </button>
          <button className={`p-1 rounded-2xl border-solid border-black border-2`}>
            <IoIosArrowForward className={``} />
          </button>
        </div>
        {Products.map((data) => {
          return (
            <div className="flex flex-col items-center gap-10">
              <div className="h-[450px] w-[400px] border-2 rounded-2xl shadow-md">
                <img src={data.image} className="h-[400px] w-[500px] mt-[-90px] rounded-lg" />
                <div className="flex flex-col items-center justify-around gap-5 font-poppins">
                  <h1 className="font-bold text-xl ">{data.name}</h1>
                  <h1 className="font-bold text-md">
                    {data.description} <span className="font-normal text-md">{data.gender}</span>
                  </h1>
                  <h1 className="font-bold text-md text-[#0E4B80]">${data.price} USD</h1>
                </div>
              </div>
              <button className="uppercase px-8 py-2 bg-[#001439] text-white rounded-3xl">
                order now
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FeaturedProducts;

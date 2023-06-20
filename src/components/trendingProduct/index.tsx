"use client";
import React, { useEffect, useState } from "react";
import ProductCategory from "./singleCategoryCard";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const TrendingProducts = () => {
  const [buttonSelect, setbuttonSelect] = useState<string>("");
  const category = [
    {
      name: "Seven Zero Five",
      status: "Starting",
      price: "20",
      background: "linear-gradient(234.3deg, #C0D4FE 16.99%, #ECF1FD 91.97%)",
      image: "productcategoryImage/image-removebg-preview.svg",
      shadow: "15px 2px 40px -20px rgba(40, 48, 40, 0.4)",
    },
    {
      name: "Clock",
      status: "starting",
      price: "25 ",
      background: "#E9EBF0",
      image: "productcategoryImage/image-removebg-preview2.svg",
      shadow: "15px 2px 40px -20px rgba(40, 48, 40, 0.4)",
    },
    {
      name: "Curology",
      status: "Starting",
      price: "20",
      background: "#F0EBFF",
      image: "productcategoryImage/image-removebg-preview3.svg",
      shadow: "15px 2px 40px -20px rgba(46, 32, 94, 0.65)",
    },
    {
      name: "Chair",
      status: "starting",
      price: "20",
      background: "#EBF9FF",
      image: "productcategoryImage/image-removebg-preview4.svg",
      shadow: "15px 2px 40px -20px rgba(40, 48, 40, 0.4)",
    },
    {
      name: "Curology",
      status: "starting",
      price: "60",
      background: "#E9F0FF",
      image: "productcategoryImage/image-removebg-preview5.svg",
      shadow: "15px 2px 40px -20px rgba(40, 48, 40, 0.4)",
    },
    {
      name: "Curology",
      status: "starting",
      price: "60",
      background: "#E9F0FF",
      image: "productcategoryImage/image-removebg-preview.svg",
      shadow: "15px 2px 40px -20px rgba(40, 48, 40, 0.4)",
    },
    {
      name: "Curology",
      status: "starting",
      price: "60",
      background: "#E9F0FF",
      image: "productcategoryImage/image-removebg-preview2.svg",
      shadow: "15px 2px 40px -20px rgba(40, 48, 40, 0.4)",
    },
    {
      name: "Curology",
      status: "starting",
      price: "60",
      background: "#E9F0FF",
      image: "productcategoryImage/image-removebg-preview3.svg",
      shadow: "15px 2px 40px -20px rgba(40, 48, 40, 0.4)",
    },
    {
      name: "Curology",
      status: "starting",
      price: "60",
      background: "#E9F0FF",
      image: "productcategoryImage/image-removebg-preview4.svg",
      shadow: "15px 2px 40px -20px rgba(40, 48, 40, 0.4)",
    },
    {
      name: "Curology",
      status: "starting",
      price: "60",
      background: "#E9F0FF",
      image: "productcategoryImage/image-removebg-preview.svg",
      shadow: "15px 2px 40px -20px rgba(40, 48, 40, 0.4)",
    },
    {
      name: "Curology",
      status: "starting",
      price: "60",
      background: "#E9F0FF",
      image: "productcategoryImage/image-removebg-preview.svg",
      shadow: "15px 2px 40px -20px rgba(40, 48, 40, 0.4)",
    },
  ];
  let box = document.querySelector(".product-container");
  const buttonPressPrev = () => {
    if (box) {
      let width = box.clientWidth;
      box.scrollLeft = box.scrollLeft - width;
    }
    setbuttonSelect("prev");
  };
  const buttonPressNext = () => {
    // let box = document.getElementById(".product-container");
    if (box) {
      let width = box.clientWidth;
      box.scrollLeft = box.scrollLeft + width;
    }
    setbuttonSelect("next");
  };

  return (
    <div className="mt-20">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl text-center font-semibold  font-spectral">
          Shop out trending products
        </h1>
        <h1 className="text-md text-center mt-5 font-poppins">
          Life is hard enough already. Let us make it a <br /> little easier.
        </h1>
        <div className=" mt-10 relative text-center flex flex-row gap-5 items-center justify-center">
          <div className=" text-center flex flex-row gap-5 items-center justify-center font-poppins">
            <Heading text="Fashion" classes="underline" />
            <Heading text="Technology" />
            <Heading text="Interiors" />
            <Heading text="Food & Drinks" />
          </div>
          <div className="absolute right-0 flex flex-row">
            <button
              className={`p-1 rounded-2xl border-solid border-black border-2 mr-3 ${
                buttonSelect === "prev" ? `bg-black ` : ``
              }`}
              onClick={buttonPressPrev}
            >
              <IoIosArrowBack
                className={` ${
                  buttonSelect === "prev" ? `text-white border-solid border-black border-2` : null
                }`}
              />
            </button>
            <button
              className={`p-1 rounded-2xl border-solid border-black border-2 ${
                buttonSelect === "next" ? `bg-black ` : ``
              }`}
              onClick={buttonPressNext}
            >
              <IoIosArrowForward
                className={`${
                  buttonSelect === "next" ? `text-white border-solid border-black border-2` : null
                }`}
              />
            </button>
          </div>
        </div>
      </div>
      <div className="flex scroll-smooth overflow-hidden gap-5 mt-5 p-0 w-[100%] product-container">
        {category.map((data, key: number) => {
          return (
            <ProductCategory
              image={data.image}
              name={data.name}
              price={data.price}
              status={data.status}
              key={key}
              background={data.background}
              shadow={data.shadow}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TrendingProducts;

interface HeadingProps {
  text: string;
  classes?: string;
}

const Heading: React.FC<HeadingProps> = ({ text, classes }) => {
  return <h1 className={`font-medium text-xs ${classes}`}>{text}</h1>;
};

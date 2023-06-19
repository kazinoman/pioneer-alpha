"use client";
import { getPr } from "@/services/products.service";
import React, { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import ProductCard from "./productCard";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
  discountPercentage: number;
}

interface ProductListProps {
  products: Product[];
}

const ShopByCategory: React.FC<ProductListProps> = ({ products }) => {
  const [buttonSelect, setbuttonSelect] = React.useState<string>("");
  console.log(products);
  return (
    <div className="max-w-5xl mx-auto mt-16">
      <div className="flex flex-row items-end justify-between">
        <div className="flex flex-col items-start justify-start gap-3">
          <h1 className="font-bold text-xl">Shop by category</h1>
          <h1 className="font-thin text-sm">
            Life is hard enough already. Let us <br /> make it a little easier.
          </h1>
        </div>
        {/* buttons */}
        <div>
          {" "}
          <button className={`p-1 rounded-2xl border-solid border-black border-2 mr-3 ${buttonSelect === "prev" ? `bg-black ` : ``}`}>
            <IoIosArrowBack className={` ${buttonSelect === "prev" ? `text-white border-solid border-black border-2` : null}`} />
          </button>
          <button className={`p-1 rounded-2xl border-solid border-black border-2 ${buttonSelect === "next" ? `bg-black ` : ``}`}>
            <IoIosArrowForward className={`${buttonSelect === "next" ? `text-white border-solid border-black border-2` : null}`} />
          </button>
        </div>
      </div>
      {/* items show case */}
      <div className="flex flex-row flex-wrap items-center justify-between gap-7 w-[100%] mt-5">
        {products?.slice(0, 9).map((data) => {
          return <ProductCard key={data.id} name={data.title} price={data.price} image={data.images[0]} discountPrice={data.discountPercentage} />;
        })}
      </div>
    </div>
  );
};

export default ShopByCategory;

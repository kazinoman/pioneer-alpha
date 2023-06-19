import Image from "next/image";
import React from "react";
import { FiPlusCircle } from "react-icons/fi";

type ProductProps = {
  price: number;
  name: string;
  discountPrice: number;
  image: string;
};

const ProductCard: React.FC<ProductProps> = ({ price, name, image, discountPrice }) => {
  return (
    <div className="w-[300px] p-5 flex flex-col items-center border-[1.5px]  rounded-3xl shadow-sm hover:shadow-md ease-in duration-300">
      <div className="flex flex-col items-start gap-3 w-full">
        <div className="flex flex-col items-start gap-5 w-full">
          <img src={image ? image : ""} className="w-[100%] h-[150px] rounded-2xl self-center" alt="adsf" />
          <h1 className="font-medium text-lg">{name}</h1>
        </div>
        <div className="flex flex-row items-end justify-between w-full">
          <div className="flex flex-row gap-3 items-end">
            <h1 className="font-normal text-md">${price - discountPrice}</h1>
            <h1 className="font-normal text-md text-red-600 line-through">${price}</h1>
          </div>
          <button className="bg-[#F0F0F0] p-4 rounded-[50%]">
            <FiPlusCircle className="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

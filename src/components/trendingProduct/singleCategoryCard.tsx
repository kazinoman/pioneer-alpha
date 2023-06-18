"use client";
import Image from "next/image";
import React from "react";

interface ProductProps {
  price: string;
  name: string;
  image: string;
  status: string;
  background: string;
  shadow: string;
}

const ProductCategory: React.FC<ProductProps> = ({ price, name, image, status, background, shadow }) => {
  return (
    <div className={`shadow-sm backdrop-blur-md bg-[${background}] w-[15rem] h-40 min-w-[15rem] mt-14 mb-3 flex flex-row p-5 relative overflow-visible rounded-lg`} style={{ backgroundColor: `${background}`, overflow: "visible" }}>
      <div className="flex flex-col items-start justify-between">
        <div>
          <h2 className="font-semibold text-lg">{name}</h2>
          <p className=" font-normal text-sm">{status}</p>
        </div>
        <p className="font-medium text-sm text-[red]">${price}</p>
      </div>
      <Image src={image} alt="Image Description" width={80} height={80} className={`absolute left-32 top-[-40px] object-contain overflow-visible `} />
    </div>
  );
};

export default ProductCategory;

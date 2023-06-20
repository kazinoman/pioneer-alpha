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

const ProductCategory: React.FC<ProductProps> = ({
  price,
  name,
  image,
  status,
  background,
  shadow,
}) => {
  return (
    <div
      className={`shadow-sm backdrop-blur-md bg-[${background}] w-[220px] h-[120px] min-w-[200px] mt-14 mb-3 flex flex-row p-5 relative overflow-visible rounded-lg`}
      style={{ backgroundColor: `${background}`, overflow: "visible" }}
    >
      <div className="flex flex-col items-start justify-between">
        <div>
          <h2 className="font-semibold text-lg font-poppins">{name}</h2>
          <p className=" font-normal text-sm font-poppins">{status}</p>
        </div>
        <p className="font-medium text-sm text-[red]">${price}</p>
      </div>
      <img
        src={image}
        alt="Image Description"
        className={`absolute left-20 h-[130px] w-[130px] top-[-30px] object-contain overflow-visible `}
      />
    </div>
  );
};

export default ProductCategory;

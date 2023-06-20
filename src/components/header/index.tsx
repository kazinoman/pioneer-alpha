import Image from "next/image";
import React from "react";
import { AiOutlineMenu, AiOutlineHeart, AiOutlineSearch } from "react-icons/ai";
import { IoPersonOutline } from "react-icons/io5";
import { BiShoppingBag } from "react-icons/bi";

const Header = () => {
  return (
    <div className="h-[78px]  bg-[#1E66FF] text-white">
      <div className="h-full max-w-7xl mx-auto flex flex-row items-center justify-between ">
        <Image src="/Logo.svg" alt="asdf" width={100} height={26} />
        <div className="w-[60%]">
          <div className="rounded-full bg-white flex flex-row items-center justify-between">
            <input
              className="ml-5 w-[80%] focus:outline-none text-black"
              placeholder="Search SnipShop.com"
            />
            <button className="rounded-full w-20 h-[28px] bg-[#4DC3F7] flex flex-row items-center justify-center">
              <AiOutlineSearch />
            </button>
          </div>
        </div>
        <div className="flex flex-row items-center gap-4">
          <div className="flex flex-row items-center">
            <IoPersonOutline />
            <h1>Account</h1>
          </div>
          <div className="flex flex-row items-center">
            <AiOutlineHeart />
            <h1>My Items</h1>
          </div>
          <div>
            <BiShoppingBag />
          </div>
          <div>
            <AiOutlineMenu />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

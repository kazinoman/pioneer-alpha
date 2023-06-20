"use client";
import Image from "next/image";
import React from "react";
import { AiOutlineMenu, AiOutlineHeart, AiOutlineSearch } from "react-icons/ai";
import { IoPersonOutline } from "react-icons/io5";
import { BiShoppingBag } from "react-icons/bi";
import { Badge } from "@mui/material";

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
            <button className="rounded-full w-16 h-[28px] bg-[#4DC3F7] flex flex-row items-center justify-center">
              <AiOutlineSearch className="w-6 h-6" />
            </button>
          </div>
        </div>
        <div className="flex flex-row items-center gap-5">
          <div className="flex flex-row items-center gap-2">
            <IoPersonOutline />
            <h1 className="font-normal text-sm font-roboto">Account</h1>
          </div>
          <div className="flex flex-row items-center gap-2">
            <AiOutlineHeart />
            <h1 className="font-normal text-sm font-roboto">My Items</h1>
          </div>
          <div>
            <Badge badgeContent={4} color="warning">
              <BiShoppingBag />
            </Badge>
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

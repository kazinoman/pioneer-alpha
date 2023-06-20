import React from "react";

const Footer = () => {
  const icons = [
    "/footer/ins.svg",
    "/footer/fb.svg",
    "/footer/tw.svg",
    "/footer/wi.svg",
    "/footer/pi.svg",
  ];
  return (
    <div className=" text-white ">
      <div className="h-[20rem] bg-[#0E4B80] text-white p-10 mt-20 bg-[url('/footer/Vector.svg')] bg-center bg-no-repeat">
        <div className="max-w-5xl mx-auto flex flex-row gap-10">
          <div className="w-[25%]  flex flex-col gap-5">
            <h1 className="font-bold text-lg">Shop</h1>
            <div className="flex flex-col gap-2">
              <h1 className="font-normal text-sm cursor-pointer">Gift cards</h1>
              <h1 className="font-normal text-sm cursor-pointer">ShipShop blog</h1>
            </div>
          </div>
          <div className="w-[25%]  flex flex-col gap-5">
            <h1 className="font-bold text-lg">Sell</h1>
            <div className="flex flex-col gap-2">
              <h1 className="font-normal text-sm cursor-pointer">Sell on SnipShop</h1>
              <h1 className="font-normal text-sm cursor-pointer">Tearms</h1>
              <h1 className="font-normal text-sm cursor-pointer">Forums</h1>
              <h1 className="font-normal text-sm cursor-pointer">Affiliates</h1>
            </div>
          </div>
          <div className="w-[25%]  flex flex-col gap-5">
            <h1 className="font-bold text-lg">About</h1>
            <div className="flex flex-col gap-2">
              <h1 className="font-normal text-sm cursor-pointer">SnipShop, inc.</h1>
              <h1 className="font-normal text-sm cursor-pointer">Policies</h1>
              <h1 className="font-normal text-sm cursor-pointer">Investors</h1>
              <h1 className="font-normal text-sm cursor-pointer">Careers </h1>
              <h1 className="font-normal text-sm cursor-pointer">Press</h1>
              <h1 className="font-normal text-sm cursor-pointer">Impact</h1>
            </div>
          </div>
          <div className="w-[25%]  flex flex-col gap-5">
            <h1 className="font-bold text-lg">Help</h1>
            <div className="flex flex-col gap-2">
              <h1 className="font-normal text-sm cursor-pointer">Help center</h1>
              <h1 className="font-normal text-sm cursor-pointer">Trust and safety</h1>
              <h1 className="font-normal text-sm cursor-pointer">Privacy settings </h1>
            </div>
            <button className="flex flex-row items-center gap-4 px-0.5 py-0.5 rounded-3xl border-2">
              <img src={"/footer/btnSvg.svg"} className="w-6 h-6" />
              <span className="text-xs">Download the SnipShop App</span>
            </button>
            <div className="flex flex-row gap-3">
              {icons.map((data) => {
                return <img src={data} />;
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="h-[4rem] w-full bg-[#232347] ">
        <div className="max-w-5xl mx-auto flex flex-row items-center justify-between h-full">
          <h2>© 2021-2023 SnipShop.com</h2>
          <div className="flex flex-row gap-5">
            <h2>Terms of use</h2>
            <h2>Privacy</h2>
            <h2>Interest-based ads</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

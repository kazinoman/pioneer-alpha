import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Comments = () => {
  return (
    <div className="mt-16 flex flex-row gap-20">
      <div className="w-[50%] border-2 h-[35rem] rounded-tr-2xl rounded-br-2xl bg-[#CEF0FF] flex flex-row items-center justify-end">
        <div className="border-2 w-[400px] h-[90%] mr-10 bg-[url('/comments/Vec.svg')] border-[#B8E5F9] rounded-xl">
          <img src={"/comments/pic.png"} />
        </div>
      </div>
      <div className="w-[50%] flex flex-col items-start justify-center gap-10">
        <div className=" flex flex-col items-start justify-center gap-3">
          <h1 className="font-bold">Justin Pierre</h1>
          <p className="font-normal text-sm">Products Seller</p>
        </div>
        <h1 className="font-medium text-lg w-[30rem]">
          “In 2 years, my business went from just me and my Shop site to 40 employees, my own
          fulfillment center and over 22 million dollars in revenue.”
        </h1>
        <div>
          <div className=" flex flex-row items-center justify-end">
            <button className={`p-1 rounded-2xl border-solid border-black bg-black border-2 mr-3 `}>
              <IoIosArrowBack className={`text-white`} />
            </button>
            <button className={`p-1 rounded-2xl border-solid border-black border-2`}>
              <IoIosArrowForward className={``} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comments;

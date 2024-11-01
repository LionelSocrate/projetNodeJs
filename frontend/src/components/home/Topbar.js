import React from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { Link } from "react-router-dom";

export default function Topbar() {
  return (
    <>
      <div className=" w-full flex items-center justify-between px-12 bg-[var(--white)]  py-4">
        <div className=" flex items-center gap-2 cursor-pointer">
          <Link to="/" className=" flex items-center gap-2">
            <img src="/images/logo.png" alt="polypusLogo" width={120} />
          </Link>
        </div>

        <div className=" relative z-10  rounded-full overflow-hidden  ">
          <input
            type="search"
            className=" w-[22rem] outline-none rounded-full border-none bg-[var(--gray)]  py-2 px-5 placeholder:font-extralight"
            placeholder="recherche..."
          />
          <div className=" absolute top-0 right-0 flex items-center justify-center h-full px-2 bg-orange-300">
            <HiOutlineSearch
              className=" text-white  font-bold"
              size={"1.2rem"}
            />
          </div>
        </div>
        <div className=" flex items-center gap-3  ">
          <div className="  w-10 h-10 rounded-full    ">
            <img
              src={"/images/assemble.png"}
              alt=""
              style={{
                objectFit: "cover",
                width: "100%",
                height: "100%",
              }}
              className="rounded-full"
            />
          </div>
          <div className="flex flex-col max-w-[10rem]">
            <p className={"font-bold whitespace-nowrap overflow-hidden"}>
              Lionel Socrate
            </p>
            <p className="text-[var(--gray-text)] whitespace-nowrap overflow-hidden font-light text-sm">
              lionelsocrate7@gmail.com
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

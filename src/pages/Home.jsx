import React from "react";
import Navbar from "../components/home/Navbar";
import Topbar from "../components/home/Topbar";

export default function Home() {
  return (
    <>
      <div className="flex w-full  bg-[var(--gray)] flex-col min-h-screen">
        <div className="flex bg-[var(--white)] w-full ">
          <div className=" w-full">
            <Topbar />
          </div>
        </div>
        <div className="w-full flex  py-4 flex-1">
          <div className={"w-4/5 flex  px-24 gap-4"}>
            {/* max-h-[calc(100vh-6rem)] */}
            <div className="  flex ">
              <Navbar />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

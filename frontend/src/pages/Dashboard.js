import React from "react";
import Navbar from "../components/home/Navbar";
import Topbar from "../components/home/Topbar";

export default function Dashboard() {
  return (
    <>
      <div className=" w-full h-screen flex flex-col overflow-hidden  ">
        <Topbar />
        <div className=" flex w-full h-full">
          <Navbar />
          <div className=" bg-[var(--gray)] w-full h-full "></div>
        </div>
      </div>
    </>
  );
}

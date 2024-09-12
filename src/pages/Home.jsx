import React from "react";
import Navbar from "../components/home/Navbar";
import Topbar from "../components/home/Topbar";
import Map from "../components/home/Map";

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
            <div className=" w-full h-full flex items-center justify-center">
              {/* <form
                action=""
                className=" bg-[var(--white)]  rounded-xl flex flex-col items-center gap-8 shadow-xl p-8"
              >
                <h1 className=" uppercase text-[var(--orange-color)] ">
                  test send email
                </h1>
                <div className=" w-full h-[1px] bg-[var(--gray)] "></div>
                <div className=" flex flex-col gap-1">
                  <p>Mail</p>
                  <input
                    type="email"
                    className=" bg-[var(--gray)] rounded-md w-[20rem] outline-none px-4 py-2 placeholder:Ecrire votre mail... "
                  />
                </div>
                <div className=" flex flex-col gap-1">
                  <p>Texte</p>
                  <textarea
                    type="text"
                    className=" bg-[var(--gray)] rounded-md w-[20rem] outline-none px-4 py-2 placeholder:Ecrire votre mail... "
                  />
                </div>
                <button
                  type=" submit"
                  className=" text-white bg-[var(--orange-color)] w-full rounded-sm py-2 uppercase font-extralight "
                >
                  texte à envoyer
                </button>
              </form> */}
              <Map />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

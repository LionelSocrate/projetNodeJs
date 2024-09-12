import React from "react";

export default function Header() {
  return (
    <>
      <div className=" h-screen w-full flex items-center px-24  ">
        <div className=" w-1/2 h-full flex flex-col justify-center gap-8">
          <p className=" text-6xl font-extrabold">
            Confiez-nous... <br />{" "}
            <span className=" text-6xl font-extrabold bgText ">
              Réaliser vos rêves
            </span>
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            quaerat, adipisci sapiente voluptatem aperiam aliquid nobis libero
            nesciunt? Labore nam molestiae recusandae, sit quaerat possimus
            optio dolore earum consequatur dolorem!
          </p>
          <div className=" flex items-center gap-8">
            <div className=" flex items-center gap-2">
              <div className=" flex items-center justify-center w-12 h-12 rounded-full bg-[rgb(255,173,0)] "></div>
              <div className=" flex flex-col">
                <p className=" text-xl ">4.6</p>
                <p className=" text-slate-400">Utilisateur simple</p>
              </div>
            </div>
            <div className=" flex items-center gap-2">
              <div className=" flex items-center justify-center w-12 h-12 rounded-full bg-[rgb(64,191,246)]  "></div>
              <div className=" flex flex-col">
                <p className=" text-xl ">8.8M+</p>
                <p className=" text-slate-400 ">Admin</p>
              </div>
            </div>
            <div className=" flex items-center gap-2">
              <div className=" flex items-center justify-center w-12 h-12 rounded-full bg-[rgb(255,120,143)] "></div>
              <div className=" flex flex-col">
                <p className=" text-xl ">4.6</p>
                <p className=" text-slate-400 ">Commercial</p>
              </div>
            </div>
          </div>
          <div className=" flex flex-col gap-2">
            <div className=" w-[15rem] bg-slate-200 h-1 rounded-lg relative">
              <div className=" absolute w-1/2 top-0 left-0 h-full bg-slate-400 rounded-lg "></div>
            </div>
            <div className="flex gap-2 items-center">
              <p>Polypus</p>
              <span className=" h-6 w-[1px] rounded-lg bg-slate-400 "></span>
              <div className=" flex items-center gap-1">
                <p className=" text-slate-400">Mada</p>
              </div>
            </div>
          </div>
        </div>
        <div className=" w-1/2 h-full  flex items-center justify-center">
          <div className=" relative h-full w-full">
            <img
              src="/images/girl.png"
              alt=""
              className="  absolute top-[25%] right-0  w-[120%] "
            />
            <div className=" absolute top-[12%] right-40 w-[10rem] h-[10rem] rounded-full bgVilla1 border-[.5rem] shadow-2xl  "></div>
            <div className=" absolute top-[40%] right-8 w-[10rem] h-[10rem] rounded-full bgVilla2 border-[.5rem] shadow-2xl  "></div>
            <div className=" absolute bottom-[8%] right-32 w-[10rem] h-[10rem] rounded-full bgVilla3 border-[.5rem] shadow-2xl  "></div>
          </div>
        </div>
      </div>
    </>
  );
}

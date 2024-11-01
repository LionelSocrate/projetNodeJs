import React from "react";
import { BiComment } from "react-icons/bi";
import { IoCalendar, IoCalendarOutline } from "react-icons/io5";

export default function Nouvelle() {
  return (
    <>
      <div className=" relative w-full h-screen ">
        <img
          src={"/images/nouvelle/bgNouvelle.jpg"}
          alt=""
          style={{
            objectFit: "cover",
            width: "100%",
            height: "100%",
          }}
        />
        <div className=" absolute top-0 left-0 h-full w-full px-[7%] py-8 flex flex-col gap-8 items-center justify-center">
          <p className=" text-[var(--blue)] uppercase text-4xl  text-center ">
            dernières nouvelles & articles
          </p>
          <div className=" w-full flex gap-6">
            <div className=" w-1/2">
              <div className=" relative w-full ">
                <img src={"/images/nouvelle/conference.jpg"} alt="" />
              </div>
              <div className=" bg-[var(--white)] flex flex-col gap-4 py-8 px-8 ">
                <div className=" flex items-center gap-4">
                  <div className=" flex items-center text-blue-950 gap-2">
                    <IoCalendarOutline size={"0.85rem"} />
                    <p className=" text-sm tracking-wider">Juin 20, 2024</p>
                  </div>
                  <div className=" flex items-center text-blue-950 gap-2">
                    <BiComment size={"0.85rem"} />
                    <p className=" text-sm tracking-wider">Comment (0)</p>
                  </div>
                </div>
                <p className=" text-blue-950 uppercase text-center text-xl tracking-wider">
                  découvrez les 12 villas de polypus corporation : confort et
                  excellence
                </p>
              </div>
            </div>
            <div className=" w-1/2 h-full flex  flex-col  gap-4">
              <div className=" flex items-center gap-12 bg-[var(--white)] py-3 px-8 ">
                <img
                  src={"/images/nouvelle/confort.jpg"}
                  className=" w-[13rem] "
                  alt="confort"
                />
                <div className=" flex flex-col gap-2">
                  <div className=" flex items-center text-blue-950 gap-2">
                    <IoCalendarOutline size={"0.95rem"} />
                    <p className="  tracking-wider">Mai 22, 2024</p>
                  </div>
                  <div className=" flex items-center text-blue-950 gap-2">
                    <BiComment size={"0.95rem"} />
                    <p className="  tracking-wider">Comment (1)</p>
                  </div>
                  <p className=" text-blue-950 uppercase text-center font-semibold text-xl tracking-wider">
                    confortable
                  </p>
                </div>
              </div>
              <div className=" flex items-center gap-12 bg-[var(--white)] py-3 px-8 ">
                <img
                  src={"/images/nouvelle/lancement.jpg"}
                  className=" w-[13rem] "
                  alt="confort"
                />
                <div className=" flex flex-col gap-2">
                  <div className=" flex items-center text-blue-950 gap-2">
                    <IoCalendarOutline size={"0.95rem"} />
                    <p className="  tracking-wider">Mai 23, 2024</p>
                  </div>
                  <div className=" flex items-center text-blue-950 gap-2">
                    <BiComment size={"0.95rem"} />
                    <p className="  tracking-wider">Comment (0)</p>
                  </div>
                  <p className=" text-blue-950 uppercase  font-semibold text-xl tracking-wider">
                    polypus démarre officiellement
                  </p>
                </div>
              </div>
              <div className=" flex items-center gap-12 bg-[var(--white)] py-3 px-8 ">
                <img
                  src={"/images/nouvelle/siae.jpg"}
                  className=" w-[13rem] "
                  alt="confort"
                />
                <div className=" flex flex-col gap-2">
                  <div className=" flex items-center text-blue-950 gap-2">
                    <IoCalendarOutline size={"0.95rem"} />
                    <p className="  tracking-wider">Juin 3, 2024</p>
                  </div>
                  <div className=" flex items-center text-blue-950 gap-2">
                    <BiComment size={"0.95rem"} />
                    <p className="  tracking-wider">Comment (0)</p>
                  </div>
                  <p className=" text-blue-950 uppercase  font-semibold  tracking-wider">
                    polypus corporation à la 3éme édition du salon international
                    des acteurs économiques (siae)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

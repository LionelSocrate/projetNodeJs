import React from "react";
import { IoCalendar } from "react-icons/io5";
import { RiDeleteBin6Fill } from "react-icons/ri";

export default function ListeUser({ nom, prenom, email, adresse, telephone }) {
  return (
    <>
      <div
        className={`py-6 px-12 rounded-md  bg-white flex flex-col gap-4 h-max`}
      >
        <div className=" flex items-center justify-center text-xl gap-4">
          <p className=" uppercase text-xl">{nom}</p>
          <p className=" capitalize text-xl">{prenom} </p>
        </div>
        <div className=" w-full flex items-center justify-between">
          <div className=" flex flex-col text-sm tracking-wide gap-1">
            <div className=" flex items-center gap-4">
              <p className=" uppercase text-sm">
                E-mail &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :{" "}
              </p>
              <p>{email} </p>
            </div>
            <div className=" flex items-center gap-4">
              <p className=" uppercase  text-sm">Adresse &nbsp;: </p>
              <p>{adresse} </p>
            </div>
            <div className=" flex items-center gap-4">
              <p className=" uppercase  text-sm">Contact &nbsp;: </p>
              <p>{telephone} </p>
            </div>
            <div className=" flex items-center gap-4">
              <p className=" uppercase  text-sm">
                Poste &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :{" "}
              </p>
              <p>Responsable Commercial</p>
            </div>
          </div>
          <div className=" relative w-28 h-28 rounded-full bg-[var(--gray)] overflow-hidden ">
            <img
              src={"/images/profil.png"}
              alt=""
              style={{
                objectFit: "cover",
                width: "100%",
                height: "100%",
              }}
            />
          </div>
        </div>
        <div className=" w-full flex items-center justify-between">
          <div className=" flex items-center gap-1">
            <div className=" w-1 h-1 rounded-full bg-green-400"></div>
            <div className=" w-1 h-1 rounded-full bg-green-400"></div>
            <div className=" w-4 h-1 rounded-full bg-green-400"></div>
            <div className=" w-[6rem] h-1 rounded-full bg-green-400"></div>
          </div>
          <div className=" flex items-center gap-4">
            <IoCalendar
              size={"1.3rem"}
              className=" text-green-500 cursor-pointer"
            />
            <RiDeleteBin6Fill
              size={"1.3rem"}
              className=" text-red-500 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </>
  );
}

import axios from "axios";
import React from "react";
import { FaCheck } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

export default function ReserveAdmin({ handleAfficheReserv, id, nom, lot }) {
  const handleReserv = async (id) => {
    try {
      await axios({
        method: "put",
        url: `http://localhost:5000/api/villa/updateVilla/${id}`,
        data: {
          isReserv: true,
        },
        // withCredentials: true,
      }).then((res) => {});
      window.location.reload();
      handleAfficheReserv();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className=" fixed top-0 left-0 w-screen h-screen z-50 bg-[var(--bgFixed)] flex items-center justify-center ">
        <div className=" relative bg-[var(--white)] rounded-md py-6 px-8 flex flex-col items-center gap-6 ">
          <IoClose
            onClick={handleAfficheReserv}
            className=" absolute top-2 right-2 text-blue-400 cursor-pointer hover:text-blue-500 "
            size={"1.5rem"}
          />
          <p className=" uppercase tracking-wide text-2xl  font-extrabold ">
            <span className="  font-extrabold text-2xl text-blue-500 tracking-wide">
              Resérver&nbsp;
            </span>{" "}
            une villa ?
          </p>
          <div className=" relative w-full flex flex-col gap-4 py-6 px-12 bg-blue-100">
            <div className=" absolute top-0 left-0 h-full w-1 bg-blue-500"></div>
            <p className="  text-[rgb(0,0,0,0.75)] text-sm ">
              vous voulez vraiment réserver la villa qui a les informations{" "}
              <br />
              suivantes{" "}
            </p>
            <div className=" flex flex-col">
              <div className=" flex items-center gap-4">
                <FaCheck size={"1.1rem"} className=" text-blue-500" />
                <p>
                  villa{" "}
                  <span className=" uppercase font-bold">
                    {nom} ({lot})
                  </span>
                </p>
              </div>
              <div className=" flex items-center gap-4">
                <FaCheck size={"1.1rem"} className=" text-blue-500" />
                <p>Alakamisy Fenoarivo </p>
              </div>
            </div>
          </div>
          <div className=" w-full flex items-center gap-8">
            <button
              className=" w-1/2 cursor-pointer py-[0.5rem] text-sm    text-blue-400 border border-blue-500 rounded-md"
              onClick={handleAfficheReserv}
            >
              Annuler
            </button>
            <button
              className=" w-1/2 cursor-pointer py-[0.5rem] text-sm   text-white  bg-blue-500 rounded-md"
              onClick={() => handleReserv(id)}
            >
              Reserver
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

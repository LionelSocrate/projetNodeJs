import React, { useState } from "react";
import { IoLocation } from "react-icons/io5";
import DeleteVilla from "./DeleteVilla";
import axios from "axios";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { TbHomeEdit } from "react-icons/tb";
import { BsFillCalendar2CheckFill } from "react-icons/bs";
import ReserveAdmin from "./ReserveAdmin";
import DereserveAdmin from "./DeReserveAdmin";
import UpdateVilla from "./UpdateVilla";

export default function ListeVilla({
  nom,
  lot,
  desc,
  type,
  isReserv,
  id,
  projet,
  picture,
}) {
  const [afficheDelete, setAfficheDelete] = useState(false);
  const [afficheUpdate, setAfficheUpdate] = useState(false);
  const [afficheReserv, setAfficheReserv] = useState(false);
  const [afficheDereserv, setAfficheDereserv] = useState(false);
  const handleAfficheDelete = () => {
    !afficheDelete ? setAfficheDelete(true) : setAfficheDelete(false);
  };
  const handleAfficheUpdate = () => {
    !afficheUpdate ? setAfficheUpdate(true) : setAfficheUpdate(false);
  };
  const handleAfficheReserv = () => {
    !afficheReserv ? setAfficheReserv(true) : setAfficheReserv(false);
  };
  const handleAfficheDereserv = () => {
    !afficheDereserv ? setAfficheDereserv(true) : setAfficheDereserv(false);
  };
  const getVilla = async (id) => {
    try {
      await axios({
        method: "get",
        url: `http://localhost:5000/api/villa/villaInfo/${id}`,
        // withCredentials: true,
      }).then((res) => {});
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      {afficheDelete && (
        <DeleteVilla
          handleAfficheDelete={handleAfficheDelete}
          id={id}
          nom={nom}
          type={type}
          lot={lot}
        />
      )}
      {afficheUpdate && (
        <UpdateVilla
          handleAfficheUpdate={handleAfficheUpdate}
          id={id}
          nom={nom}
          type={type}
          lot={lot}
          projet={projet}
          description={desc}
        />
      )}
      {afficheReserv && (
        <ReserveAdmin
          handleAfficheReserv={handleAfficheReserv}
          id={id}
          nom={nom}
          type={type}
          lot={lot}
        />
      )}
      {afficheDereserv && (
        <DereserveAdmin
          handleAfficheDereserv={handleAfficheDereserv}
          id={id}
          nom={nom}
          type={type}
        />
      )}
      <div
        className={` w-full flex gap-12 items-center py-6 px-12 ${
          isReserv ? "bg-orange-50" : "bg-[var(--white)]"
        } shadow-sm `}
      >
        <div className=" w-full h-full flex flex-col justify-between">
          <p className=" uppercase text-3xl font-bold  tracking-wider">
            villa{" "}
            <span className=" uppercase text-3xl text-orange-400 ">
              {nom}
              <span className=" text-2xl">&nbsp;({lot} )</span>
            </span>
          </p>
          <p className=" text-sm text-[rgb(0,0,0,0.5)] ">{desc}</p>
          <div className=" w-full flex items-center justify-between">
            <div className="  flex items-center gap-8">
              <div className=" flex items-center gap-2">
                <IoLocation
                  size={"0.9rem"}
                  className=" text-[rgb(0,0,0,0.75)] "
                />
                <p className=" text-xs capitalize">{projet} </p>
              </div>
              <div className=" flex items-center gap-2">
                <p className=" text-xs">Type </p>
                <p className=" text-xs">: </p>
                <p className=" text-xs uppercase">{type} </p>
              </div>
            </div>
            <div className=" flex items-center gap-4">
              {!isReserv && (
                <BsFillCalendar2CheckFill
                  size={"1.2rem"}
                  className=" cursor-pointer text-blue-400"
                  onClick={() => {
                    getVilla(id);
                    handleAfficheReserv();
                  }}
                />
              )}
              {isReserv && (
                <p
                  className=" text-sm text-blue-400 cursor-pointer"
                  onClick={() => {
                    getVilla(id);
                    handleAfficheDereserv();
                  }}
                >
                  Resérvé
                </p>
              )}
              <TbHomeEdit
                onClick={() => {
                  getVilla(id);
                  handleAfficheUpdate();
                }}
                size={"1.3rem"}
                className=" cursor-pointer text-green-500"
              />
              <RiDeleteBin6Fill
                onClick={() => {
                  getVilla(id);
                  handleAfficheDelete();
                }}
                size={"1.3rem"}
                className=" text-red-500 cursor-pointer"
              />
            </div>
          </div>
        </div>
        <div className=" relative h-[10rem] w-[21rem] rounded-sm overflow-hidden ">
          <img
            src={picture}
            alt=""
            style={{
              objectFit: "cover",
              width: "100%",
              height: "100%",
            }}
          />
        </div>
      </div>
    </>
  );
}

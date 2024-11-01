import axios from "axios";
import React, { useState } from "react";
import { RiDeleteBin6Fill } from "react-icons/ri";
import DeleteRdv from "./DeleteRdv";

export default function ListeRdv({
  nom,
  prenom,
  telephone,
  email,
  adresse,
  lieu,
  date,
  heure,
  id,
}) {
  const [afficheDelete, setAfficheDelete] = useState(false);
  const handleAfficheDelete = () => {
    !afficheDelete ? setAfficheDelete(true) : setAfficheDelete(false);
  };

  const getRdv = async (id) => {
    try {
      await axios({
        method: "get",
        url: `http://localhost:5000/api/rdv/rdvInfo/${id}`,
        // withCredentials: true,
      }).then((res) => {
        console.log(res);
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      {afficheDelete && (
        <DeleteRdv
          handleAfficheDelete={handleAfficheDelete}
          nom={nom}
          prenom={prenom}
          email={email}
          telephone={telephone}
          adresse={adresse}
          lieu={lieu}
          date={date}
          heure={heure}
          id={id}
        />
      )}

      <div
        key={email}
        className=" relative w-full bg-[var(--white)] shadow-sm grid grid-cols-4  py-4 px-12 "
      >
        <div className=" absolute bottom-2 right-2 flex items-center gap-8">
          <RiDeleteBin6Fill
            onClick={() => {
              getRdv(id);
              handleAfficheDelete();
            }}
            size={"1.3rem"}
            className=" text-red-500 cursor-pointer"
          />
        </div>
        <div className=" flex flex-col gap-1">
          <p>{nom}</p>
          <p>{prenom}</p>
        </div>
        <div className=" flex flex-col gap-1">
          <p>{telephone}</p>
          <p>{email} </p>
        </div>
        <div className=" flex flex-col gap-1">
          <p>{adresse}</p>
          <p>{lieu}</p>
        </div>
        <div className=" flex flex-col gap-1">
          <p>{date}</p>
          <p>{heure} </p>
        </div>
      </div>
    </>
  );
}

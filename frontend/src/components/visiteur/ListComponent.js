import axios from "axios";
import React, { useEffect, useState } from "react";
import DeleteComponent from "./DeleteComponent";
import EditComponent from "./EditComponent";
const apiUrl = `http://localhost:5000/api`;

export default function ListComponent() {
  const [afficheDelete, setAfficheDelete] = useState(false);
  const [deleteId, setDeleteId] = useState();
  const handleAfficheDelete = (i) => {
    if (!afficheDelete) {
      setDeleteId(i);
      setAfficheDelete(true);
    } else {
      setDeleteId(i);
      setAfficheDelete(false);
    }
  };
  const [afficheUpdate, setAfficheUpdate] = useState(false);
  const [updateId, setUpdateId] = useState();
  const handleAfficheUpdate = (i) => {
    if (!afficheUpdate) {
      setUpdateId(i);
      setAfficheUpdate(true);
    } else {
      setUpdateId(i);
      setAfficheUpdate(false);
    }
  };

  const [visiteurs, setvisiteurs] = useState([]);
  useEffect(() => {
    const fetchVisiteurs = async () => {
      try {
        await axios({
          method: "get",
          url: `${apiUrl}/visiteur/get-all`,
        }).then((res) => {
          setvisiteurs(res.data.visiteurs);
        });
      } catch (error) {
        console.log(error);
      }
    };
    fetchVisiteurs();
  }, []);
  const tarifs = visiteurs.map((item) => item.nbJours * item.tarifJournalier);
  const tarifMin = Math.min(...tarifs);
  const tarifMax = Math.max(...tarifs);
  const sommeTarifs = tarifs.reduce((acc, val) => acc + val, 0);

  const formatNombre = (nombre) => {
    return nombre.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };

  return (
    <>
      {visiteurs.map((e, i) => (
        <div className="w-full grid grid-cols-8 gap-2 text-white" key={i}>
          <div className="flex items-center justify-center bg-[var(--bg1)] rounded-sm py-2">
            {e.numVisiteur}
          </div>
          <div className="col-[2/4] flex items-center justify-center bg-[var(--bg1)] rounded-sm">
            {e.nom}
          </div>
          <div className="flex items-center justify-center bg-[var(--bg1)] rounded-sm">
            {e.nbJours}
          </div>
          <div className="flex items-center justify-center bg-[var(--bg1)] rounded-sm">
            {formatNombre(e.tarifJournalier)} Ar
          </div>
          <div className="flex items-center justify-center bg-[var(--bg1)] rounded-sm">
            {formatNombre(e.nbJours * e.tarifJournalier)} Ar
          </div>
          <div
            className="relative flex items-center justify-center bg-[var(--bg1)] rounded-sm suppr overflow-hidden cursor-pointer"
            onClick={() => handleAfficheDelete(e._id)}
          >
            <div className="text-[var(--pink)] uppercase">Supprimer</div>
          </div>
          <div
            onClick={() => handleAfficheUpdate(e._id)}
            className="relative flex items-center justify-center bg-[var(--bg1)] rounded-sm modif overflow-hidden cursor-pointer"
          >
            <div className="text-[var(--aqua)] uppercase">Modifier</div>
          </div>
        </div>
      ))}
      {afficheDelete && (
        <DeleteComponent
          handleAfficheDelete={handleAfficheDelete}
          i={deleteId}
        />
      )}
      {afficheUpdate && (
        <EditComponent handleAfficheUpdate={handleAfficheUpdate} i={updateId} />
      )}

      <div className="flex items-center justify-center w-full gap-8 text-xl">
        <div className="text-[var(--white1)] text-2xl">*********</div>
        <div className="flex gap-2">
          <p className="uppercase text-[var(--white1)]">Tarif Total :</p>
          <p className="text-[var(--green)]">{formatNombre(sommeTarifs)} Ar</p>
        </div>
        {/* <div className="text-[var(--white2)] text-2xl"><<>></div> */}
        <div className="flex gap-2">
          <p className="uppercase text-[var(--white1)]">Tarif Minimal :</p>
          <p className="text-[var(--pink)]">{formatNombre(tarifMin)} Ar</p>
        </div>
        {/* <div className="text-[var(--white2)] text-2xl"><<>></div> */}
        <div className="flex gap-2">
          <p className="uppercase text-[var(--white1)]">Tarif Maximal :</p>
          <p className="text-[var(--aqua)]">{formatNombre(tarifMax)} Ar</p>
        </div>
        <div className="text-[var(--white1)] text-2xl">*********</div>
      </div>
    </>
  );
}

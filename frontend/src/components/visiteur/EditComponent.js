import axios from "axios";
import React, { useEffect, useState } from "react";
const apiUrl = `http://localhost:5000/api`;

export default function EditComponent({ handleAfficheUpdate, i }) {
  const [visiteur, setvisiteur] = useState({});
  useEffect(() => {
    const fetchVisiteur = async () => {
      try {
        await axios({
          method: "get",
          url: `${apiUrl}/visiteur/${i}`,
        }).then((res) => {
          setvisiteur(res.data.visiteur);
        });
      } catch (error) {
        console.log(error);
      }
    };
    fetchVisiteur();
  }, []);
  const [nomUpdate, setNomUpdate] = useState("");
  const [NbJoursUpdate, setNbJoursUpdate] = useState("");
  const [tarifJournalierUpdate, setTarifJournalierUpdate] = useState("");
  useEffect(() => {
    setNomUpdate(visiteur.nom);
    setNbJoursUpdate(visiteur.nbJours);
    setTarifJournalierUpdate(visiteur.tarifJournalier);
  }, [visiteur]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios({
        method: "put",
        url: `http://localhost:5000/api/visiteur/update/${i}`,
        data: {
          nom: nomUpdate,
          tarifJournalier: tarifJournalierUpdate,
          nbJours: NbJoursUpdate,
        },
      }).then((res) => {});
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className=" text-white fixed top-0 left-0 w-full h-[100vh] bg-[var(--bg1)] flex items-center justify-center login afficheAnim gap-4 index10">
      <div className="relative flex items-center justify-center bg-[var(--bg2)] rounded-xl overflow-hidden">
        <div className="shadowLogin1"></div>
        <div className="shadowLogin2"></div>
        <form
          className="relative flex flex-col p-8 gap-6"
          onSubmit={handleSubmit}
        >
          <div
            className="absolute top-4 right-4 cursor-pointer"
            onClick={() => {
              handleAfficheUpdate();
            }}
          >
            <p className=" text-red-400 text-2xl">x</p>
            <img src="/image/icon8.png" alt="" className="w-8" />
          </div>
          <div className="contForm flex flex-col rounded-xl gap-5">
            <div className="flex gap-2 items-center justify-center">
              <p className="uppercase text-3xl titreMessage">modifier</p>
            </div>
            <div className="w-full h-[1px] rounded-lg bg-[var(--white3)]"></div>
            <div className="flex flex-col">
              <div className="flex flex-col gap-6">
                <div className="w-full flex gap-4 items-center justify-center">
                  <label for="" className="uppercase">
                    N° visiteur :
                  </label>
                  <div className="relative">
                    <p className="text-[var(--green)]">
                      {visiteur.numVisiteur}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <label for="" className="text-[var(--white2)] text-lg">
                    Nom{" "}
                  </label>
                  <div className="relative">
                    <input
                      onChange={(e) => {
                        setNomUpdate(e.target.value);
                      }}
                      value={nomUpdate}
                      required
                      type="text"
                      placeholder="...saisir votre nom"
                      className="w-[23rem] bg-[var(--bg2)] px-3 py-2 rounded-lg outline-none text-[var(--white1)] input"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <label for="" className="text-[var(--white2)] text-lg">
                    Nombre de jours
                  </label>
                  <div className="relative">
                    <input
                      onChange={(e) => {
                        setNbJoursUpdate(e.target.value);
                      }}
                      value={NbJoursUpdate}
                      required
                      type="number"
                      placeholder="...saisir votre nombre de jours"
                      className="w-[23rem] bg-[var(--bg2)] px-3 py-2 rounded-lg outline-none text-[var(--white1)] input"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <label for="" className="text-[var(--white2)] text-lg">
                    Tarif Journalier
                  </label>
                  <div className="relative">
                    <input
                      onChange={(e) => {
                        setTarifJournalierUpdate(e.target.value);
                      }}
                      value={tarifJournalierUpdate}
                      required
                      type="number"
                      placeholder="...saisir votre tarif journalier"
                      className="w-full bg-[var(--bg2)] px-3 py-2 rounded-lg outline-none input"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full h-[1px] rounded-lg bg-[var(--white3)]"></div>
            <button
              type="submit"
              className="w-full px-3 py-2 rounded-lg bg-violet-500"
            >
              modifier
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

import axios from "axios";
import React, { useState } from "react";

export default function AddComponent({ handleAfficheAdd }) {
  const [numVisiteur, setNumVisiteur] = useState("");
  const [nom, setNom] = useState("");
  const [nbJours, setNbJours] = useState();
  const [tarifJournalier, setTarifJournalier] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios({
        method: "post",
        url: "http://localhost:5000/api/visiteur/add",
        data: {
          nom,
          numVisiteur,
          tarifJournalier,
          nbJours,
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
            className="absolute top-2 right-2 cursor-pointer"
            onClick={() => handleAfficheAdd()}
          >
            <p className=" text-2xl text-red-400">X</p>
            <img src="/image/icon8.png" alt="" className="w-7" />
          </div>
          <div className="contForm flex flex-col rounded-xl gap-4">
            <div className="flex gap-2 items-center justify-center">
              <p className="uppercase text-2xl titreMessage">
                nouveau visiteur
              </p>
            </div>
            <div className="w-full h-[1px] rounded-lg bg-[var(--white3)]"></div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-col gap-2">
                <div className="flex flex-col gap-1">
                  <label for="">N° Visiteur </label>
                  <div className="relative">
                    <input
                      onChange={(e) => {
                        setNumVisiteur(e.target.value);
                      }}
                      value={numVisiteur}
                      type="text"
                      required
                      placeholder="...saisir votre matricule"
                      className="w-[23rem] bg-[var(--bg2)] px-3 py-2 rounded-lg outline-none text-[var(--white1)] input"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <label for="">Nom </label>
                  <div className="relative">
                    <input
                      onChange={(e) => {
                        setNom(e.target.value);
                      }}
                      value={nom}
                      required
                      type="text"
                      placeholder="...saisir votre nom"
                      className="w-[23rem] bg-[var(--bg2)] px-3 py-2 rounded-lg outline-none text-[var(--white1)] input"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <label for="">Nombre de jours</label>
                  <div className="relative">
                    <input
                      onChange={(e) => {
                        setNbJours(e.target.value);
                      }}
                      value={nbJours}
                      required
                      type="number"
                      min="0"
                      placeholder="...saisir votre taux horaire"
                      className="w-[23rem] bg-[var(--bg2)] px-3 py-2 rounded-lg outline-none text-[var(--white1)] input"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <label for="">Tarif Journalier</label>
                  <div className="relative">
                    <input
                      onChange={(e) => {
                        setTarifJournalier(e.target.value);
                      }}
                      value={tarifJournalier}
                      required
                      type="number"
                      placeholder="...saisir votre nombre d'heures"
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
              Ajouter
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

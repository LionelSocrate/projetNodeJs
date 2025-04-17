import React, { useState } from "react";
import TitreListesComponent from "../components/visiteur/TitreListesComponent";
import ListComponent from "../components/visiteur/ListComponent";
import AddComponent from "../components/visiteur/AddComponent";
import ChartComponent from "../components/visiteur/ChartComponent";

export default function Visiteur() {
  const [afficheAdd, setAfficheAdd] = useState(false);
  const handleAfficheAdd = () => {
    !afficheAdd ? setAfficheAdd(true) : setAfficheAdd(false);
  };
  const [afficheChart, setAfficheChart] = useState(false);
  const handleAfficheChart = () => {
    !afficheChart ? setAfficheChart(true) : setAfficheChart(false);
  };
  return (
    <>
      {afficheChart && (
        <ChartComponent
          handleAfficheChart={handleAfficheChart}
          // tarifMax={tarifMax}
          // tarifMin={tarifMin}
          // sommeTarifs={sommeTarifs}
        />
      )}
      <div className="bg-[var(--bg1)] w-full h-[100vh] overflow-hidden flex items-center justify-center px-16 py-4">
        <div className="relative w-full h-full flex flex-col gap-4 items-center justify-center">
          <div
            className=" w-[11rem] absolute top-3 left-4 flex items-center justify-center gap-2 ajout rounded-xl px-4 py-2 cursor-pointer"
            onClick={() => handleAfficheChart()}
          >
            <p className="uppercase text-sm font-bold text-white">
              histogramme
            </p>
          </div>
          <div
            className="w-[11rem] absolute top-4 right-4 flex items-center justify-center gap-2 ajout rounded-xl px-6 py-2 cursor-pointer"
            onClick={() => handleAfficheAdd()}
          >
            <i className="mdi mdi-plus"></i>
            <p className="uppercase text-sm font-bold text-white">ajouter</p>
          </div>

          <div className="flex uppercase text-5xl titreHome">
            gestion des visiteurs
          </div>
          <div className="w-full h-full rounded-lg list index5 flex flex-col gap-2 overflow-hidden py-3 px-5">
            <TitreListesComponent />
            <div className="w-full flex flex-col gap-2">
              <ListComponent />
              {/* <listes-component
            v-if="haveData"
            :afficheEdit="afficheEdit"
            :afficheSupprimer="afficheSupprimer"
            :enseignants="enseignants"
          /> */}
            </div>
          </div>
        </div>
        {afficheAdd && <AddComponent handleAfficheAdd={handleAfficheAdd} />}
        {/* <form-component v-if="login" :afficheLogin="afficheLogin" /> */}
        {/* <edit-component v-if="edit && ready" :afficheEdit="afficheEdit" :enseignant="enseignant" /> */}
        {/* <supprimer-component
      v-if="supprimer && ready"
      :afficheSupprimer="afficheSupprimer"
      :enseignant="enseignant"
    /> */}
        {/* <chart-component
      v-if="histogramme"
      :enseignants="enseignants"
      :afficheHistogramme="afficheHistogramme"
    /> */}
      </div>
    </>
  );
}

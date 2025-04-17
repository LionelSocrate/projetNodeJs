import axios from "axios";
import React, { useEffect, useState } from "react";
const apiUrl = `http://localhost:5000/api`;

export default function DeleteComponent({ handleAfficheDelete, i }) {
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

  const deleteVisiteur = () => {
    const deleteVisiteurs = async () => {
      try {
        await axios({
          method: "delete",
          url: `${apiUrl}/visiteur/delete/${i}`,
        });
        window.location.reload();
      } catch (error) {
        console.log(error);
      }
    };
    deleteVisiteurs();
  };

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-[100vh] bg-[var(--bg1)] flex items-center justify-center afficheAnim gap-4 index10 text-white">
        <div className="relative flex items-center justify-center bg-[var(--bg2)] rounded-xl overflow-hidden">
          <div className="shadowLogin1"></div>
          <div className="shadowLogin2"></div>
          <div className="relative flex flex-col p-6 gap-6">
            <div className="contForm flex flex-col rounded-xl gap-4 max-w-[29rem]">
              <div className="flex gap-2 items-center justify-center">
                <p className="uppercase text-2xl titreMessage">
                  Suppression d'un visiteur
                </p>
              </div>
              <div className="w-full h-[1px] rounded-lg bg-[var(--white3)]"></div>
              <div className="flex flex-col gap-1">
                <div>
                  Vous voulez vraiment supprimer le visiteur qui a les
                  informations suivantes :
                </div>
                <div className="flex flex-col text-sm">
                  <div className="text-[var(--white2)] flex gap-2">
                    N° visiteur :
                    <p className="text-[var(--green)]">
                      {visiteur.numVisiteur}
                    </p>
                  </div>
                  <div className="text-[var(--white2)]">
                    Nom : {visiteur.nom}
                  </div>
                  <div className="text-[var(--white2)]">
                    Nombre de jours : {visiteur.nbJours} J
                  </div>
                  {/* <div className="text-[var(--white2)]">Nombre d'heures : {{ nbHeures }} H</div> */}
                </div>
              </div>
              <div className="w-full h-[1px] rounded-lg bg-[var(--white3)]"></div>
              <div className="flex w-full items-center justify-center gap-4">
                <div
                  onClick={() => handleAfficheDelete()}
                  className="relative flex items-center w-1/2 justify-center bg-[var(--bg1)] rounded-lg annuler overflow-hidden cursor-pointer py-1"
                >
                  <button className="text-[var(--aqua)] uppercase">
                    Annuler
                  </button>
                </div>
                <div
                  onClick={() => deleteVisiteur()}
                  className="relative flex items-center w-1/2 justify-center bg-[var(--bg1)] rounded-lg suppr overflow-hidden cursor-pointer py-1"
                >
                  <button className="text-[var(--pink)] uppercase">
                    Supprimer
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

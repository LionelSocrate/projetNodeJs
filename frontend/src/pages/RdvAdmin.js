import React, { useEffect, useState } from "react";
import Navbar from "../components/home/Navbar";
import Topbar from "../components/home/Topbar";
import axios from "axios";
import ListeRdv from "../components/rendezVous/ListeRdv";
import BigCalendar from "../components/rendezVous/BigCalendar";

export default function RdvAdmin() {
  const [rdvs, setRdvs] = useState([]);
  const [listeRdv, setListeRdv] = useState(false);
  const [agenda, setAgenda] = useState(true);

  const handleListeRdv = () => {
    setAgenda(false);
    setListeRdv(true);
  };
  const handleAgenda = () => {
    setListeRdv(false);
    setAgenda(true);
  };
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("fr-FR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };
  // Fonction pour formater l'heure
  const formatTime = (timeString) => {
    const time = new Date(timeString);
    return time
      .toLocaleTimeString("fr-FR", {
        hour: "2-digit",
        minute: "2-digit",
      })
      .replace(":", "h : "); // Remplacer le ":" par "h :"
  };

  useEffect(() => {
    const fetchRdv = async () => {
      try {
        await axios({
          method: "get",
          url: "http://localhost:5000/api/rdv/getAllRdvs",
          // withCredentials: true,
        }).then((res) => {
          setRdvs(res.data.rdvs);
        });
      } catch (error) {
        console.log(error);
      }
    };
    fetchRdv();
  }, []);

  return (
    <>
      <div className=" w-full h-screen flex flex-col overflow-hidden  ">
        <Topbar />

        <div className=" flex w-full h-full">
          <Navbar />
          <div className=" bg-[var(--gray)] w-full h-[90vh] flex flex-col gap-2  ">
            <div className=" w-full  flex items-center  justify-center  bg-[var(--white)] pb-1">
              <div className=" w-full grid grid-cols-2 gap-1  bg-[var(--white)] pb-1 pr-2">
                <p
                  className={` uppercase flex items-center text-sm justify-center py-1 rounded-sm tracking-wider cursor-pointer ${
                    agenda
                      ? "bg-[rgb(50,52,59,0.75)] text-white"
                      : "bg-[var(--gray)] hover:bg-[rgb(50,52,59,0.5)] hover:text-white"
                  }`}
                  onClick={() => handleAgenda()}
                >
                  agenda
                </p>
                <p
                  className={`uppercase flex items-center text-sm justify-center tracking-wider py-1 rounded-sm ${
                    listeRdv
                      ? "bg-[rgb(50,52,59,0.75)] text-white"
                      : "bg-[var(--gray)] hover:bg-[rgb(50,52,59,0.5)] hover:text-white"
                  }   cursor-pointer`}
                  onClick={() => handleListeRdv()}
                >
                  listes des rendez-vous
                </p>
              </div>
            </div>
            {listeRdv && (
              <div className=" w-full h-full overflow-y-scroll flex flex-col gap-4 py-2  px-8">
                {rdvs.map((item) => (
                  <ListeRdv
                    key={item._id}
                    nom={item.nom}
                    prenom={item.prenom}
                    email={item.email}
                    telephone={item.telephone}
                    adresse={item.adresse}
                    lieu={item.lieu}
                    date={formatDate(item.date)}
                    heure={formatTime(item.heure)}
                    id={item._id}
                  />
                ))}
              </div>
            )}
            {agenda && <BigCalendar />}
          </div>
        </div>
      </div>
    </>
  );
}

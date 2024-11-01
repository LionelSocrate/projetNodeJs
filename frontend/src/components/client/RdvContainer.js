import axios from "axios";
import React, { useEffect, useState } from "react";
import ListeRdv from "../rendezVous/ListeRdv";

export default function RdvContainer() {
  const [rdvs, setRdvs] = useState([]);

  useEffect(() => {
    const fetchRdvs = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/rdv/getAllRdvs");
        setRdvs(res.data.rdvs);
      } catch (error) {
        console.error("Error fetching rendez-vous: ", error);
      }
    };

    fetchRdvs();
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("fr-FR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <>
      {rdvs.map((item) => (
        <ListeRdv
          key={item._id}
          nom={item.nom}
          prenom={item.prenom}
          telephone={item.telephone}
          email={item.email}
          adresse={item.adresse}
          lieu={item.lieu}
          date={formatDate(item.date)}
          heure={item.heure}
        />
      ))}
    </>
  );
}

import React, { useState } from "react";
import { CardValeur } from "../utils/CardValeur";

export default function Valeur() {
  const [confort, setConfort] = useState(true);
  const [autonomie, setAutonomie] = useState(false);
  const [service, setService] = useState(false);
  const [ecologique, setEcologique] = useState(false);

  const allDelete = () => {
    setConfort(false);
    setAutonomie(false);
    setService(false);
    setEcologique(false);
  };
  const handleConfort = () => {
    allDelete();
    setConfort(true);
  };
  const handleAutonomie = () => {
    allDelete();
    setAutonomie(true);
  };
  const handleService = () => {
    allDelete();
    setService(true);
  };
  const handleEcologique = () => {
    allDelete();
    setEcologique(true);
  };
  return (
    <>
      <div className=" w-full flex items-center justify-center py-16  bg-[var(--white)] ">
        <div className=" w-[85%] flex flex-col gap-12 items-center">
          <p className=" uppercase text-[var(--blue)] font-semibold text-4xl tracking-widest ">
            nos valeurs
          </p>
          <div className=" w-full grid grid-cols-4 gap-8">
            <CardValeur
              hook={confort}
              onclick={() => handleConfort()}
              label={"confort"}
              img={"/images/valeur/confort.png"}
              gap={4}
            />
            <CardValeur
              hook={autonomie}
              onclick={() => handleAutonomie()}
              label={"Autonomie"}
              img={"/images/valeur/autonomie.png"}
              gap={3}
            />
            <CardValeur
              hook={service}
              onclick={() => handleService()}
              label={"service"}
              img={"/images/valeur/service.png"}
              gap={3}
            />
            <CardValeur
              hook={ecologique}
              onclick={() => handleEcologique()}
              label={"écologique"}
              img={"/images/valeur/ecologie.png"}
              gap={3}
            />
          </div>
          <div className=" w-full">
            {confort && (
              <p className=" text-[rgb(0,0,0,0.75)] tracking-wide font-semibold ">
                Des espaces de vie modernes et fonctionnels, conçus pour
                répondre à vos besoins quotidiens et offir un confort optimal.
                Des finitions haut de gamme et des matériaux de qualité pour une
                ambiance luxueuseet agréable dans votre logement. Une isolation
                phonique, thermique et acoustique de haute qualité pour vous
                offrir une tranquillité absolue et un environnement intérieur
                confortable.
              </p>
            )}
            {autonomie && (
              <p className=" text-[rgb(0,0,0,0.75)] tracking-wide font-semibold ">
                Des solutions innovantes telles que l’automatisation
                intelligente vous permettent de gérer facilement les équipements
                et les systèmes de votre logement, améliorant ainsi votre
                qualité de vie. L’intégration de technologies écologiques et
                d’énergies renouvelables vous offre une autonomie énergétique et
                vous permet de réduire votre dépendance vis-à-vis des sources
                traditionnelles. Des systèmes de récupération et de gestion des
                eaux de pluie ainsi que des puits sont également mis en place
                pour une utilisation responsable de l’eau et une autonomie
                hybride.
              </p>
            )}
            {service && (
              <p className=" text-[rgb(0,0,0,0.75)] tracking-wide font-semibold ">
                Un service client dévoué et professionnel est à votre
                disposition à chaque étape du processus d’achat pour répondre à
                vos questions et vous fournir les informations nécessaires. Nous
                vous accompagnons et facilitons les démarches administratives
                ainsi que les modalités de paiement. Nos services personnalisés
                vous aident à prendre des décisions éclairées en choisissant les
                options les plus adaptées à vos besoins, à votre style de vie et
                surtout à votre budget.
              </p>
            )}
            {ecologique && (
              <p className=" text-[rgb(0,0,0,0.75)] tracking-wide font-semibold ">
                Des pratiques de construction respectueuses de l'environnement
                sont utilisées, mettant en œuvre des matériaux durables. Nous
                intégrons des solutions d'efficacité énergétique pour réduire
                votre consommation d'énergie et vous permettre d'économiser sur
                vos factures. Notre objectif est de créer un environnement
                soigneux et durable, où vous pouvez vivre en harmonie avec la
                nature tout en contribuant à la préservation de l'environnement.
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

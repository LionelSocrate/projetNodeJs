import React, { useEffect, useState } from "react";
import Topbar from "../components/home/Topbar";
import Navbar from "../components/home/Navbar";
import MenuClient from "../components/client/MenuClient";
import ContactContainer from "../components/client/ContactContainer";
import ReservationContainer from "../components/client/ReservationContainer";
import InteresseContainer from "../components/client/InteresseContainer";
import RdvContainer from "../components/client/RdvContainer";

export default function ClientsAdmin() {
  const [contact, setContact] = useState(true);
  const [reservation, setReservation] = useState(false);
  const [rdv, setRdv] = useState(false);
  const [interesse, setInteresse] = useState(false);
  const deleteAll = (setHook) => {
    setContact(false);
    setInteresse(false);
    setReservation(false);
    setRdv(false);
    setHook(true);
  };

  return (
    <>
      <div className=" w-full h-screen flex flex-col overflow-hidden  ">
        <Topbar />
        <div className=" flex w-full h-full">
          <Navbar qurentPath="/villaAdmin" />
          <div className=" bg-[var(--gray)] w-full h-[89vh] flex flex-col gap-2  ">
            <div className=" w-full grid grid-cols-4 gap-1  bg-[var(--white)] pb-1">
              <MenuClient
                label={"contacts"}
                state={contact}
                onClick={() => deleteAll(setContact)}
              />
              <MenuClient
                label={"réservations"}
                state={reservation}
                onClick={() => deleteAll(setReservation)}
              />
              <MenuClient
                label={"rendez-vous"}
                state={rdv}
                onClick={() => deleteAll(setRdv)}
              />
              <MenuClient
                label={" interessés"}
                state={interesse}
                onClick={() => deleteAll(setInteresse)}
              />
            </div>
            <div className=" w-full h-full overflow-y-scroll flex flex-col gap-4 py-2  px-4">
              {contact && <ContactContainer />}
              {reservation && <ReservationContainer />}
              {interesse && <InteresseContainer />}
              {rdv && <RdvContainer />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

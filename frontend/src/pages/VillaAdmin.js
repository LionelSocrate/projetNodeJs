import React, { useEffect, useState } from "react";
import Topbar from "../components/home/Topbar";
import Navbar from "../components/home/Navbar";
import ListeVilla from "../components/villa/ListeVilla";
import axios from "axios";
import { IoAddCircleOutline } from "react-icons/io5";
import AddVilla from "../components/villa/AddVilla";
import MenuVillaAdmin from "../components/villa/MenuVillaAdmin";

export default function VillaAdmin() {
  const [villas, setVillas] = useState([]);
  const [afficheAdd, setAfficheAdd] = useState(false);
  const [mendrika, setMendrika] = useState(false);
  const [meva, setMeva] = useState(false);
  const [koloina, setkoloina] = useState(false);
  const [soa, setSoa] = useState(false);
  const [tsara, setTsara] = useState(false);
  const [all, setAll] = useState(true);
  const deleteAll = (setHook) => {
    setAll(false);
    setMendrika(false);
    setMeva(false);
    setkoloina(false);
    setSoa(false);
    setTsara(false);
    setHook(true);
  };

  const handleAfficheAdd = () => {
    !afficheAdd ? setAfficheAdd(true) : setAfficheAdd(false);
  };

  useEffect(() => {
    const fetchVillas = async () => {
      try {
        await axios({
          method: "get",
          url: "http://localhost:5000/api/villa/getAllVilla",
          // withCredentials: true,
        }).then((res) => {
          setVillas(res.data.villa);
        });
      } catch (error) {
        console.log(error);
      }
    };
    fetchVillas();
  }, []);
  return (
    <>
      {afficheAdd && <AddVilla handleAfficheAdd={handleAfficheAdd} />}
      <div className=" w-full h-screen flex flex-col overflow-hidden  ">
        <Topbar />
        <div className=" flex w-full h-full">
          <Navbar />
          <div className=" bg-[var(--gray)] w-full h-[89vh] flex flex-col gap-2  ">
            <div className=" w-full grid grid-cols-7 gap-1  bg-[var(--white)] pb-1">
              <MenuVillaAdmin
                state={all}
                label={"Tous les villas"}
                onClick={() => deleteAll(setAll)}
              />
              <MenuVillaAdmin
                state={mendrika}
                label={"mendrika"}
                onClick={() => deleteAll(setMendrika)}
              />
              <MenuVillaAdmin
                state={koloina}
                label={"koloina"}
                onClick={() => deleteAll(setkoloina)}
              />
              <MenuVillaAdmin
                state={soa}
                label={"soa"}
                onClick={() => deleteAll(setSoa)}
              />
              <MenuVillaAdmin
                state={meva}
                label={"meva"}
                onClick={() => deleteAll(setMeva)}
              />
              <MenuVillaAdmin
                state={tsara}
                label={"tsara"}
                onClick={() => deleteAll(setTsara)}
              />

              <div
                className="  flex items-center gap-2 bgVilla2 py-1 px-4  cursor-pointer rounded-sm"
                onClick={handleAfficheAdd}
              >
                <IoAddCircleOutline size={"1.2rem"} className=" text-white" />
                <p className=" uppercase text-white">Nouvelle</p>
              </div>
            </div>
            <div className=" w-full h-full overflow-y-scroll flex flex-col gap-4 py-2  px-4">
              {all && (
                <>
                  {villas.map((item) => (
                    <ListeVilla
                      nom={item.nom}
                      type={item.type}
                      lot={item.lot}
                      desc={item.description}
                      id={item._id}
                      isReserv={item.isReserv}
                      projet={item.idProjet}
                      picture={item.picture}
                    />
                  ))}
                </>
              )}

              {mendrika && (
                <>
                  {villas.map(
                    (item) =>
                      item.nom === "mendrika" && (
                        <ListeVilla
                          nom={item.nom}
                          type={item.type}
                          lot={item.lot}
                          desc={item.description}
                          id={item._id}
                          isReserv={item.isReserv}
                          projet={item.idProjet}
                          picture={item.picture}
                        />
                      )
                  )}
                </>
              )}
              {koloina && (
                <>
                  {villas.map(
                    (item) =>
                      item.nom === "koloina" && (
                        <ListeVilla
                          nom={item.nom}
                          type={item.type}
                          lot={item.lot}
                          desc={item.description}
                          id={item._id}
                          isReserv={item.isReserv}
                          projet={item.idProjet}
                          picture={item.picture}
                        />
                      )
                  )}
                </>
              )}
              {meva && (
                <>
                  {villas.map(
                    (item) =>
                      item.nom === "meva" && (
                        <ListeVilla
                          nom={item.nom}
                          type={item.type}
                          lot={item.lot}
                          desc={item.description}
                          id={item._id}
                          isReserv={item.isReserv}
                          projet={item.idProjet}
                          picture={item.picture}
                        />
                      )
                  )}
                </>
              )}
              {tsara && (
                <>
                  {villas.map(
                    (item) =>
                      item.nom === "tsara" && (
                        <ListeVilla
                          nom={item.nom}
                          type={item.type}
                          lot={item.lot}
                          desc={item.description}
                          id={item._id}
                          isReserv={item.isReserv}
                          projet={item.idProjet}
                          picture={item.picture}
                        />
                      )
                  )}
                </>
              )}
              {soa && (
                <>
                  {villas.map(
                    (item) =>
                      item.nom === "soa" && (
                        <ListeVilla
                          nom={item.nom}
                          type={item.type}
                          lot={item.lot}
                          desc={item.description}
                          id={item._id}
                          isReserv={item.isReserv}
                          projet={item.idProjet}
                          picture={item.picture}
                        />
                      )
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

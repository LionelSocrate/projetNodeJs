import React from "react";
import { BiCopyright } from "react-icons/bi";
import { IoCall, IoCheckmark, IoLocation } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <>
      <div className=" w-full   bg-[#211c39] flex flex-col gap-4      ">
        <div className=" w-full flex  items-center justify-center py-12">
          <div className=" w-[85%] grid grid-cols-3 gap-[5%] ">
            <div className=" flex flex-col gap-8">
              <p className=" text-5xl bgText  stroke-white font-extrabold text-white uppercase tracking-wider">
                polypus
              </p>
              <p className=" text-[rgb(255,255,255,0.75)] ">
                POLYPUS CORPORATION S.A se spécialise dans la construction de
                maisons préfabriqués avec isolation avancée et résistance au
                vent jusqu'à 290km/h
              </p>
            </div>
            <div className=" flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <img
                  src="/images/drapeauMlg.png"
                  className=" w-8"
                  alt="drapeau Malagasy "
                />
                <p className=" uppercase text-white">contact madagascar</p>
              </div>{" "}
              <div className=" w-full h-[0.5px] bg-[rgb(255,255,255,0.25)] "></div>
              <div className=" w-full flex flex-col gap-5">
                <div className=" flex flex-col gap-2">
                  <div className=" flex  items-center gap-6">
                    <div className=" flex items-center gap-1">
                      <IoCall className=" text-green-400" />
                      <p className=" text-white">+261 38 863 44</p>
                    </div>
                    <div className=" flex items-center gap-1">
                      <MdEmail className=" text-green-400" />
                      <p className=" text-white">contact@polypus.mg</p>
                    </div>
                  </div>
                  <div className=" flex flex-col gap-1">
                    <div className=" flex items-center gap-1 ">
                      <IoLocation className=" text-green-400" />
                      <p className=" text-white">
                        Lot 021D Bis Ambohibao Antehiroka,
                      </p>
                    </div>
                    <p className=" text-white">Antananarivo Madagascar</p>
                  </div>
                </div>
                <div className=" w-full h-[0.5px] bg-[rgb(255,255,255,0.25)] "></div>

                <div className=" flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <img
                      src="/images/france.jpg"
                      className=" w-7"
                      alt="drapeau Malagasy "
                    />
                    <p className=" uppercase text-white">contact france</p>
                  </div>
                  <div className=" flex  items-center gap-4">
                    <div className=" flex items-center gap-1">
                      <IoCall className=" text-green-300" />
                      <p className=" text-white">+33 6 67 97 86 45</p>
                    </div>
                    <div className=" flex items-center gap-1">
                      <MdEmail className=" text-green-300" />
                      <p className=" text-white">chamila@polypus.mg</p>
                    </div>
                  </div>
                  <div className=" flex  items-center gap-4">
                    <div className=" flex items-center gap-1">
                      <IoCall className=" text-green-300" />
                      <p className=" text-white">+33 6 76 77 16 19</p>
                    </div>
                    <div className=" flex items-center gap-1">
                      <MdEmail className=" text-green-300" />
                      <p className=" text-white">pierre@polypus.mg</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" flex flex-col gap-4">
              <div
                className=" flex flex-col gap-3
            "
              >
                <p className="  uppercase text-white text-xl tracking-wider">
                  commercial
                </p>
                <div className=" w-full h-[0.5px] bg-[rgb(255,255,255,0.25)] "></div>
                <div className=" flex flex-col gap-1 ">
                  <div className=" flex items-center gap-2">
                    <IoCall className=" text-green-300" />
                    <p className=" text-white">+261 34 79 953 37</p>
                  </div>
                  <div className=" flex items-center gap-3">
                    <MdEmail className=" text-green-300" />
                    <p className=" text-white">r.com@polypus.mg</p>
                  </div>
                </div>
              </div>
              <div
                className=" flex flex-col gap-3
            "
              >
                <p className="  text-white text-xl tracking-wider">
                  Temps de Travail
                </p>
                <div className=" w-full h-[0.5px] bg-[rgb(255,255,255,0.25)] "></div>
                <div className=" flex flex-col gap-1">
                  <div className=" flex items-center gap-4">
                    <p className="  text-[rgb(255,255,255,0.5)]">
                      Lundi - vendredi ......
                    </p>
                    <p className=" text-white"> 8:00 - 11:00 (Matin)</p>
                  </div>
                  <div className=" flex items-center gap-4">
                    <p className=" text-[rgb(255,255,255,0.5)]">
                      Lundi - vendredi .......
                    </p>
                    <p className=" text-white"> 13:00 - 17:00 (Apres-midi)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" w-full py-4 flex items-center justify-center bg-[rgb(0,0,0,0.35)] ">
          <p className=" text-white flex items-center gap-2 ">
            <span>
              <BiCopyright className=" text-white" size={"1.1rem"} />
            </span>
            <span>Polypus Corporation 2024 | Tous droits réservée</span>
          </p>
        </div>
      </div>
    </>
  );
}

import React from "react";
import TopbarLanding from "../components/landing/TopbarLanding";
import Footer from "../components/landing/Footer";

export default function Video3d() {
  return (
    <>
      <TopbarLanding />
      <div className=" mt-[4rem] w-full h-[18rem] bgVilla5 relative ">
        <div className=" absolute w-full h-full top-0 left-0 flex items-center justify-center bg-[rgb(0,0,0,0.65)] ">
          <p className=" uppercase text-3xl px-16 leading-relaxed  tracking-wider  text-white text-center">
            à travers ce voyage visuel, vous découvrirez bien plus qu'une simple
            résidence. chaque pièce, chaque détail a été pensé avec une passion
            exquise pour créer une fusion harmonieuse
          </p>
        </div>
      </div>
      <div className=" w-full py-8 flex items-center justify-center">
        <div className=" w-[80%] flex flex-col gap-6 ">
          <div className=" relative w-full bg-[var(--white)] shadow-lg flex items-center justify-between gap-8 px-12 py-4">
            <div className=" absolute left-0 top-0 h-full w-1 bg-[var(--orange-color)] "></div>
            <p className=" w-1/2 text-xl text-[rgb(0,0,0,0.75)] leading-relaxed ">
              Découvrez en exclusivité notre vidéo de présentation des
              magnifiques villas de notre résidence sécurisée. Nichées dans un
              écrin de verdure, nos villas offrent un cadre de vie exceptionnel
              alliant confort, élégance et sécurité.{" "}
            </p>
            <iframe
              width="500"
              height="240"
              src={
                "https://www.youtube.com/embed/efaZswY_-LA?ab_channel=PolypusCorporation"
              }
              title="YouTube video player"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className=" relative w-full bg-[var(--white)] shadow-lg flex items-center flex-row-reverse justify-between gap-8 px-12 py-4">
            <div className=" absolute left-0 top-0 h-full w-1 bg-[var(--orange-color)] "></div>
            <p className=" w-1/2 text-xl text-[rgb(0,0,0,0.75)] leading-relaxed ">
              Profitez également de la tranquillité et de la sécurité offerte
              par notre résidence, avec un accès contrôlé et une surveillance
              24h/24. Vivez l’expérience d’un mode de vie privilégié dans un
              environnement préservé, ou chaque détail a été pensé pour votre
              bien-être. N’attendez plus, visionnez notre vidéo de présentation
              et laissez-vous séduire par le charme incomparable de nos villas
              dans notre résidence sécurisée.
            </p>
            <iframe
              width="500"
              height="280"
              src={
                "https://www.youtube.com/embed/Sik33bV6fdg?ab_channel=PolypusCorporation"
              }
              title="YouTube video player"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className=" relative w-full bg-[var(--white)] shadow-lg flex items-center justify-between gap-8 px-12 py-4">
            <div className=" absolute left-0 top-0 h-full w-1 bg-[var(--orange-color)] "></div>
            <p className=" w-1/2  text-[rgb(0,0,0,0.75)] leading-relaxed ">
              Villa R+1: charmante maison de type F4 s’élève sur deux niveaux,
              offrant une surface généreuse de 400 mètres carrés de terrain. À
              l’intérieur, elle accueille ses résidents dans un espace
              chaleureux comprenant trois chambres spacieuses, chacune dotée
              d’une élégante douche à l’italienne et de toilettes privatives
              pour un confort absolu. Le rez-de-chaussée est conçu pour la
              convivialité avec son séjour lumineux, une salle à manger
              accueillante, et une cuisine à l’américaine moderne, idéale pour
              des moments de partage en famille ou entre amis. Pour plus de
              praticité, la maison dispose d’un garage et d’une buanderie. À
              l’extérieur, un aménagement paysager soigné complète l’ensemble,
              créant un environnement agréable pour profiter des journées
              ensoleillées et des soirées douces.
            </p>
            <iframe
              width="500"
              height="280"
              src={
                "https://www.youtube.com/embed/j_q-qCN2MHo?ab_channel=PolypusCorporation"
              }
              title="YouTube video player"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

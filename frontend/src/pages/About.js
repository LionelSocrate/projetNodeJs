import React from "react";
import TopbarLanding from "../components/landing/TopbarLanding";
import Footer from "../components/landing/Footer";

export default function About() {
  return (
    <>
      <TopbarLanding />
      <div className=" w-full mt-16 h-[19rem] bgVilla5 relative ">
        <div className=" absolute w-full h-full top-0 left-0 flex items-center justify-center bg-[var(--bgFixed)] ">
          <p className=" uppercase text-6xl  tracking-wider  text-white text-center">
            a propos
          </p>
        </div>
      </div>
      <div className=" w-full flex flex-col gap-12 items-center py-12 ">
        <p className=" uppercase text-3xl font-semibold text-orange-400">
          qui sommes-nous ?
        </p>
        <div className=" relative w-full flex flex-col gap-12 items-center">
          <div className="absolute top-0 left-0 h-full w-3 bg-gray-600"></div>
          <div className="absolute top-0 right-0 h-full w-3 bg-gray-600"></div>
          <p className=" w-[80%] text-[rgb(0,0,0,0.6)] leading-relaxed  tracking-wider text-[1.1rem]  ">
            POLYPUS CORPORATION S.A, fondée en 2022, a pour mission d'introduire
            des innovations technologiques visant à ameliorer la qualité de vie
            à Madagascar. Nous sommes engagés dans le développement durable et
            la construction de maisons préfabriqueées en Utilisant des
            tecnologies de pointe .
          </p>
          <p className=" w-[80%] text-[rgb(0,0,0,0.6)] leading-relaxed  tracking-wider text-[1.1rem]  ">
            en partenariat exculisif avec Emmedue, une entreprise italienne de
            renommée mondiale pour ses technologies avancées dans la
            construction préfabriquée, nous apportons des solutions efficaces et
            fiables pour une construction rapide et économique. Emmedue, avec
            plus de 40 ans d'experience dans plus de 30 pays, est un leader
            mondial dans ce domaine.
          </p>
          <p className=" w-[80%] text-[rgb(0,0,0,0.6)] leading-relaxed  tracking-wider text-[1.1rem]  ">
            POLYPUS CORPORATION S.A, nous nous spécialisons dans la construction
            de maisons offrant une isolation phonique, thermique et acoustique
            supérieure, ainsi qu'une résistance au vent allant jusqu'à 290 km/h.
            Nous mettons également un accent particulier sur l'autonomie
            énergétique et en eau , garantissant des produits durales, de haute
            qualité et accessibles à tous. Notre engagement est de fournir des
            habitants qui respectent les normes les plus strictes et une
            déontologie exemplaire
          </p>
        </div>
      </div>
      <div className=" w-full flex items-center justify-center py-16">
        <div className=" w-[85%] grid grid-cols-3 gap-16 ">
          <div className=" bg-[var(--white)] shadow-xl  flex flex-col items-center gap-4 py-16 px-12">
            <img
              src="/images/about/thermique.png"
              alt="image-thermique"
              className=" w-[12rem] "
            />
            <p className=" text-[var(--blue)] text-center uppercase tracking-wider text-xl ">
              isolation thermique et eolienne
            </p>
          </div>
          <div className=" bg-[var(--white)] shadow-xl  flex flex-col items-center gap-4 py-16 px-12">
            <img
              src="/images/about/phonique.png"
              alt="image-phonique"
              className=" w-[12rem] "
            />
            <p className=" text-[var(--blue)] text-center uppercase tracking-wider text-xl ">
              isolation phonique & ACOUSTIQUE
            </p>
          </div>
          <div className=" bg-[var(--white)] shadow-xl  flex flex-col items-center gap-4 py-16 px-12">
            <img
              src="/images/about/solaire.png"
              alt="image-solaire"
              className=" w-[12rem] "
            />
            <p className=" text-[var(--blue)] text-center uppercase tracking-wider text-xl ">
              energie <br /> PHOTOVOLTAIQUE
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

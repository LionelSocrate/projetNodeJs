import React, { useState } from "react";
import Header from "../components/landing/Header";
import TopbarLanding from "../components/landing/TopbarLanding";
import SecondPage from "../components/landing/SecondPage";
import Login from "./Login";
import Valeur from "../components/landing/Valeur";
import Footer from "../components/landing/Footer";
import Rotate from "../components/landing/Rotate";
import FiveCard from "../components/landing/FiveCard";
import VideoPlayer from "../components/utils/VideoPlayer";
import Nouvelle from "../components/landing/Nouvelle";
import VideoLanding from "../components/landing/VideoLanding";

export default function Landing() {
  const [afficheLogin, setAfficheLogin] = useState(false);
  const handleAfficheLogin = () => {
    !afficheLogin ? setAfficheLogin(true) : setAfficheLogin(false);
  };

  return (
    <>
      {afficheLogin && <Login handleAfficheLogin={handleAfficheLogin} />}
      <div className=" relative w-full">
        <div className=" absolute top-0 left-0 z-10 w-full  ">
          <TopbarLanding handleAfficheLogin={handleAfficheLogin} />
          {/* <div className=" w-full h-[92vh] mt-16 bg-[rgb(244,240,228)] flex flex-col gap-8 items-center justify-center py-8 ">
            <div className=" relative w-[85%] h-full rounded-3xl overflow-hidden">
              <img
                src={"/images/tsara/tsara3.png"}
                alt=""
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "100%",
                }}
              />
              <div className=" absolute top-12 left-0 bg-[rgb(105,79,43,0.85)] px-12 py-2 ">
                <p className=" uppercase font-extrabold  text-white text-3xl">
                  villa tsara
                </p>
              </div>
            </div>
          </div> */}
          <Header />
          <SecondPage />
          <Rotate />
          <FiveCard />
          <Valeur />
          <VideoLanding />
          <Nouvelle />
          <Footer />
        </div>
        <div className=" fixed top-0 left-0 w-full h-screen z-0">
          <img
            src={"/images/ravinala/ravinala1.png"}
            alt=""
            style={{
              objectFit: "cover",
              width: "100%",
              height: "100%",
            }}
          />
        </div>
      </div>
    </>
  );
}

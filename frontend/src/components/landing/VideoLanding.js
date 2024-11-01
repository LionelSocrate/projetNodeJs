import React from "react";
import VideoPlayer from "../utils/VideoPlayer";

export default function VideoLanding() {
  return (
    <>
      <div className=" w-full h-[30rem] bg-[rgb(0,0,0,0.65)] flex items-center justify-center gap-6 ">
        <iframe
          width="560"
          height="320"
          src={
            "https://www.youtube.com/embed/BGtsLYTMlYM?t=5s&ab_channel=PolypusCorporation"
          }
          title="YouTube video player"
          frameBorder="0"
          allowFullScreen
        ></iframe>{" "}
        <div className=" flex flex-col items-center justify-center gap-6">
          <p className=" uppercase text-white text-xl tracking-wider">
            les 12 villas de polypus corporation
          </p>
          <p className=" uppercase text-white text-center text-xl tracking-widest">
            polypus propose 12 villas dans plusieurs <br /> régions de
            madagascar{" "}
          </p>
          <div className=" uppercase text-white py-3 px-8 bg-[var(--blue)] tracking-wide ">
            détails
          </div>
        </div>
      </div>
    </>
  );
}

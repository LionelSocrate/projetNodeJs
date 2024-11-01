import React from "react";

export default function CardRotate({ angle, img, nom }) {
  return (
    <>
      <div
        className={`absolute w-full h-full  cursor-pointer rounded-lg overflow-hidden`}
        style={{
          transform: `rotateY(${angle}deg) translateZ(26rem)`,
        }}
      >
        <div className=" absolute left-0 bottom-0 flex items-center justify-center py-2 w-full bg-[rgb(0,0,0,0.25)]  ">
          <p className=" text-white font-semibold texl-2xl uppercase">
            villa <span className=" text-orange-400">{nom}</span>{" "}
          </p>
        </div>
        <img
          src={img}
          alt=""
          style={{
            objectFit: "cover",
            width: "100%",
            height: "100%",
          }}
        />
      </div>
    </>
  );
}

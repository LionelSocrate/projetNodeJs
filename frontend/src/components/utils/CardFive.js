import React from "react";

export default function CardFive({ img, state, onMouseOver }) {
  return (
    <>
      <div
        className={`relative ${state ? "w-[253px]" : "w-[60px] "}
        h-[358px] rounded-[2rem] overflow-hidden transition`}
        onMouseOver={onMouseOver}
      >
        <img
          src={img}
          alt={"villa mendrika"}
          style={{
            objectFit: "cover",
            width: "100%",
            height: "100%",
          }}
        />
        {!state && (
          <div className="   absolute bottom-2 left-[0.5rem]  w-11 h-11 bg-white rounded-full flex items-center justify-center overflow-hidden">
            <img
              src="/images/petitLogo.jpg"
              className=" w-7"
              alt="drapeau Malagasy "
            />
          </div>
        )}
        {state && (
          <div className=" absolute top-0 left-0 w-full h-full bg-[var(--bgFixed)] flex flex-col items-center justify-center gap-4 ">
            <div className="  w-12 h-12 bg-white rounded-full flex items-center justify-center animHidden">
              <img
                src="/images/petitLogo.jpg"
                className=" w-7"
                alt="drapeau Malagasy "
              />
            </div>
            <p className=" uppercase text-white text-sm animHidden">
              polypus corporation
            </p>
            <button className=" bg-orange-300 text-white py-3 px-4 rounded-full text-sm animHidden ">
              Réservation
            </button>
          </div>
        )}
      </div>
    </>
  );
}

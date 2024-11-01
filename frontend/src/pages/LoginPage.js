import React from "react";
import { IoIosArrowRoundBack, IoMdArrowRoundBack } from "react-icons/io";
import { MdArrowRight, MdKey, MdOutlineEmail } from "react-icons/md";

export default function LoginPage() {
  return (
    <>
      <div className=" relative w-full h-screen flex">
        <IoMdArrowRoundBack
          size={"2.4rem"}
          className=" absolute z-20 top-6 left-8 text-blue-950"
        />
        <div className=" relative  w-2/3 h-full bg-[rgb(247,247,247)] "></div>
        <form className=" w-1/3 flex flex-col gap-8 items-center justify-center">
          <img src="images/petitLogo.jpg" alt="" className=" w-10" />
          <p className=" uppercase text-4xl font-extrabold text-blue-950">
            bienvenue
          </p>
          <div className=" flex flex-col gap-6 ">
            <div className="relative w-[320px] flex items-center">
              <input
                id={"email"}
                type={"email"}
                placeholder={"E-mail"}
                onChange={() => {}}
                className={` relative h-10 pl-10 pr-2    peer bg-blue-50 outline-none   rounded-sm focus:outline outline-1  w-full placeholder:text-[var(--color-gray)]  `}
              />
              <div className=" absolute top-0 left-0 w-[2px] h-full bg-blue-950 "></div>
              <label
                htmlFor={"email"}
                className={`absolute left-10 -translate-y-6 -translate-x-1 placeholder:text-[var(--color-gray)] px-2 text-sm peer-placeholder-shown:translate-y-0 peer-placeholder-shown:translate-x-0 peer-placeholder-shown:text-base peer-focus:-translate-y-6 peer-focus:-translate-x-1 peer-focus:text-sm  rounded-sm transition-all duration-150 cursor-text bg-blue-50 `}
              >
                E-mail
              </label>
              <i className={`absolute left-3  `}>
                <MdOutlineEmail size={"1.25rem"} />
              </i>
            </div>
            <div className="relative w-[320px] flex items-center">
              <input
                id={"password"}
                type={"password"}
                placeholder={"Mot de passe"}
                onChange={() => {}}
                className={` relative h-10 pl-10 pr-2    peer bg-blue-50 outline-none   rounded-sm focus:outline outline-1  w-full placeholder:text-[var(--color-gray)]  `}
              />
              <div className=" absolute top-0 left-0 w-[2px] h-full bg-blue-950 "></div>
              <label
                htmlFor={"password"}
                className={`absolute left-10 -translate-y-6 -translate-x-1 placeholder:text-[var(--color-gray)] px-2 text-sm peer-placeholder-shown:translate-y-0 peer-placeholder-shown:translate-x-0 peer-placeholder-shown:text-base peer-focus:-translate-y-6 peer-focus:-translate-x-1 peer-focus:text-sm  rounded-sm transition-all duration-150 cursor-text bg-blue-50 `}
              >
                Mot de passe
              </label>
              <i className={`absolute left-3  `}>
                <MdKey size={"1.25rem"} />
              </i>
            </div>
          </div>
          <button
            type="submit"
            className=" w-[320px] flex items-center justify-center gap-4 bg-blue-950 hover:bg-blue-900 rounded-sm py-2 "
          >
            <p className=" text-sm text-white tracking-wide">Connexion</p>
            <MdArrowRight size={"1.1rem"} className=" text-white" />
          </button>
        </form>
      </div>
    </>
  );
}

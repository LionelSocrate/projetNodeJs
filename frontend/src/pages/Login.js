import axios from "axios";
import React, { useState } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";

export default function Login({ handleAfficheLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    try {
      axios({
        method: "post",
        url: "http://localhost:5000/api/auth/login",
        data: {
          email,
          password,
        },
        withCredentials: true,
      });
      window.location = "/dashboard";
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div className=" fixed  z-50 top-0 right-0 bg-[rgb(0,0,0,0.15)] w-full h-full flex items-center justify-center   rounded-xl ">
        <form
          onSubmit={handleLogin}
          action=""
          className=" relative bg-white  rounded-xl flex flex-col items-center gap-8 shadow-xl p-8"
        >
          <div
            className=" absolute top-2 right-2  cursor-pointer"
            onClick={handleAfficheLogin}
          >
            <IoCloseCircleOutline
              size={"1.5rem"}
              className=" text-orange-400 "
            />
          </div>
          <h1 className=" uppercase text-[var(--orange-color)] font-extrabold text-xl ">
            connexion
          </h1>
          <div className=" w-full h-[2px] bg-[rgb(247,247,247)] "></div>
          <div className=" flex flex-col gap-1">
            <p>E-mail</p>
            <input
              type="email"
              className=" bg-[rgb(247,247,247)] rounded-md w-[20rem] outline-none px-4 py-2 placeholder:Ecrire votre mail...  "
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className=" flex flex-col gap-1">
            <p>Mot de passe</p>
            <input
              type="password"
              className=" bg-[rgb(247,247,247)] rounded-md w-[20rem] outline-none px-4 py-2 placeholder:Ecrire votre mail...  "
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            onClick={handleLogin}
            type=" submit"
            className=" text-white  bg-orange-400 w-full rounded-sm py-2 uppercase font-extralight "
          >
            se connecter
          </button>
        </form>
      </div>
    </>
  );
}

import React, { useEffect, useState } from "react";
import TopbarLanding from "../components/landing/TopbarLanding";
import { IoCall, IoLocation, IoMailOpen } from "react-icons/io5";
import { BiSolidSend } from "react-icons/bi";
import axios from "axios";

export default function Contact() {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const [nom, setNom] = useState({ value: "", valid: false });
  const [telephone, setTelephone] = useState({ value: "", valid: false });
  const [email, setEmail] = useState({ value: "", valid: false });
  const [message, setMessage] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);

  useEffect(() => {
    //prénom
    if (nom.value?.length > 2) {
      if (!nom.valid) {
        setNom((prev) => ({ ...prev, valid: true }));
        console.log("nom yes");
      }
    } else {
      if (nom.valid) {
        setNom((prev) => ({ ...prev, valid: false }));
        console.log("nom no");
      }
    }

    //téléphone
    if (telephone.value?.length > 9) {
      if (!telephone.valid) {
        setTelephone((prev) => ({ ...prev, valid: true }));
        console.log("téléphone yes");
      }
    } else {
      if (telephone.valid) {
        setTelephone((prev) => ({ ...prev, valid: false }));
        console.log("téléphone no");
      }
    }

    //email
    if (emailRegex.test(email.value)) {
      if (!email.valid) {
        setEmail((prev) => ({ ...prev, valid: true }));
        console.log("email yes");
      }
    } else {
      if (email.valid) {
        setEmail((prev) => ({ ...prev, valid: false }));
        console.log("email no");
      }
    }
  }, [nom.value, email.value, telephone.value]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmit(true);

    if (nom.valid && telephone.valid && email.valid) {
      const allValid = async () => {
        await axios({
          method: "post",
          url: "http://localhost:5000/api/contact/addContact",
          data: {
            nom: nom.value,
            email: email.value,
            telephone: telephone.value,
            message: message,
          },
        })
          .then((res) => {})
          .catch((err) => console.log(err));
      };
      allValid();
    } else {
      console.log("contact failed");
    }
  };
  return (
    <>
      <TopbarLanding />
      <div className=" mt-16 w-full h-[17rem] bgVilla5 relative ">
        <div className=" absolute w-full h-full top-0 left-0 flex items-center justify-center bg-[var(--bgFixed)] ">
          <p className=" uppercase text-5xl  tracking-wider  text-white text-center">
            contacts
          </p>
        </div>
      </div>
      <div className=" w-full py-8 bg-[rgb(237,240,248)] flex items-center justify-center gap-16 ">
        <div className=" flex flex-col gap-6">
          <p className=" uppercase text-2xl tracking-wider">coordonnées</p>
          <div className=" flex items-center gap-8 ">
            <IoCall size={"1.35rem"} className=" text-[rgb(222,158,83)] " />
            <p className=" text-[rgb(222,158,83)] tracking-wide ">
              +261 38 37 863 44
            </p>
          </div>
          <div className=" flex items-center gap-8 ">
            <IoMailOpen size={"1.35rem"} className=" text-[rgb(222,158,83)] " />
            <p className=" text-[rgb(222,158,83)] tracking-wide ">
              contact@polypus.mg
            </p>
          </div>
          <div className=" flex items-center gap-8 ">
            <IoLocation size={"1.35rem"} className=" text-[rgb(222,158,83)] " />
            <p className=" text-[rgb(222,158,83)] tracking-wide ">
              Lot 021D Bis Ambohibao <br /> Antehiroka, Antananarivo <br />{" "}
              Madagascar
            </p>
          </div>
        </div>
        <form
          action=""
          className=" bg-[var(--white)] rounded-sm py-6 px-5 flex flex-col gap-6 shadow-xl "
          onSubmit={handleSubmit}
        >
          <div className=" flex flex-col gap-1">
            <div className=" relative">
              <input
                type="text"
                placeholder="Nom"
                className=" outline-none bg-none placeholder:text-[var(--color-gray)] placeholder:text-sm py-2   w-[24rem] "
                onChange={(e) =>
                  setNom((prev) => ({ ...prev, value: e.target.value }))
                }
              />
              <div className=" absolute left-0 bottom-0 w-full h-[1px] bg-[rgb(222,158,83,0.5)] "></div>
            </div>
            <div className=" relative">
              <input
                type="text"
                placeholder="Téléphone"
                className=" outline-none bg-none placeholder:text-[var(--color-gray)] placeholder:text-sm py-2   w-[24rem] "
                onChange={(e) =>
                  setTelephone((prev) => ({ ...prev, value: e.target.value }))
                }
              />

              <div className=" absolute left-0 bottom-0 w-full h-[1px] bg-[rgb(222,158,83,0.5)] "></div>
            </div>
            <div className=" relative">
              <input
                type="email"
                placeholder="Email"
                className=" outline-none bg-none placeholder:text-[var(--color-gray)] placeholder:text-sm py-2   w-[24rem] "
                onChange={(e) =>
                  setEmail((prev) => ({ ...prev, value: e.target.value }))
                }
              />
              <div className=" absolute left-0 bottom-0 w-full h-[1px] bg-[rgb(222,158,83,0.5)] "></div>
            </div>
            <div className=" relative">
              <textarea
                name=""
                id=""
                placeholder="Message"
                className=" outline-none bg-none placeholder:text-[var(--color-gray)] placeholder:text-sm py-2   w-[24rem] "
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              <div className=" absolute left-0 bottom-0 w-full h-[1px] bg-[rgb(222,158,83,0.5)] "></div>
            </div>
          </div>
          <button
            type="submit"
            className=" w-full bg-[rgb(222,158,83)] py-2 flex items-center justify-center gap-2"
          >
            <p className=" uppercase text-white text-xs font-semibold">
              envoyer
            </p>
            <BiSolidSend size={"0.9rem"} className=" text-white" />
          </button>
        </form>
      </div>
    </>
  );
}

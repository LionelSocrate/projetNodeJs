import React, { useEffect, useState } from "react";
import TopbarLanding from "../components/landing/TopbarLanding";
import { IoCallOutline, IoKeyOutline, IoPersonOutline } from "react-icons/io5";
import { MdFastForward, MdOutlineMailOutline } from "react-icons/md";
import { GoLocation } from "react-icons/go";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

export default function Register() {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const [nom, setNom] = useState({ value: "", valid: false });
  const [prénom, setPrénom] = useState({ value: "", valid: false });
  const [téléphone, setTéléphone] = useState({ value: "", valid: false });
  const [email, setEmail] = useState({ value: "", valid: false });
  const [adresse, setAdresse] = useState({ value: "", valid: false });
  const [password, setPassword] = useState({ value: "", valid: false });

  const [isSubmit, setIsSubmit] = useState(false);

  const toastStyle = {
    style: {
      border: "1px solid var(--orange-color)",
      padding: "16px",
      color: "var(--white)",
      background: "var(--bg-gradient)",
    },
    iconTheme: {
      primary: "var(--blue)",
      secondary: "var(--white)",
    },
  };

  const handleNext = (e) => {
    setIsSubmit(true);
    e.preventDefault();
    if (
      nom.valid &&
      prénom.valid &&
      téléphone.valid &&
      email.valid &&
      adresse.valid &&
      password.valid
    ) {
      const allValid = async () => {
        await axios({
          method: "post",
          url: "http://localhost:5000/api/auth/register",
          data: {
            nom: nom.value,
            prenom: prénom.value,
            email: email.value,
            telephone: téléphone.value,
            adresse: adresse.value,
            password: adresse.value,
          },
        })
          .then((res) => {})
          .catch((err) => console.log(err));
      };
      allValid();
    } else {
      if (!nom.valid) {
        toast.error("Nom invalide", toastStyle);
      } else if (!prénom.valid) {
        toast.error("Prénom(s) invalide", toastStyle);
      } else if (!email.valid) {
        toast.error("E-mail invalide", toastStyle);
      } else if (!téléphone.valid) {
        toast.error("Numéro téléphone invalide", toastStyle);
      } else if (!adresse.valid) {
        toast.error("Numéro téléphone invalide", toastStyle);
      } else if (!password.valid) {
        toast.error("Numéro téléphone invalide", toastStyle);
      }
    }
  };

  useEffect(() => {
    //nom
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
    //prénom
    if (prénom.value?.length > 2) {
      if (!prénom.valid) {
        setPrénom((prev) => ({ ...prev, valid: true }));
        console.log("prénom yes");
      }
    } else {
      if (prénom.valid) {
        setPrénom((prev) => ({ ...prev, valid: false }));
        console.log("prénom no");
      }
    }

    //téléphone
    if (téléphone.value?.length > 9) {
      if (!téléphone.valid) {
        setTéléphone((prev) => ({ ...prev, valid: true }));
        console.log("téléphone yes");
      }
    } else {
      if (téléphone.valid) {
        setTéléphone((prev) => ({ ...prev, valid: false }));
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
    //adresse
    if (adresse.value?.length > 2) {
      if (!adresse.valid) {
        setAdresse((prev) => ({ ...prev, valid: true }));
        console.log("adresse yes");
      }
    } else {
      if (adresse.valid) {
        setAdresse((prev) => ({ ...prev, valid: false }));
        console.log("adresse no");
      }
    }
    //password
    if (password.value?.length > 5) {
      if (!password.valid) {
        setPassword((prev) => ({ ...prev, valid: true }));
        console.log("pwd yes");
      }
    } else {
      if (password.valid) {
        setPassword((prev) => ({ ...prev, valid: false }));
        console.log("pwd no");
      }
    }
  }, [
    nom.value,
    prénom.value,
    téléphone.value,
    email.value,
    adresse.value,
    password.value,
  ]);

  return (
    <>
      <Toaster />
      <div className=" w-full min-h-screen bg-[var(--gray)] ">
        <TopbarLanding />

        <div className=" w-full h-[60vh] bgVilla4 relative ">
          <div className=" absolute w-full h-full top-0 left-0 flex items-center justify-center bg-[var(--bgFixed)] ">
            <p className=" uppercase text-6xl  font-extralight  text-white text-center">
              Inscriptions avec polypus
            </p>
          </div>
          <form
            id="formulaire"
            className=" absolute left-[10%] -bottom-[15rem]  w-4/5  flex bg-[var(--gray)] rounded-lg  flex-col py-8 px-16 gap-4 shadow-md"
          >
            <div className=" w-full  gap-8 p-4 grid grid-cols-3 grid-rows-2 items-center ">
              <div
                className={`relative flex  justify-center flex-col gap-2 px-6 py-8 bg-[var(--white)] rounded-xl shadow-sm ${
                  !nom.valid && isSubmit
                    ? "border border-red-600"
                    : "border border-transparent"
                }`}
              >
                <p className="  text-xl  font-extralight text-slate-500 uppercase">
                  nom
                </p>
                <input
                  type="text"
                  placeholder="écrire votre nom..."
                  className=" outline-none border-none text-xl"
                  onChange={(e) =>
                    setNom((prev) => ({ ...prev, value: e.target.value }))
                  }
                />
                <div className=" absolute top-[-1.8rem] left-[41%] w-[3.5rem] h-[3.5rem] rounded-full bg-[rgb(64,191,246)] flex items-center justify-center shadow-2xl shadow-[rgb(64,191,246)] ">
                  <IoPersonOutline className=" text-white" size={"1.8rem"} />
                </div>
                {!nom.valid && isSubmit && (
                  <div className=" absolute top-1 right-1 flex items-center gap-2">
                    <p className=" text-red-600">! Nom invalide</p>
                  </div>
                )}
              </div>
              <div className=" relative flex  justify-center flex-col gap-2 px-6 py-8 bg-[var(--white)] rounded-xl shadow-sm">
                <p className="  text-xl font-extralight text-slate-500 uppercase">
                  prénom(s)
                </p>
                <input
                  type="text"
                  placeholder="écrire votre prénom(s)..."
                  className=" outline-none border-none text-xl"
                  onChange={(e) =>
                    setPrénom((prev) => ({ ...prev, value: e.target.value }))
                  }
                />
                <div className=" absolute top-[-1.8rem] left-[41%] w-[3.5rem] h-[3.5rem] rounded-full bg-[rgb(138,72,253)] flex items-center justify-center shadow-2xl shadow-[rgb(138,72,253)] ">
                  <IoPersonOutline className=" text-white" size={"2rem"} />
                </div>
              </div>
              <div className=" relative flex  justify-center flex-col gap-2 px-6 py-8 bg-[var(--white)] rounded-xl shadow-sm">
                <p className="  text-xl font-extralight text-slate-500 uppercase">
                  Téléphone
                </p>
                <input
                  type="text"
                  placeholder="écrire votre numéro mobile..."
                  className=" outline-none border-none text-xl"
                  onChange={(e) =>
                    setTéléphone((prev) => ({ ...prev, value: e.target.value }))
                  }
                />
                <div className=" absolute top-[-1.8rem] left-[41%] w-[3.5rem] h-[3.5rem] rounded-full bg-[rgb(255,120,143)] flex items-center justify-center shadow-2xl shadow-[rgb(255,120,143)] ">
                  <IoCallOutline className=" text-white" size={"2rem"} />
                </div>
              </div>
              <div className=" relative flex  justify-center flex-col gap-2 px-6 py-8 bg-[var(--white)] rounded-xl shadow-sm">
                <p className="  text-xl font-extralight text-slate-500 uppercase">
                  E-mail
                </p>
                <input
                  type="email"
                  placeholder="écrire votre E-mail..."
                  className=" outline-none border-none text-xl"
                  onChange={(e) =>
                    setEmail((prev) => ({ ...prev, value: e.target.value }))
                  }
                />
                <div className=" absolute top-[-1.8rem] left-[41%] w-[3.5rem] h-[3.5rem] rounded-full bg-[rgb(255,173,0)] flex items-center justify-center shadow-2xl shadow-[rgb(255,173,0)] ">
                  <MdOutlineMailOutline className=" text-white" size={"2rem"} />
                </div>
              </div>
              <div className=" relative flex  justify-center flex-col gap-2 px-6 py-8 bg-[var(--white)] rounded-xl shadow-sm">
                <p className="  text-xl font-extralight text-slate-500 uppercase">
                  Adresse
                </p>
                <input
                  type="text"
                  placeholder="écrire votre Adresse..."
                  className=" outline-none border-none text-xl"
                  onChange={(e) =>
                    setAdresse((prev) => ({ ...prev, value: e.target.value }))
                  }
                />
                <div className=" absolute top-[-1.8rem] left-[41%] w-[3.5rem] h-[3.5rem] rounded-full bg-[hsl(106,100%,75%)] flex items-center justify-center shadow-2xl shadow-[hsl(106,100%,75%)] ">
                  <GoLocation className=" text-white" size={"2rem"} />
                </div>
              </div>
              <div className=" relative flex  justify-center flex-col gap-2 px-6 py-8 bg-[var(--white)] rounded-xl shadow-sm">
                <p className="  text-xl font-extralight text-slate-500 uppercase">
                  Mot de passe
                </p>
                <input
                  type="password"
                  placeholder="écrire votre mot de passe..."
                  className=" outline-none border-none text-xl"
                  onChange={(e) =>
                    setPassword((prev) => ({ ...prev, value: e.target.value }))
                  }
                />
                <div className=" absolute top-[-1.8rem] left-[41%] w-[3.5rem] h-[3.5rem] rounded-full bg-[rgb(255,173,0)] flex items-center justify-center shadow-2xl shadow-[rgb(255,173,0)] ">
                  <IoKeyOutline className=" text-white" size={"2rem"} />
                </div>
              </div>
            </div>
            <button
              className=" absolute bottom-[-1rem] right-8 flex items-center gap-2 py-2 px-4  bgGradient rounded-md  "
              onClick={handleNext}
            >
              <p className=" text-white">S ' inscrire</p>
              <MdFastForward size={"1.5rem"} className=" text-white" />
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

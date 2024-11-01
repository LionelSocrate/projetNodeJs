import React, { useState } from "react";
import { IoCameraOutline, IoClose, IoLocationOutline } from "react-icons/io5";
import { RiNumbersLine } from "react-icons/ri";
import axios from "axios";
import { InputVilla, SelectVilla } from "../utils/villaUtils";
import { BsHouseAdd, BsHouseCheck } from "react-icons/bs";

export default function AddVilla({ handleAfficheAdd }) {
  const [imageSrc, setImageSrc] = useState("/uploads/villa/mendrika.jpg");
  const [type, setType] = useState("Villa Basse");
  const [nom, setNom] = useState("");
  const [projet, setProjet] = useState("Andakana");
  const [description, setDescription] = useState("");
  const [lot, setLot] = useState("");
  const [image, setImage] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);

  const handleImageChange = (event) => {
    const file = event.target?.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImageSrc(e.target.result);
      };
      reader.readAsDataURL(file);
      setImage(file);
    }
  };

  const handleSubmit = async (e) => {
    setIsSubmit(true);
    e.preventDefault();
    try {
      await axios({
        method: "post",
        url: "http://localhost:5000/api/villa/addVilla",
        data: {
          nom,
          type: type,
          lot,
          idProjet: projet,
          description,
          picture: `/uploads/villa/${nom + lot}.jpg`,
        },
      }).then((res) => {});
      const formData = new FormData();
      formData.append("nom", nom);
      formData.append("lot", lot);
      formData.append("file", image);

      await axios.post(
        "http://localhost:5000/api/villa/uploadVilla",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className=" fixed top-0 left-0 w-screen h-screen z-50 bg-[var(--bgFixed)] flex items-center justify-center ">
        <form
          action=""
          className=" relative bg-[var(--white)] flex flex-col items-center gap-8 rounded-md py-8 px-8 "
          onSubmit={handleSubmit}
        >
          <div
            className=" absolute top-2 right-2 cursor-pointer"
            onClick={() => handleAfficheAdd()}
          >
            <IoClose
              className=" text-green-400 hover:text-green-500"
              size={"1.75rem"}
            />
          </div>
          <p className=" uppercase text-3xl font-extrabold tracking-wider">
            <span className=" text-green-400 uppercase text-3xl font-extrabold tracking-wider">
              ajout&nbsp;
            </span>
            de nouvelle&nbsp;
            <span className=" text-green-400 uppercase text-3xl font-extrabold tracking-wider">
              villa
            </span>
          </p>
          <div className=" w-full flex items-center gap-8">
            <div className="relative w-[18rem] h-[15rem] bg-green-100  rounded-md overflow-hidden ">
              <label
                htmlFor={"file"}
                className={
                  " relative h-full w-full  flex justify-center items-center  cursor-pointer "
                }
              >
                <img
                  src={imageSrc}
                  alt=""
                  style={{
                    objectFit: "cover",
                    width: "100%",
                    height: "100%",
                  }}
                />
                <div className=" absolute top-0 left-0 w-full h-full flex items-center justify-center bg-[rgb(0,0,0,0.25)]">
                  <i className={"text-[var(--white)]"}>
                    <IoCameraOutline size={"2rem"} />
                  </i>
                  <input
                    type="file"
                    id={"file"}
                    accept={".jpg, .jpeg, .png"}
                    className={"hidden"}
                    onChange={(e) => {
                      handleImageChange(e);
                    }}
                  />
                </div>
              </label>
            </div>
            <div className=" flex flex-col gap-4">
              <div className=" flex items-center gap-4">
                <InputVilla
                  id={"nom"}
                  type={"text"}
                  onChange={(e) => {
                    setNom(e.target.value);
                  }}
                  value={nom}
                  label={"Nom de la villa"}
                  icon={
                    <BsHouseAdd
                      size={"1.2rem"}
                      className=" text-[rgb(0,0,0,0.5)] "
                    />
                  }
                />
                <InputVilla
                  id={"lot"}
                  type={"text"}
                  onChange={(e) => {
                    setLot(e.target.value);
                  }}
                  value={lot}
                  label={"Numéro de lot"}
                  icon={
                    <RiNumbersLine
                      size={"1.2rem"}
                      className=" text-[rgb(0,0,0,0.5)] "
                    />
                  }
                />
              </div>
              <div className=" w-full relative">
                <textarea
                  name=""
                  id=""
                  className="  w-full bg-green-50  outline-none h-[7rem] rounded-md p-2 "
                  placeholder="Déscription de la villa"
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                ></textarea>
                <div className=" absolute top-0 left-0 w-[2px] h-full bg-green-400 "></div>
              </div>
              <div className=" flex items-center gap-4">
                <SelectVilla
                  elements={["Andakana", "Alakamisy Fenoarivo"]}
                  icon={
                    <IoLocationOutline
                      size={"1.2rem"}
                      className=" text-[rgb(0,0,0,0.5)] "
                    />
                  }
                  value={projet}
                  onchange={(e) => {
                    setProjet(e.target.value);
                  }}
                />
                <SelectVilla
                  elements={["Villa Basse", "R+1"]}
                  icon={
                    <BsHouseCheck
                      size={"1.2rem"}
                      className=" text-[rgb(0,0,0,0.5)] "
                    />
                  }
                  value={type}
                  onchange={(e) => {
                    setType(e.target.value);
                  }}
                />
              </div>
            </div>
          </div>
          <div className=" w-full flex items-center gap-8 ">
            <button
              className=" border border-green-400 w-[36%] uppercase text-green-400 py-2 rounded-sm "
              onClick={() => handleAfficheAdd()}
            >
              annuler
            </button>
            <button
              className=" bg-green-300 w-[64%] uppercase font-bold hover:bg-green-400 text-white py-2 rounded-sm  tracking-wider "
              type="submit"
            >
              ajouter
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

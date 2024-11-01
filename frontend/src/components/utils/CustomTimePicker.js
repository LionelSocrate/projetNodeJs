import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css"; // Importer les styles par défaut
import { IoMdTime } from "react-icons/io";

export default function CustomTimePicker() {
  const [selectedHour, setSelectedHour] = useState("");
  const [selectedMinute, setSelectedMinute] = useState("");
  const [showHourList, setShowHourList] = useState(false);
  const [timeOptions, setTimeOptions] = useState([
    "08 : 00",
    "09 : 00",
    "10 : 00",
    "11 : 00",
    "13 : 00",
    "14 : 00",
    "15 : 00",
    "16 : 00",
  ]); // Exemple d'options d'heures

  const handleSelectTime = (time) => {
    const [hour, minute] = time.split(":");
    setSelectedHour(hour);
    setSelectedMinute(minute);
    setShowHourList(false); // Ferme la liste après la sélection
  };
  const handleShowHourList = (e) => {
    e.preventDefault();
    setShowHourList((prev) => !prev); // Alterne l'affichage de la liste
  };

  return (
    <div className="flex w-full items-center  justify-between">
      <div className=" flex items-center gap-4">
        <div className=" relative">
          <input
            type="text"
            value={selectedHour}
            onChange={(e) => setSelectedHour(e.target.value)}
            placeholder="..."
            className="w-10  pl-3  py-1 outline-none "
          />
          <div className=" absolute bottom-0 left-0 w-full h-[1px] bg-[rgb(138,72,253,0.5)] "></div>
        </div>
        <p className=" text-xl">:</p>
        <div className=" relative">
          <input
            type="text"
            value={selectedMinute}
            onChange={(e) => setSelectedMinute(e.target.value)}
            placeholder="..."
            className="w-10 pl-3 py-1 outline-none "
          />
          <div className=" absolute bottom-0 left-0 w-full h-[1px] bg-[rgb(138,72,253,0.5)] "></div>
        </div>
      </div>
      <button onClick={handleShowHourList} className=" relative">
        {showHourList && (
          <ul className="mt-2 border border-gray-300 flex flex-col rounded-md shadow-lg bg-white absolute right-0 bottom-12 z-10">
            {timeOptions.map((time) => (
              <li
                key={time}
                onClick={() => {
                  handleSelectTime(time);
                  setShowHourList(true);
                }}
                className=" w-max cursor-pointer p-2 text-black hover:bg-gray-200"
              >
                {time}
              </li>
            ))}
          </ul>
        )}

        <IoMdTime size={"1.35rem"} className=" text-[rgb(138,72,253)] " />
      </button>
    </div>
  );
}

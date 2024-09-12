"use client";

import { VscBell } from "react-icons/vsc";
import { HiOutlinePresentationChartBar } from "react-icons/hi2";
import { IoBagAddOutline } from "react-icons/io5";
import { BsBookmarkStar, BsHouse } from "react-icons/bs";
import { Link } from "react-router-dom";

const links = [
  {
    label: "Accueil",
    path: "/home",
    icon: <BsHouse size={"1.25rem"} />,
  },
  {
    label: "Projet",
    path: "/projet",
    icon: <BsBookmarkStar size={"1.25rem"} />,
  },
  {
    label: "Villa",
    path: "/villa",
    icon: <HiOutlinePresentationChartBar size={"1.25rem"} />,
  },
  {
    label: "Reservation",
    path: "/reservation",
    icon: <IoBagAddOutline size={"1.25rem"} />,
  },
  {
    label: "Rendez-vous",
    path: "/rendezVous",
    icon: <IoBagAddOutline size={"1.25rem"} />,
  },
  {
    label: "Localisation",
    path: "/localisation",
    icon: <IoBagAddOutline size={"1.25rem"} />,
  },
  {
    label: "Notifications",
    path: "notifications",
    icon: <VscBell size={"1.25rem"} />,
  },
];

export default function Navbar() {
  return (
    <div className="  sticky top-0 left-0   w-full flex flex-col items-center gap-4 h-full">
      <div className="w-full flex items-center gap-4 p-4 bg-[var(--white)] rounded-xl">
        <div className="relative min-w-10 min-h-10 rounded-full bgVilla1">
          {/* <img
            src={"/images/chambre19.jpg"}
            alt=""
            fill
            objectFit="cover"
            className="rounded-full"
          /> */}
        </div>
        <div className="flex flex-col w-3/5">
          <p className={"font-bold whitespace-nowrap overflow-hidden"}>
            Administrateur
          </p>
          <p className="text-[var(--gray-text)] whitespace-nowrap overflow-hidden font-light text-sm">
            polypus@gmail.com
          </p>
        </div>
      </div>

      <div className="w-full flex-1 bg-[var(--white)] rounded-xl">
        {links.map((item, index) => (
          <Link
            key={item.label}
            to={item.path}
            className={`flex gap-4 items-center w-full h-10 px-5 py-8 hover:bg-[var(--gray)] transition-all duration-100 hover:font-semibold ${
              index === 0 ? "rounded-t-xl" : ""
            } `}
          >
            <i>{item.icon}</i>
            <span className={""}>{item.label}</span>
          </Link>
        ))}
      </div>

      <div className="w-full min-h-12">
        <button className=" w-full text-[var(--white)] h-full rounded-md py-2 bg-[var(--orange-color)] font-semibold">
          Ajouter un villa
        </button>
      </div>
    </div>
  );
}

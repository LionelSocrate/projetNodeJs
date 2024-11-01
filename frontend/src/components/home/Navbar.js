import React from "react";
import { BsHouse } from "react-icons/bs";
import { HiOutlineUserGroup } from "react-icons/hi";
import { IoIosLogOut } from "react-icons/io";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaMoneyCheckAltSolid } from "react-icons/lia";
import { RxDashboard } from "react-icons/rx";
import { Link } from "react-router-dom";

export default function Navbar({ qurentPath }) {
  qurentPath = "/dashboard";
  const liens = [
    {
      path: "/dashboard",
      label: "Tableau de bord",
      icon: <RxDashboard size={"1.2rem"} />,
    },
    {
      path: "/usersAdmin",
      label: "Utilisateurs",
      icon: <HiOutlineUserGroup size={"1.2rem"} />,
    },
    {
      path: "/client",
      label: "Clients",
      icon: <HiOutlineUserGroup size={"1.2rem"} />,
    },
    {
      path: "/villaAdmin",
      label: "Villas",
      icon: <BsHouse size={"1.2rem"} />,
    },
    {
      path: "/rdvAdmin",
      label: "Agenda",
      icon: <IoCalendarOutline size={"1.2rem"} />,
    },
  ];
  return (
    <>
      <div className="  h-[90vh] flex flex-col justify-between bg-[var(--white)]  py-12">
        <div className=" flex flex-col ">
          {liens.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`w-full flex items-center gap-4 px-8 cursor-pointer ${
                qurentPath === item.path ? "bgGradient2 text-white" : ""
              } hover:text-white  hover:bg-orange-200 py-5 transition-all duration-100`}
            >
              <i>{item.icon}</i>
              <span className=" min-w-max"> {item.label} </span>
            </Link>
          ))}
        </div>
        <div className=" flex items-center gap-2 px-8  hover:text-white cursor-pointer hover:bg-orange-200 py-4">
          <IoIosLogOut size={"1.2rem"} />
          <p className=" min-w-max">Se Deconnecter</p>
        </div>
      </div>
    </>
  );
}

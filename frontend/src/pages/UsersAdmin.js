import React, { useEffect, useState } from "react";
import Navbar from "../components/home/Navbar";
import Topbar from "../components/home/Topbar";
import axios from "axios";
import { MdOutlineEmail } from "react-icons/md";
import {
  IoCalendar,
  IoCalendarClear,
  IoCall,
  IoCallOutline,
  IoLocateOutline,
  IoPersonOutline,
} from "react-icons/io5";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { BsPersonArmsUp, BsPersonBadgeFill } from "react-icons/bs";

export default function UsersAdmin() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        await axios({
          method: "get",
          url: "http://localhost:5000/api/user/getAllUsers",
          // withCredentials: true,
        }).then((res) => {
          setUsers(res.data.users);
        });
      } catch (error) {
        console.log(error);
      }
    };
    fetchUsers();
  }, []);

  return (
    <>
      <div className=" w-full h-screen flex flex-col overflow-hidden  ">
        <Topbar />

        <div className=" flex w-full h-full">
          <Navbar />
          <div className=" bg-[var(--gray)] w-full h-[89vh] flex flex-col gap-2  ">
            <div className=" w-full  flex items-center  justify-center  bg-white pb-1">
              <p className=" w-full text-white uppercase tracking-wide py-1 text-center  mr-1 bg-[rgb(50,52,59,0.5)] ">
                liste de tous les utilisateurs de cette application
              </p>
            </div>
            <div className=" w-full  grid grid-cols-2  gap-4  px-4 py-2 ">
              {users.map((item) => (
                <div
                  className={`py-6 px-12 rounded-md ${
                    item.isAdmin ? " bg-orange-50" : "bg-[var(--white)]"
                  }  flex flex-col gap-4 h-max`}
                >
                  <div className=" flex items-center justify-center text-xl gap-4">
                    <p className=" uppercase text-xl">{item.nom}</p>
                    <p className=" capitalize text-xl">{item.prenom} </p>
                  </div>
                  <div className=" w-full flex items-center justify-between">
                    <div className=" flex flex-col text-sm tracking-wide gap-1">
                      <div className=" flex items-center gap-4">
                        <p className=" uppercase text-sm">
                          E-mail &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :{" "}
                        </p>
                        <p>{item.email} </p>
                      </div>
                      <div className=" flex items-center gap-4">
                        <p className=" uppercase  text-sm">Adresse &nbsp;: </p>
                        <p>{item.adresse} </p>
                      </div>
                      <div className=" flex items-center gap-4">
                        <p className=" uppercase  text-sm">Contact &nbsp;: </p>
                        <p>{item.telephone} </p>
                      </div>
                      <div className=" flex items-center gap-4">
                        <p className=" uppercase  text-sm">
                          Poste &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :{" "}
                        </p>
                        <p>Responsable Commercial</p>
                      </div>
                    </div>
                    <div className=" relative w-28 h-28 rounded-full bg-[var(--gray)] overflow-hidden ">
                      <img
                        src={"/images/profil.png"}
                        alt=""
                        style={{
                          objectFit: "cover",
                          width: "100%",
                          height: "100%",
                        }}
                      />
                    </div>
                  </div>
                  <div className=" w-full flex items-center justify-between">
                    <div className=" flex items-center gap-1">
                      <div className=" w-1 h-1 rounded-full bg-green-400"></div>
                      <div className=" w-1 h-1 rounded-full bg-green-400"></div>
                      <div className=" w-4 h-1 rounded-full bg-green-400"></div>
                      <div className=" w-[6rem] h-1 rounded-full bg-green-400"></div>
                    </div>
                    <div className=" flex items-center gap-4">
                      <IoCalendar
                        size={"1.3rem"}
                        className=" text-green-500 cursor-pointer"
                      />
                      <RiDeleteBin6Fill
                        size={"1.3rem"}
                        className=" text-red-500 cursor-pointer"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

import axios from "axios";
import React, { useEffect, useState } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
const apiUrl = `http://localhost:5000/api`;

export default function ChartComponent({ handleAfficheChart, barWidth = 80 }) {
  const [visiteurs, setvisiteurs] = useState([]);
  useEffect(() => {
    const fetchVisiteurs = async () => {
      try {
        await axios({
          method: "get",
          url: `${apiUrl}/visiteur/get-all`,
        }).then((res) => {
          setvisiteurs(res.data.visiteurs);
        });
      } catch (error) {
        console.log(error);
      }
    };
    fetchVisiteurs();
  }, []);
  const tarifs = visiteurs.map((item) => item.nbJours * item.tarifJournalier);
  const tarifMin = Math.min(...tarifs);
  const tarifMax = Math.max(...tarifs);
  const sommeTarifs = tarifs.reduce((acc, val) => acc + val, 0);

  const data = [
    { mois: "Total", value: sommeTarifs },
    { mois: "Maximal", value: tarifMax },
    { mois: "Minimal", value: tarifMin },
  ];

  const formatNombre = (nombre) => {
    return nombre.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };
  return (
    <div className=" text-white fixed top-0 left-0 w-full h-[100vh] bg-[var(--bg1)] flex items-center justify-center login afficheAnim gap-4 index10">
      <div className="relative flex items-center justify-center bg-[var(--bg2)] px-8 py-3 rounded-xl overflow-hidden flex-col gap-5">
        <div
          onClick={() => handleAfficheChart()}
          className="absolute top-2 right-2 cursor-pointer"
        >
          <i className=" text-red-500 hover:text-red-400">
            <IoIosCloseCircleOutline size={"1.5rem"} />
          </i>
        </div>
        <div className="flex uppercase text-3xl titreHome">
          histogramme de tarif
        </div>
        <div className="w-full h-[1px] rounded-lg bg-[var(--white3)]"></div>

        <div className="flex items-center justify-around w-full">
          <div className="flex gap-2">
            <p className="uppercase">Total :</p>
            <p className="text-[var(--green)]">
              {formatNombre(sommeTarifs)} Ar
            </p>
          </div>
          <div className="flex gap-2">
            <p className="uppercase">Maximal :</p>
            <p className="text-[var(--aqua)]">{formatNombre(tarifMax)}Ar</p>
          </div>
          <div className="flex gap-2">
            <p className="uppercase">Minimal :</p>
            <p className="text-[var(--pink)]">{formatNombre(tarifMin)} Ar</p>
          </div>
        </div>
        <div className=" w-[40rem] h-[24rem] ">
          <ResponsiveContainer width="100%" height={"100%"}>
            <BarChart data={data}>
              <defs>
                <linearGradient id="gradientColor" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#be0ee1" />
                  <stop offset="100%" stopColor="#ed68ff" />
                </linearGradient>
              </defs>
              <XAxis dataKey="mois" axisLine={false} tickLine={false} />
              <YAxis axisLine={false} tickLine={false} />
              <Tooltip
                cursor={{ fill: "var(--bg3)" }}
                contentStyle={{
                  backgroundColor: "var(--bg2)",
                  border: "1px solid #ed68ff",
                  borderRadius: "8px",
                  padding: "50px",
                }}
              />
              <Bar
                dataKey="value"
                fill="url(#gradientColor)"
                radius={[10, 10, 10, 10]}
                barSize={barWidth}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

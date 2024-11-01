import React, { useEffect, useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "moment/locale/fr";
import "react-big-calendar/lib/css/react-big-calendar.css";
import axios from "axios";
import { IoIosFastforward, IoMdRewind } from "react-icons/io";

export default function BigCalendar() {
  moment.locale("fr");
  const localizer = momentLocalizer(moment);
  const [events, setEvents] = useState([]);
  const [hoveredEvent, setHoveredEvent] = useState(null);
  useEffect(() => {
    const fetchRdvs = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/rdv/getAllRdvs");
        // Transformer les rendez-vous en événements pour le calendrier
        const rdvEvents = res.data.rdvs.map((rdv) => ({
          title: `${rdv.nom} ${rdv.prenom} - Rendez-vous`,
          start: new Date(rdv.date), // Date de début (rendez-vous)
          end: new Date(rdv.date), // Date de fin, peut être ajustée en fonction de la durée
        }));
        setEvents(rdvEvents);
      } catch (error) {
        console.error("Error fetching rendez-vous data: ", error);
      }
    };

    fetchRdvs();
  }, []);

  const eventStyleGetter = (event, start, end, isSelected) => {
    const backgroundColor = isSelected ? "#007bff" : "#f0f0f0"; // Couleur de fond pour l'événement sélectionné
    return {
      style: {
        backgroundColor,
        borderRadius: "5px",
        opacity: 0.8,
        color: "black",
        display: "block",
        padding: "10px",
        margin: "5px 0",
      },
    };
  };

  return (
    <>
      <div className=" relative w-full h-full flex flex-col gap-6 items-center  justify-center px-4 ">
        <p className=" uppercase text-4xl tracking-wider font-extrabold bgText2">
          agenda de{" "}
          <span className=" uppercase text-4xl tracking-wider font-extrabold bgText2">
            polypus
          </span>
        </p>
        <div className=" relative w-full">
          {hoveredEvent && (
            <div className="absolute top-0 right-0 z-20 bg-[var(--white)] shadow-lg p-4 rounded-md border">
              <h3 className="font-bold">{hoveredEvent.title}</h3>
              <p>Date : {moment(hoveredEvent.start).format("LL")}</p>
              <p>Heure : {moment(hoveredEvent.start).format("HH:mm")}</p>
            </div>
          )}

          <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 500 }}
            messages={{
              next: "Suivant",
              previous: "Précédent",
              today: "Aujourd'hui",
              month: "Mois",
              week: "Semaine",
              day: "Jour",
              agenda: "Agenda",
              date: "Date",
              time: "Heure",
              event: "Événement",
              noEventsInRange: "Aucun événement prévu",
            }}
            className={" w-full h-full bg-[var(--white)] rounded-lg p-8 "}
            eventPropGetter={eventStyleGetter}
            components={{
              toolbar: (props) => (
                <div className="flex justify-between items-center mb-8">
                  <div className="flex  items-center gap-8">
                    <button
                      className=" "
                      onClick={() => props.onNavigate("PREV")}
                    >
                      <IoMdRewind size={"2rem"} className=" text-pink-500 " />
                    </button>
                    <button
                      className=" uppercase text-sm tracking-wide  bgGradient2 hover:bg-gray-400 text-white px-4 py-2 rounded-sm"
                      onClick={() => props.onNavigate("TODAY")}
                    >
                      Aujourd'hui
                    </button>
                    <button
                      className=" "
                      onClick={() => props.onNavigate("NEXT")}
                    >
                      <IoIosFastforward
                        size={"2rem"}
                        className=" text-pink-500 "
                      />
                    </button>
                  </div>
                  <div className="font-bold text-xl">{props.label}</div>
                  <div className="grid grid-cols-4 items-center gap-3">
                    <button
                      className=" uppercase text-sm tracking-wider  bg-blue-400 hover:bg-blue-500 text-white  px-4 py-2 rounded-sm "
                      onClick={() => props.onView("month")}
                    >
                      Mois
                    </button>
                    <button
                      className=" uppercase text-sm tracking-wider bg-green-400 hover:bg-green-500 text-white px-4 py-2 rounded-sm "
                      onClick={() => props.onView("week")}
                    >
                      Semaine
                    </button>
                    <button
                      className=" uppercase text-sm tracking-wider bg-violet-400 hover:bg-violet-500 text-white px-4 py-2 rounded-sm "
                      onClick={() => props.onView("day")}
                    >
                      Jour
                    </button>
                    <button
                      className=" uppercase text-sm tracking-wider bg-orange-400 hover:bg-orange-500 text-white px-4 py-2 rounded-sm "
                      onClick={() => props.onView("agenda")}
                    >
                      Agenda
                    </button>
                  </div>
                </div>
              ),
              event: ({ event }) => (
                <div
                  onMouseEnter={() => setHoveredEvent(event)} // Affiche les détails lors du survol
                  onMouseLeave={() => setHoveredEvent(null)}
                  className={`cursor-pointer bg-none ${
                    hoveredEvent === event ? "" : ""
                  }`}
                >
                  {event.title}
                </div>
              ),
            }}
          />
        </div>
      </div>
    </>
  );
}

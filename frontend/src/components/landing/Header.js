import React from "react";
import { BiCalendarCheck } from "react-icons/bi";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { IoChevronBackOutline, IoChevronForward } from "react-icons/io5";

export default function Header() {
  return (
    <>
      <div className=" relative w-full h-screen">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]} // Ajout du module Autoplay
          spaceBetween={100}
          slidesPerView={1}
          scrollbar={{ draggable: true }}
          navigation={{
            nextEl: ".swiper-next",
            prevEl: ".swiper-prev",
          }}
          autoplay={{
            delay: 6000,
            disableOnInteraction: false,
          }}
          className="w-full h-full"
        >
          <SwiperSlide className="w-full h-full">
            <div className=" relative w-full h-full ">
              <img
                src={"/images/tsara/tsara3.png"}
                alt=""
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "100%",
                }}
              />

              <div className=" bg-[var(--bgFixed)] absolute top-0 left-0 w-full h-full   flex flex-col items-center justify-center gap-16 ">
                <div className=" flex flex-col items-center gap-4">
                  <p className=" uppercase text-5xl font-extrabold  text-white ">
                    villa tsara
                  </p>
                  <p className=" text-white text-center">
                    La villa T4 sur de 91m²de surface bâtie. Au rez-de-chaussée,
                    une cuisine à l’américaine, la salle à manger, le séjour,
                    les deux chambres sans oublier <br /> une salle de bain
                    commune. A l’étage, une suite parentale avec sa salle de
                    bain et une pergola à l’extérieur divise harmonieusement la
                    lumière.
                  </p>
                  <Link to={"/reservation"}>
                    <button className=" flex items-center gap-4 bg-blue-400 py-2 px-6">
                      <p className=" uppercase text-white text-sm">réserver</p>
                      <BiCalendarCheck
                        size={"1.2rem"}
                        className=" text-white"
                      />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="w-full h-full">
            <div className=" relative w-full h-full ">
              <img
                src={"/images/mendrika/mendrika.jpg"}
                alt=""
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "100%",
                }}
              />

              <div className=" bg-[var(--bgFixed)] absolute top-0 left-0 w-full h-full   flex flex-col items-center justify-center gap-16 ">
                <div className=" flex flex-col items-center gap-4">
                  <p className=" uppercase text-5xl font-extrabold  text-white ">
                    villa mendrika
                  </p>
                  <p className=" text-white text-center">
                    La villa T4 sur de 91m²de surface bâtie. Au rez-de-chaussée,
                    une cuisine à l’américaine, la salle à manger, le séjour,
                    les deux chambres sans oublier <br /> une salle de bain
                    commune. A l’étage, une suite parentale avec sa salle de
                    bain et une pergola à l’extérieur divise harmonieusement la
                    lumière.
                  </p>
                  <Link to={"/reservation"}>
                    <button className=" flex items-center gap-4 bg-blue-400 py-2 px-6">
                      <p className=" uppercase text-white text-sm">réserver</p>
                      <BiCalendarCheck
                        size={"1.2rem"}
                        className=" text-white"
                      />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="w-full h-full">
            <div className=" relative w-full h-full ">
              <img
                src={"/images/koloina/koloina.jpg"}
                alt=""
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "100%",
                }}
              />

              <div className=" bg-[var(--bgFixed)] absolute top-0 left-0 w-full h-full   flex flex-col items-center justify-center gap-16 ">
                <div className=" flex flex-col items-center gap-4">
                  <p className=" uppercase text-5xl font-extrabold  text-white ">
                    villa koloina
                  </p>
                  <p className=" text-white text-center">
                    La villa T4 sur de 91m²de surface bâtie. Au rez-de-chaussée,
                    une cuisine à l’américaine, la salle à manger, le séjour,
                    les deux chambres sans oublier <br /> une salle de bain
                    commune. A l’étage, une suite parentale avec sa salle de
                    bain et une pergola à l’extérieur divise harmonieusement la
                    lumière.
                  </p>
                  <Link to={"/reservation"}>
                    <button className=" flex items-center gap-4 bg-blue-400 py-2 px-6">
                      <p className=" uppercase text-white text-sm">réserver</p>
                      <BiCalendarCheck
                        size={"1.2rem"}
                        className=" text-white"
                      />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="absolute top-1/2 left-4 z-50 swiper-prev">
          <IoChevronBackOutline
            size={"1.5rem"}
            className=" text-[var(--blue)] "
          />
        </div>
        <div className="absolute top-1/2 right-4 z-50 swiper-next">
          <IoChevronForward size={"1.5rem"} className=" text-[var(--blue)] " />
        </div>
      </div>
    </>
  );
}

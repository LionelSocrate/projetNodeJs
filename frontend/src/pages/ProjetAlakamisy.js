import React from "react";
import TopbarLanding from "../components/landing/TopbarLanding";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { IoChevronBackOutline, IoChevronForward } from "react-icons/io5";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";

export default function ProjetAlakamisy() {
  return (
    <>
      <TopbarLanding />
      <div className=" w-full mt-16 h-[15rem] bgVilla5 relative ">
        <div className=" absolute w-full h-full top-0 left-0 flex items-center justify-center bg-[var(--bgFixed)] ">
          <div className=" flex flex-col items-center justify-center gap-4">
            <p className=" uppercase text-5xl  font-semibold text-center  tracking-wider  text-white ">
              projet manankasina
            </p>
            <p className=" uppercase text-5xl  font-semibold text-center  tracking-wider  text-white ">
              alakamisy fenoarivo
            </p>
          </div>
        </div>
      </div>
      <div className=" w-full py-12 flex flex-col items-center justify-center gap-8">
        <div className=" relative w-[80%] overflow-hidden flex flex-col pt-14 gap-4 items-center  ">
          <div className="absolute z-20  top-0 -left-4 skew-x-12 bg-[rgb(117,114,106)] py-2 px-12">
            <p className=" uppercase text-xl text-white font-semibold -skew-x-12 ">
              description
            </p>
          </div>
          <p className=" w-full text-[rgb(0,0,0,0.6)] leading-relaxed  tracking-wider text-[1.1rem]  ">
            POLYPUS CORPORATION S.A, fondée en 2022, a pour mission d'introduire
            des innovations technologiques visant à ameliorer la qualité de vie
            à Madagascar. Nous sommes engagés dans le développement durable et
            la construction de maisons préfabriqueées en Utilisant des
            tecnologies de pointe .
          </p>
        </div>
        <div className=" relative w-[80%] overflow-hidden  flex flex-col gap-4 items-center  ">
          <div className="absolute z-20  top-0 -left-4 skew-x-12 bg-[rgb(117,114,106)] py-2 px-12">
            <p className=" uppercase text-xl text-white font-semibold -skew-x-12 ">
              plan de masse
            </p>
          </div>
          <div className=" w-full ">
            <img
              src="/images/planMasse.png"
              alt="plan de masse"
              className=" w-full"
            />
          </div>
        </div>
        <div className=" w-full flex flex-col gap-4 items-center  ">
          <div className=" relative w-[80%]">
            <div className="absolute top-[47%] -left-10 z-40 swiper-prev1">
              <IoMdArrowDropleft
                size={"1.75rem"}
                className=" text-[var(--blue)] "
              />
            </div>
            <div className="absolute top-[47%] -right-10 z-40 swiper-next1">
              <IoMdArrowDropright
                size={"1.75rem"}
                className=" text-[var(--blue)] "
              />
            </div>
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={100}
              slidesPerView={1}
              scrollbar={{ draggable: true }}
              navigation={{
                nextEl: ".swiper-next1",
                prevEl: ".swiper-prev1",
              }}
              className="  relative w-full"
            >
              <SwiperSlide className="w-full flex flex-col items-center justify-center gap-4 ">
                <div className=" w-full flex items-center gap-8">
                  <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={1}
                    scrollbar={{ draggable: true }}
                    navigation={{
                      nextEl: ".swiper-next-child",
                      prevEl: ".swiper-prev-child",
                    }}
                    className=" relative min-w-[20rem]   w-[20rem] h-[13rem] "
                  >
                    <div className="absolute top-[48%] left-4 z-40 swiper-prev-child">
                      <IoChevronBackOutline
                        size={"1.25rem"}
                        className=" text-[var(--blue)] "
                      />
                    </div>
                    <div className="absolute top-[48%] right-4 z-40 swiper-next-child">
                      <IoChevronForward
                        size={"1.25rem"}
                        className=" text-[var(--blue)] "
                      />
                    </div>
                    <SwiperSlide className=" w-full h-full">
                      <img
                        src={"/images/tsara/tsara3.png"}
                        alt=""
                        style={{
                          objectFit: "cover",
                          width: "100%",
                          height: "100%",
                        }}
                      />
                    </SwiperSlide>
                    <SwiperSlide className=" w-full h-full">
                      <img
                        src={"/images/koloina/koloina.jpg"}
                        alt=""
                        style={{
                          objectFit: "cover",
                          width: "100%",
                          height: "100%",
                        }}
                      />
                    </SwiperSlide>
                    <SwiperSlide className=" w-full h-full">
                      <img
                        src={"/images/mendrika/mendrika.jpg"}
                        alt=""
                        style={{
                          objectFit: "cover",
                          width: "100%",
                          height: "100%",
                        }}
                      />
                    </SwiperSlide>
                  </Swiper>
                  <div className=" flex flex-col gap-4">
                    <p className=" w-max uppercase text-3xl font-semibold ">
                      villa{" "}
                      <span className=" uppercase text-3xl font-semibold text-orange-400">
                        mendrika{" "}
                      </span>
                      <span className=" uppercase text-2xl font-semibold text-green-400">
                        Lot (08)
                      </span>
                    </p>
                    <p className="">
                      La villa T4 sur de 91m²de surface bâtie. Au
                      rez-de-chaussée, une cuisine à l’américaine, la salle à
                      manger, le séjour, les deux chambres sans oublier , une
                      salle de bain commune. A l’étage, une suite parentale avec
                      sa salle de bain et une pergola à l’extérieur divise
                      harmonieusement la lumière.
                    </p>
                    <button className=" uppercase tracking-wide text-sm w-max self-end rounded-sm bg-[rgb(145,123,91)] text-white py-2 px-12">
                      Détails
                    </button>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="w-full flex flex-col items-center justify-center gap-4 ">
                <div className=" w-full flex items-center gap-8">
                  <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={1}
                    scrollbar={{ draggable: true }}
                    navigation={{
                      nextEl: ".swiper-next-child",
                      prevEl: ".swiper-prev-child",
                    }}
                    className=" relative   min-w-[20rem] w-[20rem] h-[13rem] "
                  >
                    <div className="absolute top-1/2 left-4 z-40 swiper-prev-child">
                      <IoChevronBackOutline
                        size={"1.5rem"}
                        className=" text-[var(--blue)] "
                      />
                    </div>
                    <div className="absolute top-1/2 right-4 z-40 swiper-next-child">
                      <IoChevronForward
                        size={"1.5rem"}
                        className=" text-[var(--blue)] "
                      />
                    </div>

                    <SwiperSlide className=" w-full h-full">
                      <img
                        src={"/images/koloina/koloina.jpg"}
                        alt=""
                        style={{
                          objectFit: "cover",
                          width: "100%",
                          height: "100%",
                        }}
                      />
                    </SwiperSlide>
                    <SwiperSlide className=" w-full h-full">
                      <img
                        src={"/images/tsara/tsara3.png"}
                        alt=""
                        style={{
                          objectFit: "cover",
                          width: "100%",
                          height: "100%",
                        }}
                      />
                    </SwiperSlide>
                    <SwiperSlide className=" w-full h-full">
                      <img
                        src={"/images/mendrika/mendrika.jpg"}
                        alt=""
                        style={{
                          objectFit: "cover",
                          width: "100%",
                          height: "100%",
                        }}
                      />
                    </SwiperSlide>
                  </Swiper>
                  <div className=" flex flex-col gap-4">
                    <p className=" w-max uppercase text-3xl font-semibold ">
                      villa{" "}
                      <span className=" uppercase text-3xl font-semibold text-orange-400">
                        mendrika{" "}
                      </span>
                      <span className=" uppercase text-2xl font-semibold text-green-400">
                        Lot (09)
                      </span>
                    </p>
                    <p className="">
                      La villa T4 sur de 91m²de surface bâtie. Au
                      rez-de-chaussée, une cuisine à l’américaine, la salle à
                      manger, le séjour, les deux chambres sans oublier , une
                      salle de bain commune. A l’étage, une suite parentale avec
                      sa salle de bain et une pergola à l’extérieur divise
                      harmonieusement la lumière.
                    </p>
                    <button className=" w-max self-end rounded-sm bg-green-400 text-white py-2 px-8">
                      Détails
                    </button>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="w-full flex flex-col items-center justify-center gap-4 ">
                <div className=" w-full flex items-center gap-8">
                  <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={1}
                    scrollbar={{ draggable: true }}
                    navigation={{
                      nextEl: ".swiper-next-child",
                      prevEl: ".swiper-prev-child",
                    }}
                    className=" relative   min-w-[20rem] w-[20rem] h-[13rem] "
                  >
                    <div className="absolute top-1/2 left-4 z-40 swiper-prev-child">
                      <IoChevronBackOutline
                        size={"1.5rem"}
                        className=" text-[var(--blue)] "
                      />
                    </div>
                    <div className="absolute top-1/2 right-4 z-40 swiper-next-child">
                      <IoChevronForward
                        size={"1.5rem"}
                        className=" text-[var(--blue)] "
                      />
                    </div>
                    <SwiperSlide className=" w-full h-full">
                      <img
                        src={"/images/mendrika/mendrika.jpg"}
                        alt=""
                        style={{
                          objectFit: "cover",
                          width: "100%",
                          height: "100%",
                        }}
                      />
                    </SwiperSlide>
                    <SwiperSlide className=" w-full h-full">
                      <img
                        src={"/images/tsara/tsara3.png"}
                        alt=""
                        style={{
                          objectFit: "cover",
                          width: "100%",
                          height: "100%",
                        }}
                      />
                    </SwiperSlide>
                    <SwiperSlide className=" w-full h-full">
                      <img
                        src={"/images/koloina/koloina.jpg"}
                        alt=""
                        style={{
                          objectFit: "cover",
                          width: "100%",
                          height: "100%",
                        }}
                      />
                    </SwiperSlide>
                  </Swiper>
                  <div className=" flex flex-col gap-4">
                    <p className=" w-max uppercase text-3xl font-semibold ">
                      villa{" "}
                      <span className=" uppercase text-3xl font-semibold text-orange-400">
                        mendrika{" "}
                      </span>
                      <span className=" uppercase text-2xl font-semibold text-green-400">
                        Lot (10)
                      </span>
                    </p>
                    <p className="">
                      La villa T4 sur de 91m²de surface bâtie. Au
                      rez-de-chaussée, une cuisine à l’américaine, la salle à
                      manger, le séjour, les deux chambres sans oublier , une
                      salle de bain commune. A l’étage, une suite parentale avec
                      sa salle de bain et une pergola à l’extérieur divise
                      harmonieusement la lumière.
                    </p>
                    <button className=" w-max self-end rounded-sm bg-green-400 text-white py-2 px-8">
                      Détails
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className=" relative w-[80%]">
            <div className="absolute top-[47%] -left-10 z-40 swiper-prev">
              <IoMdArrowDropleft
                size={"1.75rem"}
                className=" text-[var(--blue)] "
              />
            </div>
            <div className="absolute top-[47%] -right-10 z-40 swiper-next">
              <IoMdArrowDropright
                size={"1.75rem"}
                className=" text-[var(--blue)] "
              />
            </div>
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={100}
              slidesPerView={1}
              scrollbar={{ draggable: true }}
              navigation={{
                nextEl: ".swiper-next",
                prevEl: ".swiper-prev",
              }}
              className="  relative w-full"
            >
              <SwiperSlide className="w-full flex flex-col items-center justify-center gap-4 ">
                <div className=" w-full flex items-center gap-8">
                  <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={1}
                    scrollbar={{ draggable: true }}
                    navigation={{
                      nextEl: ".swiper-next-child",
                      prevEl: ".swiper-prev-child",
                    }}
                    className=" relative min-w-[20rem]   w-[20rem] h-[13rem] "
                  >
                    <div className="absolute top-[48%] left-4 z-40 swiper-prev-child">
                      <IoChevronBackOutline
                        size={"1.25rem"}
                        className=" text-[var(--blue)] "
                      />
                    </div>
                    <div className="absolute top-[48%] right-4 z-40 swiper-next-child">
                      <IoChevronForward
                        size={"1.25rem"}
                        className=" text-[var(--blue)] "
                      />
                    </div>
                    <SwiperSlide className=" w-full h-full">
                      <img
                        src={"/images/tsara/tsara3.png"}
                        alt=""
                        style={{
                          objectFit: "cover",
                          width: "100%",
                          height: "100%",
                        }}
                      />
                    </SwiperSlide>
                    <SwiperSlide className=" w-full h-full">
                      <img
                        src={"/images/koloina/koloina.jpg"}
                        alt=""
                        style={{
                          objectFit: "cover",
                          width: "100%",
                          height: "100%",
                        }}
                      />
                    </SwiperSlide>
                    <SwiperSlide className=" w-full h-full">
                      <img
                        src={"/images/mendrika/mendrika.jpg"}
                        alt=""
                        style={{
                          objectFit: "cover",
                          width: "100%",
                          height: "100%",
                        }}
                      />
                    </SwiperSlide>
                  </Swiper>
                  <div className=" flex flex-col gap-4">
                    <p className=" w-max uppercase text-3xl font-semibold ">
                      villa{" "}
                      <span className=" uppercase text-3xl font-semibold text-orange-400">
                        mendrika{" "}
                      </span>
                      <span className=" uppercase text-2xl font-semibold text-green-400">
                        Lot (08)
                      </span>
                    </p>
                    <p className="">
                      La villa T4 sur de 91m²de surface bâtie. Au
                      rez-de-chaussée, une cuisine à l’américaine, la salle à
                      manger, le séjour, les deux chambres sans oublier , une
                      salle de bain commune. A l’étage, une suite parentale avec
                      sa salle de bain et une pergola à l’extérieur divise
                      harmonieusement la lumière.
                    </p>
                    <button className=" w-max self-end rounded-sm bg-green-400 text-white py-2 px-8">
                      Détails
                    </button>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="w-full flex flex-col items-center justify-center gap-4 ">
                <div className=" w-full flex items-center gap-8">
                  <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={1}
                    scrollbar={{ draggable: true }}
                    navigation={{
                      nextEl: ".swiper-next-child",
                      prevEl: ".swiper-prev-child",
                    }}
                    className=" relative   min-w-[20rem] w-[20rem] h-[13rem] "
                  >
                    <div className="absolute top-1/2 left-4 z-40 swiper-prev-child">
                      <IoChevronBackOutline
                        size={"1.5rem"}
                        className=" text-[var(--blue)] "
                      />
                    </div>
                    <div className="absolute top-1/2 right-4 z-40 swiper-next-child">
                      <IoChevronForward
                        size={"1.5rem"}
                        className=" text-[var(--blue)] "
                      />
                    </div>

                    <SwiperSlide className=" w-full h-full">
                      <img
                        src={"/images/koloina/koloina.jpg"}
                        alt=""
                        style={{
                          objectFit: "cover",
                          width: "100%",
                          height: "100%",
                        }}
                      />
                    </SwiperSlide>
                    <SwiperSlide className=" w-full h-full">
                      <img
                        src={"/images/tsara/tsara3.png"}
                        alt=""
                        style={{
                          objectFit: "cover",
                          width: "100%",
                          height: "100%",
                        }}
                      />
                    </SwiperSlide>
                    <SwiperSlide className=" w-full h-full">
                      <img
                        src={"/images/mendrika/mendrika.jpg"}
                        alt=""
                        style={{
                          objectFit: "cover",
                          width: "100%",
                          height: "100%",
                        }}
                      />
                    </SwiperSlide>
                  </Swiper>
                  <div className=" flex flex-col gap-4">
                    <p className=" w-max uppercase text-3xl font-semibold ">
                      villa{" "}
                      <span className=" uppercase text-3xl font-semibold text-orange-400">
                        mendrika{" "}
                      </span>
                      <span className=" uppercase text-2xl font-semibold text-green-400">
                        Lot (09)
                      </span>
                    </p>
                    <p className="">
                      La villa T4 sur de 91m²de surface bâtie. Au
                      rez-de-chaussée, une cuisine à l’américaine, la salle à
                      manger, le séjour, les deux chambres sans oublier , une
                      salle de bain commune. A l’étage, une suite parentale avec
                      sa salle de bain et une pergola à l’extérieur divise
                      harmonieusement la lumière.
                    </p>
                    <button className=" w-max self-end rounded-sm bg-green-400 text-white py-2 px-8">
                      Détails
                    </button>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="w-full flex flex-col items-center justify-center gap-4 ">
                <div className=" w-full flex items-center gap-8">
                  <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={1}
                    scrollbar={{ draggable: true }}
                    navigation={{
                      nextEl: ".swiper-next-child",
                      prevEl: ".swiper-prev-child",
                    }}
                    className=" relative   min-w-[20rem] w-[20rem] h-[13rem] "
                  >
                    <div className="absolute top-1/2 left-4 z-40 swiper-prev-child">
                      <IoChevronBackOutline
                        size={"1.5rem"}
                        className=" text-[var(--blue)] "
                      />
                    </div>
                    <div className="absolute top-1/2 right-4 z-40 swiper-next-child">
                      <IoChevronForward
                        size={"1.5rem"}
                        className=" text-[var(--blue)] "
                      />
                    </div>
                    <SwiperSlide className=" w-full h-full">
                      <img
                        src={"/images/mendrika/mendrika.jpg"}
                        alt=""
                        style={{
                          objectFit: "cover",
                          width: "100%",
                          height: "100%",
                        }}
                      />
                    </SwiperSlide>
                    <SwiperSlide className=" w-full h-full">
                      <img
                        src={"/images/tsara/tsara3.png"}
                        alt=""
                        style={{
                          objectFit: "cover",
                          width: "100%",
                          height: "100%",
                        }}
                      />
                    </SwiperSlide>
                    <SwiperSlide className=" w-full h-full">
                      <img
                        src={"/images/koloina/koloina.jpg"}
                        alt=""
                        style={{
                          objectFit: "cover",
                          width: "100%",
                          height: "100%",
                        }}
                      />
                    </SwiperSlide>
                  </Swiper>
                  <div className=" flex flex-col gap-4">
                    <p className=" w-max uppercase text-3xl font-semibold ">
                      villa{" "}
                      <span className=" uppercase text-3xl font-semibold text-orange-400">
                        mendrika{" "}
                      </span>
                      <span className=" uppercase text-2xl font-semibold text-green-400">
                        Lot (10)
                      </span>
                    </p>
                    <p className="">
                      La villa T4 sur de 91m²de surface bâtie. Au
                      rez-de-chaussée, une cuisine à l’américaine, la salle à
                      manger, le séjour, les deux chambres sans oublier , une
                      salle de bain commune. A l’étage, une suite parentale avec
                      sa salle de bain et une pergola à l’extérieur divise
                      harmonieusement la lumière.
                    </p>
                    <button className=" w-max self-end rounded-sm bg-green-400 text-white py-2 px-8">
                      Détails
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}

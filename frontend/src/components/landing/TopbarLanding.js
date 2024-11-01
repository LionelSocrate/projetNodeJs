import { Link } from "react-router-dom";
import { IoMdArrowDropdown } from "react-icons/io";
import { useState } from "react";
import { BiLogIn } from "react-icons/bi";

export default function TopbarLanding({ handleAfficheLogin }) {
  const [hoverSite, setHoverSite] = useState(false);

  const changeSite = () => {
    !hoverSite ? setHoverSite(true) : setHoverSite(false);
  };

  return (
    <>
      <div className=" fixed  top-0 left-0  z-40 w-full flex  justify-center  bg-[var(--white)] shadow-lg h-16 items-center rounded-sm">
        <div className=" w-[80%] flex items-center justify-between ">
          <img src="/images/logo.png" alt="polypusLogo" width={120} />

          <div className=" flex items-center gap-6">
            <Link to={"/"}>
              <div className=" flex  items-center gap-2">
                <p className=" text-[var(--orange-color)] uppercase text-sm hover:text-[var(--orange-color)] ">
                  Accueil
                </p>
              </div>
            </Link>

            <Link to={"/about"}>
              <div className=" flex  items-center gap-2">
                <p className="text-[var(--blue)] uppercase text-sm hover:text-[var(--orange-color)] ">
                  A propos
                </p>
              </div>
            </Link>
            <Link to={"/video3d"}>
              <div className=" flex  items-center gap-2">
                <p className="text-[var(--blue)] uppercase text-sm hover:text-[var(--orange-color)] ">
                  video 3d
                </p>
              </div>
            </Link>
            <div className=" relative" onMouseOver={changeSite}>
              <Link to={"/projet"}>
                <div className=" flex  items-center gap-2">
                  <p className="text-[var(--blue)] uppercase text-sm hover:text-[var(--orange-color)]">
                    Nos Sites
                  </p>
                  <IoMdArrowDropdown className=" text-[var(--blue)] " />
                </div>
              </Link>
              {hoverSite && (
                <div className=" absolute top-[2.75rem] left-0  bg-[var(--white)] flex flex-col shadow-lg ">
                  <div className=" absolute top-0 left-0 w-full h-1 bg-[var(--blue)] "></div>
                  <Link>
                    <div className=" py-3 px-8 ">Alakamisy Fenoarivo</div>
                  </Link>
                  <div className=" w-full h-[1px] bg-[var(--gray)] "></div>
                  <Link>
                    <div className=" py-3 px-8 ">Andakana</div>
                  </Link>
                </div>
              )}
            </div>

            <Link to={"/contact"}>
              <div className=" flex  items-center gap-2">
                <p className="text-[var(--blue)]  uppercase text-sm hover:text-[var(--orange-color)]">
                  Contacts
                </p>
              </div>
            </Link>
            <Link to={"/technologie"}>
              <div className=" flex  items-center gap-2">
                <p className="text-[var(--blue)]  uppercase text-sm hover:text-[var(--orange-color)]">
                  technologie
                </p>
              </div>
            </Link>
            <Link to={"#"}>
              <BiLogIn
                size={"1.5rem"}
                className=" text-[var(--blue)] "
                onClick={handleAfficheLogin}
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

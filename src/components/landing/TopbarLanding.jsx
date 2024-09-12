import { Link } from "react-router-dom";

export default function TopbarLanding() {
  return (
    <>
      <div className=" fixed  top-0 left-0  z-50 w-full flex  justify-center  bg-[var(--white)] shadow-lg h-16 items-center rounded-sm">
        <div className=" w-[85%] flex items-center justify-between ">
          <div className=" flex items-center gap-4">
            <div className="relative h-8 w-8">
              <img src="/images/logo.png" fill alt="" objectFit={"contain"} />
            </div>
            <h1 className="font-bold text-xl">
              <span className={"text-xl text-[var(--purple-color)]"}>
                Polypus
              </span>
              <span className={"text-xl text-[var(--orange-color)]"}>App</span>
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <Link
              to={{
                pathname: "/auth",
                query: {
                  path: "login",
                },
              }}
              className=" border border-[var(--orange-color)] rounded-full  flex justify-center items-center h-10 w-[8rem] "
            >
              <span className="text-[var(--orange-color)] ] text-sm">
                Se connecter
              </span>
            </Link>
            <Link
              to={{
                pathname: "/auth",
                query: {
                  path: "register",
                },
              }}
              className="border bg-[var(--orange-color)] rounded-full text-xl  flex justify-center items-center h-10 w-[8rem] "
            >
              <span className="text-[var(--white)] text-sm">
                S{"'"}inscrire
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default function Topbar() {
  return (
    <>
      <div className="w-full flex items-center justify-center bg-[var(--white)] py-3">
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
          <div className="relative flex items-center">
            <input
              type="search"
              className="outline-none py-2 px-10 bg-[var(--gray)] placeholder:text-[var(--color-gray)] w-[30vw] rounded-full font-light"
              placeholder="Rechercher..."
            />
            <i className={"text-[var(--color-gray)] absolute left-3"}>
              {/* <LuSearch size={"1.15rem"} /> */}
            </i>
          </div>
          <div className="flex gap-2 items-center"></div>
        </div>
      </div>
    </>
  );
}

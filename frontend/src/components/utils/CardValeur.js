export const CardValeur = ({ onclick, hook, img, label, gap }) => {
  return (
    <div
      className={`relative cursor-pointer py-6 ${
        hook ? "bg-[rgb(222,158,83)]" : "bg-[rgb(244,239,235)]"
      } ${
        !hook ? "hover:bg-[rgb(49,51,58)]" : ""
      }  hover:text-white  flex flex-col  items-center justify-center gap-${gap} `}
      onClick={onclick}
    >
      {hook && (
        <div className="absolute -bottom-2 left-[48%] bg-[rgb(222,158,83)] w-4 h-4 rotate-45 "></div>
      )}
      <img src={img} alt="photos" className={`w-16`} />
      <p
        className={` capitalize font-semibold tracking-wide ${
          hook ? "text-white" : ""
        } `}
      >
        {label}
      </p>
    </div>
  );
};

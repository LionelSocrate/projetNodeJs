import { useEffect, useState } from "react";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";

export const InputVilla = ({ id, type, onChange, value, label, icon }) => {
  return (
    <div className="relative w-[247px] flex items-center">
      <input
        id={id}
        type={type}
        placeholder={label}
        value={value}
        onChange={onChange}
        className={` relative h-12 pl-10 pr-2 peer bg-green-50 outline-none  rounded-sm focus:outline outline-1  w-full placeholder:text-[var(--color-gray)]  `}
      />
      <div className=" absolute top-0 left-0 w-[2px] h-full bg-green-400 "></div>
      <label
        htmlFor={id}
        className={`absolute left-10 -translate-y-6 -translate-x-1 placeholder:text-[var(--color-gray)] px-2 text-sm peer-placeholder-shown:translate-y-0 peer-placeholder-shown:translate-x-0 peer-placeholder-shown:text-base peer-focus:-translate-y-6 peer-focus:-translate-x-1 peer-focus:text-sm  rounded-sm transition-all duration-150 cursor-text bg-green-50 `}
      >
        {label}
      </label>
      <i className={`absolute left-3  `}>{icon}</i>
    </div>
  );
};

export const SelectVilla = ({ icon, elements, onchange, value }) => {
  const [isClick, setIsClick] = useState(false);
  const [actualValue, setActualValue] = useState("");

  useEffect(() => {
    setActualValue(value);
  }, []);
  const handleClick = () => {
    setIsClick(true);
  };
  const handleDisClick = () => {
    setIsClick(false);
  };
  return (
    <div className="relative w-[247px] h-12 pl-10 pr-2 flex items-center justify-between bg-green-50 ">
      <div className=" absolute top-0 left-0 w-[2px] h-full bg-green-400 "></div>
      <input
        type="text"
        className=" bg-transparent w-[10rem] outline-none "
        value={actualValue}
        onChange={onchange}
      />
      {!isClick && (
        <MdArrowDropUp
          size={"1.5rem"}
          className=" cursor-pointer"
          onClick={() => handleClick()}
        />
      )}
      {isClick && (
        <MdArrowDropDown
          size={"1.5rem"}
          className=" cursor-pointer"
          onClick={() => handleDisClick()}
        />
      )}
      <i className={`absolute left-3`}>{icon}</i>
      {isClick && (
        <div className=" absolute bottom-12 right-0 flex flex-col bg-green-50 border border-green-200">
          {elements.map((item) => (
            <>
              <p
                className=" px-8 py-2 hover:bg-green-100  cursor-pointer"
                key={item}
                onClick={() => {
                  setActualValue(item);
                  onchange({ target: { value: item } });
                  setIsClick(false);
                }}
              >
                {item}
              </p>
              <div className=" w-full  h-[1px] bg-green-100 "></div>
            </>
          ))}
        </div>
      )}
    </div>
  );
};
export const SelectLieu = ({ icon, elements, onchange }) => {
  const [isClick, setIsClick] = useState(false);
  const [actualValue, setActualValue] = useState(elements[0]);
  const handleClick = () => {
    setIsClick(true);
  };
  const handleDisClick = () => {
    setIsClick(false);
  };
  return (
    <div className="relative w-full h-12  flex items-center justify-between  ">
      {actualValue === elements[0] && (
        <img src="/images/drapeauMlg.png" className=" w-8" alt="drapeau" />
      )}
      {actualValue === elements[1] && (
        <img src="/images/france.jpg" className=" w-7" alt="drapeau" />
      )}
      <input
        type="text"
        className=" bg-transparent w-[10rem] outline-none text-xl "
        value={actualValue}
        onChange={onchange}
      />
      {!isClick && (
        <MdArrowDropUp
          size={"2rem"}
          className=" cursor-pointer text-[rgb(255,173,0)] "
          onClick={() => handleClick()}
        />
      )}
      {isClick && (
        <MdArrowDropDown
          size={"2rem"}
          className=" cursor-pointer text-[rgb(255,173,0)] "
          onClick={() => handleDisClick()}
        />
      )}
      <i className={`absolute left-3`}>{icon}</i>
      {isClick && (
        <div className=" absolute bottom-12 right-0 z-30 flex flex-col bg-orange-50 border border-orange-200">
          {elements.map((item) => (
            <>
              <p
                className=" px-8 py-2 hover:bg-orange-100  cursor-pointer"
                key={item}
                onClick={() => {
                  setActualValue(item);
                  setIsClick(false);
                }}
              >
                {item}
              </p>
              <div className=" w-full  h-[1px] bg-orange-100 "></div>
            </>
          ))}
        </div>
      )}
    </div>
  );
};

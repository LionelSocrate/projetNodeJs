import { MdArrowDropDown } from "react-icons/md";
import { isEmpty } from "../../lib/functions";

export const InputText = ({
  id,
  onChange,
  placeholder,
  label,
  type,
  value,
}) => {
  return (
    <div className={"flex flex-col gap-1"}>
      <label htmlFor={id} className="font-semibold">
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`bg-[var(--gray)] rounded-md py-3 px-4 w-full placeholder:text-[var(--color-gray)] placeholder:font-light focus:outline-1 focus:outline-[var(--orange-color)] focus:outline-offset-0`}
      />
    </div>
  );
};

export const TextareaText = ({
  id,
  value,
  onChange,
  placeholder,
  label,
  type,
  rows,
}) => {
  return (
    <div className={"flex flex-col gap-1"}>
      <label htmlFor={id} className="font-semibold">
        {label}
      </label>
      <textarea
        rows={rows}
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`bg-[var(--gray)] rounded-md py-3 px-4 w-full placeholder:text-[var(--color-gray)] placeholder:font-light focus:outline-1 focus:outline-[var(--orange-color)] focus:outline-offset-0`}
      />
    </div>
  );
};

export function InputSelect({
  id,
  icon,
  label,
  onChange,
  placeholder,
  type,
  value,
  error,
  required,
  collapse,
  array,
  onFocus,
  onBlur,
  setCollapse,
  setValue,
}) {
  return (
    <div className="relative flex items-center max-h-96">
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        required={required ? required : true}
        className={`h-12 px-10 peer border bg-transparent rounded-sm focus:outline outline-1 text-[var(--dark)] w-full placeholder:text-[var(--dark)] ${
          error
            ? "border-red-500 outline-[var(--red)]"
            : "border-[var(--gray)] outline-[var(--gray)]"
        } ${collapse ? "outline" : ""}`}
      />

      <label
        htmlFor={id}
        className={`absolute left-10 select-none -translate-y-6 -translate-x-1 text-sm peer-placeholder-shown:translate-y-0 peer-placeholder-shown:translate-x-0 peer-placeholder-shown:text-base peer-focus:-translate-y-6 peer-focus:-translate-x-1 peer-focus:text-sm bg-[var(--primary-color)] px-1 rounded-sm transition-all duration-150 cursor-text ${
          error ? "text-[var(--red)]" : "text-[var(--gray-text)]"
        }`}
      >
        {label}
      </label>
      <i
        className={`absolute left-3 ${
          error ? "text-[var(--red)]" : "text-[var(--gray-text)]"
        }`}
      >
        {icon}
      </i>
      <i
        onClick={() => setCollapse((prev) => !prev)}
        className={"absolute right-2 cursor-pointer"}
      >
        <MdArrowDropDown size={"1.5rem"} />
      </i>
      {!isEmpty(array) && collapse && (
        <div
          className={`absolute bg-[var(--white)] w-full top-full p-4 rounded-md shadow-sm z-10`}
        >
          <div className="p-2 h-full max-h-80  overflow-x-hidden scr">
            <div className="h-max flex flex-col">
              {array.map((item, index) => {
                return (
                  <label
                    key={item.id}
                    onClick={() => {
                      setValue((prev) => ({
                        ...prev,
                        value: item.label,
                        valid: true,
                      }));
                      setCollapse(false);
                    }}
                    className={`hover:bg-slate-200 cursor-pointer py-2 px-2 overflow-hidden ${
                      item === value
                        ? "bg-slate- text-[var(--orange-color)] underline"
                        : ""
                    }`}
                  >
                    <span
                      className={
                        "font-light whitespace-nowrap overflow-hidden select-none"
                      }
                    >
                      {item.label}
                    </span>
                  </label>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

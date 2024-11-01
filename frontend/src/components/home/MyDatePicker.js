import React, { useState, forwardRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { IoCalendarOutline } from "react-icons/io5";

const CustomInput = forwardRef(({ value, onClick }, ref) => (
  <div className="relative custom-input w-full overflow-hidden">
    <input
      type="text"
      className=" bg-transparent w-full outline-none   px-2 py-2  rounded-sm pr-6"
      onClick={onClick}
      ref={ref}
      value={value}
      readOnly
    />
    <div
      className="absolute top-0 right-0 h-full px-2 flex items-center justify-center bg-[var(--white)] cursor-pointer"
      onClick={onClick}
    >
      <IoCalendarOutline className="text-[rgb(64,191,246)]" size={"1.2rem"} />
    </div>
  </div>
));

const MyDatePicker = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      dateFormat="dd / MMMM / yyyy"
      customInput={<CustomInput />}
      popperPlacement="top"
      popperModifiers={{
        preventOverflow: {
          enabled: true,
          boundariesElement: "viewport",
        },
      }}
    />
  );
};

export default MyDatePicker;

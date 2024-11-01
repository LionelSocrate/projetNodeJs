import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const PhoneNumberInput = ({ onChange }) => {
  const [phone, setPhone] = useState("");
  const validatePhoneNumber = (phone) => {
    const phoneRegex = /^\+?[1-9]\d{1,14}$/;
    return phoneRegex.test(phone);
  };

  return (
    <div className="max-w-[5rem] mx-auto">
      {" "}
      <PhoneInput
        country={"fr"}
        value={phone}
        enableSearch={true}
        onChange={onChange}
        containerClass="w-full"
        inputClass="max-w-[15rem] py-4 px-4 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-orange-300"
      />
    </div>
  );
};

export default PhoneNumberInput;

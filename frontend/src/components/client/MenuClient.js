import React, { useState } from "react";

export default function MenuClient({ label, state, onClick }) {
  return (
    <>
      <p
        className={`uppercase text-sm tracking-widest flex items-center justify-center py-1 rounded-sm ${
          state
            ? "bg-[rgb(50,52,59)] text-white"
            : "bg-[rgb(247,247,247)] hover:bg-[rgb(50,52,59,0.75)] hover:text-white "
        }  cursor-pointer`}
        onClick={onClick}
      >
        {label}
      </p>
    </>
  );
}

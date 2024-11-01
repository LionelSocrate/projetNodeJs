import React from "react";

export default function MenuVillaAdmin({ label, state, onClick }) {
  return (
    <>
      <p
        className={`uppercase text-sm tracking-widest flex items-center justify-center py-1 rounded-sm ${
          state
            ? "bg-[rgb(50,52,59,0.75)] text-white"
            : "bg-[rgb(247,247,247)] hover:bg-[rgb(50,52,59,0.5)] hover:text-white "
        }  cursor-pointer`}
        onClick={onClick}
      >
        {label}
      </p>
    </>
  );
}

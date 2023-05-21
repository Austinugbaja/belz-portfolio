import React from "react";

export const Button = ({ title }) => {
  return (
    <button className="min-w-[100px] px-4 py-2.5 border border-[#60B1FC] rounded-full bg-[#60B1FC] uppercase tracking-wide text-xs text-white font-[700] font-Poppins cursor-pointer">
      {title}
    </button>
  );
};

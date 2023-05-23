import React from "react";

export const PortBtn = ({ title }) => {
  return (
    <button className="min-w-[100px] sm:px-3.5 px-2 sm:py-2.5 py-1.5 border border-white rounded-full bg-white uppercase tracking-wide sm:text-xs text-[8px] text-[#353535] font-[600] font-Poppins cursor-pointer">
      {title}
    </button>
  );
};

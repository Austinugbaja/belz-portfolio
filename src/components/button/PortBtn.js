import React from "react";

export const PortBtn = ({ title }) => {
  return (
    <button className="min-w-[100px] px-3.5 py-2.5 border border-white rounded-full bg-white uppercase tracking-wide text-xs text-[#353535] font-[600] font-Poppins cursor-pointer">
      {title}
    </button>
  );
};

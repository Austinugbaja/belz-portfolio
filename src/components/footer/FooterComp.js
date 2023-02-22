import React from "react";

const FooterComp = () => {
  return (
    <footer className="w-full min-h-[40vh] flex items-center justify-center bg-[#F5F7F8] px-32 py-7">
      <div className="w-full space-y-3 text-center">
        <h3 className="text-2xl text-[#363535] capitalize font-Montserrat font-[700]">
          let's connect
        </h3>
        <p className="text-sm text-[#484848] font-Poppins font-[500] leading-7 line-clamp-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque a
          nec sapien nulla duis. Diam semper ultricies elit non nulla sapien
          auctor.
        </p>
      </div>
    </footer>
  );
};

export default FooterComp;

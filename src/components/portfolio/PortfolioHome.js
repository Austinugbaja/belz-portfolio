import React from "react";
import { PortBtn } from "../button/PortBtn";

const PortfolioHome = () => {
  return (
    <section className="w-full px-56 py-10">
      <p className="text-sm text-[#363535] font-[500] font-Montserrat tracking-widest uppercase">
        my recent works 💡
      </p>
      <div className="w-full flex items-center gap-12 border border-[#D3E9F6] bg-[#D3E9F6] rounded-xl px-4 mt-10">
        <div className="w-full">
          <img src="/images/vendly-preview.png" alt="" />
        </div>
        <div className="space-y-6 pr-9 w-full">
          <p className="text-3xl text-[#363535] font-Montserrat font-[700] capitalize">
            vendly
          </p>
          <p className="text-[#4D4D4D] text-sm font-Poppins font-[500] leading-7 pr-3">
            Create products very easily and fast combined with the best project
            stability in the world.
          </p>
          <div>
            <PortBtn title="view case study" />
          </div>
        </div>
      </div>
      <div className="w-full h-[43vh] flex items-center gap-10 border border-[#FCD0D0] bg-[#FCD0D0] rounded-lg px-4 pt-5 mt-10">
        <div className="w-full">
          <img src="/images/airsyn-preview.png" className="w-[430px] h-[40vh]" alt="" />
        </div>
        <div className="space-y-6 pr-9 w-full">
          <p className="text-3xl text-[#363535] font-Montserrat font-[700] capitalize">
            airsyn
          </p>
          <p className="text-[#4D4D4D] text-sm font-Poppins font-[500] leading-7 pr-3">
            The AirSyn is the first Air quality monitor tracking 16 pollutants
            realtime.
          </p>
          <div>
            <PortBtn title="view case study" />
          </div>
        </div>
      </div>
      <div className="w-full flex gap-10 border border-[#D5DEFD] bg-[#D5DEFD] rounded-xl px-4 pt-16 mt-10">
        <div className="w-full">
          <img src="/images/amihub.png" alt="" />
        </div>
        <div className="space-y-6 pr-9 w-full">
          <p className="text-3xl text-[#363535] font-Montserrat font-[700] capitalize">
            AMI hub
          </p>
          <p className="text-[#4D4D4D] text-sm font-Poppins font-[500] leading-7 pr-3">
            The AMI Hub exists to give old and new businesses a face of
            innovation.
          </p>
          <div>
            <PortBtn title="view case study" />
          </div>
        </div>
      </div>
      <div className="w-full flex items-center gap-10 border border-[#FFDFD1] bg-[#FFDFD1] rounded-xl px-4 py-5 mt-10">
        <div className="w-full">
          <img src="/images/tronix-preview.png" alt="" />
        </div>
        <div className="space-y-6 pr-9 w-full">
          <p className="text-3xl text-[#363535] font-Montserrat font-[700] capitalize">
            tronix
          </p>
          <p className="text-[#4D4D4D] text-sm font-Poppins font-[500] leading-7 pr-3">
            Building Smart Technologies to make life easier.
          </p>
          <div>
            <PortBtn title="view case study" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioHome;

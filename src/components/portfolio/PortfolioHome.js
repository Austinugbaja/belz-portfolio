import React from "react";
import { PortBtn } from "../button/PortBtn";
import Link from "next/link";

const PortfolioHome = () => {
  return (
    <section className="w-full sm:px-56 lg:px-56 px-2 sm:py-10 py-7">
      <p className="text-sm text-[#363535] font-[500] font-Montserrat tracking-widest uppercase">
        my recent works 💡
      </p>
      <div className="w-full flex sm:items-center sm:gap-12 gap-4 border border-[#D3E9F6] bg-[#D3E9F6] rounded-xl sm:px-4 px-2 py-2 sm:py-0 sm:mt-10 mt-5">
        <div className="w-full">
          <img
            src="/images/vendly-preview.png"
            className="w-[100%] h-full object-cover"
            alt=""
          />
        </div>
        <div className="sm:space-y-6 space-y-2 sm:pr-9 w-full">
          <p className="sm:text-3xl text-xl text-[#363535] font-Montserrat font-[700] capitalize">
            vendly
          </p>
          <p className="text-[#4D4D4D] sm:text-sm text-xs font-Poppins sm:font-[500] font-light sm:leading-7 sm:pr-3">
            Create products very easily and fast combined with the best project
            stability in the world.
          </p>
          <div>
            <Link href="/vendly">
              <PortBtn title="view case study" />
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full sm:h-[43vh] flex sm:items-center sm:gap-12 gap-4 border border-[#FCD0D0] bg-[#FCD0D0] rounded-xl sm:px-4 px-2 py-2 sm:py-0 sm:mt-10 mt-7">
        <div className="w-full">
          <img
            src="/images/airsyn-preview.png"
            className="sm:w-[430px] sm:h-[40vh] w-[100%] h-[18vh] object-cover"
            alt=""
          />
        </div>
        <div className="sm:space-y-6 space-y-3 sm:pr-9 w-full">
          <p className="sm:text-3xl text-xl text-[#363535] font-Montserrat font-[700] capitalize">
            airsyn
          </p>
          <p className="text-[#4D4D4D] sm:text-sm text-xs font-Poppins sm:font-[500] font-light sm:leading-7 sm:pr-3">
            The AirSyn is the first Air quality monitor tracking 16 pollutants
            realtime.
          </p>
          <div>
            <Link href="/airsyn">
              <PortBtn title="view case study" />
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full flex sm:items-center sm:gap-12 gap-4 border border-[#D5DEFD] bg-[#D5DEFD] rounded-xl sm:px-4 px-2 py-2 sm:py-0 sm:mt-10 mt-7">
        <div className="w-full">
          <img
            src="/images/amihub.png"
            className="w-[100%] h-full object-cover"
            alt=""
          />
        </div>
        <div className="sm:space-y-6 space-y-3 sm:pr-9 w-full">
          <p className="sm:text-3xl text-xl text-[#363535] font-Montserrat font-[700] capitalize">
            AMI hub
          </p>
          <p className="text-[#4D4D4D] sm:text-sm text-xs font-Poppins sm:font-[500] font-light sm:leading-7 sm:pr-3">
            The AMI Hub exists to give old and new businesses a face of
            innovation.
          </p>
          <div>
            <Link href="/amihub">
              <PortBtn title="view case study" />
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full flex sm:items-center sm:gap-12 gap-4 border border-[#FFDFD1] bg-[#FFDFD1] rounded-xl sm:px-4 px-2 py-2 sm:py-0 sm:mt-10 mt-7">
        <div className="w-full">
          <img
            src="/images/tronix-preview.png"
            className="w-[100%] h-full object-cover"
            alt=""
          />
        </div>
        <div className="sm:space-y-6 space-y-3 sm:pr-9 w-full">
          <p className="sm:text-3xl text-xl text-[#363535] font-Montserrat font-[700] capitalize">
            tronix
          </p>
          <p className="text-[#4D4D4D] sm:text-sm text-xs font-Poppins sm:font-[500] font-light sm:leading-7 sm:pr-3">
            Building Smart Technologies to make life easier.
          </p>
          <div>
            <Link href="/tronix">
              <PortBtn title="view case study" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioHome;

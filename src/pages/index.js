import React from "react";
import HeaderComp from "../components/header/HeaderComp";
import { Button } from "../components/button/Button";
import PortfolioHome from "../components/portfolio/PortfolioHome";
import FooterComp from "../components/footer/FooterComp";

const index = () => {
  return (
    <>
      <section className="w-full h-[100vh] hero bg-white">
        <HeaderComp />
        <section className="w-full flex items-center px-32 py-10 mt-20">
          <div className="w-[50%] space-y-7">
            <h2 className="text-lg tracking-widest uppercase font-[500] font-Poppins bg-gradient-to-r from-[#60B1FC] via-[#FE79F9] to-[#FF8473] bg-clip-text text-transparent">
              product designer
            </h2>
            <h1 className="text-5xl tracking-wide text-[#363535] font-[700] font-Poppins capitalize">
              hello, i'm belema
            </h1>
            <p className="text-sm text-tertiary">
              I am a product designer driven by a passion to utilize design to
              improve the lives of others. I am continuously seeking new
              opportunities for growth and knowledge.
            </p>
            <Button title="hire me" />
          </div>
          <div className="w-[50%]"></div>
        </section>
      </section>
      <PortfolioHome />
      <section className="mt-12">
        <FooterComp />
      </section>
    </>
  );
};

export default index;

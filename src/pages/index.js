import React from "react";
import HeaderComp from "../components/header/HeaderComp";
import { Button } from "../components/button/Button";
import PortfolioHome from "../components/portfolio/PortfolioHome";
import FooterComp from "../components/footer/FooterComp";

const index = () => {
  return (
    <>
      <section
        className="w-full h-[100vh] hero"
        style={{
          background:
            "linear-gradient(120.18deg, #FFFFFF 0%, rgba(255, 255, 255, 0.12) 39.46%, rgba(188, 188, 188, 0.07) 57.09%, rgba(98, 98, 98, 0.07) 80.59%);",
        }}
      >
        <HeaderComp />
        <section className="w-full sm:flex items-center sm:px-56 lg:px-56 py-10 sm:mt-20 block px-4">
          <div className="sm:w-[50%] w-full sm:space-y-7 space-y-4">
            <h2 className="text-lg text-center sm:text-start tracking-widest uppercase font-[500] font-Poppins bg-gradient-to-r from-[#60B1FC] via-[#FE79F9] to-[#FF8473] bg-clip-text text-transparent">
              product designer
            </h2>
            <h1 className="sm:text-5xl text-3xl text-center sm:text-start tracking-wide text-[#363535] font-[700] font-Poppins capitalize">
              hello, i'm belema
            </h1>
            <p className="text-sm text-tertiary leading-7 text-center sm:text-start">
              I am a product designer driven by a passion to utilize design to
              improve the lives of others. I am continuously seeking new
              opportunities for growth and knowledge.
            </p>
            <div className="sm:block flex items-center justify-center">
              <Button title="hire me" />
            </div>
          </div>
          <div className="sm:w-[50%] hidden"></div>
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

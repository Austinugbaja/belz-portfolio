import React from "react";
import HeaderComp from "../components/header/HeaderComp";
import FooterComp from "../components/footer/FooterComp";

const MainLayout = ({ children }) => {
  return (
    <section>
      <HeaderComp />
      <main>{children}</main>
      <FooterComp />
    </section>
  );
};

export default MainLayout;

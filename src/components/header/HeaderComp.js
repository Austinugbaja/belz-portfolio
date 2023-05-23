import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faBars,
  faMultiply,
} from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import Link from "next/link";

const HeaderComp = () => {
  const router = useRouter();
  const [isDropdownVisible, setDropdownVisible] = useState(true);
  const [activeLink, setActiveLink] = useState(router.pathname);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  useEffect(() => {
    setActiveLink(router.pathname);
  }, [router.pathname]);

  return (
    <>
      <nav className="w-full flex items-center justify-between sm:px-56 py-7 md:px-12 lg:px-56 px-4">
        <div className="w-[20%]">
          <img src="/images/logo.svg" className="w-12 h-full" alt="" />
        </div>
        <div className="w-[80%] relative">
          <ul className="w-full sm:flex items-center justify-start gap-7 hidden">
            <li
              className={`text-sm font-Poppins capitalize ${
                activeLink === "/"
                  ? "font-[600] text-[#60B1FC]"
                  : "font-[400] text-[#6D6D6D]"
              }`}
              onClick={() => setActiveLink("home")}
            >
              <Link href="/">home</Link>
            </li>
            <li
              className={`text-sm font-Poppins capitalize ${
                activeLink === "/about"
                  ? "font-[600] text-[#60B1FC]"
                  : "font-[400] text-[#6D6D6D]"
              }`}
              onClick={() => setActiveLink("about")}
            >
              <Link href="/about">about me</Link>
            </li>
            <li
              className={`text-sm font-Poppins capitalize cursor-pointer relative ${
                activeLink === "/works"
                  ? "font-[600] text-[#60B1FC]"
                  : "font-[400] text-[#6D6D6D]"
              }`}
              onClick={toggleDropdown}
            >
              works{" "}
              <span className="px-2">
                <FontAwesomeIcon
                  icon={faAngleDown}
                  width={9}
                  color="#6D6D6D"
                  className="cursor-pointer"
                  onClick={toggleDropdown}
                />
              </span>
              {isDropdownVisible && (
                <ul
                  className="border border-white bg-white absolute z-10 top-full left-0 mt-2 w-[140px] rounded-md"
                  style={{ boxShadow: "0px 4px 8px 4px rgba(0, 0, 0, 0.08)" }}
                >
                  <li
                    className={`text-sm font-Poppins capitalize pl-4 py-2 hover:bg-[#FFFBFB] hover:text-[#6D6D6D] border border-white rounded-tl-md rounded-tr-md ${
                      activeLink === "/vendly"
                        ? "font-[700] text-white bg-[#55ACEE]"
                        : "font-[400] text-[#6D6D6D]"
                    }`}
                    onClick={() => setActiveLink("vendly")}
                  >
                    <Link href="/vendly">vendly</Link>
                  </li>
                  <li
                    className={`text-sm font-Poppins capitalize hover:bg-[#FFFBFB] hover:text-[#6D6D6D] pl-4 py-2 ${
                      activeLink === "/airsyn"
                        ? "font-[700] text-white bg-[#55ACEE]"
                        : "font-[400] text-[#6D6D6D]"
                    }`}
                    onClick={() => setActiveLink("airsyn")}
                  >
                    <Link href="/airsyn">airsyn</Link>
                  </li>
                  <li
                    className={`text-sm font-Poppins capitalize hover:bg-[#FFFBFB] hover:text-[#6D6D6D] pl-4 py-2 ${
                      activeLink === "/tronix"
                        ? "font-[700] text-white bg-[#55ACEE]"
                        : "font-[400] text-[#6D6D6D]"
                    }`}
                    onClick={() => setActiveLink("tronix")}
                  >
                    <Link href="/tronix">tronix</Link>
                  </li>
                  <li
                    className={`text-sm font-Poppins capitalize pl-4 py-2 hover:bg-[#FFFBFB] hover:text-[#6D6D6D] border border-white rounded-bl-md rounded-br-md ${
                      activeLink === "/amihub"
                        ? "font-[700] text-white bg-[#55ACEE]"
                        : "font-[400] text-[#6D6D6D]"
                    }`}
                    onClick={() => setActiveLink("amihub")}
                  >
                    <Link href="/amihub">ami hub</Link>
                  </li>
                </ul>
              )}
            </li>
            <li className="text-sm text-[#6D6D6D] font-Poppins capitalize">
              contact me
            </li>
          </ul>
        </div>
        <div
          className="w-full flex justify-end sm:hidden"
          onClick={() => setMenuOpen(true)}
        >
          <FontAwesomeIcon icon={faBars} color="#6D6D6D" size="xl" />
        </div>
      </nav>
      {menuOpen && (
        <div className="w-full bg-white shadow-2xl absolute top-0 left-0 h-screen z-50 menu-transition-enter menu-transition-enter-active">
          <div
            className="flex justify-end w-full px-4 py-3"
            onClick={() => setMenuOpen(false)}
          >
            <FontAwesomeIcon icon={faMultiply} color="#6D6D6D" />
          </div>
          <ul className="w-full py-10 flex flex-col items-center justify-cente space-y-7">
            <li
              className={`text-sm font-Poppins hover:text-[#1D5C89] hover:font-bold cursor-pointer ${
                activeLink === "/"
                  ? "font-bold text-[#1D5C89]"
                  : "text-[#5F5F5F]"
              }`}
              onClick={() => setActiveLink("home")}
            >
              <Link href="/">Home</Link>
            </li>
            <li
              className={`text-sm font-Poppins hover:text-[#1D5C89] hover:font-bold cursor-pointer ${
                activeLink === "/about"
                  ? "font-bold text-[#1D5C89]"
                  : "text-[#5F5F5F]"
              }`}
              onClick={() => setActiveLink("about")}
            >
              <Link href="/about">About us</Link>
            </li>
            <li
              className={`text-sm text-center font-Poppins hover:text-[#1D5C89] hover:font-bold cursor-pointer ${
                activeLink === "/works"
                  ? "font-bold text-[#1D5C89]"
                  : "text-[#5F5F5F]"
              }`}
              onClick={toggleDropdown}
            >
              works
              <span className="pl-4">
                <FontAwesomeIcon
                  icon={faAngleDown}
                  width={9}
                  color="#6D6D6D"
                  className="cursor-pointer"
                  onClick={toggleDropdown}
                />
              </span>
              {isDropdownVisible && (
                <ul
                  className="border border-white bg-white mt-2 w-[100%] rounded-md"
                  style={{ boxShadow: "0px 4px 8px 4px rgba(0, 0, 0, 0.08)" }}
                >
                  <li
                    className={`text-sm font-Poppins capitalize w-full px-24 py-2 hover:bg-[#FFFBFB] hover:text-[#6D6D6D] border border-white rounded-tl-md rounded-tr-md ${
                      activeLink === "/vendly"
                        ? "font-[700] text-white bg-[#55ACEE]"
                        : "font-[400] text-[#6D6D6D]"
                    }`}
                    onClick={() => setActiveLink("vendly")}
                  >
                    <Link href="/vendly">vendly</Link>
                  </li>
                  <li
                    className={`text-sm font-Poppins capitalize hover:bg-[#FFFBFB] hover:text-[#6D6D6D] w-full py-2 ${
                      activeLink === "/airsyn"
                        ? "font-[700] text-white bg-[#55ACEE]"
                        : "font-[400] text-[#6D6D6D]"
                    }`}
                    onClick={() => setActiveLink("airsyn")}
                  >
                    <Link href="/airsyn">airsyn</Link>
                  </li>
                  <li
                    className={`text-sm font-Poppins capitalize hover:bg-[#FFFBFB] hover:text-[#6D6D6D] w-full py-2 ${
                      activeLink === "/tronix"
                        ? "font-[700] text-white bg-[#55ACEE]"
                        : "font-[400] text-[#6D6D6D]"
                    }`}
                    onClick={() => setActiveLink("tronix")}
                  >
                    <Link href="/tronix">tronix</Link>
                  </li>
                  <li
                    className={`text-sm font-Poppins capitalize w-full py-2 hover:bg-[#FFFBFB] hover:text-[#6D6D6D] border border-white rounded-bl-md rounded-br-md ${
                      activeLink === "/amihub"
                        ? "font-[700] text-white bg-[#55ACEE]"
                        : "font-[400] text-[#6D6D6D]"
                    }`}
                    onClick={() => setActiveLink("amihub")}
                  >
                    <Link href="/amihub">ami hub</Link>
                  </li>
                </ul>
              )}
            </li>
          </ul>
          <div className="w-full flex items-center justify-center text-[#6D6D6D]">
            <Link href="/">Contact me</Link>
          </div>
        </div>
      )}
    </>
  );
};

export default HeaderComp;

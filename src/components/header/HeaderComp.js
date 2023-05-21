import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import Link from "next/link";

const HeaderComp = () => {
  const router = useRouter();
  const [isDropdownVisible, setDropdownVisible] = useState(true);
  const [activeLink, setActiveLink] = useState(router.pathname);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  useEffect(() => {
    setActiveLink(router.pathname);
  }, [router.pathname]);

  return (
    <nav className="w-full flex items-center justify-between px-56 py-7">
      <div className="w-[20%]">
        <img src="/images/logo.svg" className="w-12 h-full" alt="" />
      </div>
      <div className="w-[80%] relative">
        <ul className="w-full flex items-center justify-start gap-7">
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
    </nav>
  );
};

export default HeaderComp;

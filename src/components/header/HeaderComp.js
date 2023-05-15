import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { DropDownBtn } from "../modal/DropDown";
import DropEx from "../modal/DropEx";

const HeaderComp = () => {
  // const [onDisplay, setOnDisplay] = useState(false);

  return (
    <nav className="w-full flex items-center justify-between px-32 py-7">
      <div className="w-[20%]">
        <img src="/images/logo.svg" className="w-12 h-full" alt="" />
      </div>
      <div className="w-[80%]">
        <ul className="w-full flex items-center justify-start gap-7">
          <Link href="/">
            <li className="text-sm text-[#6D6D6D] font-Poppins capitalize">
              home
            </li>
          </Link>
          <Link href="/about">
            <li className="text-sm text-[#6D6D6D] font-Poppins capitalize">
              about me
            </li>
          </Link>
          {/* <li className="text-sm text-[#6D6D6D] font-Poppins capitalize">
            <DropEx />
            <DropDownBtn
              title="Works"
              selectOne="Vendly"
              selectTwo="Airsyn"
              selectThree="AMI Hub"
              selectFour="Tronix"
            />
            works{" "}
            <span className="px-2">
              <FontAwesomeIcon icon={faAngleDown} width={9} color="#6D6D6D" />
            </span>
            <ul className="dropdown-content py-3">
              <li className="text-sm text-[#6D6D6D] font-Poppins capitalize pb-2 pl-4 hover:bg-[#55ACEE] hover:text-white hover:font-[700]">
                vendly
              </li>
              <li className="text-sm text-[#6D6D6D] font-Poppins capitalize pb-2 pl-4">
                airsyn
              </li>
              <li className="text-sm text-[#6D6D6D] font-Poppins capitalize pb-2 pl-4">
                ami hub
              </li>
              <li className="text-sm text-[#6D6D6D] font-Poppins capitalize pl-4">
                tronix
              </li>
            </ul>
          </li> */}
          <Link href="/vendly">
            <li className="text-sm text-[#6D6D6D] font-Poppins capitalize">
              vendy
            </li>
          </Link>
          <li className="text-sm text-[#6D6D6D] font-Poppins capitalize">
            airsyn
          </li>
          <li className="text-sm text-[#6D6D6D] font-Poppins capitalize">
            ami hub
          </li>
          <li className="text-sm text-[#6D6D6D] font-Poppins capitalize">
            tronix
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

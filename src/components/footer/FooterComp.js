import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faBehance, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const FooterComp = () => {
  const handleBehanceClick = () => {
    window.open("https://www.behance.net/belemageorge", "_blank");
  };

  const handleEmailClick = () => {
    window.open("mailto:belzgeorge997@gmail.com");
  };

  const handleLinkedinClick = () => {
    window.open(
      " https://www.linkedin.com/me?trk=p_mwlite_profile_self-secondary_nav",
      "_blank"
    );
  };

  return (
    <footer className="w-full min-h-[40vh] flex items-center justify-center bg-[#F5F7F8] sm:px-32 px-4 sm:py-7 py-3">
      <div className="w-full space-y-5 text-center">
        <h3 className="text-2xl text-[#363535] capitalize font-Montserrat font-[700]">
          let's connect
        </h3>
        <p className="text-sm text-[#484848] font-Poppins font-[500] leading-7 md:max-w-lg mx-auto">
          Don't hesitate to reach out to me if you're interested in exploring
          potential opportunities or simply want to drop a friendly greeting!
        </p>
        <div className="w-full flex items-center justify-center gap-9">
          <div
            className="border border-[#0675B4] bg-[#0675B4] rounded-sm cursor-pointer"
            onClick={handleBehanceClick}
          >
            <FontAwesomeIcon icon={faBehance} width={30} color="#fff" />
          </div>
          <div
            onClick={handleEmailClick}
            className="border border-[#0675B4] bg-[#0675B4] rounded-sm cursor-pointer"
          >
            <FontAwesomeIcon icon={faEnvelope} width={30} color="#fff" />
          </div>
          <div
            className="border border-[#0675B4] bg-[#0675B4] rounded-sm cursor-pointer"
            onClick={handleLinkedinClick}
          >
            <FontAwesomeIcon icon={faLinkedinIn} width={30} color="#fff" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterComp;

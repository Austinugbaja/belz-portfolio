import React, { useEffect, useState } from "react";
import { faAngleDoubleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const GoToTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.pageYOffset > window.innerHeight &&
        window.pageYOffset < document.body.offsetHeight - window.innerHeight
      ) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    showButton && (
      <FontAwesomeIcon
        icon={faAngleDoubleUp}
        color="#fff"
        className="bg-[#60B1FC] w-5 h-5 border border-[#60B1FC] p-3 rounded-full drop-shadow fixed bottom-9 right-3 cursor-pointer"
        onClick={handleClick}
      />
    )
  );
};

export default GoToTop;

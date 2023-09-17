import React, { useState } from "react";
import userData from "../data";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

function UserCard() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const showPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? userData.length - 1 : prev - 1));
  };

  const showNext = () => {
    setCurrentIndex((next) => (next === userData.length - 1 ? 0 : next + 1));
  };

  const surpriseBtn = () => {
    const surpriseValue = Math.floor(Math.random() * userData.length);
    setCurrentIndex(surpriseValue);
    console.log(surpriseValue);
  };

  return (
    <div className="wrapper">
      <img src={userData[currentIndex].img} alt={userData[currentIndex].name} />
      <h3>{userData[currentIndex].name}</h3>
      <p>{userData[currentIndex].designation}</p>
      <p>{userData[currentIndex].description}</p>
      <div>
        <button className="prev" onClick={showPrev}>
          <ChevronLeftIcon />
        </button>
        <button className="next" onClick={showNext}>
          <ChevronRightIcon />
        </button>
      </div>
      <button className="surprise-btn" onClick={surpriseBtn}>
        Surprise me
      </button>
    </div>
  );
}

export default UserCard;

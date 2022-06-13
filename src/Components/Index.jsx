import React from "react";
import EventContent from "./EventContent";
const MainComp = () => {
  return (
    <div className="Main_Container">
      <div className="BackGround_IMG">
        <img src="/images/MainBackground.png" alt="" />
      </div>
      <div>
        <EventContent/>
      </div>
    </div>
  );
};

export default MainComp;

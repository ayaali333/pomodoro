import React from "react";
import "bootstrap/dist/css/bootstrap.css";

const CountdownTimer = ({ currentPeriod }) => {
  return (
    <div className="text d-flex align-items-center justify-content-center display-4 mt-5  mb-5">
      {currentPeriod.min.toString().padStart(2, "0")}:
      {currentPeriod.sec.toString().padStart(2, "0")}
    </div>
  );
};

export default CountdownTimer;
import React from "react";

const CountdownTimer = ({ currentPeriod }) => {
  return (
    <p>
      {currentPeriod.min.toString().padStart(2, "0")}:
      {currentPeriod.sec.toString().padStart(2, "0")}
    </p>
  );
};

export default CountdownTimer;

import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import {
  periods,
  decrementOneSec,
  determineNextPeriod,
} from "../timeSettings/timeSettings";
import StartStopButton from "../StartStopButton/StartStopButton";
import CountdownTimer from "../CountdownTimer/CountdownTimer";

export default function CountDown() {
  const [currentPeriod, setCurrentPeriod] = useState({ ...periods.workTime });
  const [isRunning, setIsRunning] = useState(false);
  const [counter, setCounter] = useState(1);

  const startHandler = () => {
    setIsRunning(true);
  };

  const stopHandler = () => {
    setIsRunning(false);
  };

  const switchToNextSession = () => {
    const nextPeriod = determineNextPeriod(currentPeriod, counter);
    setCurrentPeriod(nextPeriod);
    setCounter((count) => count + 1);
    if (counter === 5) {
      setCounter(0);
    }
    setIsRunning(!isRunning);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isRunning) {
        return;
      }
      decrementOneSec(
        currentPeriod.sec,
        currentPeriod.min,
        switchToNextSession,
        setCurrentPeriod
      );
    }, 1000);
    return () => clearInterval(timer);
  }, [currentPeriod, isRunning]);

  return (
    <div
      class=" d-flex align-items-center justify-content-center shadow-sm shadow-lg-md "
      style={{ height: "100vh" }}
    >
      <div className="square border w-50 rounded shadow">
        <CountdownTimer currentPeriod={currentPeriod} />
        <StartStopButton
          startHandler={startHandler}
          stopHandler={stopHandler}
        />
      </div>
    </div>
  );
}

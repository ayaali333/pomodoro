import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import {
  periods,
  decrementOneSec,
  determineNextPeriod,
} from "../timeSettings/timeSettings";
import Button from "../StartStopButton/StartStopButton";
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

  const nextSessionHandler = () => {
    switchToNextSession();
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
    <div className="container ">
      <div className="row ">
        <div className=" col-12 col-md-6 offset-md-3 square border p-3 rounded shadow">
          <div className="">
            <CountdownTimer currentPeriod={currentPeriod} />
          </div>
          <div className="d-flex justify-content-center align-items-center ">
            {!isRunning ? (
              <Button action={startHandler} id="start" />
            ) : (
              <Button action={stopHandler} id="stop" />
            )}
            {isRunning ? (
              <Button action={nextSessionHandler} id="nextSession" />
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

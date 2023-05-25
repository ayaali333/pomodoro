import React, { useState, useEffect } from "react";
import {
  periods,
  decrementOneSec,
  determineNextPeriod,
} from "../timeSettings/timeSettings";
import StartStopButton from "../StartStopButton/StartStopButton";
import CountdownTimer from "../CountdownTimer/CountdownTimer";

export default function CountDown() {
  const [timeLeft, setTimeLeft] = useState(periods.workTime);
  const [isRunning, setIsRunning] = useState(false);
  const [currentSession, setCurrentSession] = useState(periods.workTime.id);
  const [currentPeriod, setCurrentPeriod] = useState(1);

  const startHandler = () => {
    setIsRunning(true);
  };

  const stopHandler = () => {
    setIsRunning(false);
  };

  const switchToNextSession = () => {
    determineNextPeriod(
      currentSession,
      currentPeriod,
      setCurrentSession,
      setCurrentPeriod,
      setTimeLeft
    );
    if (currentPeriod === 5) {
      setCurrentPeriod(0);
    }
    setCurrentPeriod((count) => count + 1);
    setIsRunning(!isRunning);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isRunning) {
        return;
      }
      decrementOneSec(
        timeLeft.sec,
        timeLeft.min,
        switchToNextSession,
        setTimeLeft
      );
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft, isRunning]);

  return (
    <div>
      <CountdownTimer timeLeft={timeLeft} />
      <StartStopButton startHandler={startHandler} stopHandler={stopHandler} />
    </div>
  );
}

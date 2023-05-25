import React, { useState, useEffect } from "react";
import { workTime, shortBreak, longBreak } from "../timeSettings/timeSettings";
import StartStopButton from "../StartStopButton/StartStopButton";
import CountdownTimer from "../CountdownTimer/CountdownTimer";

export default function CountDown() {
  const [timeLeft, setTimeLeft] = useState(workTime);
  const [isRunning, setIsRunning] = useState(false);
  const [currentSession, setCurrentSession] = useState("workTime");
  const [currentPeriod, setCurrentPeriod] = useState(1);

  const startHandler = () => {
    setIsRunning(true);
  };

  const stopHandler = () => {
    setIsRunning(false);
  };

  const switchToNextSession = () => {
    if (currentSession === "workTime") {
      if (currentPeriod === 3) {
        setCurrentSession("longBreak");
        setTimeLeft(longBreak);
        setCurrentPeriod(1);
        return;
      }
      setCurrentSession("shortBreak");
      setTimeLeft(shortBreak);
    }

    if (currentSession === "shortBreak") {
      setCurrentSession("workTime");
      setTimeLeft(workTime);
      setCurrentPeriod((counter) => counter + 1);
      return;
    }

    if (currentSession === "longBreak") {
      setCurrentSession("workTime");
      setTimeLeft(workTime);
    }
  };

  const decrementTimeLeft = () => {
    if (timeLeft.sec === 0) {
      if (timeLeft.min === 0) {
        switchToNextSession();
        setIsRunning(false);
      } else {
        setTimeLeft({ min: timeLeft.min - 1, sec: 59 });
      }
    } else {
      setTimeLeft({ min: timeLeft.min, sec: timeLeft.sec - 1 });
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      if (isRunning) {
        decrementTimeLeft();
      }
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

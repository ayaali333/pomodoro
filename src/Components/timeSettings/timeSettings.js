export const periods = {
  workTime: {
    min: 0,
    sec: 3,
    id: "workTime",
  },
  shortBreak: {
    min: 0,
    sec: 1,
    id: "shortBreak",
  },
  longBreak: {
    min: 0,
    sec: 2,
    id: "longBreak",
  },
};

export const decrementOneSec = (sec, min, switchToNextSession, setTimeLeft) => {
  if (sec === 0) {
    if (min === 0) {
      switchToNextSession();
    } else {
      setTimeLeft({ min: min - 1, sec: 59 });
    }
  } else {
    setTimeLeft({ min: min, sec: sec - 1 });
  }
};

export const determineNextPeriod = (
  currentSession,
  currentPeriod,
  setCurrentSession,
  setCurrentPeriod,
  setTimeLeft
) => {
  if (currentPeriod === 5) {
    setCurrentSession(periods.longBreak.id);
    setTimeLeft(periods.longBreak);
    return;
  }

  if (currentSession === periods.workTime.id) {
    setCurrentSession(periods.shortBreak.id);
    setTimeLeft(periods.shortBreak);
    return;
  }

  setCurrentSession(periods.workTime.id);
  setTimeLeft(periods.workTime);
};

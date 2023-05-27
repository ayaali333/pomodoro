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

export const decrementOneSec = (
  sec,
  min,
  switchToNextSession,
  setCurrentPeriod
) => {
  if (sec === 0) {
    if (min === 0) {
      switchToNextSession();
    } else {
      setCurrentPeriod((currentPeriod) => {
        return { ...currentPeriod, min: min - 1, sec: 59 };
      });
    }
  } else {
    setCurrentPeriod((currentPeriod) => {
      return { ...currentPeriod, min: min, sec: sec - 1 };
    });
  }
};

export const determineNextPeriod = (currentPeriod, counter) => {
  if (counter === 5) {
    return periods.longBreak;
  }

  if (currentPeriod.id === periods.workTime.id) {
    return periods.shortBreak;
  }

  return periods.workTime;
};

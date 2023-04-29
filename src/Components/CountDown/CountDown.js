import React, {useState,useEffect}from 'react'

export default function CountDown() {
  const workTime = {
    min : 0,
    sec : 10,
    id  : "workTime"
}
  const shortBreak = {
    min : 0,
    sec : 2,
    id  : "shortBreak"
  }
  
  const longBreak = {
    min : 0,
    sec : 5,
    id  : "longBreak"
  }

  const [timeLeft,setTimeLeft] = useState(workTime);
  const [isRunning,setIsRunning] = useState(false);
  const [currentSession, setCurrentSession] = useState('workTime');
  const [currentPeriod,setCurrentPeriod]  = useState(0);

  const startHandler = () => {
    setIsRunning((start) => {
      return true

    })
  }

  const stopHandler = () => {
    setIsRunning((stop) => {
      return false

    })
  }


  useEffect(() => {
    const timer = setInterval(() => {
     if(isRunning){
      if (timeLeft.sec === 0) {
        if (timeLeft.min === 0) {
          if (currentSession === "shortBreak") {
            setCurrentSession('workTime')
            setTimeLeft(workTime);
          } else if (currentSession === "workTime") {
            setCurrentSession('shortBreak')
            setTimeLeft(shortBreak);
            setCurrentPeriod(count => count + 1);
          } else if (currentSession === "longBreak") {
            setCurrentSession('workTime')
            setTimeLeft(workTime);
            setCurrentPeriod(count => count + 1);
          }
          setIsRunning(false);
        } else {
          setTimeLeft({
            min: timeLeft.min - 1,
            sec: 59
          });
        }
      } else {
        setTimeLeft({
          min: timeLeft.min,
          sec: timeLeft.sec - 1
        });
      }
     
    }
  }
    ,1000)
    return  () => clearInterval(timer)

  },[timeLeft,isRunning,currentSession])


  useEffect(() => {
    if (currentPeriod === 3) {
      setCurrentSession('longBreak');
      setTimeLeft(longBreak);
      setCurrentPeriod(0); 

    }
  }, [currentPeriod]);




  return (
    <div>
    <p>
    {timeLeft.min.toString().padStart(2, '0')}:
    {timeLeft.sec.toString().padStart(2, '0')}
  </p>
  <button onClick={startHandler}>Start</button>
  <button onClick={stopHandler}>Stop</button>
  </div>
  )
}

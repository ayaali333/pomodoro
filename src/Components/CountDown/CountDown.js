import React, { useState, useEffect } from 'react'


export default function CountDown() {
    const [timeLeft, setTimeLeft] = useState({ min: 5, sec: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      if (timeLeft.sec === 0) {
        if (timeLeft.min === 0) {
          clearInterval(timer);
        } else {
          setTimeLeft({ min: timeLeft.min - 1, sec: 59 });
        }
      } else {
        setTimeLeft({ min: timeLeft.min, sec: timeLeft.sec - 1 });
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  return (
    <div>
      <p>
        {timeLeft.min.toString().padStart(2, '0')}:
        {timeLeft.sec.toString().padStart(2, '0')}
      </p>
    </div>
  )
}

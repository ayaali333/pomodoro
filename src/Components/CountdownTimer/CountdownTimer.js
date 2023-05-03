import React from 'react';

const CountdownTimer = ({ timeLeft }) => {
  return (
    <p>
      {timeLeft.min.toString().padStart(2, '0')}:
      {timeLeft.sec.toString().padStart(2, '0')}
    </p>
  );
};

export default CountdownTimer;

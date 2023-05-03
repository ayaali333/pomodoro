import React from 'react';

const StartStopButton = ({ startHandler, stopHandler }) => {
  return (
    <>
      <button onClick={startHandler}>Start</button>
      <button onClick={stopHandler}>Stop</button>
    </>
  );
};

export default StartStopButton;

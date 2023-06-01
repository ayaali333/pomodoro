import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCirclePlay, faCircleStop } from "@fortawesome/free-solid-svg-icons";

library.add(faCirclePlay, faCircleStop);

const StartStopButton = ({ startHandler, stopHandler }) => {
  return (
    <div className="d-flex align-items-center justify-content-center mt-5 ">
      <button onClick={startHandler} className="button border-0 fa-6x">
        <FontAwesomeIcon icon={faCirclePlay} />
      </button>
      <button onClick={stopHandler} className="button border-0 fa-6x">
        <FontAwesomeIcon icon={faCircleStop} />
      </button>
    </div>
  );
};

export default StartStopButton;


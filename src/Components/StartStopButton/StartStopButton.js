import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCirclePlay, faCircleStop } from "@fortawesome/free-solid-svg-icons";

library.add(faCirclePlay, faCircleStop);

const StartStopButton = ({ action, id }) => {
  const icon = id === "start" ? faCirclePlay : faCircleStop;
  return (
    <div className="d-flex align-items-center justify-content-center mt-5 ">
      <button onClick={action} className="button border-0 fa-6x">
        <FontAwesomeIcon icon={icon} />
      </button>
    </div>
  );
};

export default StartStopButton;

import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCirclePlay, faCircleStop,faForward} from "@fortawesome/free-solid-svg-icons";

library.add(faCirclePlay, faCircleStop,faForward);

const StartStopButton = ({  action, id }) => {
  let icon = null
  // const icon = id === "start" ? faCirclePlay : faCircleStop;
  if(id === "start"){
    icon = faCirclePlay
  }else if( id === "stop"){
    icon = faCircleStop
  }
  else(icon = faForward )
  return (
    <div className="d-flex align-items-center justify-content-center mt-5 ">
    <button onClick={action} className="button border-0 fa-5x">
        <FontAwesomeIcon icon={icon} />
      </button>
    </div>
  );
};

export default StartStopButton;

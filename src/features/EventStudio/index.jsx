import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import "./style.scss";
import EventEditor from "./EventEditor";
import EventViewDemo from "./EventViewDemo";

EventStudio.propTypes = {};

function EventStudio(props) {
  const [state, setState] = useState();
  return (
    <div className="event-studio">
      <div className="event-studio__title">
        <div
          className="event-studio-icon"
          style={{ backgroundImage: `url(${"/icons/event-studio.svg"})` }}
        ></div>
        <h1>event studio</h1>
      </div>
      <div className="event-studio__content">
        <EventEditor setStateParent={setState} />
        <EventViewDemo data={state} />
      </div>
    </div>
  );
}

export default EventStudio;

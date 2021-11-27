import React from "react";
import PropTypes from "prop-types";
import "./style.scss";
import EventEditor from "./EventEditor";

EventStudio.propTypes = {};

function EventStudio(props) {
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
        <EventEditor />
      </div>
    </div>
  );
}

export default EventStudio;

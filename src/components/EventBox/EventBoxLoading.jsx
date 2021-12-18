import React from "react";
import "./style.scss";

EventBoxLoading.propTypes = {};

function EventBoxLoading(props) {
  return (
    <div className="event-box">
      <div className="event-box__thumbnail">
        <div className="thumbnail">
          <div className="avatar_host" />
        </div>
      </div>
      <div className="event-box__information">
        <h3></h3>
        <div className="description" />
        <div className="detail">
          <p>
            <span className="black">Host: </span>
          </p>
          <p>
            <span className="black">Status: </span>
          </p>
          <p>
            <span className="black">Times: </span>
          </p>
          <p>
            <span>Subscriber: </span>
          </p>
          <div className="subscribers">
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventBoxLoading;

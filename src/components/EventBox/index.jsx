import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

EventBox.propTypes = {};

function EventBox(props) {
  const { data } = props;
  return (
    <>
      {data && (
        <div className="event-box">
          <div className="event-box__thumbnail">
            <div
              className="thumbnail"
              style={{ backgroundImage: `url(${data.thumbnail})` }}
            >
              <div
                className="avatar_host"
                style={{ backgroundImage: `url(${data.avatarHost})` }}
              />
            </div>
          </div>
          <div className="event-box__information">
            <h3 className="title">{data.title}</h3>
            <p className="description">{data.description}</p>
            <div className="detail">
              <p>
                <span className="black">Host: </span> {data.host}
              </p>
              <p>
                <span className="black">Status: </span>
                {data.status}
              </p>
              <p>
                <span className="black">Times: </span>
                {data.time}
              </p>
              <p>
                <span>Subscriber: </span>
              </p>
              <div className="subscribers">
                {data.subscribers.map((item, index) => {
                  return (
                    <div
                      key={index}
                      style={{ backgroundImage: `url(${item.avatar})` }}
                    ></div>
                  );
                })}
                <div className="total">
                  <p>{data.totalSubscriber - 4}+</p>
                </div>
              </div>
            </div>
            <button className="button error">Unsubscribe</button>
          </div>
        </div>
      )}
    </>
  );
}

export default EventBox;

import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

EventBox.propTypes = {};

function EventBox(props) {
  const { data } = props;
  let statusString = "";
  const statusParse = () => {
    const timeBegin = Date.parse(data.timeBegin);
    const timeEnd = Date.parse(data.timeEnd);
    const timeNow = Date.now();
    if (timeBegin > timeNow) {
      statusString = "Sắp diễn ra";
      return;
    }
    if (timeEnd < timeNow) {
      statusString = "Đã diễn ra";
      return;
    }
    if (timeBegin <= timeNow && timeNow <= timeEnd) {
      statusString = "Đang diễn ra";
      return;
    }
  };
  statusParse();
  return (
    <>
      {data && (
        <div className="event-box">
          <div className="event-box__thumbnail">
            <div
              className="thumbnail"
              style={{ backgroundImage: `url(${data.standee})` }}
            >
              <div
                className="avatar_host"
                style={{ backgroundImage: `url(${data.avatarHost})` }}
              />
            </div>
          </div>
          <div className="event-box__information">
            <h3 className="title">{data.name}</h3>
            <p className="description">{data.description}</p>
            <div className="detail">
              <p>
                <span className="black">Host: </span> {data.nameHost}
              </p>
              <p>
                <span className="black">Status: </span>
                {statusString}
              </p>
              <p>
                <span className="black">Times: </span>
                {data.timeBegin
                  .substring(0, 16)
                  .replaceAll("-", "/")
                  .replaceAll("T", " ") +
                  " - " +
                  data.timeEnd
                    .substring(0, 16)
                    .replaceAll("-", "/")
                    .replaceAll("T", " ")}
              </p>
              <p>
                <span>Subscriber: </span>
              </p>
              <div className="subscribers">
                {data.favorites.map((item, index) => {
                  return (
                    <div
                      key={index}
                      style={{ backgroundImage: `url(${item.avatar})` }}
                    ></div>
                  );
                })}
                <div className="total">
                  <p>{data.favorites.length - 4}+</p>
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

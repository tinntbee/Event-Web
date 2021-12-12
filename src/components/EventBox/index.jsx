import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import "./style.scss";
import axiosClient from "../../api/axiosClient";

EventBox.propTypes = {};

function EventBox(props) {
  const history = useHistory();
  const user = useSelector((state) => state.users.user);
  const [data, setData] = useState(props.data);
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

  const handleUnSubscribe = async () => {
    const url = "event/unRegisterEvent/" + data._id;
    await axiosClient
      .post(url)
      .then((res) => setData({ ...data, isFavorites: res.isFavorites }));
  };
  const handleSubscribe = async () => {
    const url = "event/registerEvent/" + data._id;
    await axiosClient
      .post(url)
      .then((res) => setData({ ...data, isFavorites: res.isFavorites }));
  };
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
                style={{ backgroundImage: `url(${data.host.avatar})` }}
              />
            </div>
          </div>
          <div className="event-box__information">
            <h3
              className="title"
              onClick={() => {
                history.push("/event/" + data._id);
              }}
            >
              {data.name}
            </h3>
            <div
              className="description"
              dangerouslySetInnerHTML={{ __html: data.description }}
            />
            <div className="detail">
              <p>
                <span className="black">Host: </span>{" "}
                {data.host.nickname ? data.host.nickname : data.host.fullName}
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
                {data.favorites.slice(0, 4).map((item, index) => {
                  return (
                    <div
                      key={index}
                      style={{ backgroundImage: `url(${item.avatar})` }}
                    ></div>
                  );
                })}
                {data.favorites.length > 4 && (
                  <div className="total">
                    <p>{data.favorites.length - 4}+</p>
                  </div>
                )}
              </div>
            </div>
            {user &&
              data.isFavorites &&
              (data.isFavorites ? (
                <button className="button error" onClick={handleUnSubscribe}>
                  Hủy đăng kí
                </button>
              ) : (
                <button className="button primary" onClick={handleSubscribe}>
                  Đăng kí
                </button>
              ))}
          </div>
        </div>
      )}
    </>
  );
}

export default EventBox;

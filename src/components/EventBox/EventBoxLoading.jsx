import { Skeleton } from "@mui/material";
import React from "react";
import "./style.scss";

EventBoxLoading.propTypes = {};

function EventBoxLoading(props) {
  return (
    <div className="event-box">
      <div className="event-box__thumbnail">
        <div className="thumbnail">
          <Skeleton variant="rectangular" width={"100%"} height={"100%"} />
          <div className="avatar_host">
            <Skeleton variant="circular" width={"100%"} height={"100%"} />
          </div>
        </div>
      </div>
      <div className="event-box__information">
        <Skeleton variant="text" height={50} />
        <div className="description">
          <Skeleton variant="text" height={100} />
        </div>
        <div className="detail">
          <p>
            <Skeleton variant="text" height={50} />
          </p>
          <p>
            <Skeleton variant="text" height={50} />
          </p>
          <p>
            <Skeleton variant="text" height={50} />
          </p>
          <p></p>
          <div className="subscribers">
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventBoxLoading;

import React from "react";
import PropTypes from "prop-types";
import "./style.scss";
import FroalaEditorView from "react-froala-wysiwyg/FroalaEditorView";

EventViewDemo.propTypes = {};

function EventViewDemo(props) {
  const { data } = props;
  console.log({ data });
  return (
    <div className="event-view-demo">
      <div className="event-view-demo__title">
        <p>VIEW DEMO</p>
        <div />
      </div>
      <div className="event-view-demo__content">
        <div className="left">
          <div
            className="background"
            style={{ backgroundImage: `url(${data && data.background})` }}
          />
          <div className="name">
            <p>{data && data.name}</p>
            <button>Register</button>
          </div>
          <div className="information">
            <p>Đang diễn ra</p>
            <div />
            <p>
              {data &&
                data.dayBegin.replaceAll("-", "/").replaceAll("T", " ") +
                  " - " +
                  data.dayEnd.replaceAll("-", "/").replaceAll("T", " ")}
            </p>
            <div />
            <p>Sinh viên trường Đại học Sư phạm Kỹ thuật Tp.HCM</p>
          </div>
          <div className="description">
            <FroalaEditorView model={data && data.description} />
          </div>
        </div>
        <div className="right">
          <div
            className="standee"
            style={{ backgroundImage: `url(${data && data.standee})` }}
          />
        </div>
      </div>
    </div>
  );
}

export default EventViewDemo;

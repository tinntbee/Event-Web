import React from "react";
import PropTypes from "prop-types";
import "./style.scss";
import FroalaEditorView from "react-froala-wysiwyg/FroalaEditorView";

EventViewDemo.propTypes = {};

function EventViewDemo(props) {
  const { state } = props;
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
            style={{
              backgroundImage: `url(${state && state.file.background.url})`,
            }}
          />
          <div className="name">
            <p>{state && state.data.name}</p>
            <button>Register</button>
          </div>
          <div className="information">
            <p>Đang diễn ra</p>
            <div />
            <p>
              {state &&
                state.data.dayBegin.replaceAll("-", "/").replaceAll("T", " ") +
                  " - " +
                  state.data.dayEnd.replaceAll("-", "/").replaceAll("T", " ")}
            </p>
            <div />
            <p>Sinh viên trường Đại học Sư phạm Kỹ thuật Tp.HCM</p>
          </div>
          <div className="description">
            <FroalaEditorView model={state.data && state.data.description} />
          </div>
        </div>
        <div className="right">
          <div
            className="standee"
            style={{
              backgroundImage: `url(${state && state.file.standee.url})`,
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default EventViewDemo;

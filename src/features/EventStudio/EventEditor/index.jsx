import React, { useState } from "react";
import PropTypes from "prop-types";
import "./style.scss";
import GroupFileInput from "../../../components/GroupFileInput";

EventEditor.propTypes = {};

function EventEditor(props) {
  const [state, setState] = useState({ data: {}, part: 0 });
  const handleNextClick = () => {
    setState({ ...state, part: state.part - 1 });
  };
  const handlePreviousClick = () => {
    setState({ ...state, part: state.part + 1 });
  };
  return (
    <div className="event-editor">
      <div className="event-editor__title">
        <input type="text" placeholder="Event's name" />
      </div>
      <div className="event-editor__content">
        <div
          className="progress"
          style={{ "--value": ((1 - state.part) / 3) * 100 + "%" }}
        >
          <p>{state.part === 0 ? <b>1. Tải lên file</b> : "1. Tải lên file"}</p>
          <p>
            {state.part === -1 ? (
              <b>2. Thông tin chi tiết</b>
            ) : (
              "2. Thông tin chi tiết"
            )}
          </p>
          <p>
            {state.part === -2 ? <b>3. Thêm Minigame</b> : "3. Thêm Minigame"}
          </p>
        </div>
        <div className="main-content">
          <div className="editor-content" style={{ "--position": state.part }}>
            <div className="part part-upload-file">
              <div className="cover">
                <GroupFileInput name="Cover" />
                <div
                  className="cover-view"
                  style={{
                    backgroundImage: `url(${"https://scontent.fvca1-3.fna.fbcdn.net/v/t39.30808-6/257531046_3108924536004680_2313253056931116257_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=e3f864&_nc_ohc=gzZRSlPJDWEAX_BQdA5&_nc_ht=scontent.fvca1-3.fna&oh=b68aa1081a8bd0780daa1c29801c1db1&oe=61A50C2C"})`,
                  }}
                />
              </div>
              <div className="standee">
                <GroupFileInput name="Standee" />
                <div
                  className="standee"
                  style={{
                    backgroundImage: `url(${"https://scontent.fvca1-4.fna.fbcdn.net/v/t39.30808-6/257464339_3109708449259622_2410193694200403801_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=0debeb&_nc_ohc=WXUGwhTu01MAX-NKfJN&tn=j7LpXkDUmE8O4tks&_nc_ht=scontent.fvca1-4.fna&oh=9b37e6213e7086ee6e5aeb72135cf73c&oe=61A6AFB1"})`,
                  }}
                ></div>
              </div>
            </div>
            <div className="part part-description"></div>
            <div className="part part-mini-game"></div>
          </div>
        </div>
        <div className="control-footer">
          {state.part !== 0 && (
            <button className="btn" onClick={handlePreviousClick}>
              Phía trước
            </button>
          )}
          <button className="btn" onClick={handleNextClick}>
            Tiếp theo
          </button>
        </div>
      </div>
    </div>
  );
}

export default EventEditor;

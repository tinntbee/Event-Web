import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

GroupFileInput.propTypes = {};

function GroupFileInput(props) {
  return (
    <div className="group-file-input">
      <p className="group-name">{props.name}</p>
      <div className="input-file">
        <p className="file-name">Tải lên</p>
        <div>
          <p>Upload</p>
          <input type="file" />
        </div>
      </div>
    </div>
  );
}

export default GroupFileInput;

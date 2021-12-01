import React, { useState } from "react";
import PropTypes from "prop-types";
import "./style.scss";

GroupFileInput.propTypes = {};

function GroupFileInput(props) {
  const { onChange, name } = props;
  const [state, setState] = useState({ fileName: "Tải lên" });
  const handleOnChange = (e) => {
    setState({ ...state, fileName: e.target.files[0].name });
    var file = e.target.files[0];
    var url = URL.createObjectURL(file);
    console.log({ url });
    onChange({ url: url, file: file });
    return () => URL.revokeObjectURL(url);
  };
  return (
    <div className="group-file-input">
      <p className="group-name">{name}</p>
      <div className="input-file">
        <p className="file-name">{state.fileName}</p>
        <div>
          <p>Upload</p>
          <input type="file" onChange={handleOnChange} />
        </div>
      </div>
    </div>
  );
}

export default GroupFileInput;

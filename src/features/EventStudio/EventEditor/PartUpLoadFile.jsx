import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import GroupFileInput from "../../../components/GroupFileInput";

PartUpLoadFile.propTypes = {};

function PartUpLoadFile(props) {
  const { state, setStateParent } = props;
  const handleBackgroundOnChange = (file) => {
    setStateParent({
      ...state,
      file: { ...state.file, background: { file: file.file, url: file.url } },
    });
  };
  const handleStandeeOnChange = (file) => {
    setStateParent({
      ...state,
      file: { ...state.file, standee: { file: file.file, url: file.url } },
    });
  };
  return (
    <div className="part part-upload-file">
      <div className="cover">
        <GroupFileInput name="Cover" onChange={handleBackgroundOnChange} />
        <div
          className="cover-view"
          style={{
            backgroundImage: `url(${state.file.background.url})`,
          }}
        />
      </div>
      <div className="standee">
        <GroupFileInput name="Standee" onChange={handleStandeeOnChange} />
        <div
          className="standee"
          style={{
            backgroundImage: `url(${state.file.standee.url})`,
          }}
        ></div>
      </div>
    </div>
  );
}

export default PartUpLoadFile;

import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import GroupFileInput from "../../../components/GroupFileInput";

PartUpLoadFile.propTypes = {};

function PartUpLoadFile(props) {
  const { data } = props;
  const handleBackgroundOnChange = (file) => {
    props.handleBackgroundOnChange(file);
  };
  const handleStandeeOnChange = (file) => {
    props.handleStandeeOnChange(file);
  };
  return (
    <div className="part part-upload-file">
      <div className="cover">
        <GroupFileInput name="Cover" onChange={handleBackgroundOnChange} />
        <div
          className="cover-view"
          style={{
            backgroundImage: `url(${data.background})`,
          }}
        />
      </div>
      <div className="standee">
        <GroupFileInput name="Standee" onChange={handleStandeeOnChange} />
        <div
          className="standee"
          style={{
            backgroundImage: `url(${data.standee})`,
          }}
        ></div>
      </div>
    </div>
  );
}

export default PartUpLoadFile;

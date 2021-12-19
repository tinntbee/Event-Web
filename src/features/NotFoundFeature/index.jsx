import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

NotFoundFeature.propTypes = {};

function NotFoundFeature(props) {
  return (
    <div
      className="not-found"
      style={{ backgroundImage: `url("../../images/404 Page Template.png")` }}
    ></div>
  );
}

export default NotFoundFeature;

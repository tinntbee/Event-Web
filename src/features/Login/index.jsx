import React from "react";
import PropTypes from "prop-types";
import "./style.css";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

LoginFeature.propTypes = {};

function LoginFeature(props) {
  const history = useHistory();
  const handleClick = () => {
    history.push("/game-studio");
  };
  return (
    <div>
      hELLO login nè
      <button onClick={handleClick}>Đi đến game studio</button>
    </div>
  );
}

export default LoginFeature;

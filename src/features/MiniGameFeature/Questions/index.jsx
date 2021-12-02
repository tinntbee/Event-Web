import React from "react";
import PropTypes from "prop-types";
import "./style.scss";
import { CustomButton } from "../../GameStudio/Questions/style";

Questions.propTypes = {};

function Questions(props) {
  const { listQA, setStateParent, state } = props;
  return (
    <div className="questions">
      {listQA.map((item, index) => {
        return (
          <CustomButton
            size="small"
            variant={state.rowFocus === index ? "contained" : undefined}
            color={state.rowFocus === index ? "primary" : undefined}
            onClick={() => {
              setStateParent({ ...state, rowFocus: index });
            }}
          >
            {"Câu " + (index + 1)}
          </CustomButton>
        );
      })}
    </div>
  );
}

export default Questions;

import React from "react";
import PropTypes from "prop-types";
import ButtonAnswer from "./ButtonAnswer";

AnswerRow.propTypes = {};

function AnswerRow(props) {
  const { answers, rowNumber, grid, state, setStateParent } = props;
  return (
    <div className="answer-row">
      {answers &&
        answers.answers.map((item, index) => {
          return (
            <ButtonAnswer
              key={index}
              rowNumber={rowNumber}
              columnNumber={index}
              isDisabled={index < answers.aBegin || index > answers.aEnd}
              state={state}
              setStateParent={setStateParent}
              value={item}
            />
          );
        })}
    </div>
  );
}

export default AnswerRow;

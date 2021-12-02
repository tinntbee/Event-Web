import React from "react";
import PropTypes from "prop-types";
import "./style.scss";
import AnswerRow from "./AnswerRow";

Answers.propTypes = {};

function Answers(props) {
  const { listQA, grid, state, setStateParent } = props;
  return (
    <div className="answers">
      {listQA &&
        listQA.map((item, index) => {
          return (
            <AnswerRow
              answers={item}
              rowNumber={index}
              grid={grid}
              key={index}
              state={state}
              setStateParent={setStateParent}
            />
          );
        })}
    </div>
  );
}

export default Answers;

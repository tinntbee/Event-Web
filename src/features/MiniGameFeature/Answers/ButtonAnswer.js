import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

ButtonAnswer.propTypes = {};

function ButtonAnswer(props) {
  const { rowNumber, columnNumber, isDisabled, state, setStateParent, value } =
    props;
  const handleOnChange = (event) => {
    let text = event.target.value
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[đĐ]/g, "D")
      .replace(/([^0-9a-z-\s])/g, "")
      .replace(/(\s+)/g, "-")
      .replace(/-+/g, "-")
      .replace(/^-+|-+$/g, "");
    if (text.length > 1) {
      text = text[text.length - 1];
    }
    let newListQA = [...state.listQA];
    newListQA[rowNumber].answers[columnNumber] = text;
    setStateParent({ ...state, listQA: [...newListQA] });
  };
  const handleClick = ()=>{
    setStateParent({...state, rowFocus: rowNumber})
  }
  return (
    <div
      className={classNames({
        "button-answer": true,
        isFocus: state.rowFocus === rowNumber,
        disabled: isDisabled,
        key: columnNumber === state.columnKey,
      })}
      onClick={handleClick}
    >
      <input
        className={classNames({
          answer: true,
          disabled: isDisabled,
        })}
        type="text"
        autoComplete="off"
        value={value}
        onChange={handleOnChange}
      />
    </div>
  );
}

export default ButtonAnswer;

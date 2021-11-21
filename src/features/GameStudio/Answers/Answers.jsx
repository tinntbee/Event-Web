import { Close } from "@material-ui/icons";
import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  changeRowFocus,
  changeValueAnswerBox,
  removeBoxOnRow,
} from "../../../redux/actions/miniGame";
import { disabledAnswerBox } from "../../../redux/actions/miniGame";
import { Answer, AnswerBox, RemoveButton } from "./style";

ButtonAnswer.propTypes = {};

function ButtonAnswer(props) {
  const { isDisabled, columnNumber, rowNumber } = props;
  const dispatch = useDispatch();
  const grid = useSelector((state) => state.miniGame.miniGame.grid);
  const rowFocus = useSelector((state) => state.miniGame.miniGame.rowFocus);
  const currentQA = useSelector(
    (state) => state.miniGame.miniGame.listQA[rowNumber]
  );
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
    dispatch(
      changeValueAnswerBox({
        rowNumber: rowNumber,
        columnNumber: columnNumber,
        value: text,
      })
    );
  };

  const handleClick = () => {
    dispatch(changeRowFocus({ rowFocus: rowNumber }));
  };

  const handleRemoveClick = () => {
    let newABegin = currentQA.aBegin;
    let newAEnd = currentQA.aEnd;
    if (columnNumber <= grid.columns / 2) {
      newABegin = columnNumber + 1;
    } else {
      newAEnd = columnNumber - 1;
    }
    dispatch(
      removeBoxOnRow({ rowNumber: rowNumber, aBegin: newABegin, aEnd: newAEnd })
    );
  };

  const handleAnswerBoxClick = () => {
    let newAnswer = { ...currentQA };
    if (columnNumber < newAnswer.aBegin) {
      newAnswer.aBegin = columnNumber;
    } else {
      newAnswer.aEnd = columnNumber;
    }
    dispatch(disabledAnswerBox({ rowNumber: rowNumber, QA: newAnswer }));
  };
  return (
    <AnswerBox
      disabled={isDisabled}
      onClick={isDisabled ? handleAnswerBoxClick : undefined}
      isFocus={rowFocus === rowNumber}
    >
      <Answer
        type="text"
        autocomplete="off"
        onChange={handleOnChange}
        value={currentQA.answers[columnNumber]}
        disabled={isDisabled}
        onClick={handleClick}
      />
      {!isDisabled && (
        <RemoveButton
          size="small"
          color="secondary"
          onClick={handleRemoveClick}
        >
          <Close style={{ fontSize: 15 }} />
        </RemoveButton>
      )}
    </AnswerBox>
  );
}

export default ButtonAnswer;

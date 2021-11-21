import React from "react";
import PropTypes from "prop-types";
import {
  RemoveButton,
  CustomButton,
  ActionQuestionButton,
  ButtonContainer,
  MoveUpButton,
  MoveDownButton,
  AddNewUpButton,
} from "./style";
import { useDispatch } from "react-redux";
import {
  removeRow,
  changeRowFocus,
  addNewUpRow,
  moveUpRow,
  moveDownRow,
} from "../../../redux/actions/miniGame";

ButtonQuestion.propTypes = {};

function ButtonQuestion(props) {
  const { rowNumber, active, canMoveUp, canMoveDown } = props;

  const dispatch = useDispatch();

  const handleRemoveClick = () => {
    dispatch(removeRow({ rowNumber: rowNumber }));
  };

  const handleClick = () => {
    dispatch(changeRowFocus({ rowFocus: rowNumber }));
  };

  const handleAddNewUpClick = () => {
    dispatch(addNewUpRow());
  };

  const handleMoveUpClick = () => {
    dispatch(moveUpRow());
  };

  const handleMoveDownClick = () => {
    dispatch(moveDownRow());
  };

  return (
    <ButtonContainer>
      <CustomButton
        onClick={handleClick}
        size="small"
        variant={active ? "contained" : undefined}
        color={active ? "primary" : undefined}
      >
        {"Question " + (rowNumber + 1)}
      </CustomButton>

      {active && (
        <ActionQuestionButton>
          <AddNewUpButton onClick={handleAddNewUpClick} />
          {canMoveUp && <MoveUpButton onClick={handleMoveUpClick} />}
          {canMoveDown && <MoveDownButton onClick={handleMoveDownClick} />}
          <RemoveButton onClick={handleRemoveClick} />
        </ActionQuestionButton>
      )}
    </ButtonContainer>
  );
}

export default ButtonQuestion;

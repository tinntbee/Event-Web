import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import ButtonQuestion from "./ButtonQuestion";
import { AddButton, Body, Header, Questions } from "./style";
import { pushNewQA } from "../../../redux/actions/miniGame";

QuestionControl.propTypes = {};

function QuestionControl(props) {
  const dispatch = useDispatch();
  const listQA = useSelector((state) => state.miniGame.miniGame.listQA);
  const rowFocus = useSelector((state) => state.miniGame.miniGame.rowFocus);

  const handleClickNewQuestionBottom = () => {
    dispatch(pushNewQA("something"));
  };

  return (
    <Questions>
      <Header>Câu hỏi</Header>
      <Body>
        {listQA.map((item, index) => {
          return (
            <ButtonQuestion
              key={index}
              rowNumber={index}
              active={index === rowFocus}
              canMoveUp={index + 1 !== 1}
              canMoveDown={index + 1 !== listQA.length}
            />
          );
        })}
        <AddButton onClick={handleClickNewQuestionBottom} />
      </Body>
    </Questions>
  );
}

export default QuestionControl;

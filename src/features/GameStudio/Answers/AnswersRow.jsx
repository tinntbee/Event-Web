import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ButtonAnswer from "./Answers";
import { AnswersRowContainer } from "./style";

AnswersRow.propTypes = {};

function AnswersRow(props) {
  const dispatch = useDispatch();
  const { rowNumber } = props;
  const data = useSelector(
    (state) => state.miniGame.miniGame.listQA[rowNumber]
  );
  
  return (
    <AnswersRowContainer>
      {data.answers.map((item, index) => {
        return (
          <ButtonAnswer
            key={index}
            rowNumber={rowNumber}
            columnNumber={index}
            isDisabled={index < data.aBegin || index > data.aEnd}
          />
        );
      })}
    </AnswersRowContainer>
  );
}

export default AnswersRow;

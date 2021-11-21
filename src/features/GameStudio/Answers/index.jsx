import React from "react";
import AnswersRow from "./AnswersRow";
import HeaderContainer from "./HeaderContainer";
import { AnswersContainer } from "./style";

AnswersViewer.propTypes = {};

function AnswersViewer(props) {
  const { listQA, grid } = props;
  return (
    <AnswersContainer>
      <HeaderContainer/>
      {listQA.map((item, index) => {
        return <AnswersRow rowNumber={index} grid={grid} key={index} />;
      })}
    </AnswersContainer>
  );
}

export default AnswersViewer;

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getMiniGame, pushNewQA } from "../../redux/actions/miniGame";
import AnswersViewer from "./Answers";
import QuestionEditor from "./QuestionEditor";
import QuestionControl from "./Questions";
import {
  Body,
  Container,
  CustomButton,
  Description,
  Header,
  IconGameStudio,
  Title,
} from "./style";

GameStudio.propTypes = {};

function GameStudio(props) {
  const { _id } = props.match.params;
  const dispatch = useDispatch();
  const grid = useSelector((state) => state.grid);
  const state = useSelector((state) => state.miniGame.miniGame);
  const rowFocus = useSelector((state) => state.rowFocus);
  useEffect(() => {
    dispatch(getMiniGame(_id));
  }, []);

  return (
    <Container>
      <Title>
        <IconGameStudio />
        <h1>Game studio</h1>
      </Title>
      <Header>
        <div>
          <h1>MINIGAME: TALKSHOW CLOUD COMPUTING</h1>
          <Description>
            <span>Đang diễn ra</span>
            <div />
            <span>22/11 - 12/12/2021</span>
            <div />
            <span>
              Sinh viên Khoa Công nghệ Thông tin - Đại học Sư phạm Kỹ thuật
              TP.HCM
            </span>
          </Description>
        </div>
        <div>
          <CustomButton>Clear</CustomButton>
          <CustomButton variant="contained" color="primary">
            Save
          </CustomButton>
        </div>
      </Header>
      <Body>
        <QuestionControl listQA={state.listQA} questionActive={rowFocus} />
        <AnswersViewer listQA={state.listQA} grid={state.grid} />
        <QuestionEditor />
      </Body>
    </Container>
  );
}

export default GameStudio;

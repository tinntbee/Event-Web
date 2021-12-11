import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import axiosClient from "../../api/axiosClient";
import { getMiniGame, pushNewQA } from "../../redux/actions/miniGame";
import AnswersViewer from "./Answers";
import QuestionEditor from "./QuestionEditor";
import QuestionControl from "./Questions";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import {
  Body,
  Container,
  CustomButton,
  Description,
  Header,
  IconGameStudio,
  Title,
} from "./style";
import { snackBarActions } from "../../redux/actions/snackBarActions";
import { getKey } from "../../utils/miniGame";

GameStudio.propTypes = {};

function GameStudio(props) {
  const { _id } = props.match.params;
  const loadingMiniGame = useSelector((state) => state.miniGame.loading);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const grid = useSelector((state) => state.grid);
  const state = useSelector((state) => state.miniGame.miniGame);
  const rowFocus = useSelector((state) => state.rowFocus);
  useEffect(() => {
    dispatch(getMiniGame(_id));
  }, []);

  const handleSave = async () => {
    setLoading(true);
    const req = {
      _id: state._id,
      gridRow: state.grid.rows,
      gridColumn: state.grid.columns,
      listQA: state.listQA,
      columnKey: state.columnKey,
      key: getKey(state.listQA, state.columnKey),
    };
    const url = "/minigame/edit";
    const res = await axiosClient.put(url, req);
    setLoading(false);
    dispatch(
      snackBarActions.open({
        message: "Lưu các thay đổi thành công",
        variant: "success",
      })
    );
  };

  return (
    <Container>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loadingMiniGame || loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
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
          <CustomButton
            variant="contained"
            color="primary"
            onClick={handleSave}
          >
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

import { call, put, takeLatest, delay } from "redux-saga/effects";
import { miniGameAPI } from "../../api/miniGameAPI";
import { answersRaw } from "../../utils/miniGame";
const apiUrl = "blabla";

const miniGameDefault = {
  grid: { rows: 7, columns: 8 },
  listQA: [
    {
      questionContent: "something",
      questionImageUrl: "url",
      aBegin: 1,
      aEnd: 5,
      answers: ["", "H", "E", "L", "L", "0", "", ""],
    },
  ],
  columnKey: 0,
  rowFocus: 0,
};

function getApi() {
  //call api here
  return miniGameDefault;
}

function* fetchMiniGame(action) {
  try {
    const data = yield miniGameAPI.getMiniGame(action.payload);
    const listQA = [];

    if (data.listQA) {
      data.listQA.forEach((element) => {
        listQA.push({
          questionContent: element.questionContent,
          questionImageUrl: element.questionImageUrl,
          aBegin: element.aBegin,
          aEnd: element.aEnd,
          answers: answersRaw(
            element.aBegin,
            element.aEnd,
            element.answer,
            data.gridColumn
          ),
        });
      });
    }
    const miniGame = {
      _id: data._id,
      idEvent: data.idEvent,
      grid: { rows: data.gridRow, columns: data.gridColumn },
      listQA: listQA,
      columnKey: data.columnKey,
      rowFocus: listQA.length > 0 ? 0 : -1,
    };
    yield put({ type: "GET_MINIGAME_SUCCESS", miniGame: miniGame });
  } catch (e) {
    yield put({ type: "GET_MINIGAME_FAILED", message: e.message });
  }
}

function* miniGameSaga() {
  yield takeLatest("GET_MINIGAME_REQUESTED", fetchMiniGame);
}

export default miniGameSaga;

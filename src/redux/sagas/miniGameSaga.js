import { call, put, takeLatest, delay } from "redux-saga/effects";
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
    {
      questionContent: "something",
      questionImageUrl: "url",
      aBegin: 1,
      aEnd: 4,
      answers: ["", "", "", "", "", "", "", ""],
    },
    {
      questionContent: "something",
      questionImageUrl: "url",
      aBegin: 1,
      aEnd: 4,
      answers: ["", "", "", "", "", "", "", ""],
    },
    {
      questionContent: "something",
      questionImageUrl: "url",
      aBegin: 1,
      aEnd: 4,
      answers: ["", "", "", "", "", "", "", ""],
    },
    {
      questionContent: "something",
      questionImageUrl: "url",
      aBegin: 1,
      aEnd: 4,
      answers: ["", "", "", "", "", "", "", ""],
    },
    {
      questionContent: "something",
      questionImageUrl: "url",
      aBegin: 1,
      aEnd: 4,
      answers: ["", "", "", "", "", "", "", ""],
    },
    {
      questionContent: "something",
      questionImageUrl: "url",
      aBegin: 1,
      aEnd: 4,
      answers: ["", "", "", "", "", "", "", ""],
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
    const miniGame = yield call(getApi);
    yield delay(1000);
    yield put({ type: "GET_MINIGAME_SUCCESS", miniGame: miniGame });
  } catch (e) {
    yield put({ type: "GET_MINIGAME_FAILED", message: e.message });
  }
}

function* miniGameSaga() {
  yield takeLatest("GET_MINIGAME_REQUESTED", fetchMiniGame);
}

export default miniGameSaga;

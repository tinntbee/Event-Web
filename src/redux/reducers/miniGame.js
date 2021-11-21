import { answerInitialization } from "../../utils/miniGame";
import * as type from "../types";

const miniGameDefault = {
  grid: { rows: 7, columns: 10 },
  listQA: [
    {
      questionContent: "something",
      questionImageUrl: "url",
      aBegin: 1,
      aEnd: 4,
      answers: ["", "A", "A", "A", "A", "", "", ""],
    },
  ],
  columnKey: 0,
  rowFocus: 0,
};

const initialState = {
  miniGame: miniGameDefault,
  loading: false,
  error: null,
};

export default function miniGame(state = initialState, action) {
  let newListQA;
  let newQA;
  switch (action.type) {
    case type.GET_MINIGAME_REQUESTED:
      return {
        ...state,
        loading: true,
      };

    case type.GET_MINIGAME_SUCCESS:
      return {
        ...state,
        miniGame: action.miniGame,
        loading: false,
      };

    case type.GET_MINIGAME_FAILED:
      return {
        ...state,
        loading: false,
        error: action.message,
      };

    case type.PUSH_NEWQA:
      if (state.miniGame.grid.rows >= 10) return state;
      newQA = {
        questionContent: "Question here",
        questionImageUrl: "http://something",
        aBegin: 0,
        aEnd: -1,
        answers: answerInitialization(state.miniGame.grid.columns),
      };
      newListQA = [...state.miniGame.listQA];
      newListQA.push(newQA);
      return {
        ...state,
        miniGame: {
          ...state.miniGame,
          grid: { ...state.miniGame.grid, rows: state.miniGame.grid.rows + 1 },
          listQA: [...newListQA],
        },
      };

    case type.DISABLED_ANSWERBOX:
      let newState = { ...state };
      newState.miniGame.listQA[action.payload.rowNumber] = action.payload.QA;
      return { ...state, miniGame: { ...newState.miniGame } };

    case type.REMOVE_BOX_ON_ROW:
      newListQA = [...state.miniGame.listQA];
      newListQA[action.payload.rowNumber].aBegin = action.payload.aBegin;
      newListQA[action.payload.rowNumber].aEnd = action.payload.aEnd;
      return {
        ...state,
        miniGame: { ...state.miniGame },
      };

    case type.MODIFY_GRID_COLUMN:
      if (action.payload.columns >= 15) return state;
      let listQA = [...state.miniGame.listQA];
      if (parseInt(action.payload.columns) < state.miniGame.grid.columns) {
        listQA.forEach((item) => {
          if (item.aEnd >= action.payload.columns - 1) {
            item.aEnd = action.payload.columns - 1;
          }
          item.answers = item.answers.slice(0, action.payload.columns);
        });
      } else {
        listQA.forEach((item) => {
          item.answers = item.answers.concat(
            answerInitialization(
              action.payload.columns - state.miniGame.grid.columns
            )
          );
        });
      }
      return {
        ...state,
        miniGame: {
          ...state.miniGame,
          grid: { ...state.miniGame.grid, columns: action.payload.columns },
          listQA: [...listQA],
        },
      };

    case type.CHANGE_ROW_FOCUS:
      return {
        ...state,
        miniGame: { ...state.miniGame, rowFocus: action.payload.rowFocus },
      };

    case type.REMOVE_ROW:
      newListQA = [...state.miniGame.listQA];
      newListQA.splice(state.miniGame.rowFocus, 1);
      return {
        ...state,
        miniGame: {
          ...state.miniGame,
          grid: { ...state.miniGame.grid, rows: state.miniGame.grid.rows - 1 },
          rowFocus: -1,
          listQA: newListQA,
        },
      };

    case type.ADD_NEW_UP_ROW:
      if (state.miniGame.grid.rows >= 10) return state;
      newListQA = [...state.miniGame.listQA];
      newQA = {
        questionContent: "Question here",
        questionImageUrl: "http://something",
        aBegin: 0,
        aEnd: -1,
        answers: answerInitialization(state.miniGame.grid.columns),
      };
      newListQA.splice(state.miniGame.rowFocus, 0, newQA);
      return {
        ...state,
        miniGame: {
          ...state.miniGame,
          grid: { ...state.miniGame.grid, rows: state.miniGame.grid.rows + 1 },
          listQA: [...newListQA],
        },
      };

    case type.MOVE_UP_ROW:
      newListQA = [...state.miniGame.listQA];
      newListQA.splice(
        state.miniGame.rowFocus - 1,
        0,
        newListQA.splice(state.miniGame.rowFocus, 1)[0]
      );
      console.log(newListQA);
      return {
        ...state,
        miniGame: {
          ...state.miniGame,
          rowFocus: state.miniGame.rowFocus - 1,
          listQA: [...newListQA],
        },
      };

    case type.MOVE_DOWN_ROW:
      newListQA = [...state.miniGame.listQA];
      newListQA.splice(
        state.miniGame.rowFocus + 1,
        0,
        newListQA.splice(state.miniGame.rowFocus, 1)[0]
      );
      return {
        ...state,
        miniGame: {
          ...state.miniGame,
          rowFocus: state.miniGame.rowFocus + 1,
          listQA: [...newListQA],
        },
      };

    case type.CHANGE_VALUE_ANSWER_BOX:
      newListQA = [...state.miniGame.listQA];
      newListQA[action.payload.rowNumber].answers[action.payload.columnNumber] =
        action.payload.value;
      return {
        ...state,
        miniGame: {
          ...state.miniGame,
          listQA: [...newListQA],
        },
      };

    case type.CHANGE_QUESTION_IMAGE_URL:
      newListQA = [...state.miniGame.listQA];
      newListQA[state.miniGame.rowFocus].questionImageUrl = action.payload;
      return {
        ...state,
        miniGame: {
          ...state.miniGame,
          listQA: [...newListQA],
        },
      };

    case type.CHANGE_QUESTION_CONTENT:
      newListQA = [...state.miniGame.listQA];
      newListQA[state.miniGame.rowFocus].questionContent = action.payload;
      return {
        ...state,
        miniGame: {
          ...state.miniGame,
          listQA: [...newListQA],
        },
      };
    
    case type.CHANGE_COLUMN_KEY:
      return {...state, miniGame: {...state.miniGame, columnKey: action.payload}};

    default:
      return state;
  }
}

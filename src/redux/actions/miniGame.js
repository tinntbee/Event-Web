import * as type from "../types";

export function getMiniGame(miniGame) {
  return {
    type: type.GET_MINIGAME_REQUESTED,
    payload: miniGame,
  };
}

export function pushNewQA(newQA) {
  return {
    type: type.PUSH_NEWQA,
    payload: newQA,
  };
}

export function disabledAnswerBox(payload) {
  return {
    type: type.DISABLED_ANSWERBOX,
    payload: payload,
  };
}

export function removeBoxOnRow(payload) {
  return {
    type: type.REMOVE_BOX_ON_ROW,
    payload: payload,
  };
}

export function modifyGridColumns(payload){
  return {
    type: type.MODIFY_GRID_COLUMN,
    payload: payload,
  }
}

export function changeRowFocus(payload){
  return{
    type: type.CHANGE_ROW_FOCUS,
    payload: payload
  }
}

export function removeRow(payload){
  return{
    type: type.REMOVE_ROW,
    payload: payload
  }
}

export function addNewUpRow(payload){
  return{
    type: type.ADD_NEW_UP_ROW,
    payload: payload
  }
}

export function moveUpRow(payload){
  return{
    type: type.MOVE_UP_ROW,
    payload: payload
  }
}

export function moveDownRow(payload){
  return{
    type: type.MOVE_DOWN_ROW,
    payload: payload
  }
}

export function changeValueAnswerBox(payload){
  return{
    type: type.CHANGE_VALUE_ANSWER_BOX,
    payload: payload
  }
}

export function changeQuestionImageUrl(payload){
  return{
    type: type.CHANGE_QUESTION_IMAGE_URL,
    payload: payload
  }
}

export function changeQuestionContent(payload){
  return{
    type: type.CHANGE_QUESTION_CONTENT,
    payload: payload
  }
}

export function changeColumnKey(payload){
  return{
    type: type.CHANGE_COLUMN_KEY,
    payload: payload
  }
}
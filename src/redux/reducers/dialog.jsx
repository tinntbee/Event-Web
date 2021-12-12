import * as type from "../types";

const initialState = {
  title: "Xác nhận",
  content: "",
  callbacks: [],
  open: false,
};
//[{ callback: undefined, content: "" }]
export default function dialog(state = initialState, action) {
  switch (action.type) {
    case type.DIALOG_OPEN:
      return {
        ...state,
        title: action.payload.title,
        content: action.payload.content,
        callbacks: action.payload.callbacks,
        open: true,
      };
    case type.DIALOG_CLOSE:
      return {
        ...state,
        open: false,
      };
    default:
      return state;
  }
}

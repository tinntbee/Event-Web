import * as type from "../types";

export const dialogActions = {
  open: (payload) => {
    return {
      type: type.DIALOG_OPEN,
      payload: payload,
    };
  },
  close: (payload) => {
    return {
      type: type.DIALOG_CLOSE,
      payload: payload,
    };
  },
};

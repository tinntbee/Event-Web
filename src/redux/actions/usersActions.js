import * as type from "../types";

export const userAction = {
  Login: (payload) => {
    return {
      type: type.LOGIN,
      payload: payload,
    };
  },
  Logout: (payload) => {
    return {
      type: type.LOGOUT,
      payload: payload,
    };
  },
  ReLogin: (payload) => {
    return {
      type: type.RE_LOGIN,
      payload: payload,
    };
  },
};

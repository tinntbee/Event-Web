import * as type from "../types";

const initialState = {
  user: undefined,
};

export default function users(state = initialState, action) {
  switch (action.type) {
    case type.LOGIN:
      return {
        ...state,
        user: action.payload,
      };
    case type.LOGOUT:
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      return {
        ...state,
        user: undefined,
      };
    case type.RE_LOGIN:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
}

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
      return {
        ...state,
        user: undefined,
      };
    default:
      return state;
  }
}

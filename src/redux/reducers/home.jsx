import * as type from "../types";

const initialState = {
  events: [],
  search: "",
  status: "all",
  faculty: "FIT",
  page: 1,
  size: 10,
  limit: 0,
};

export default function home(state = initialState, action) {
  switch (action.type) {
    case type.GET_EVENTS:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}

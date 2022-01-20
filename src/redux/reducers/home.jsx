import * as type from "../types";

const initialState = {
  events: [],
  search: "",
  status: "-1",
  faculty: "all",
  page: 1,
  size: 6,
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

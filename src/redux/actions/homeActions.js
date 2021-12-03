import * as type from "../types";

export const homeActions = {
  getEvents: (payload) => {
    return {
      type: type.GET_EVENTS,
      payload: payload,
    };
  },
};

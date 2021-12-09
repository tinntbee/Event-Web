import axiosClient from "./axiosClient";

export const miniGameAPI = {
  getMiniGame: (_id) => {
    const url = "/minigame/getMiniGameForHost/" + _id;
    return axiosClient.get(url).catch(function (error) {
      if (error.response) {
        return error;
      }
    });
  },
};

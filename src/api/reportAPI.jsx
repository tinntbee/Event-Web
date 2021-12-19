import axiosClient from "./axiosClient";

export const reportAPI = {
  getChart: (_id) => {
    const url = "/report/chart/" + _id;
    return axiosClient.get(url);
  },
  getTable: (_id) => {
    const url = "/report/table/" + _id;
    return axiosClient.get(url);
  },
};

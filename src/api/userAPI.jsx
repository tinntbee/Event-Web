import axiosClient from "./axiosClient";

export const userAPI = {
  getAccountInfo: (data) => {
    const url = "/account";
    return axiosClient.get(url).catch(function (error) {
      if (error.response) {
        return error;
      }
    });
  },
  updateAccountInfo: (data) => {
    const url = "/account/update-info";
    return axiosClient.put(url, data).catch(function (error) {
      if (error.response) {
        return error;
      }
    });
  },
};

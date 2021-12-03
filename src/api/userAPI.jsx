import axiosClient from "./axiosClient";

export const userAPI = {
  getAccountInfo: (data) => {
    const url = "/account";
    return axiosClient.get(url);
  },
  updateAccountInfo: (data)=>{
    const url = "/account/update-info";
    return axiosClient.put(url, data)
  }
};

/* eslint-disable dot-notation */
import axios from "axios";

const url = "https://glorifiers.herokuapp.com/api/v1";

export const glorifiers = axios.create({
  baseURL: url,
});

export const setAuthorizationHeader = (token) => {
  glorifiers.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

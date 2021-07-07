/* eslint-disable dot-notation */
import axios from "axios";

export const IS_PROD = process.env.NODE_ENV === "production";

const url = true
  ? "https://glorifiers.herokuapp.com/api/v1"
  : "192.168.43.206:4040/api/v1";

export const glorifiers = axios.create({
  baseURL: url,
});

export const setAuthorizationHeader = async (token) => {
  if (token) {
    glorifiers.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }
};

// you have to use the same history object in your
// Router component, if it is in a different component
// you could pass it in a prop

export const setupInterceptor = (dispatch) => {
  glorifiers.interceptors.response.use(
    function (response) {
      return response;
    },
    function ({ response: { data } }) {
      //Logout user when token expires
      data.error === "Failed to authenticate token." &&
        dispatch({ type: "LOGOUT_USER" });
    }
  );
};

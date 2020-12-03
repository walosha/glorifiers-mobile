/* eslint-disable dot-notation */
import axios from "axios";
import AsyncStorage from "@react-native-community/async-storage";

export const IS_PROD = process.env.NODE_ENV === "production";

const url = true
  ? "https://glorifiers.herokuapp.com/api/v1"
  : "192.168.43.206:4040/api/v1";

export const glorifiers = axios.create({
  baseURL: url,
});

export const setAuthorizationHeader = async (token) => {
  if (token) {
    await AsyncStorage.setItem("token", token);

    glorifiers.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }
};

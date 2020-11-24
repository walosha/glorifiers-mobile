import AsyncStorage from "@react-native-community/async-storage";

import {
  LOGIN_USER,
  LOGIN_SAVE,
  LOGIN_USER_FAILED,
  RESET_SIGNIN_SCREEN,
  FAKE_LOGIN,
} from "../types";
import { State } from "react-native-gesture-handler";

const initialValue = {
  token: null,
  isLoading: false,
  user_display_name: "",
  user_email: "",
  user_nicename: "",
  isSignout: true,
  error: "",
};

export const signInReducer = (state = initialValue, action) => {
  switch (action.type) {
    case RESET_SIGNIN_SCREEN:
      return (state = initialValue);
    case FAKE_LOGIN:
      return {
        ...initialValue,
        token: "token",
      };
    case LOGIN_SAVE:
      return {
        ...initialValue,
        isLoading: true,
      };
    case LOGIN_USER:
      return {
        token: action.token,
        error: "",
        user_display_name: action.payload.user_display_name,
        user_email: action.payload.user_email,
        user_nicename: action.payload.user_email,
        isSignout: false,
        isLoading: false,
      };
    case LOGIN_USER_FAILED:
      return {
        ...state,
        isSignout: false,
        isLoading: false,
        error: action.payload,
        // token: "9",
      };

    default:
      return state;
  }
};

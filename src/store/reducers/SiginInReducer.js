import AsyncStorage from "@react-native-community/async-storage";

import {
  LOGIN_START,
  LOGIN_USER_SUCCESSFUL,
  LOGIN_USER_FAILED,
  LOGOUT_USER_FAILED,
  LOGOUT_USER_SUCCESSFUL,
  RESET_SIGNIN_SCREEN,
} from "../types";

const initialValue = {
  token: null,
  isLoading: false,
  user: "",
  isSignout: true,
  error: "",
};

export const signInReducer = (state = initialValue, action) => {
  switch (action.type) {
    case RESET_SIGNIN_SCREEN:
      return (state = initialValue);
    case LOGIN_START:
      return {
        ...initialValue,
        isLoading: true,
      };
    case LOGIN_USER_SUCCESSFUL:
      return {
        token: action.payload.token,
        error: "",
        user: action.payload.data,
        isSignout: false,
        isLoading: false,
      };
    case LOGIN_USER_FAILED:
      return {
        ...state,
        isSignout: false,
        isLoading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

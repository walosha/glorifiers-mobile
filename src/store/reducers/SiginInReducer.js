import AsyncStorage from "@react-native-community/async-storage";

import {
  LOGIN_START,
  LOGIN_USER_SUCCESSFUL,
  LOGIN_USER_FAILED,
  RESET_SIGNIN_SCREEN,
  PROFILE_IMAGE_SUCCESSSFUL,
  PROFILE_IMAGE_UPLOAD,
  PROFILE_IMAGE_FAILED,
} from "../types";

const initialValue = {
  token: null,
  isLoading: false,
  user: {
    email: "",
    firstName: "",
    image: "",
    lastName: "",
    phoneNumber: "",
    userId: "",
  },
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
    case PROFILE_IMAGE_UPLOAD:
      return {
        ...state,
        error: "",
        isLoading: true,
      };

    case PROFILE_IMAGE_SUCCESSSFUL:
      return {
        ...state,
        error: "",
        user: { ...state.user, image: action.payload },
      };
    case PROFILE_IMAGE_FAILED:
      return {
        ...state,
        error: "failed to Upload!",
      };

    default:
      return state;
  }
};

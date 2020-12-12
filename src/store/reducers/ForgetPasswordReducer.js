import {
  RESET_PASSWORD_SCREEN,
  RESET_PASSWORD_SUCCESSFUL,
  LOADING_RESET_PASSWORD,
  RESET_PASSWORD_FAILED,
} from "../types";

const initialValue = {
  isLoading: false,
  error: false,
  message: "",
};

export const forgetpasswordReducer = (state = initialValue, action) => {
  switch (action.type) {
    case RESET_PASSWORD_SCREEN:
      return {
        ...initialValue,
      };
    case RESET_PASSWORD_SUCCESSFUL:
      return {
        ...initialValue,
        message: action.payload,
      };
    case LOADING_RESET_PASSWORD:
      return {
        ...initialValue,
        isLoading: true,
      };
    case RESET_PASSWORD_FAILED:
      return {
        isLoading: false,
        error: true,
        message: action.payload,
      };

    default:
      return state;
  }
};

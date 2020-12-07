import {
  REGISTER_USER_SUCCESSSFUL,
  REGISTER_USER_FAILED,
  PASSWORD_NOT_SAME,
  RESET_REGISTER_SCREEN,
  REGISTER_USER,
} from "../types";

const initialValue = {
  isLoading: false,
  error: "",
};

export const registerReducer = (state = initialValue, action) => {
  switch (action.type) {
    case RESET_REGISTER_SCREEN:
      return (state = initialValue);
    case REGISTER_USER:
      return {
        error: "",
        isLoading: true,
      };
    case PASSWORD_NOT_SAME:
      return {
        error: action.payload,
        isLoading: false,
      };
    case REGISTER_USER_SUCCESSSFUL:
      return {
        error: "",
        isLoading: false,
      };
    case REGISTER_USER_FAILED:
      return {
        error: action.payload,
        isLoading: false,
      };

    default:
      return state;
  }
};

import AsyncStorage from "@react-native-community/async-storage";

import {
  ACCOUNT_FETCH_SUCESS,
  ACCOUNT_FETCH_FAILED,
  RESET_SCREEN,
  TRANSFER_TO_ACCOUNT_SUCCESS,
  TRANSFER_TO_ACCOUNT_FAILED,
} from "../types";

const initialValue = {
  number: null,
  error: "",
  disabled: true,
  narration: "",
};

export const transferAccountReducer = (state = initialValue, action) => {
  switch (action.type) {
    case RESET_SCREEN:
      return {
        ...initialValue,
      };
    case ACCOUNT_FETCH_SUCESS:
      return {
        number: action.payload,
        narration: "",
        disabled: false,
        error: "",
      };
    case ACCOUNT_FETCH_FAILED:
      return {
        number: null,
        narration: "",
        error: action.payload,
        disabled: true,
      };
    case TRANSFER_TO_ACCOUNT_SUCCESS:
      return {
        number: null,
        error: "",
        disabled: true,
        narration: action.payload,
      };
    case TRANSFER_TO_ACCOUNT_FAILED:
      return {
        number: null,
        error: "",
        disabled: false,
        narration: action.payload,
      };
    default:
      return state;
  }
};

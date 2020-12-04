import AsyncStorage from "@react-native-community/async-storage";

import {
  ACCOUNT_FETCH_SUCESS,
  ACCOUNT_FETCH_FAILED,
  RESET_SCREEN,
} from "../types";

const initialValue = {
  number: null,
  error: "",
  disabled: true,
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
        disabled: false,
        error: "",
      };
    case ACCOUNT_FETCH_FAILED:
      return {
        number: null,
        error: action.payload,
        disabled: true,
      };

    default:
      return state;
  }
};

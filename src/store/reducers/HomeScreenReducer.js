import {
  LAST3TRANSACTIONS_SUCCESS,
  HOME_FETCH_SUCCESS,
  HOME_FETCH_FAILURE,
  GET_WALLET_BALANCE,
} from "../types";

const initialValue = {
  transArray: [],
  isLoading: false,
  error: "",
  balance: 0,
};

export const HomeReducer = (state = initialValue, action) => {
  switch (action.type) {
    case LAST3TRANSACTIONS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        transArray: [...action.payload],
      };

    case GET_WALLET_BALANCE:
      return {
        ...state,
        balance: action.payload?.balance || 0,
      };

    default:
      return state;
  }
};

import {
  LAST3TRANSACTIONS_SUCCESS,
  HOME_FETCH_SUCCESS,
  HOME_FETCH_FAILURE,
  GET_WALLET_BALANCE,
  NO_WALLET_CREATED,
} from "../types";

const fundWallet = "Fund Your Wallet";

const initialValue = {
  isLoading: false,
  error: "",
  balance: 0,
  accountNumber: fundWallet,
};

export const HomeReducer = (state = initialValue, action) => {
  switch (action.type) {
    case GET_WALLET_BALANCE:
      return {
        ...state,
        balance: action.payload?.balance || 0,
        accountNumber: action.payload?.accountNumber || fundWallet,
      };

    default:
      return state;
  }
};

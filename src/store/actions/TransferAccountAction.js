import {
  ACCOUNT_FETCH_SUCESS,
  ACCOUNT_FETCH_FAILED,
  TRANSFER_TO_ACCOUNT_FAILED,
  TRANSFER_TO_ACCOUNT_SUCCESS,
  RESET_SCREEN,
} from "../types";
import { glorifiers } from "../../services/glorifiers";

export const onAccountNameFetch = async (accountNumber, dispatch) => {
  dispatch({ type: RESET_SCREEN });
  try {
    const { data } = await glorifiers.get(`/verifyAccountNo/${accountNumber}`);
    dispatch({
      type: ACCOUNT_FETCH_SUCESS,
      payload: Object.values(data.data).join(" "),
    });
  } catch ({ response: { data } }) {
    dispatch({ type: ACCOUNT_FETCH_FAILED, payload: data.error });
  }
};

export const transferToAccount = async (
  { accountNumber, amount },
  dispatch,
  navigation
) => {
  dispatch({ type: RESET_SCREEN });
  console.log({ data: "wale" });
  try {
    const {
      data: { data },
    } = await glorifiers.post(`/wallets/transfer`, {
      accountNumber,
      amount,
    });

    dispatch({
      type: TRANSFER_TO_ACCOUNT_SUCCESS,
      payload: data.transaction.narration,
    });
    navigation.navigate("SucessPayment");
  } catch ({ response: { data } }) {
    dispatch({ type: TRANSFER_TO_ACCOUNT_FAILED, payload: data.error });

    navigation.navigate("FailurePayment");
  }
};

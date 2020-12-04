import {
  ACCOUNT_FETCH_SUCESS,
  ACCOUNT_FETCH_FAILED,
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

import { LAST3TRANSACTIONS_SUCCESS, GET_WALLET_BALANCE } from "../types";

import { glorifiers } from "../../services/glorifiers";

export const getlast3Trans = async () => {
  try {
    const {
      data: { data },
    } = await glorifiers.get("/last-3-transaction");
    return data;
  } catch ({ response: { data } }) {}
};

export const getWallet = async (dispatch) => {
  try {
    const {
      data: { data },
    } = await glorifiers.get("/wallets");

    dispatch({ type: GET_WALLET_BALANCE, payload: data });
  } catch ({ response: { data } }) {
    console.error(data);
  }
};

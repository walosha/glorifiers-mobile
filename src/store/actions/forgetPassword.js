import {
  RESET_PASSWORD_FAILED,
  RESET_PASSWORD_SUCCESSFUL,
  LOADING_RESET_PASSWORD,
} from "../types";
import { Toast } from "../../components";

import { glorifiers } from "../../services/glorifiers";

export const recoverPassword = async (email, dispatch) => {
  dispatch({ type: LOADING_RESET_PASSWORD });
  try {
    const {
      data: { data },
    } = await glorifiers.post("/forgot-password", { email });
    Toast(data);

    dispatch({ type: RESET_PASSWORD_SUCCESSFUL, payload: data });
  } catch ({ response: { data } }) {
    console.log(data);
    dispatch({ type: RESET_PASSWORD_FAILED, payload: data });
  }
};

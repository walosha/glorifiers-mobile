import {
  LOGIN_START,
  LOGIN_USER,
  LOGOUT_USER,
  LOGIN_USER_FAILED,
  LOGIN_USER_SUCCESSFUL,
} from "../types";
import { glorifiers, setAuthorizationHeader } from "../../services/glorifiers";

const signInUser = async ({ email, password }, dispatch) => {
  dispatch({ type: LOGIN_START });
  try {
    const { data } = await glorifiers.post("/auth/signin", {
      email,
      password,
    });

    setAuthorizationHeader(data.token);

    dispatch({ type: LOGIN_USER_SUCCESSFUL, payload: data });
  } catch ({ response: { data } }) {
    dispatch({ type: LOGIN_USER_FAILED, payload: data.error });
  }
};

const LogOutUser = (dispatch) => {
  dispatch({ type: LOGOUT_USER });
};

export { signInUser, LogOutUser };

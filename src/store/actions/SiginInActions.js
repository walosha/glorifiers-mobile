import {
  LOGIN_SAVE,
  LOGIN_USER,
  LOGOUT_USER,
  LOGIN_USER_FAILED,
  RESET_SIGNIN_SCREEN,
} from "../types";

const resetSignScreen = () => (dispatch) => {
  dispatch({ type: RESET_SIGNIN_SCREEN });
};

const signInUser = ({ username, password }, navigation) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_SAVE });
    dispatch({ type: LOGIN_USER });
  } catch (error) {
    dispatch({ type: LOGIN_USER_FAILED });
  }
};

const LogOutUser = (dispatch) => {
  dispatch({ type: LOGOUT_USER });
};

export { signInUser, LogOutUser, resetSignScreen };

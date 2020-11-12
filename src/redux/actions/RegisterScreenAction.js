import {
  REGISTER_SAVE,
  REGISTER_USER_SUCCESSSFUL,
  REGISTER_USER_FAILED,
  PASSWORD_NOT_SAME,
  RESET_REGISTER_SCREEN,
} from "../types";

const resetRegisterScreen = () => (dispatch) => {
  dispatch({ type: RESET_REGISTER_SCREEN });
};

const userPasswordNotSame = () => (dispatch) => {
  dispatch({ type: REGISTER_SAVE });
  dispatch({
    type: PASSWORD_NOT_SAME,
    payload: "the password does not match!",
  });
};

const registerUser = ({ username, email, password }, navigation) => async (
  dispatch
) => {
  dispatch({ type: REGISTER_SAVE });

  dispatch({ type: REGISTER_USER_SUCCESSSFUL });
  navigation.navigate("SignIn");
};

export { registerUser, userPasswordNotSame, resetRegisterScreen };

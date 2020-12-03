import {
  REGISTER_SAVE,
  REGISTER_USER_SUCCESSSFUL,
  REGISTER_USER_FAILED,
  PASSWORD_NOT_SAME,
  RESET_REGISTER_SCREEN,
  LOGIN_USER_FAILED,
} from "../types";
import { glorifiers } from "../../services/glorifiers";

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

const registerUser = async (
  { firstName, lastName, phoneNumber, password, email },
  dispatch,
  navigation
) => {
  dispatch({ type: RESET_REGISTER_SCREEN });
  try {
    const { data } = await glorifiers.post("/auth/create-user", {
      firstName,
      lastName,
      phoneNumber,
      email,
      password,
    });

    dispatch({ type: REGISTER_USER_SUCCESSSFUL });
    navigation.navigate("SignIn");
  } catch ({ response: { data } }) {
    dispatch({ type: LOGIN_USER_FAILED, payload: data.error });
  }
};




export { registerUser, userPasswordNotSame, resetRegisterScreen };

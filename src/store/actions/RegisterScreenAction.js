import {
  REGISTER_USER,
  REGISTER_USER_SUCCESSSFUL,
  REGISTER_USER_FAILED,
  PASSWORD_NOT_SAME,
  RESET_REGISTER_SCREEN,
} from "../types";
import { glorifiers } from "../../services/glorifiers";
import { Toast } from "../../components";

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
  dispatch({ type: REGISTER_USER });
  try {
    const { data } = await glorifiers.post("/auth/create-user", {
      firstName,
      lastName,
      phoneNumber,
      email,
      password,
    });

    dispatch({ type: REGISTER_USER_SUCCESSSFUL });
    Toast("Account Created!");
    navigation.navigate("SignIn");
  } catch ({ response: { data } }) {
    const { error } = data;
    var regExp = /\(([^)]+)\)/;
    var matches = regExp.exec(error.split("=")[1]);
    const val = matches[1];
    matches.split;

    dispatch({ type: REGISTER_USER_FAILED, payload: error.split("=")[1] });
  }
};

export { registerUser, userPasswordNotSame, resetRegisterScreen };

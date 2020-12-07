import {
  REGISTER_USER,
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
    navigation.navigate("SignIn");
  } catch ({ response: { data } }) {
    const { error } = data;

    // var regExp = /\(([^)]+)\)/;
    // var matches = regExp.exec("I expect five hundred dollars ($500).");
    // //matches[1] contains the value between the parentheses
    // console.log(matches[1]);
    dispatch({ type: REGISTER_USER_FAILED, payload: error.split("=")[1] });
  }
};

export { registerUser, userPasswordNotSame, resetRegisterScreen };

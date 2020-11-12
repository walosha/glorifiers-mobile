import { combineReducers } from "redux";
import AsyncStorage from "@react-native-community/async-storage";
import { signInReducer } from "./SiginInReducer";
import { registerReducer } from "./registerScreenReducer";
import { HomeReducer } from "./HomeScreenReducer";
import { LOGOUT_USER } from "../types";

const appReducer = combineReducers({
  signInScreen: signInReducer,
  homeScreen: HomeReducer,
  registerScreen: registerReducer,
});

export const rootReducer = (state, action) => {
  if (action.type === LOGOUT_USER) {
    AsyncStorage.removeItem("persist:root");
    state = undefined;
  }
  return appReducer(state, action);
};

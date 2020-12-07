import axios from "axios";
import {
  LOGIN_START,
  LOGIN_USER,
  LOGOUT_USER,
  LOGIN_USER_FAILED,
  LOGIN_USER_SUCCESSFUL,
  PROFILE_IMAGE_SUCCESSSFUL,
  PROFILE_IMAGE_FAILED,
  PROFILE_IMAGE_UPLOAD,
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

export const uploadProfileImage = async (image, dispatch) => {
  try {
    const {
      data: { Key, url },
    } = await glorifiers.get("/getSignedUrl");

    const options = {
      method: "PUT",
      headers: { "Content-Type": "image/jpeg" },
      data: image,
      url,
    };

    const response = await axios(options);

    const {
      data: { data },
    } = await glorifiers.patch("/uploadProfileImg", {
      image: Key,
    });

    dispatch({ type: PROFILE_IMAGE_SUCCESSSFUL, payload: Key });
  } catch (error) {
    console.log({ error: error.response.data });
    // dispatch({ type: PROFILE_IMAGE_FAILED, payload: data.error });
  }
};

export { signInUser, LogOutUser };

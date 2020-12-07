import React from "react";
import { Toast as NBToast } from "native-base";
import { materialTheme } from "../constants/";

const Toast = (text, msgType) => {
  NBToast.show({
    text,
    position: "bottom",
    type: msgType ? "danger" : "success",
    buttonText: "Dismiss",
    duration: 7000,
    buttonTextStyle: { backgroundColor: materialTheme.COLORS.PRIMARY },
    style: { backgroundColor: materialTheme.COLORS.PRIMARY },
  });
};

export default Toast;

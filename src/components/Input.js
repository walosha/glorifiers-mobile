import React from "react";
import { StyleSheet } from "react-native";
import PropTypes from "prop-types";
import { Input } from "galio-framework";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { materialTheme } from "../constants";

const ArInput = ({
  inputSyles,
  shadowless,
  success,
  error,
  style,
  ...other
}) => {
  const inputStyles = [
    styles.input,
    inputSyles,
    !shadowless && styles.shadow,
    success && styles.success,
    error && styles.error,
    { ...style },
  ];

  return (
    <Input
      placeholder="write something here"
      placeholderTextColor={materialTheme.COLORS.PLACEHOLDER}
      style={inputStyles}
      color={materialTheme.COLORS.PRIMARY}
      {...other}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderRadius: 4,
    borderColor: materialTheme.COLORS.BORDER,
    height: hp("6%"),
    backgroundColor: "#FFFFFF",
  },
  success: {
    borderColor: materialTheme.COLORS.INPUT_SUCCESS,
  },
  error: {
    borderColor: materialTheme.COLORS.INPUT_ERROR,
  },
  shadow: {
    shadowColor: materialTheme.COLORS.BLACK,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
    shadowOpacity: 0.05,
    elevation: 2,
  },
});

export default ArInput;

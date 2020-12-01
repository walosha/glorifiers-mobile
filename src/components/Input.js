import React from "react";
import { StyleSheet } from "react-native";
import PropTypes from "prop-types";
import { Input } from "galio-framework";
import { materialTheme } from "../constants";

class ArInput extends React.Component {
  render() {
    const { inputSyles, shadowless, success, error } = this.props;

    const inputStyles = [
      styles.input,
      inputSyles,
      !shadowless && styles.shadow,
      success && styles.success,
      error && styles.error,
      { ...this.props.style },
    ];

    return (
      <Input
        placeholder="write something here"
        placeholderTextColor={materialTheme.COLORS.MUTED}
        style={inputStyles}
        color={materialTheme.COLORS.HEADER}
        {...this.props}
      />
    );
  }
}

ArInput.defaultProps = {
  shadowless: false,
  success: false,
  error: false,
};

ArInput.propTypes = {
  shadowless: PropTypes.bool,
  success: PropTypes.bool,
  error: PropTypes.bool,
};

const styles = StyleSheet.create({
  input: {
    borderRadius: 4,
    borderColor: materialTheme.COLORS.BORDER,
    height: 44,
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

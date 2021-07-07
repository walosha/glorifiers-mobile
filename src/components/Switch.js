import React from "react";
import { Switch } from "react-native";
import { materialTheme } from "../constants";

export default function CustomSwitch({ value, onValueChange }) {
  return (
    <Switch
      trackColor={{
        false: "#767577",
        true: "#767577",
      }}
      thumbColor={value ? materialTheme.COLORS.PRIMARY : "#f4f3f4"}
      ios_backgroundColor="#3e3e3e"
      onValueChange={onValueChange}
      value={value}
    />
  );
}

import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";

const DropDown = () => {
  const [state, setState] = useState("Ruby");

  return (
    <Picker
      selectedValue={state}
      style={{ height: 50, width: 100 }}
      onValueChange={(itemValue, itemIndex) => setState(itemValue)}
    >
      <Picker.Item label="PHP" value="java" />
      <Picker.Item label="JavaScript" value="js" />
    </Picker>
  );
};

const styles = StyleSheet.create({});

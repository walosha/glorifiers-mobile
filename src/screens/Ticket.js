import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { Block, Text, Button as GaButton, theme } from "galio-framework";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Feather from "react-native-vector-icons/Feather";
import { materialTheme } from "../constants";

export default function Ticket() {
  const [state, setState] = useState(true);
  const onConfirm = () => {
    setState((prev) => !prev);
  };
  return (
    <Block padding={15} flex middle>
      <TouchableOpacity style={styles.iconContainer}>
        <MaterialCommunityIcons
          size={70}
          name="cloud-upload-outline"
          color={"#0d47a1"}
        />
      </TouchableOpacity>
      <View style={styles.contaner}>
        <Text color={"#000"} size={16}>
          Conversation started from this app will be visible here
        </Text>
      </View>
      <View style={styles.contaner}>
        <GaButton onPress={onConfirm}>
          {state ? "Start a New Conversation" : "Feature not available Yet"}
        </GaButton>
      </View>
    </Block>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    borderRadius: 85,
    height: 175,
    width: 175,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    marginBottom: 8,
  },
  contaner: {
    padding: 5,
  },
});

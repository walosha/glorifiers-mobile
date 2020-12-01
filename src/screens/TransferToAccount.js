import React from "react";
import { View, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { connect } from "react-redux";
import { Block, Text, Button as GaButton, theme } from "galio-framework";
// import {
//   registerUser,
//   userPasswordNotSame,
//   resetRegisterScreen,
// } from "../redux/actions";
import { Button, Icon, Input } from "../components/";
import { images, materialTheme } from "../constants";

const { width } = Dimensions.get("screen");

export default function TransferToAccount() {
  return (
    <View style={{ paddingHorizontal: 15, paddingVertical: 10 }}>
      <Block style={{ padding: 15, marginBottom: 20 }} middle>
        <Text color={materialTheme.COLORS.PRIMARY} size={17}>
          How much does the customer want to Transfer
        </Text>
      </Block>
      <Block>
        <Input
          shadowless
          borderless
          inputSyles={{
            borderColor: "none",
            backgroundColor: "transparent",
            borderBottomWidth: 0.3,
            borderBottom: materialTheme.COLORS.BORDER_COLOR,
          }}
          placeholder="Amount"
        />
        <Input
          shadowless
          borderless
          inputSyles={{
            borderColor: "none",
            backgroundColor: "transparent",
            borderBottomWidth: 0.3,
            borderBottom: materialTheme.COLORS.BORDER_COLOR,
          }}
          placeholder="Receipient Account Number"
        />
        <Input
          shadowless
          borderless
          inputSyles={{
            borderColor: "none",
            backgroundColor: "transparent",
            borderBottomWidth: 0.3,
            borderBottom: materialTheme.COLORS.BORDER_COLOR,
          }}
          placeholder="Receipeient Account Name"
        />

        <Block style={{ padding: 10 }} middle>
          <GaButton>Confirm</GaButton>
        </Block>
      </Block>
    </View>
  );
}

const styles = StyleSheet.create({
  action: {
    width: width * 0.3,
    backgroundColor: materialTheme.COLORS.LABEL,
    height: 55,
    justifyContent: "space-evenly",
    alignItems: "center",
    borderRadius: 12,
  },
  actionText: {
    margin: 4,
  },
});

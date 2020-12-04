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

export default function FundPurse() {
  return (
    <View style={{ paddingHorizontal: 15, paddingVertical: 10 }}>
      <Block style={{ padding: 15, marginBottom: 20 }} middle>
        <Text color={materialTheme.COLORS.PRIMARY} size={17}>
          Kindly fill the forms below.
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
          placeholder="Customer Number (Optional)"
        />
        <Block style={{ padding: 5, marginVertical: 5 }} middle>
          <Text
            style={{ alignSelf: "flex-start" }}
            color={materialTheme.COLORS.PRIMARY}
            size={17}
          >
            Select Withdrawal Type
          </Text>
        </Block>

        <Block space="evenly" margin={36} row>
          <TouchableOpacity onPress={() => {}} style={styles.action}>
            <Text style={styles.actionText}>CARD</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}} style={styles.action}>
            <Text style={styles.actionText}>CASH</Text>
          </TouchableOpacity>
        </Block>
        <Block style={{ padding: 10 }} middle>
          <GaButton>Continue</GaButton>
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

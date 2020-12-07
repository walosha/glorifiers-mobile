import React, { useState } from "react";
import { View, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { connect } from "react-redux";
import { Block, Text, Button as GaButton, theme } from "galio-framework";
import { Button, Icon, Input } from "../components/";
import { images, materialTheme } from "../constants";

const { width } = Dimensions.get("screen");

export default function FundPurse({ navigation }) {
  const [amount, setAmount] = useState(" ");

  const onPressBtn = () => {
    console.log({ amount: typeof amount });
    navigation.navigate("FundPurseConfirm", { amount });
  };
  return (
    <View style={{ paddingHorizontal: 15, paddingVertical: 10 }}>
      <Block style={{ padding: 15, marginBottom: 20 }} middle>
        <Text color={materialTheme.COLORS.PRIMARY} size={17}>
          Kindly enter amount to fund below.
        </Text>
      </Block>
      <Block>
        <Input
          shadowless
          borderless
          onChangeText={(text) => setAmount(text)}
          inputSyles={{
            borderColor: "none",
            backgroundColor: "transparent",
            borderBottomWidth: 0.3,
            borderBottom: materialTheme.COLORS.BORDER_COLOR,
          }}
          placeholder="Amount"
        />
        <Block style={{ padding: 10 }} middle>
          <GaButton disabled={!amount.trim()} onPress={onPressBtn}>
            Continue
          </GaButton>
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

import React, { useState, useEffect } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Block, Text, Button as GaButton, theme } from "galio-framework";
import { Input } from "../components/";
import { materialTheme } from "../constants";
import { onAccountNameFetch } from "../store/actions";
import { RESET_SCREEN } from "../store/types";
const { width } = Dimensions.get("screen");

export default function TransferToAccount({ navigation }) {
  const [amount, setAmount] = useState(null);
  const [accountNumber, setAccountNumber] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: RESET_SCREEN });
  }, []);

  const {
    transferScreen: { error, number, disabled },
  } = useSelector(({ transferScreen }) => ({
    transferScreen,
  }));

  const fetchOnFocus = () => {
    if (amount && accountNumber) {
      onAccountNameFetch(accountNumber, dispatch);
    }
  };

  const onConfirm = () => {
    navigation.navigate("TransferConfirmation", {
      amount,
      accountNumber,
      acctName: number,
    });
  };

  return (
    <View style={{ paddingHorizontal: 15, paddingVertical: 10 }}>
      <Block style={{ padding: 15, marginBottom: 20 }} middle>
        <Text color={materialTheme.COLORS.PRIMARY} size={17}>
          How much you want to Transfer
        </Text>
      </Block>
      <Block>
        <Input
          onChangeText={(text) => setAmount(text)}
          shadowless
          keyboardType={"numeric"}
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
          onChangeText={(text) => setAccountNumber(text)}
          shadowless
          borderless
          keyboardType={"numeric"}
          inputSyles={{
            borderColor: "none",
            backgroundColor: "transparent",
            borderBottomWidth: 0.3,
            borderBottom: materialTheme.COLORS.BORDER_COLOR,
          }}
          placeholder="Receipient Account Number"
        />
        {error ? (
          <Text style={{ textAlign: "center" }} color={"red"} size={12}>
            {error}
          </Text>
        ) : null}
        <Input
          onFocus={fetchOnFocus}
          value={number}
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
          <GaButton onPress={onConfirm} disabled={disabled}>
            Confirm Transfer
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

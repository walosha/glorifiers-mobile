import React from "react";
import { StyleSheet } from "react-native";
import { Block, Text, Button as GaButton, theme } from "galio-framework";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { useDispatch } from "react-redux";
import { transferToAccount } from "../store/actions/TransferAccountAction";
import { numberWithCommas } from "../helpers";
import { materialTheme } from "../constants";

export default function TransferConfiirmationScreen({
  navigation,
  params: { accountNumber, acctName, amount },
}) {
  const dispatch = useDispatch();
  const onConfirm = () => {
    if (accountNumber && amount)
      transferToAccount(
        { accountNumber: parseInt(accountNumber), amount: parseInt(amount) },
        dispatch,
        navigation
      );
  };

  return (
    <Block
      space={"evenly"}
      style={{
        height: hp("60%"),
        paddingHorizontal: 20,
      }}
    >
      <Block style={styles.card}>
        <Text color={materialTheme.COLORS.PRIMARY} middle size={23}>
          Transfer confirmed is irreversible!{" "}
        </Text>
      </Block>
      <Block style={styles.card}>
        <Text size={23}>Account Name: </Text>
        <Text size={23}> {acctName}</Text>
      </Block>
      <Block style={styles.card}>
        <Text size={23}>Account Number: </Text>
        <Text size={23}>{accountNumber}</Text>
      </Block>
      <Block style={styles.card}>
        <Text size={23}>Amount:</Text>
        <Text size={23}>
          {" "}
          {"\u20A6"}
          {numberWithCommas(amount)}
        </Text>
      </Block>
      <Block style={styles.card}>
        <Text size={23}>Convenience Fee:</Text>
        <Text size={23}>
          {"\u20A6"}
          {0}
        </Text>
      </Block>
      <Block style={styles.card}>
        <Text size={23}>VAT:</Text>
        <Text size={23}>
          {"\u20A6"}
          {0}
        </Text>
      </Block>
      <Block style={styles.card}>
        <Text size={23}>Total: </Text>
        <Text size={23}>
          {" "}
          {"\u20A6"}
          {numberWithCommas(amount)}
        </Text>
      </Block>
      <Block style={{ padding: 10 }} middle>
        <GaButton onPress={onConfirm} disabled={false}>
          Proceed
        </GaButton>
      </Block>
    </Block>
  );
}

const styles = StyleSheet.create({
  card: {
    height: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 0.3,
    borderBottomColor: theme.COLORS.MUTED,
  },
});

import React from "react";
import { StyleSheet } from "react-native";
import { Block, Text, Button as GaButton, theme } from "galio-framework";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { numberWithCommas } from "../helpers";
import { materialTheme } from "../constants";

export default function TransferConfiirmationScreen({
  navigation,
  params: { amount },
}) {
  const onConfirm = () => {
    if (amount) {
      navigation.navigate("paystack", { amount });
    }
  };

  return (
    <Block
      space={"evenly"}
      style={{
        height: hp("60%"),
        paddingHorizontal: 20,
      }}
    >
      <Block middle>
        <Text color={materialTheme.COLORS.PRIMARY} middle size={20}>
          Funding Transferred is irreversible!
        </Text>
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

import React from "react";
import { StyleSheet } from "react-native";
import { Block, Text } from "galio-framework";
import { materialTheme } from "../constants";
import { numberWithCommas, formatUTFDate } from "../helpers";

export default function TransferList({ amount, description, status, date }) {
  return (
    <Block style={{ marginBottom: 2 }}>
      <Block space="around" row>
        <Text color={materialTheme.COLORS.PRIMARY}>
          N {numberWithCommas(String(amount))}
        </Text>
        <Text color={materialTheme.COLORS.PRIMARY}>{status}</Text>
      </Block>
      <Block space="around" row>
        <Text size={12}>{description}</Text>
        <Text size={12}>{formatUTFDate(date)}</Text>
      </Block>
      <Block style={styles.divider} />
    </Block>
  );
}

const styles = StyleSheet.create({
  divider: {
    borderBottomWidth: 0.3,
    borderBottomColor: materialTheme.COLORS.PRIMARY,
    paddingVertical: 5,
  },
});

import React from "react";
import { StyleSheet } from "react-native";
import { Block, Text } from "galio-framework";
import { materialTheme } from "../constants";

export default function TransferList({ amount, description, status, date }) {
  const styledStaus = status === "failed" ? "red" : "green";
  return (
    <Block style={{ marginBottom: 2 }}>
      <Block space="around" row>
        <Text color={styledStaus}>N {amount}</Text>
        <Text color={styledStaus}>{status}</Text>
      </Block>
      <Block space="around" row>
        <Text>{description}</Text>
        <Text>{date}</Text>
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

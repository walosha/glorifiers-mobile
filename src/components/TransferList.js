import React from "react";
import { Block, Text } from "galio-framework";
import { materialTheme } from "../constants";
import { numberWithCommas, formatUTFDate } from "../helpers";

export default function TransferList({ amount, description, status, date }) {
  return (
    <Block
      style={{
        borderBottomWidth: 0.3,
        borderBottomColor: materialTheme.COLORS.PRIMARY,
        paddingVertical: 5,
        paddingHorizontal: 10,
        marginBottom: 3,
      }}
      space="between"
      row
    >
      <Block flex padding={15} column>
        <Text color={materialTheme.COLORS.PRIMARY}>
          N {numberWithCommas(String(amount))}
        </Text>
        <Text color={materialTheme.COLORS.PRIMARY} size={12}>
          {description}
        </Text>
      </Block>
      <Block padding={10} column>
        <Text color={materialTheme.COLORS.PRIMARY}>{status}</Text>
        <Text size={12}>{formatUTFDate(date)}</Text>
      </Block>
    </Block>
  );
}

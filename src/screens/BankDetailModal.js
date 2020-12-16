import React, { Fragment, useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { Block, Text, Button, theme } from "galio-framework";
import { materialTheme } from "../../../constants";
import { Input, ButtomModal } from "../../../components";
import authStyles from "../../AuthScreen/authStyles";
import { numberWithCommas } from "../../../helpers";

export default function WithdrawalModal({ modalizeRef }) {
  const [amount, setAmount] = useState(null);

  return (
    <ButtomModal modalizeRef={modalizeRef}>
      <Fragment>
        <Block
          style={{
            paddingVertical: 17,
            fontFamily: "montserrat-regular",
            backgroundColor: materialTheme.COLORS.PRIMARY,
          }}
          middle
        >
          <Text size={27} color={materialTheme.COLORS.WHITE}>
            Bank Details
          </Text>
        </Block>
        <Block
          style={{
            paddingVertical: 10,
            paddingHorizontal: 10,
            fontFamily: "montserrat-regular",
            backgroundColor: materialTheme.COLORS.WHITE,
          }}
        >
          <Block margin={15}>
            <Text size={15} color={materialTheme.COLORS.MUTED}>
              How much will you will to withdrawal from the wallet?
            </Text>
          </Block>
          <Block margin={15}>
            <Input
              onSubmitEditing={() => {}}
              blurOnSubmit={false}
              returnKeyType="next"
              value={amount}
              placeholder="How Much"
              onChangeText={(text) => setAmount(text)}
            />
          </Block>

          <Block middle>
            <Button
              loading={false}
              color="primary"
              round
              style={authStyles.createButton}
              onPress={onButnPress}
            >
              <Text
                style={{ fontFamily: "montserrat-bold" }}
                size={14}
                color={materialTheme.COLORS.WHITE}
              >
                Proceed
              </Text>
            </Button>
          </Block>
        </Block>
      </Fragment>
    </ButtomModal>
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

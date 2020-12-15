import React, { Fragment, useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { Block, Text, Button, theme } from "galio-framework";
import { materialTheme } from "../../../constants";
import { Input, ButtomModal } from "../../../components";
import authStyles from "../../AuthScreen/authStyles";
import { numberWithCommas } from "../../../helpers";

export default function WithdrawalModal({ modalizeRef }) {
  const [amount, setAmount] = useState(null);
  const [HideConfirmWithdrawal, setHideConfirmWithdrawal] = useState(true);

  function onButnPress() {
    setHideConfirmWithdrawal(false);
  }

  function processPmnt() {
    setHideConfirmWithdrawal(true);
  }

  return (
    <ButtomModal modalizeRef={modalizeRef}>
      {HideConfirmWithdrawal ? (
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
              Withdrawal Funds
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
      ) : (
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
              Confirm Withdrawal
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
            <Block style={styles.card} />
            <Block style={styles.card}>
              <Text size={23}>Amount </Text>
              <Text size={23}>{numberWithCommas(amount)} </Text>
            </Block>
            <Block style={styles.card}>
              <Text size={23}>Convenience fee </Text>
              <Text size={23}>0 </Text>
            </Block>
            <Block style={styles.card}>
              <Text size={23}>Total </Text>
              <Text size={23}>{numberWithCommas(amount)} </Text>
            </Block>
            <Block middle>
              <Button
                loading={false}
                color="primary"
                round
                style={authStyles.createButton}
                onPress={processPmnt}
              >
                <Text
                  style={{ fontFamily: "montserrat-bold" }}
                  size={14}
                  color={materialTheme.COLORS.WHITE}
                >
                  Pay
                </Text>
              </Button>
            </Block>
          </Block>
        </Fragment>
      )}
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

import React from "react";
import { StyleSheet } from "react-native";
import { Block, Text, Button as GaButton, theme, Icon } from "galio-framework";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { useDispatch, useSelector } from "react-redux";
import { numberWithCommas } from "../helpers";
import { materialTheme } from "../constants";

export default function FailurePayment({ navigation }) {
  const { narration } = useSelector(({ transferScreen }) => ({
    narration: transferScreen.narration,
  }));

  const onConfirm = () => {
    navigation.navigate("TransferToAccount");
  };
  return (
    <Block
      middle
      style={{
        height: hp("80%"),
        paddingHorizontal: 20,
      }}
    >
      <Block middle>
        <Text size={34}>Payment Failed!</Text>
        <Text size={19}> {narration}</Text>
      </Block>
      <Block padding={5} middle>
        <Icon
          name="circle-with-cross"
          family="Entypo"
          color={materialTheme.COLORS.ERROR}
          size={150}
        />
      </Block>
      <Block style={{ padding: 10 }} middle>
        <GaButton onPress={onConfirm} disabled={false}>
          New Transaction
        </GaButton>
      </Block>
    </Block>
  );
}

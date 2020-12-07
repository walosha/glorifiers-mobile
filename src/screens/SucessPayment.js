import React from "react";
import { Block, Text, Button as GaButton, Icon } from "galio-framework";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { useSelector } from "react-redux";
import { materialTheme } from "../constants";

export default function SucessPayment({ navigation }) {
  const { narration } = useSelector(({ transferScreen }) => ({
    narration: transferScreen.narration,
  }));
  const onConfirm = () => {
    navigation.navigate("Tab");
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
        <Text size={34}>Payment Successful!</Text>
        <Text color={materialTheme.COLORS.SUCCESS} size={18}>
          {narration}
        </Text>
      </Block>
      <Block padding={5} middle>
        <Icon
          name="check-circle"
          family="Feather"
          color={materialTheme.COLORS.PRIMARY}
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

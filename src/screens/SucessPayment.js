import React from "react";
import { Block, Text, Button as GaButton, Icon } from "galio-framework";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { materialTheme } from "../constants";

export default function SucessPayment({ navigation }) {
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

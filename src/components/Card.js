import React from "react";
import { StyleSheet } from "react-native";
import { Block, Text, Button as GaButton, theme } from "galio-framework";
import { materialTheme } from "../constants";

const NBCard = ({ children, cardstyles }) => {
  return (
    <Block safe style={[styles.card, cardstyles]}>
      {children}
    </Block>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#303f9f",
    paddingVertical: 6,
    paddingVertical: 16,
    height: 200,
    borderRadius: 12,
    marginTop: 15,
  },
  social: {
    width: theme.SIZES.BASE * 3.5,
    height: theme.SIZES.BASE * 3.5,
    borderRadius: theme.SIZES.BASE * 1.75,
    justifyContent: "center",
    marginHorizontal: 10,
  },
});
export default NBCard;

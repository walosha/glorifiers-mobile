import React from "react";
import * as Linking from "expo-linking";
import { StyleSheet, TouchableOpacity } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Block, Text, Button as GaButton, theme } from "galio-framework";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Feather from "react-native-vector-icons/Feather";
import { materialTheme } from "../constants";

export default function ContactSupport() {
  const sendMsgToWhatsapp = () => {
    Linking.openURL("http://wa.me/08109780998");
  };

  const sendMsgToMail = () => {
    Linking.openURL("mailto:hello@glorifiers.ng");
  };

  const sendMsgTelegram = () => {
    Linking.openURL("https://t.me/u1275605163_4563651178148577074");
  };

  const callAnAgent = () => {
    Linking.openURL(`tel:08109780998`);
  };

  return (
    <Block flex middle space="evenly">
      <TouchableOpacity onPress={callAnAgent}>
        <Block style={[styles.shadow, { backgroundColor: "#f48fb1" }]} row>
          <Feather size={35} name="phone-call" color={"#880e4f"} />
          <Block>
            <Text color={"#000"} size={22}>
              Call Support
            </Text>
            <Text color={"#000"} size={15}>
              Speak with a support person
            </Text>
          </Block>
        </Block>
      </TouchableOpacity>
      <TouchableOpacity onPress={sendMsgTelegram}>
        <Block style={[styles.shadow, { backgroundColor: "#bbdefb" }]} row>
          <MaterialCommunityIcons size={35} name="telegram" color={"#0d47a1"} />
          <Block>
            <Text color={"#000"} size={22}>
              Telegram
            </Text>
            <Text color={"#000"} size={15}>
              Chat with a support person
            </Text>
          </Block>
        </Block>
      </TouchableOpacity>
      <TouchableOpacity onPress={sendMsgToMail}>
        <Block style={styles.shadow} row>
          <MaterialCommunityIcons
            size={35}
            name="email-open-outline"
            color={materialTheme.COLORS.WHITE}
          />
          <Block>
            <Text color={"#fff"} size={22}>
              Mail
            </Text>
            <Text color={"#fff"} size={15}>
              Send a mail to a support person
            </Text>
          </Block>
        </Block>
      </TouchableOpacity>
      <TouchableOpacity onPress={sendMsgToWhatsapp}>
        <Block style={[styles.shadow, { backgroundColor: "#b9f6ca" }]} row>
          <MaterialCommunityIcons size={35} name="whatsapp" color={"#00c853"} />
          <Block>
            <Text color={"#000"} size={22}>
              WhatsApp
            </Text>
            <Text color={"#000"} size={15}>
              Resolve your dispute via chat
            </Text>
          </Block>
        </Block>
      </TouchableOpacity>
    </Block>
  );
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: theme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 8,
    shadowOpacity: 0.2,
    backgroundColor: materialTheme.COLORS.PRIMARY,
    height: hp("15%"),
    width: wp("80%"),
    justifyContent: "space-around",
    alignItems: "center",
    borderRadius: 7,
  },
});

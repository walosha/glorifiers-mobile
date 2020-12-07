import React from "react";
import { View, Text } from "react-native";
import { Container, Header, Content, Card, CardItem, Body } from "native-base";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { materialTheme } from "../constants";

export default function ContactSupport() {
  return (
    <View>
      <Card>
        <MaterialCommunityIcons
          size={16}
          name="phone-in-talk-outline"
          color={
            focused ? materialTheme.COLORS.PRIMARY : materialTheme.COLORS.MUTED
          }
        />
      </Card>
      <Card>
        chat
        <MaterialCommunityIcons
          size={16}
          name="ios-chatbox-sharp"
          color={
            focused ? materialTheme.COLORS.PRIMARY : materialTheme.COLORS.MUTED
          }
        />
      </Card>
      <Card>
        mail
        <MaterialCommunityIcons
          size={16}
          name="phone-in-talk-outline"
          color={
            focused ? materialTheme.COLORS.PRIMARY : materialTheme.COLORS.MUTED
          }
        />
      </Card>
      <Card>
        Telegram
        <MaterialCommunityIcons
          size={16}
          name="phone-in-talk-outline"
          color={
            focused ? materialTheme.COLORS.PRIMARY : materialTheme.COLORS.MUTED
          }
        />
      </Card>
    </View>
  );
}

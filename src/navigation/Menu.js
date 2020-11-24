import React from "react";
import {
  TouchableWithoutFeedback,
  ScrollView,
  StyleSheet,
  Image,
} from "react-native";
import { Block, Text, theme } from "galio-framework";
import { useSafeArea } from "react-native-safe-area-context";
import { Icon, Drawer as DrawerCustomItem } from "../components/";
import { materialTheme } from "../constants/";

const screens = [
  "Home",
  "Notifications",
  "Settings",
  "Contact Support",
  "My Ticket",
  "Get Help",
  "Log Out",
];

function CustomDrawerContent({
  drawerPosition,
  navigation,
  profile,
  focused,
  state,
  ...rest
}) {
  const insets = useSafeArea();

  return (
    <Block
      style={styles.container}
      forceInset={{ top: "always", horizontal: "never" }}
    >
      <Block flex={0.25} style={styles.header}>
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate("Profile")}
        >
          <Block style={styles.profile}>
            <Text h5 color={materialTheme.COLORS.PRIMARY}>
              Seun Bankole Oyesanya
            </Text>
          </Block>
        </TouchableWithoutFeedback>
        <Block row space="between">
          <Text size={16} color={materialTheme.COLORS.WARNING}>
            Account Number: 0095432012
          </Text>
          <Icon
            color={materialTheme.COLORS.PRIMARY}
            name="star"
            family="MaterialIcons"
            size={14}
          />
        </Block>
        <Block row space="between">
          <Text size={16} color={materialTheme.COLORS.WARNING}>
            App Version: 1.0.1
          </Text>
        </Block>
      </Block>
      <Block flex style={{ marginTop: 17, paddingLeft: 7, paddingRight: 14 }}>
        <ScrollView
          contentContainerStyle={[
            {
              paddingTop: insets.top * 0.4,
              paddingLeft: drawerPosition === "left" ? insets.left : 0,
              paddingRight: drawerPosition === "right" ? insets.right : 0,
            },
          ]}
          showsVerticalScrollIndicator={false}
        >
          {screens.map((item, index) => {
            return (
              <DrawerCustomItem
                title={item}
                key={index}
                navigation={navigation}
                focused={state.index === index}
              />
            );
          })}
        </ScrollView>
      </Block>
    </Block>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: "#fff",
    paddingHorizontal: 28,
    paddingBottom: theme.SIZES.BASE,
    paddingTop: theme.SIZES.BASE * 2,
    justifyContent: "center",
  },
  footer: {
    paddingHorizontal: 28,
    justifyContent: "flex-end",
  },
  profile: {
    marginBottom: theme.SIZES.BASE / 2,
  },
  avatar: {
    height: 40,
    width: 40,
    borderRadius: 20,
    marginBottom: theme.SIZES.BASE,
  },
  pro: {
    backgroundColor: materialTheme.COLORS.LABEL,
    paddingHorizontal: 6,
    marginRight: 8,
    borderRadius: 4,
    height: 19,
    width: 38,
  },
  seller: {
    marginRight: 16,
  },
});

export default CustomDrawerContent;

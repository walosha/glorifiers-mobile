import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { Block, Text, theme } from "galio-framework";
import { connect } from "react-redux";
import Icon from "./Icon";
import materialTheme from "../constants/Theme";
import { LogOutUser } from "../redux/actions";

const DrawerItem = ({ title, focused, navigation, LogOutUser }) => {
  const renderIcon = () => {
    switch (title) {
      case "Shop By Category":
        return (
          <Icon
            size={16}
            name="shop"
            family="GalioExtra"
            color={focused ? "white" : materialTheme.COLORS.MUTED}
          />
        );
      case "Account":
        return (
          <Icon
            size={16}
            name="circle-10"
            family="GalioExtra"
            color={focused ? "white" : materialTheme.COLORS.MUTED}
          />
        );
      case "Settings":
        return (
          <Icon
            size={16}
            name="gears"
            family="font-awesome"
            color={focused ? "white" : materialTheme.COLORS.MUTED}
          />
        );

      case "Shopping Cart":
        return (
          <Icon
            size={16}
            name="shopping-cart"
            family="Entypo"
            color={focused ? "white" : materialTheme.COLORS.MUTED}
          />
        );

      case "Favourite":
        return (
          <Icon
            size={16}
            name="heart"
            family="Entypo"
            color={focused ? "white" : materialTheme.COLORS.MUTED}
          />
        );
      case "Order History":
        return (
          <Icon
            size={16}
            name="history"
            family="MaterialIcons"
            color={focused ? "white" : materialTheme.COLORS.MUTED}
          />
        );
      case "Contact Us":
        return (
          <Icon
            size={16}
            name="contact-phone"
            family="MaterialIcons"
            color={focused ? "white" : materialTheme.COLORS.MUTED}
          />
        );
      case "Log Out":
        return (
          <Icon
            size={16}
            name="ios-log-out"
            family="ionicon"
            color={focused ? "white" : materialTheme.COLORS.MUTED}
          />
        );

      default:
        return null;
    }
  };

  return (
    <TouchableOpacity
      style={{ height: 55 }}
      onPress={() => {
        title === "Log Out" && LogOutUser();
        navigation.navigate(title.split(" ").join(""));
      }}
    >
      <Block
        flex
        row
        style={[
          styles.defaultStyle,
          focused ? [styles.activeStyle, styles.shadow] : null,
        ]}
      >
        <Block middle flex={0.1} style={{ marginRight: 28 }}>
          {renderIcon()}
        </Block>
        <Block row center flex={0.9}>
          <Text size={18} color={focused ? "white" : "black"}>
            {title}
          </Text>
        </Block>
      </Block>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  defaultStyle: {
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  activeStyle: {
    backgroundColor: materialTheme.COLORS.ACTIVE,
    borderRadius: 4,
  },
  shadow: {
    shadowColor: theme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 8,
    shadowOpacity: 0.2,
  },
  pro: {
    backgroundColor: materialTheme.COLORS.LABEL,
    paddingHorizontal: 6,
    marginLeft: 8,
    borderRadius: 2,
    height: 16,
    width: 36,
  },
});

export default DrawerItem;

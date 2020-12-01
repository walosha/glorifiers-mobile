import React from "react";
import { TouchableOpacity, StyleSheet, View, Dimensions } from "react-native";
import { Block, Text, theme } from "galio-framework";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useDispatch } from "react-redux";
import Icon from "./Icon";
import materialTheme from "../constants/Theme";
import { LOGOUT_USER } from "../store/types";

const { height } = Dimensions.get("screen");

const DrawerItem = ({ title, focused, navigation }) => {
  const dispatch = useDispatch();
  const renderIcon = () => {
    switch (title) {
      case "Home":
        return (
          <View style={styles.iconContainer}>
            <Icon
              size={16}
              name="iconfontdesktop"
              family="AntDesign"
              color={
                focused
                  ? materialTheme.COLORS.PRIMARY
                  : materialTheme.COLORS.MUTED
              }
            />
          </View>
        );
      case "Loan Application":
        return (
          <View style={styles.iconContainer}>
            <MaterialCommunityIcons
              size={16}
              name="sack"
              color={
                focused
                  ? materialTheme.COLORS.PRIMARY
                  : materialTheme.COLORS.MUTED
              }
            />
          </View>
        );
      case "Notifications":
        return (
          <View style={styles.iconContainer}>
            <Icon
              size={16}
              name="bell"
              family="Entypo"
              color={
                focused
                  ? materialTheme.COLORS.PRIMARY
                  : materialTheme.COLORS.MUTED
              }
            />
          </View>
        );
      case "Settings":
        return (
          <View style={styles.iconContainer}>
            <Icon
              size={16}
              name="setting"
              family="AntDesign"
              color={
                focused
                  ? materialTheme.COLORS.PRIMARY
                  : materialTheme.COLORS.MUTED
              }
            />
          </View>
        );

      case "Contact Support":
        return (
          <View style={styles.iconContainer}>
            <Icon
              size={16}
              name="call"
              family="Ionicons"
              color={
                focused
                  ? materialTheme.COLORS.PRIMARY
                  : materialTheme.COLORS.MUTED
              }
            />
          </View>
        );

      case "My Ticket":
        return (
          <View style={styles.iconContainer}>
            <Icon
              size={16}
              name="wechat"
              family="AntDesign"
              color={
                focused
                  ? materialTheme.COLORS.PRIMARY
                  : materialTheme.COLORS.MUTED
              }
            />
          </View>
        );
      case "Get Help":
        return (
          <View style={styles.iconContainer}>
            <Icon
              size={16}
              name="mail"
              family="AntDesign"
              color={
                focused
                  ? materialTheme.COLORS.PRIMARY
                  : materialTheme.COLORS.MUTED
              }
            />
          </View>
        );

      case "Log Out":
        return (
          <View style={styles.iconContainer}>
            <Icon
              size={16}
              name="ios-log-out"
              family="ionicon"
              color={
                focused
                  ? materialTheme.COLORS.PRIMARY
                  : materialTheme.COLORS.MUTED
              }
            />
          </View>
        );

      default:
        return null;
    }
  };

  return (
    <TouchableOpacity
      style={title === "Log Out" ? { height: height * 0.4 } : { height: 55 }}
      onPress={() => {
        title === "Log Out" && dispatch({ type: LOGOUT_USER });
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
          <Text
            size={18}
            color={focused ? materialTheme.COLORS.PRIMARY : "#FFF"}
          >
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
  iconContainer: {
    borderRadius: 50,
    height: 35,
    width: 35,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
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

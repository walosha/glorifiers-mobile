import React, { useEffect, useState, FR, Fragment } from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Platform,
  Dimensions,
} from "react-native";
import { Button, Block, NavBar, Input, Text, theme } from "galio-framework";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useDispatch, useSelector } from "react-redux";
import { numberWithCommas } from "../helpers";
import { materialTheme } from "../constants";
import { getWallet } from "../store/actions";
import Icon from "./Icon";

const { height, width } = Dimensions.get("window");
const iPhoneX = () =>
  Platform.OS === "ios" &&
  (height === 812 || width === 812 || height === 896 || width === 896);

const WifiButton = ({ isWhite, style, navigation }) => (
  <TouchableOpacity style={[styles.button, style]} onPress={() => {}}>
    <Icon
      size={24}
      family="Feather"
      name="wifi-off"
      color={
        theme.COLORS[
          isWhite
            ? materialTheme.COLORS.SWITCH_ON
            : materialTheme.COLORS.SWITCH_OFF
        ]
      }
    />
  </TouchableOpacity>
);

const ReloadButton = ({ isWhite, style, navigation }) => (
  <View style={[styles.button, style]}>
    <Icon
      size={24}
      family="AntDesign"
      name="reload1"
      color={theme.COLORS[isWhite ? "WHITE" : "WARNING"]}
    />
  </View>
);
const Header = ({
  back,
  title,
  white,
  tabTitleLeft,
  transparent,
  navigation,
  search,
  tabs,
}) => {
  const dispatch = useDispatch();
  const { balance } = useSelector(({ homeScreen }) => homeScreen);
  const [state, setState] = useState(1);

  useEffect(() => {
    getWallet(dispatch);
  }, [state]);

  const onReloadButtonPress = () => {
    setState((prev) => prev + 1);
  };

  const handleLeftPress = () => {
    return back ? navigation.goBack() : navigation.openDrawer();
  };

  const renderRight = () => {
    if (title === "")
      return (
        <Fragment>
          <WifiButton navigation={navigation} isWhite={white} />
          <TouchableOpacity onPress={onReloadButtonPress}>
            <ReloadButton navigation={navigation} isWhite={white} />
          </TouchableOpacity>
        </Fragment>
      );

    return null;
  };

  const renderButtons = () => {
    const actionPress = (route) => {
      navigation.navigate(route);
    };
    return (
      <Block style={styles.tabs}>
        <TouchableOpacity
          onPress={() => actionPress("FundPurse")}
          style={styles.action}
        >
          <Text size={12} style={styles.actionText}>
            FUND WALLET
          </Text>
        </TouchableOpacity>
        <View style={{ marginHorizontal: 2 }} />
        <TouchableOpacity
          onPress={() => actionPress("TransferToAccount")}
          style={styles.action}
        >
          <Text size={12} style={styles.actionText}>
            TRANSFER TO ACCOUNT
          </Text>
        </TouchableOpacity>
      </Block>
    );
  };

  const renderBalance = () => {
    return (
      <Block center>
        <Text
          size={37}
          style={{ fontFamily: "montserrat-regular" }}
          color="#fff"
        >
          {"\u20A6"}
          {numberWithCommas(balance)}
        </Text>
      </Block>
    );
  };

  const renderHeader = () => {
    if (search || tabs) {
      return (
        <Block
          style={{
            backgroundColor: materialTheme.COLORS.PRIMARY,
            paddingVertical: 15,
            paddingHorizontal: 15,
          }}
          center
        >
          {renderBalance()}
          {tabs ? renderButtons() : null}
        </Block>
      );
    }
    return null;
  };

  const noShadow = ["Search", "Categories", "Deals", "Profile"].includes(title);
  const headerStyles = [
    !noShadow ? styles.shadow : null,
    transparent ? { backgroundColor: "rgba(0,0,0,0)" } : null,
  ];

  return (
    <Block style={headerStyles}>
      <NavBar
        title={title}
        style={styles.navbar}
        transparent={transparent}
        right={renderRight()}
        rightStyle={{ alignItems: "center" }}
        leftStyle={{
          flex: 0.3,
        }}
        leftIconName={back ? "chevron-left" : "navicon"}
        leftIconColor={
          white ? theme.COLORS.WHITE : materialTheme.COLORS.PRIMARY
        }
        titleStyle={[styles.title]}
        onLeftPress={handleLeftPress}
      />
      {renderHeader()}
    </Block>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 12,
    position: "relative",
  },
  title: {
    width: "100%",
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
  action: {
    width: width * 0.47,
    backgroundColor: materialTheme.COLORS.LABEL,
    height: hp("9%"),
    justifyContent: "space-evenly",
    alignItems: "center",
    borderRadius: 12,
    textAlign: "center",
  },
  actionText: {
    margin: 4,
  },
  navbar: {
    paddingVertical: 0,
    paddingBottom: theme.SIZES.BASE * 1.5,
    paddingTop: iPhoneX ? theme.SIZES.BASE * 2 : theme.SIZES.BASE,
    zIndex: 5,
    backgroundColor: materialTheme.COLORS.PRIMARY,
  },
  shadow: {
    backgroundColor: theme.COLORS.WHITE,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.2,
    elevation: 3,
  },
  notify: {
    backgroundColor: theme.COLORS.PRIMARY,
    borderRadius: 9,
    height: theme.SIZES.BASE / 1,
    width: theme.SIZES.BASE / 1,
    position: "absolute",
    top: 2,
    right: 0,
  },
  header: {
    backgroundColor: theme.COLORS.WHITE,
  },
  divider: {
    borderRightWidth: 0.3,
    borderRightColor: theme.COLORS.MUTED,
  },
  search: {
    height: 48,
    width: width - 32,
    marginHorizontal: 16,
    borderWidth: 1,
    borderRadius: 3,
  },
  tabs: {
    marginBottom: 24,
    marginTop: 10,
    elevation: 4,
    flexDirection: "row",
    padding: 12,
  },
  tab: {
    backgroundColor: materialTheme.COLORS.LABEL,
    width: width * 0.5,
    borderRadius: 10,
    borderWidth: 0,
    height: 58,
    elevation: 0,
    fontFamily: "montserrat-regular",
    marginRight: 4,
  },
  tabTitle: {
    lineHeight: 19,
    fontWeight: "300",
    color: "#FFF",
  },
});

export default Header;

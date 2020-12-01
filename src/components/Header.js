import React from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Platform,
  Dimensions,
  Alert,
} from "react-native";
import { useSelector } from "react-redux";
import { Button, Block, NavBar, Input, Text, theme } from "galio-framework";
import Icon from "./Icon";
import { materialTheme } from "../constants";

const { height, width } = Dimensions.get("window");
const iPhoneX = () =>
  Platform.OS === "ios" &&
  (height === 812 || width === 812 || height === 896 || width === 896);

const getCurrentDate = () => {
  const monthArray = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  var date = new Date().getDate();
  var month = new Date().getMonth();
  var year = new Date().getFullYear();

  return date + "-" + monthArray[month] + "-" + year; //format: dd-mm-yyyy;
};
const SearchButton = ({ isWhite, style, navigation }) => (
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
  <TouchableOpacity style={[styles.button, style]} onPress={() => {}}>
    <Icon
      size={24}
      family="AntDesign"
      name="reload1"
      color={theme.COLORS[isWhite ? "WHITE" : "WARNING"]}
    />
  </TouchableOpacity>
);
export default class Header extends React.Component {
  handleLeftPress = () => {
    const { back, navigation } = this.props;
    return back ? navigation.goBack() : navigation.openDrawer();
  };

  renderRight = () => {
    const { white, title, navigation } = this.props;

    if (title === "")
      return [
        <SearchButton navigation={navigation} isWhite={white} />,
        <ReloadButton navigation={navigation} isWhite={white} />,
      ];

    return null;
  };

  renderSearch = () => {
    const { navigation } = this.props;
    return (
      <Input
        right
        color="black"
        style={styles.search}
        placeholder="Search for all products..."
        onChangeText={(text) => this.props.searchItem(text)}
        iconContent={
          <Icon
            size={16}
            color={theme.COLORS.MUTED}
            name="magnifying-glass"
            family="entypo"
          />
        }
      />
    );
  };

  renderButtons = () => {
    const { navigation, tabTitleLeft } = this.props;

    const actionPress = (route) => {
      navigation.navigate(route);
    };
    return (
      <Block style={styles.tabs}>
        <TouchableOpacity
          onPress={() => actionPress("FundPurse")}
          style={styles.action}
        >
          <Text style={styles.actionText}>FUND PURSE</Text>
        </TouchableOpacity>
        <View style={{ marginHorizontal: 2 }} />
        <TouchableOpacity
          onPress={() => actionPress("TransferToAccount")}
          style={styles.action}
        >
          <Text style={styles.actionText}>TRANSFER TO ACCOUNT</Text>
        </TouchableOpacity>
      </Block>
    );
  };

  renderBalance = () => {
    const { navigation, tabTitleLeft } = this.props;

    return (
      <Block center>
        <Text
          size={37}
          style={{ fontFamily: "montserrat-regular" }}
          color="#fff"
        >
          =N= 45,252.25
        </Text>
      </Block>
    );
  };

  renderHeader = () => {
    const { search, tabs } = this.props;
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
          {search ? this.renderSearch() : null}
          {this.renderBalance()}
          {tabs ? this.renderButtons() : null}
        </Block>
      );
    }
    return null;
  };

  render() {
    const { back, title, white, transparent, navigation } = this.props;
    const noShadow = ["Search", "Categories", "Deals", "Profile"].includes(
      title
    );
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
          right={this.renderRight()}
          rightStyle={{ alignItems: "center" }}
          leftStyle={{
            flex: 0.3,
          }}
          leftIconName={back ? "chevron-left" : "navicon"}
          leftIconColor={
            white ? theme.COLORS.WHITE : materialTheme.COLORS.PRIMARY
          }
          titleStyle={[styles.title]}
          onLeftPress={this.handleLeftPress}
        />
        {this.renderHeader()}
      </Block>
    );
  }
}

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
    height: 55,
    justifyContent: "space-evenly",
    alignItems: "center",
    borderRadius: 12,
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

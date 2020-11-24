import React from "react";
import { withNavigation } from "@react-navigation/compat";
import { connect } from "react-redux";
import {
  TouchableOpacity,
  StyleSheet,
  Platform,
  Dimensions,
} from "react-native";
import { useSelector } from "react-redux";
import { Button, Block, NavBar, Input, Text, theme } from "galio-framework";
import Icon from "./Icon";
import { materialTheme } from "../constants";

const { height, width } = Dimensions.get("window");
const iPhoneX = () =>
  Platform.OS === "ios" &&
  (height === 812 || width === 812 || height === 896 || width === 896);

const BasketButton = ({ isWhite, style, navigation }) => {
  return (
    <TouchableOpacity
      style={[styles.button, style]}
      onPress={() => navigation.navigate("ShoppingCart")}
    >
      <Icon
        family="Entypo"
        size={16}
        name="shopping-cart"
        color={theme.COLORS[isWhite ? "WHITE" : "WARNING"]}
      />
    </TouchableOpacity>
  );
};

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
  <TouchableOpacity
    style={[styles.button, style]}
    onPress={() => navigation.navigate("search")}
  >
    <Icon
      size={16}
      family="entypo"
      name="magnifying-glass"
      color={theme.COLORS[isWhite ? "WHITE" : "WARNING"]}
    />
  </TouchableOpacity>
);

export default class Header extends React.Component {
  titleArr = ["search"];

  handleLeftPress = () => {
    const { back, navigation } = this.props;
    return back ? navigation.goBack() : navigation.openDrawer();
  };

  renderRight = () => {
    const { white, title, navigation } = this.props;

    if (title === "Cart")
      return (
        <SearchButton key="chat-home" navigation={navigation} isWhite={white} />
      );
    if (this.titleArr.includes(title)) {
      return [
        <BasketButton
          key="basket-title"
          navigation={navigation}
          isWhite={white}
        />,
      ];
    }

    return [
      <SearchButton key="chat-home" navigation={navigation} isWhite={white} />,
      <BasketButton
        key="basket-home"
        navigation={navigation}
        isWhite={white}
      ></BasketButton>,
    ];
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

  renderTabs = () => {
    const { navigation, tabTitleLeft } = this.props;

    return (
      <Block row style={styles.tabs}>
        <Button
          shadowless
          style={[styles.tab, styles.divider]}
          onPress={() => {}}
        >
          <Block row middle>
            <Icon
              name="filter"
              family="feather"
              style={{ paddingRight: 8, color: materialTheme.COLORS.PRIMARY }}
            />
            <Text size={16} style={styles.tabTitle}>
              {tabTitleLeft || "Filter"}
            </Text>
          </Block>
        </Button>
        <Button
          shadowless
          style={styles.tab}
          onPress={() => navigation.navigate("Account")}
        >
          <Block row middle>
            <Text size={16} style={styles.tabTitle}>
              {getCurrentDate()}
            </Text>
          </Block>
        </Button>
      </Block>
    );
  };

  renderHeader = () => {
    const { search, tabs } = this.props;
    if (search || tabs) {
      return (
        <Block center>
          {search ? this.renderSearch() : null}
          {tabs ? this.renderTabs() : null}
        </Block>
      );
    }
    return null;
  };

  render() {
    const { back, title, white, transparent, navigation } = this.props;
    // const { routeName } = navigation.state;
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
            paddingTop: 2,
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
  },
  tab: {
    backgroundColor: theme.COLORS.TRANSPARENT,
    width: width * 0.5,
    borderRadius: 0,
    borderWidth: 0,
    height: 24,
    elevation: 0,
  },
  tabTitle: {
    lineHeight: 19,
    fontWeight: "300",
    color: materialTheme.COLORS.PRIMARY,
  },
});

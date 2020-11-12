import React from "react";
import {
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
  TouchableOpacity,
  Platform,
} from "react-native";
import { Block, Text, theme } from "galio-framework";
import { useDispatch, useSelector } from "react-redux";
import { materialTheme } from "../constants";
import { HeaderHeight } from "../constants/utils";

const { width, height } = Dimensions.get("screen");
const thumbMeasure = (width - 48 - 32) / 3;

const Profile = ({ navigation }) => {
  const {
    cartLength,
    wishLength,
    ViewedItems,
    userDetails: { user_display_name, user_email, user_nicename },
  } = useSelector(
    ({ signInScreen, shoppingCart, wishlistScreen, ViewedItems }) => ({
      userDetails: signInScreen,
      cartLength: shoppingCart.cart.length,
      wishLength: wishlistScreen.wishlist.length,
      ViewedItems: ViewedItems.viewed,
    })
  );

  return (
    <Block flex style={styles.profile}>
      <Block flex middle>
        <Text
          bold
          size={16}
          style={{
            color: materialTheme.COLORS.PRIMARY,
            marginBottom: 8,
          }}
        >
          email: {user_email}
        </Text>
        <Text
          bold
          size={16}
          style={{
            color: materialTheme.COLORS.PRIMARY,
            marginBottom: 8,
          }}
        >
          Name: {user_display_name}
        </Text>
      </Block>
      <Block flex style={styles.options}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Block row space="between" style={{ padding: theme.SIZES.BASE }}>
            <Block middle>
              <Text
                bold
                size={12}
                style={{
                  color: materialTheme.COLORS.PRIMARY,
                  marginBottom: 8,
                }}
              >
                {cartLength}
              </Text>
              <Text
                style={{
                  color: materialTheme.COLORS.PRIMARY,
                }}
                muted
                size={12}
              >
                carts
              </Text>
            </Block>
            <Block middle>
              <Text
                bold
                size={12}
                style={{
                  color: materialTheme.COLORS.PRIMARY,
                  marginBottom: 8,
                }}
              >
                {wishLength}
              </Text>
              <Text
                style={{
                  color: materialTheme.COLORS.PRIMARY,
                }}
                muted
                size={12}
              >
                Wishlist
              </Text>
            </Block>
            <Block middle>
              <Text
                bold
                size={12}
                style={{
                  color: materialTheme.COLORS.PRIMARY,
                  marginBottom: 8,
                }}
              >
                {ViewedItems.length}
              </Text>
              <Text
                style={{
                  color: materialTheme.COLORS.PRIMARY,
                }}
                muted
                size={12}
              >
                Viewed Items
              </Text>
            </Block>
          </Block>
          <Block
            row
            space="between"
            style={{ paddingVertical: 16, alignItems: "baseline" }}
          >
            <Text size={16}>Recently Items</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Home")}>
              <Text size={12} color={theme.COLORS.PRIMARY}></Text>
            </TouchableOpacity>
          </Block>
          <Block style={{ paddingBottom: -HeaderHeight * 2 }}>
            <Block row space="between" style={{ flexWrap: "wrap" }}>
              {ViewedItems.map((product, imgIndex) => (
                <TouchableOpacity
                  key={imgIndex}
                  onPress={() =>
                    navigation.navigate("ProductDescription", product)
                  }
                >
                  <Image
                    source={{ uri: product.image1 }}
                    key={`viewed-${product + imgIndex}`}
                    resizeMode="cover"
                    style={styles.thumb}
                  />
                </TouchableOpacity>
              ))}
            </Block>
          </Block>
        </ScrollView>
      </Block>
    </Block>
  );
};

const styles = StyleSheet.create({
  profile: {
    marginTop: Platform.OS === "android" ? -HeaderHeight : 0,
    marginBottom: -HeaderHeight * 2,
  },
  profileImage: {
    width: width * 1.1,
    height: "auto",
  },
  profileContainer: {
    width: width,
    height: height / 2,
  },
  profileDetails: {
    paddingTop: theme.SIZES.BASE * 4,
    justifyContent: "flex-end",
    position: "relative",
  },
  profileTexts: {
    paddingHorizontal: theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE * 2,
    zIndex: 2,
  },
  pro: {
    backgroundColor: materialTheme.COLORS.LABEL,
    paddingHorizontal: 6,
    marginRight: theme.SIZES.BASE / 2,
    borderRadius: 4,
    height: 19,
    width: 38,
  },
  seller: {
    marginRight: theme.SIZES.BASE / 2,
  },
  options: {
    position: "relative",
    padding: theme.SIZES.BASE,
    marginHorizontal: theme.SIZES.BASE,
    marginTop: -theme.SIZES.BASE * 7,
    borderTopLeftRadius: 13,
    borderTopRightRadius: 13,
    backgroundColor: theme.COLORS.WHITE,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 8,
    shadowOpacity: 0.2,
    zIndex: 2,
  },
  thumb: {
    borderRadius: 4,
    marginVertical: 4,
    alignSelf: "center",
    width: thumbMeasure,
    height: thumbMeasure,
  },
  gradient: {
    zIndex: 1,
    left: 0,
    right: 0,
    bottom: 0,
    height: "30%",
    position: "absolute",
  },
});

export default Profile;

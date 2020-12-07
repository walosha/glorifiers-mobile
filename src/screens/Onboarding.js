import React, { useEffect, useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  StatusBar,
  View,
  Dimensions,
} from "react-native";
import { connect } from "react-redux";
import { Block, Button, Text, theme } from "galio-framework";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { materialTheme } from "../constants/";
const { height, width } = Dimensions.get("screen");
import { images } from "@/constants";

const Onboarding = ({ navigation }) => {
  return (
    <Block flex style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Block flex center>
        <ImageBackground
          source={{ uri: images.OnboardingImg }}
          style={{
            height: height,
            width: width,
            marginTop: "-55%",
            zIndex: 1,
          }}
        />
      </Block>
      <Block flex space="between" style={styles.padded}>
        <Block flex space="around" style={{ zIndex: 2 }}>
          <Block>
            <Block>
              <Text
                style={{ fontWeight: "bold", fontFamily: "montserrat-regular" }}
                color={materialTheme.COLORS.PRIMARY}
                size={40}
              >
                Glorifiers savings & loan
              </Text>
            </Block>
            <Text size={16} color="#fff">
              ...Savings. Bills. Instant Loans. Smart Investments. Credit
              Reports
            </Text>
          </Block>
          <Block row center>
            <Button
              shadowless
              style={styles.button}
              color={materialTheme.COLORS.PRIMARY}
              onPress={() => navigation.navigate("SignIn")}
            >
              Sign In
            </Button>
            <Button
              shadowless
              style={styles.button}
              color={materialTheme.COLORS.PRIMARY}
              onPress={() => navigation.navigate("Register")}
            >
              Register
            </Button>
          </Block>
        </Block>
      </Block>
    </Block>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.COLORS.BLACK,
  },
  padded: {
    paddingHorizontal: theme.SIZES.BASE * 2,
    position: "relative",
    bottom: theme.SIZES.BASE,
  },
  button: {
    width: wp("45%"),
    height: theme.SIZES.BASE * 3,
    shadowRadius: 0,
    shadowOpacity: 0,
    borderRadius: 25,
    margin: 5,
  },
  lottie: {
    width: 100,
    height: 100,
  },
});

const mapStatetOPprops = ({ signInScreen }) => ({
  signInScreen,
});

export default connect(mapStatetOPprops)(Onboarding);

import React, { useEffect, useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  StatusBar,
  View,
  Dimensions,
} from "react-native";
import AnimatedLoader from "react-native-animated-loader";
import AsyncStorage from "@react-native-community/async-storage";
import { connect } from "react-redux";
import { Block, Button, Text, theme } from "galio-framework";
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
              <Text color="rgb(246,155,63)" size={40}>
                Health Clinic
              </Text>
            </Block>
            <Text size={16} color="#fff">
              ...home to household and other general utility items
            </Text>
          </Block>
          <Block center>
            <Button
              shadowless
              style={styles.button}
              color={materialTheme.COLORS.BUTTON_COLOR}
              onPress={() => navigation.navigate("SignIn")}
            >
              Launch App
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
    width: width - theme.SIZES.BASE * 4,
    height: theme.SIZES.BASE * 3,
    shadowRadius: 0,
    shadowOpacity: 0,
    borderRadius: 25,
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

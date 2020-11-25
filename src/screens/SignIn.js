import React, { useState, useRef, useEffect } from "react";
import {
  StyleSheet,
  ImageBackground,
  Dimensions,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
} from "react-native";
import { Block, Text, Button as GaButton, theme } from "galio-framework";
import { useDispatch } from "react-redux";
import { signInUser, resetSignScreen } from "../store/actions";
import { Button, Icon, Input } from "../components/";
import { images, materialTheme } from "../constants";
const { width, height } = Dimensions.get("screen");

const DismissKeyboard = ({ children, navigation }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

const SignInScreen = ({
  signInUser,
  navigation,
  error,
  isLoading,
  resetSignScreen,
}) => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const secondTextInput = useRef(null);

  const dispatch = useDispatch();

  useEffect(() => {
    // resetSignScreen();
  }, []);

  function onButnPress() {
    dispatch({ type: "FAKE_LOGIN" });
    // signInUser({ username, password }, navigation);
  }

  return (
    <DismissKeyboard>
      <Block flex middle>
        <ImageBackground
          source={{ uri: images.signInImg }}
          style={styles.imageBackgroundContainer}
          imageStyle={styles.imageBackground}
        >
          <Block flex middle>
            <Block style={styles.registerContainer}>
              <Block flex space="evenly">
                <Block flex={0.4} middle style={styles.socialConnect}>
                  <Block flex={0.5} middle>
                    <Text
                      style={{
                        fontFamily: "montserrat-regular",
                        textAlign: "center",
                      }}
                      color={materialTheme.COLORS.PRIMARY}
                      size={24}
                    >
                      Sign In
                    </Text>
                  </Block>

                  <Block
                    flex={0.5}
                    row
                    middle
                    space="between"
                    style={{ marginBottom: 18 }}
                  >
                    <GaButton
                      round
                      onlyIcon
                      shadowless
                      icon="twitter"
                      iconFamily="Font-Awesome"
                      iconColor={theme.COLORS.WHITE}
                      iconSize={theme.SIZES.BASE * 1.625}
                      color={materialTheme.COLORS.TWITTER}
                      style={[styles.social]}
                    />
                    <GaButton
                      round
                      onlyIcon
                      shadowless
                      icon="dribbble"
                      iconFamily="Font-Awesome"
                      iconColor={theme.COLORS.WHITE}
                      iconSize={theme.SIZES.BASE * 1.625}
                      color={materialTheme.COLORS.DRIBBBLE}
                      style={[styles.social, styles.shadow]}
                    />
                    <GaButton
                      round
                      onlyIcon
                      shadowless
                      icon="facebook"
                      iconFamily="Font-Awesome"
                      iconColor={theme.COLORS.WHITE}
                      iconSize={theme.SIZES.BASE * 1.625}
                      color={materialTheme.COLORS.FACEBOOK}
                      style={[styles.social, styles.shadow]}
                    />
                  </Block>
                </Block>
                <Block flex={0.1} middle>
                  <Text
                    style={{
                      fontFamily: "montserrat-regular",
                      textAlign: "center",
                    }}
                    muted
                    size={24}
                    color={materialTheme.COLORS.PRIMARY}
                  >
                    glorifiers savings & loan Mobile
                  </Text>
                </Block>
                <Block flex={1} middle space="around">
                  <Block center flex={0.9}>
                    <Block space="around">
                      <Block middle style={{ marginBottom: 15 }}>
                        <Block width={width * 0.8} style={{ marginBottom: 5 }}>
                          <Input
                            onSubmitEditing={() => {
                              //secondTextInput.current.focus();
                            }}
                            blurOnSubmit={false}
                            returnKeyType="next"
                            borderless
                            placeholder="Username"
                            onChangeText={(text) => setUserName(text)}
                            iconContent={
                              <Icon
                                size={16}
                                color={materialTheme.COLORS.ICON}
                                name="graduation-cap"
                                family="Entypo"
                                style={styles.inputIcons}
                              />
                            }
                          />
                        </Block>
                        <Block width={width * 0.8}>
                          <Input
                            ref={secondTextInput}
                            password
                            borderless
                            placeholder="Password"
                            viewPass
                            onChangeText={(text) => setPassword(text)}
                            iconContent={
                              <Icon
                                size={16}
                                color={materialTheme.COLORS.ICON}
                                name="key"
                                family="Entypo"
                                style={styles.inputIcons}
                              />
                            }
                          />
                        </Block>
                      </Block>
                      {error ? (
                        <Block middle>
                          <Text
                            style={{
                              paddingBottom: 4,
                              fontFamily: "montserrat-bold",
                            }}
                            size={14}
                            color={materialTheme.COLORS.WARNING}
                          >
                            {error}
                          </Text>
                        </Block>
                      ) : null}
                      <Block center>
                        <Button
                          loading={isLoading}
                          color="primary"
                          round
                          style={styles.createButton}
                          onPress={onButnPress}
                        >
                          <Text
                            style={{ fontFamily: "montserrat-bold" }}
                            size={14}
                            color={materialTheme.COLORS.WHITE}
                          >
                            Sign In
                          </Text>
                        </Button>
                        <TouchableOpacity
                          onPress={() => navigation.navigate("Register")}
                        >
                          <Text
                            style={{
                              fontFamily: "montserrat-bold",
                              textDecorationColor: materialTheme.COLORS.PRIMARY,
                              textDecorationStyle: "solid",
                              textDecorationLine: "underline",
                            }}
                            size={14}
                            color={materialTheme.COLORS.PRIMARY}
                          >
                            If you dont have an account, kindly sign up.
                          </Text>
                        </TouchableOpacity>
                      </Block>
                    </Block>
                  </Block>
                </Block>
              </Block>
            </Block>
          </Block>
        </ImageBackground>
      </Block>
    </DismissKeyboard>
  );
};

const styles = StyleSheet.create({
  imageBackgroundContainer: {
    width: width,
    height: height,
    padding: 0,
    zIndex: 1,
  },
  imageBackground: {
    width: width,
    height: height,
  },
  registerContainer: {
    marginTop: 55,
    width: width * 0.9,
    height: height < 812 ? height * 0.8 : height * 0.8,
    backgroundColor: materialTheme.COLORS.WHITE,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 8,
    shadowOpacity: 0.1,
    elevation: 1,
    overflow: "hidden",
  },
  socialConnect: {
    backgroundColor: materialTheme.COLORS.WHITE,
    // borderBottomWidth: StyleSheet.hairlineWidth,
    // borderColor: "rgba(136, 152, 170, 0.3)"
  },
  socialButtons: {
    width: 120,
    height: 40,
    backgroundColor: "#fff",
    shadowColor: materialTheme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 8,
    shadowOpacity: 0.1,
    elevation: 1,
  },
  socialTextButtons: {
    color: materialTheme.COLORS.PRIMARY,
    fontWeight: "800",
    fontSize: 14,
  },
  inputIcons: {
    marginRight: 12,
    color: materialTheme.COLORS.ICON_INPUT,
  },
  inputs: {
    borderWidth: 1,
    borderColor: "#E3E3E3",
    borderRadius: 21.5,
  },
  passwordCheck: {
    paddingLeft: 2,
    paddingTop: 6,
    paddingBottom: 15,
  },
  createButton: {
    width: width * 0.5,
    marginTop: 25,
    marginBottom: 40,
  },
  social: {
    width: theme.SIZES.BASE * 3.5,
    height: theme.SIZES.BASE * 3.5,
    borderRadius: theme.SIZES.BASE * 1.75,
    justifyContent: "center",
    marginHorizontal: 10,
  },
});

const mapStateToProps = ({ signInScreen }) => ({
  error: signInScreen.error,
  isLoading: signInScreen.isLoading,
});

export default SignInScreen;

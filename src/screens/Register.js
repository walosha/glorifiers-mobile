import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  ImageBackground,
  Dimensions,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Loader from "react-native-modal-loader";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Block, Text, Button as GaButton, theme } from "galio-framework";
import { registerUser, userPasswordNotSame } from "../store/actions";
import { RESET_REGISTER_SCREEN } from "../store/types";
import { Icon, Input, Toast } from "../components/";
import { images, materialTheme } from "../constants";
const { width, height } = Dimensions.get("screen");

const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

export default Register = ({ navigation }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const dispatch = useDispatch();

  const { isLoading, error } = useSelector(
    ({ registerScreen }) => registerScreen
  );

  useEffect(() => {
    dispatch({ type: RESET_REGISTER_SCREEN });
  }, []);

  function onButnPress() {
    if (confirmPassword !== password) {
      return Toast("Password and Confirm password do not match!", "msgType");
    }

    registerUser(
      { firstName, lastName, phoneNumber, password, email },
      dispatch
    );
  }

  return (
    <DismissKeyboard>
      <ScrollView middle>
        <ImageBackground
          source={{ uri: images.registerInImg }}
          style={styles.imageBackgroundContainer}
          imageStyle={styles.imageBackground}
        >
          <Block middle>
            <Block style={styles.registerContainer}>
              <Block flex space="evenly">
                <Block flex={0.4} middle style={styles.socialConnect}>
                  <Block
                    flex={0.5}
                    row
                    middle
                    space="between"
                    style={{ marginBottom: 5 }}
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
                      style={[styles.social, styles.shadow]}
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
                <Block middle>
                  <Text
                    style={{
                      fontFamily: "montserrat-regular",
                      textAlign: "center",
                    }}
                    muted
                    size={24}
                    color={materialTheme.COLORS.WHITE}
                  >
                    Glorifiers Register !
                  </Text>
                </Block>
                <Block flex={1} middle space="between">
                  <Block center flex={0.9}>
                    <Block flex>
                      <Block style={{ marginBottom: 15 }} middle>
                        <Block width={width * 0.8} style={{ marginBottom: 5 }}>
                          <Input
                            borderless
                            placeholder="First Name"
                            onChangeText={(text) => setFirstName(text)}
                            iconContent={
                              <Icon
                                size={16}
                                color={materialTheme.COLORS.ICON}
                                name="person"
                                family="Ionicons"
                                style={styles.inputIcons}
                              />
                            }
                          />
                        </Block>

                        <Block width={width * 0.8}>
                          <Input
                            borderless
                            placeholder="Last Name"
                            onChangeText={(text) => setLastName(text)}
                            iconContent={
                              <Icon
                                size={16}
                                color={materialTheme.COLORS.ICON}
                                name="person"
                                family="Ionicons"
                                style={styles.inputIcons}
                              />
                            }
                          />
                        </Block>
                        <Block width={width * 0.8}>
                          <Input
                            borderless
                            keyboardType={"numeric"}
                            placeholder="Phone Number"
                            onChangeText={(text) => setPhoneNumber(text)}
                            iconContent={
                              <Icon
                                size={16}
                                color={materialTheme.COLORS.ICON}
                                name="mobile"
                                family="Entypo"
                                style={styles.inputIcons}
                              />
                            }
                          />
                        </Block>
                        <Block width={width * 0.8}>
                          <Input
                            borderless
                            placeholder="Email"
                            onChangeText={(text) => setEmail(text)}
                            iconContent={
                              <Icon
                                size={16}
                                color={materialTheme.COLORS.ICON}
                                name="email"
                                family="Entypo"
                                style={styles.inputIcons}
                              />
                            }
                          />
                        </Block>
                        <Block width={width * 0.8}>
                          <Input
                            viewPass
                            password
                            borderless
                            placeholder="Password"
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
                        <Block width={width * 0.8}>
                          <Input
                            viewPass
                            password
                            borderless
                            placeholder="Confirm Password"
                            onChangeText={(text) => setConfirmPassword(text)}
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
                        <Block style={{ backgroundColor: "#fff" }} middle>
                          <Text
                            style={{
                              paddingBottom: 4,
                              fontFamily: "montserrat-bold",
                            }}
                            size={12}
                            color={materialTheme.COLORS.ERROR}
                          >
                            {error}
                          </Text>
                        </Block>
                      ) : null}
                      <Loader
                        title={`Creating account:${email}`}
                        loading={isLoading}
                        color="#ff66be"
                      />
                      <Block flex center>
                        <GaButton
                          color="primary"
                          round
                          style={styles.createButton}
                          loading={isLoading}
                          onPress={onButnPress}
                        >
                          <Text
                            style={{ fontFamily: "montserrat-bold" }}
                            size={14}
                            color={materialTheme.COLORS.WHITE}
                          >
                            Sign Up
                          </Text>
                        </GaButton>
                        <TouchableOpacity
                          onPress={() => navigation.navigate("SignIn")}
                        >
                          <Text
                            style={{
                              fontFamily: "montserrat-bold",
                              textDecorationColor: materialTheme.COLORS.PRIMARY,
                              textDecorationStyle: "solid",
                              textDecorationLine: "underline",
                            }}
                            size={14}
                            color={materialTheme.COLORS.WHITE}
                          >
                            Kindly Sign In Here
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
      </ScrollView>
    </DismissKeyboard>
  );
};

const styles = StyleSheet.create({
  imageBackgroundContainer: {
    width: wp("100%"),
    height: hp("100%"),
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
    // backgroundColor: materialTheme.COLORS.WHITE,
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
    marginRight: 10,
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
    // marginTop: 15,
    // marginBottom: 40,
  },
  social: {
    width: theme.SIZES.BASE * 3.5,
    height: theme.SIZES.BASE * 3.5,
    borderRadius: theme.SIZES.BASE * 1.75,
    justifyContent: "center",
    marginHorizontal: 10,
  },
});

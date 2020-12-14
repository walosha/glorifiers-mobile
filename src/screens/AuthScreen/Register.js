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
import { Block, Text, Button as GaButton, theme } from "galio-framework";
import { registerUser, userPasswordNotSame } from "../../store/actions";
import { RESET_REGISTER_SCREEN } from "../../store/types";
import { Icon, Input, Toast } from "../../components/";
import { images, materialTheme } from "../../constants";
import styles from "./authStyles";

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
                    Register for Glorifiers !
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
                        <Block
                          style={{
                            backgroundColor: materialTheme.COLORS.PRIMARY,
                          }}
                          middle
                        >
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

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

    if (!firstName || !lastName || !phoneNumber || !email || !password) {
      return Toast("Please fill all inputs", "msgType");
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
          // source={{ uri: images.registerInImg }}
          style={styles.imageBackgroundContainer}
          imageStyle={styles.imageBackground}
        >
          <Block center>
            <Block style={styles.registerContainer}>
              <Block flex space="evenly">
                <Block center flex={1}>
                  <Text
                    style={{
                      fontFamily: "montserrat-regular",
                    }}
                    muted
                    size={34}
                    color={materialTheme.COLORS.PRIMARY}
                  >
                    Create Account
                  </Text>
                  <Block center>
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
                      <Loader loading={isLoading} color="#ff66be" />
                      <Block center>
                        <GaButton
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
                            Sign Up
                          </Text>
                        </GaButton>
                        <TouchableOpacity
                          onPress={() => navigation.navigate("SignIn")}
                          style={{ marginVertical: 7 }}
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

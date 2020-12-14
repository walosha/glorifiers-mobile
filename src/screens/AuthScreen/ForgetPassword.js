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
import Loader from "react-native-modal-loader";
import { useDispatch, useSelector } from "react-redux";
import { recoverPassword } from "../../store/actions";
import { RESET_SIGNIN_SCREEN } from "../../store/types";
import { Button, Icon, Input, Toast } from "../../components/";
import { images, materialTheme } from "../../constants";
const { width, height } = Dimensions.get("screen");
import { isValidEmail } from "../../helpers";
import styles from "./authStyles";

const DismissKeyboard = ({ children, navigation }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

const ForgetPasswordSreen = ({ navigation }) => {
  const [email, setEmail] = useState("");

  const dispatch = useDispatch();
  const { isLoading, error, message } = useSelector(
    ({ forgetpasswordScreen }) => forgetpasswordScreen
  );
  console.log({ isLoading, error, message });

  useEffect(() => {
    dispatch({ type: RESET_SIGNIN_SCREEN });
  }, []);

  function onButnPress() {
    if (!isValidEmail(email)) {
      Toast("Please enter a valid email address");
      return;
    }
    recoverPassword(email, dispatch);
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
                <Block flex={0.5} middle>
                  <Text
                    style={{
                      fontFamily: "montserrat-regular",
                      textAlign: "center",
                    }}
                    color={materialTheme.COLORS.WHITE}
                    size={24}
                  >
                    Forgot Password
                  </Text>
                </Block>

                <Block flex={0.1} middle>
                  <Text
                    style={{
                      fontFamily: "montserrat-regular",
                      textAlign: "center",
                    }}
                    muted
                    size={24}
                    color={materialTheme.COLORS.WHITE}
                  >
                    Let's recover your password
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
                      </Block>
                      {error ? (
                        <Block middle>
                          <Text
                            style={{
                              paddingBottom: 4,
                              fontFamily: "montserrat-bold",
                            }}
                            size={14}
                            color={"#fff"}
                          >
                            {error}
                          </Text>
                        </Block>
                      ) : null}
                      <Block center>
                        <Loader
                          title={`Logging with:${email}`}
                          loading={isLoading}
                          color="#ff66be"
                        />
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
                            Recover password
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
                            color={materialTheme.COLORS.WHITE}
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

export default ForgetPasswordSreen;

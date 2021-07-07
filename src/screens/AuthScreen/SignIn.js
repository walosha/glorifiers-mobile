import React, { useState, useRef, useEffect } from "react";
import {
  StyleSheet,
  ImageBackground,
  Dimensions,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  Image,
} from "react-native";
import { Block, Text, Button, theme } from "galio-framework";
import Loader from "react-native-modal-loader";
import { useDispatch, useSelector } from "react-redux";
import { signInUser } from "../../store/actions";
import { RESET_SIGNIN_SCREEN } from "../../store/types";
import { Icon, Input } from "../../components";
import { images, materialTheme } from "../../constants";
import styles from "./authStyles";

const { width, height } = Dimensions.get("screen");

const DismissKeyboard = ({ children, navigation }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

const SignInScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const secondTextInput = useRef(null);

  const dispatch = useDispatch();
  const { isLoading, error } = useSelector(({ signInScreen }) => signInScreen);

  useEffect(() => {
    dispatch({ type: RESET_SIGNIN_SCREEN });
  }, []);

  function onButnPress() {
    signInUser({ email, password }, dispatch);
  }

  function onFingerprintPress(params) {}

  return (
    <DismissKeyboard>
      <Block flex>
        <ImageBackground
          // source={{ uri: images.signInImg }}
          style={styles.imageBackgroundContainer}
          imageStyle={styles.imageBackground}
        >
          <Block style={styles.overlay} flex middle>
            <Block style={styles.registerContainer}>
              <Block flex space="evenly">
                <Block>
                  <Text
                    style={{
                      fontFamily: "montserrat-regular",
                      fontSize: 25,
                      fontWeight: "bold",
                      color: materialTheme.COLORS.PRIMARY,
                    }}
                  >
                    LOGIN
                  </Text>
                  <Text
                    style={{
                      fontFamily: "montserrat-regular",
                      color: materialTheme.COLORS.BLACK,
                    }}
                    size={17}
                  >
                    Securely login to your glorifiers account
                  </Text>
                </Block>
                <Block flex={1} middle space="around">
                  <Block center flex={0.9}>
                    <Block space="around">
                      <Block middle style={{ marginBottom: 15 }}>
                        <Block width={width * 0.9} style={{ marginBottom: 5 }}>
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
                        <Block width={width * 0.9}>
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
                            color={materialTheme.COLORS.ERROR}
                          >
                            {error}
                          </Text>
                        </Block>
                      ) : null}
                      <Loader
                        title={`Logging In`}
                        loading={isLoading}
                        color="#ff66be"
                      />
                      <Block center>
                        <Button
                          color="primary"
                          round
                          style={[styles.createButton, { marginBottom: 10 }]}
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
                          style={{
                            marginBottom: 10,
                          }}
                        >
                          <Text
                            style={{
                              fontFamily: "montserrat-bold",
                              fontWeight: "bold",
                            }}
                            size={17}
                            color={materialTheme.COLORS.PRIMARY}
                          >
                            Dont Have an account? Register
                          </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                          onPress={() => navigation.navigate("ForgetPassword")}
                          style={{
                            marginBottom: 10,
                          }}
                        >
                          <Text
                            style={{
                              fontFamily: "montserrat-bold",
                              textDecorationColor: materialTheme.COLORS.PRIMARY,
                              textDecorationStyle: "solid",
                              textDecorationLine: "underline",
                            }}
                            size={14}
                            color={materialTheme.COLORS.BLACK}
                          >
                            Forgot Password?
                          </Text>
                        </TouchableOpacity>
                      </Block>
                      <TouchableOpacity
                        onPress={() => onFingerprintPress}
                        style={{ marginVertical: 10 }}
                      >
                        <Block middle>
                          <Image
                            source={require("../../assets/images/bioImage.png")}
                          />
                        </Block>
                      </TouchableOpacity>
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

export default SignInScreen;

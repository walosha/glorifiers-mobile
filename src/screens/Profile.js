import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
  ImageBackground,
  Platform,
  Alert,
  TouchableOpacity,
  FlatList,
  Switch,
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Block, Text, theme } from "galio-framework";
import { Buffer } from "buffer"; // import buffer
import * as ImagePicker from "expo-image-picker";
import { useSelector, useDispatch } from "react-redux";
import { materialTheme } from "../constants";
import { HeaderHeight } from "../constants/utils";
import { uploadProfileImage } from "../store/actions";
import { capitalizeFirstLetter } from "../helpers";

const { width, height } = Dimensions.get("screen");
const thumbMeasure = (width - 48 - 32) / 3;

const data = [
  {
    id: "1",
    icon: "account",
    description: "Profile Details",
  },
  {
    id: "2",
    icon: "file-cabinet",
    description: "Transactions",
  },
  {
    id: "3",
    icon: "account-multiple-plus-outline",
    description: "Invite a Friend",
  },
  {
    id: "4",
    icon: "credit-card-plus-outline",
    description: "Bank and card details",
  },
  {
    id: "5",
    icon: "fingerprint",
    description: "Enable Fingerprint",
  },
  {
    id: "6",
    color: true,
    icon: "logout",
    description: "Log out",
  },
];

const Profile = ({ navigation }) => {
  const { user } = useSelector(({ signInScreen }) => signInScreen);
  const [fingerPrintEnabled, setFingerPrintEnabled] = useState(null);

  const dispatch = useDispatch();
  const { image } = useSelector(({ signInScreen }) => ({
    image: signInScreen.user.image,
  }));

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const {
          status,
        } = await ImagePicker.requestCameraRollPermissionsAsync();
        if (status !== "granted") {
          Alert.alert(
            "Sorry, we need camera roll permissions to make this work!"
          );
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let { base64 } = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      base64: true,
    });
    uploadProfileImage(Buffer.from(base64, "base64"), dispatch);
  };

  return (
    <Block flex style={styles.profile}>
      <Block flex>
        <ImageBackground
          source={{
            uri:
              "https://images.pexels.com/photos/479453/pexels-photo-479453.jpeg",
          }}
          style={styles.profileContainer}
          imageStyle={styles.profileBackground}
        >
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{ width, marginTop: "25%" }}
          >
            <Block flex style={styles.profileCard}>
              <Block middle style={styles.avatarContainer}>
                <TouchableOpacity onPress={pickImage}>
                  <Image
                    source={{
                      uri: `https://glorifiers.s3-us-west-1.amazonaws.com/${image}`,
                    }}
                    style={styles.avatar}
                  />
                </TouchableOpacity>
              </Block>
              <Block flex>
                <Block middle style={styles.nameInfo}>
                  <Text bold size={28} color={materialTheme.COLORS.PRIMARY}>
                    {capitalizeFirstLetter(user.firstName)}{" "}
                    {capitalizeFirstLetter(user.lastName)}
                  </Text>
                  <Text size={16} color="#32325D" style={{ marginTop: 10 }}>
                    Ikorodu Lagos, NG
                  </Text>
                  <Text
                    size={16}
                    color="#525F7F"
                    style={{ textAlign: "center" }}
                  >
                    {user.email}
                  </Text>
                  <Text
                    size={16}
                    color="#525F7F"
                    style={{ textAlign: "center" }}
                  >
                    {user.phoneNumber}
                  </Text>
                </Block>
                <Block middle style={{ marginTop: 30, marginBottom: 6 }}>
                  <Block style={styles.divider} />
                </Block>
                <Block style={{ paddingBottom: -HeaderHeight * 2 }}>
                  <Text
                    size={22}
                    color={materialTheme.COLORS.PRIMARY}
                    style={{ textAlign: "center", fontWeight: "bold" }}
                  >
                    My Account
                  </Text>
                  <FlatList
                    style={styles.notificationList}
                    enableEmptySections={true}
                    data={data}
                    keyExtractor={(item) => {
                      return item.id;
                    }}
                    renderItem={({ item }) => {
                      return (
                        <TouchableOpacity
                          onPress={() =>
                            item.color &&
                            Alert.alert(
                              capitalizeFirstLetter(user.firstName),
                              "Are you sure you want log out?",
                              [
                                {
                                  text: "Cancel",
                                  onPress: () => {},
                                  style: "cancel",
                                },
                                {
                                  text: "Logout",
                                  onPress: () =>
                                    dispatch({ type: "LOGOUT_USER" }),
                                },
                              ]
                            )
                          }
                          style={styles.notificationBox}
                        >
                          <Block row middle>
                            <MaterialCommunityIcons
                              size={35}
                              name={item.icon}
                              color={
                                item.color
                                  ? "red"
                                  : materialTheme.COLORS.PRIMARY
                              }
                            />
                            <Text
                              style={[
                                styles.description,
                                {
                                  color: item.color
                                    ? "red"
                                    : materialTheme.COLORS.PRIMARY,
                                },
                              ]}
                            >
                              {item.description}
                            </Text>
                          </Block>
                          {item.icon === "fingerprint" && (
                            <Switch
                              trackColor={{
                                false: "#767577",
                                true: "#767577",
                              }}
                              thumbColor={
                                fingerPrintEnabled
                                  ? materialTheme.COLORS.PRIMARY
                                  : "#f4f3f4"
                              }
                              ios_backgroundColor="#3e3e3e"
                              onValueChange={(val) =>
                                setFingerPrintEnabled(val)
                              }
                              value={fingerPrintEnabled}
                            />
                          )}
                        </TouchableOpacity>
                      );
                    }}
                  />
                </Block>
              </Block>
            </Block>
          </ScrollView>
        </ImageBackground>
      </Block>
    </Block>
  );
};

const styles = StyleSheet.create({
  profile: {
    marginTop: Platform.OS === "android" ? -HeaderHeight : 0,
    // marginBottom: -HeaderHeight * 2,
    flex: 1,
  },
  profileContainer: {
    width: width,
    height: height,
    padding: 0,
    zIndex: 1,
  },
  profileBackground: {
    width: width,
    height: height / 2,
  },
  profileCard: {
    // position: "relative",
    padding: theme.SIZES.BASE,
    marginHorizontal: theme.SIZES.BASE,
    marginTop: 65,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    backgroundColor: theme.COLORS.WHITE,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 8,
    shadowOpacity: 0.2,
    zIndex: 2,
  },
  info: {
    paddingHorizontal: 40,
  },
  avatarContainer: {
    position: "relative",
    marginTop: -80,
  },
  avatar: {
    width: 124,
    height: 124,
    borderRadius: 62,
    borderWidth: 0,
  },
  nameInfo: {
    marginTop: 35,
  },
  divider: {
    width: "90%",
    borderWidth: 1,
    borderColor: "#E9ECEF",
  },
  notificationList: {
    marginVertical: 20,
    padding: 13,
  },
  notificationBox: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    justifyContent: "space-between",
    marginTop: 5,
    marginBottom: 11,
    flexDirection: "row",
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: materialTheme.COLORS.PLACEHOLDER,
  },
  description: {
    fontSize: 18,
    color: materialTheme.COLORS.PRIMARY,
    marginLeft: 10,
  },
  thumb: {
    borderRadius: 4,
    marginVertical: 4,
    alignSelf: "center",
    width: thumbMeasure,
    height: thumbMeasure,
  },
});

export default Profile;

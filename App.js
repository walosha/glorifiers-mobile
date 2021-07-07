import React, { useState, useEffect } from "react";
import { Platform, StatusBar, Image, AppState, Alert } from "react-native";
import { PersistGate } from "redux-persist/integration/react";
import * as LocalAuthentication from "expo-local-authentication";
import { Host } from "react-native-portalize";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import { Asset } from "expo-asset";
import { Root } from "native-base";
import { Provider } from "react-redux";
import { Block, GalioProvider } from "galio-framework";
import { setFocusHandler } from "react-query";
import { images, materialTheme } from "./src/constants";
import { store, persistor } from "./src/store";
import { NavigationContainer } from "@react-navigation/native";
import Screens from "./src/navigation/Screens";
import { isAuthenticated } from "./src/services/auth/fingerprintAuthentication";
// Before rendering any navigation stack
import { enableScreens } from "react-native-screens";
enableScreens();

// cache app images
const assetImages = [...Object.values(images)];

function cacheImages(images) {
  return images.map((image) => {
    if (typeof image === "string") {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
}

const options = {
  promptMessage: "Scan your finger.",
  cancelLabel: "Cancel",
};
const App = ({ skipLoadingScreen }) => {
  const [compatible, setCompatible] = useState(null);
  const [isFingerprintsAvail, setFingerprintsAvail] = useState(null);
  const [result, setResult] = useState();

  useEffect(() => {
    async function loadFont() {
      await Font.loadAsync({
        Roboto: require("native-base/Fonts/Roboto.ttf"),
        Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
        "montserrat-regular": require("./src/assets/fonts/Montserrat-Regular.ttf"),
        "montserrat-bold": require("./src/assets/fonts/Montserrat-Bold.ttf"),
      });
    }
  }, []);

  useEffect(() => {
    // checkDeviceForHardware();
    // checkForFingerprints();
    // showAndroidAlert();
  }, []);

  // const checkDeviceForHardware = async () => {
  //   let compatible = await LocalAuthentication.hasHardwareAsync();
  //   setCompatible(compatible);
  // };

  // const checkForFingerprints = async () => {
  //   let fingerprints = await LocalAuthentication.isEnrolledAsync();
  //   setFingerprintsAvail(fingerprints);
  // };

  // const scanFingerprint = async () => {
  //   let result = await LocalAuthentication.authenticateAsync(options);
  //   console.log("Scan Result:", result);
  //   setResult(result);
  // };

  // const showAndroidAlert = () => {
  //   Alert.alert(
  //     "Fingerprint Scan",
  //     "Place your finger over the touch sensor and press scan.",
  //     [
  //       {
  //         text: "Scan",
  //         onPress: () => {
  //           scanFingerprint();
  //         },
  //       },
  //       {
  //         text: "Cancel",
  //         onPress: () => console.log("Cancel"),
  //         style: "cancel",
  //       },
  //     ]
  //   );
  // };

  setFocusHandler((handleFocus) => {
    const handleAppStateChange = (appState) => {
      if (appState === "active") {
        handleFocus();
      }
    };
    AppState.addEventListener("change", handleAppStateChange);
    return () => AppState.removeEventListener("change", handleAppStateChange);
  });
  const [isLoadingComplete, setIsLoadingComplete] = useState(false);

  const _loadResourcesAsync = async () => {
    return Promise.all([...cacheImages(assetImages)]);
  };
  const __ = async () => {
    return Promise.all([...cacheImages(assetImages)]);
  };

  const _handleLoadingError = (error) => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  const _handleFinishLoading = () => {
    setIsLoadingComplete(true);
  };

  if (!isLoadingComplete && !skipLoadingScreen) {
    return (
      <AppLoading
        startAsync={_loadResourcesAsync}
        onError={_handleLoadingError}
        onFinish={_handleFinishLoading}
      />
    );
  } else {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Root>
            <NavigationContainer>
              <GalioProvider theme={materialTheme}>
                <Block flex>
                  {Platform.OS === "ios" && <StatusBar barStyle="default" />}
                  <Host>
                    <Screens />
                  </Host>
                </Block>
              </GalioProvider>
            </NavigationContainer>
          </Root>
        </PersistGate>
      </Provider>
    );
  }
};

export default App;

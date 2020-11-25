import React from "react";
import { Platform, StatusBar, Image } from "react-native";
import { PersistGate } from "redux-persist/integration/react";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import { Asset } from "expo-asset";
import { Root } from "native-base";
import { Provider } from "react-redux";
import { Block, GalioProvider } from "galio-framework";
import { images, materialTheme } from "./src/constants";
import { store, persistor } from "./src/store";
import { NavigationContainer } from "@react-navigation/native";
import Screens from "./src/navigation/Screens";

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

export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
  };

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      "montserrat-regular": require("./src/assets/fonts/Montserrat-Regular.ttf"),
      "montserrat-bold": require("./src/assets/fonts/Montserrat-Bold.ttf"),
    });
  }

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
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
                    <Screens />
                  </Block>
                </GalioProvider>
              </NavigationContainer>
            </Root>
          </PersistGate>
        </Provider>
      );
    }
  }

  _loadResourcesAsync = async () => {
    return Promise.all([...cacheImages(assetImages)]);
  };

  _handleLoadingError = (error) => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}

import React, { Fragment } from "react";
import { Easing, Animated, Dimensions } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { connect } from "react-redux";
import HomeScreen from "../screens/Home";
import RegisterScreen from "../screens/Register";
import SignInScreen from "../screens/SignIn";
import OnboardingScreen from "../screens/Onboarding";
import ProfileScreen from "../screens/Profile";
import CustomDrawerContent from "./Menu";
import { Icon, Header } from "../components";
import { materialTheme } from "../constants/";
const { width } = Dimensions.get("screen");

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

function ProfileStack(props) {
  return (
    <Stack.Navigator initialRouteName="Profile" mode="card" headerMode="screen">
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              white
              transparent
              title=""
              scene={scene}
              navigation={navigation}
            />
          ),
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
}

function RegisterStack(props) {
  return (
    <Stack.Navigator
      initialRouteName="Register"
      mode="card"
      headerMode="screen"
    >
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{
          header: () => null,
        }}
      />
    </Stack.Navigator>
  );
}

function SignInStack(props) {
  return (
    <Stack.Navigator initialRouteName="SignIn" mode="card" headerMode="screen">
      <Stack.Screen
        name="SignIn"
        component={SignInScreen}
        options={{
          header: () => null,
        }}
      />
    </Stack.Navigator>
  );
}

function HomeStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="screen">
      <Stack.Screen
        name="ShopByCategory"
        component={HomeScreen}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              tabs
              title="Cadacstores"
              navigation={navigation}
              scene={scene}
            />
          ),
        }}
      />
      <Stack.Screen
        name="Account"
        component={ProfileStack}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              back
              transparent
              title="Account"
              navigation={navigation}
              scene={scene}
            />
          ),
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
}

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let family;

          if (route.name === "App") {
            iconName = "ios-home";
            family = "ionicon";
          } else if (route.name === "My Cart") {
            iconName = "ios-cart";
            family = "ionicon";
          } else {
            iconName = "circle-10";
            family = "GalioExtra";
          }
          return (
            <Icon color={color} family={family} name={iconName} size={size} />
          );
        },
      })}
      tabBarOptions={{
        activeTintColor: materialTheme.COLORS.PRIMARY,
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen name="App" component={AppStack} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

function AppStack(props) {
  return (
    <Drawer.Navigator
      style={{ flex: 1 }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      drawerStyle={{
        backgroundColor: "white",
        width: width * 0.8,
      }}
      drawerContentOptions={{
        activeTintColor: "white",
        inactiveTintColor: "#000",
        activeBackgroundColor: materialTheme.COLORS.ACTIVE,
        inactiveBackgroundColor: "transparent",
        itemStyle: {
          width: width * 0.74,
          paddingHorizontal: 12,
          // paddingVertical: 4,
          justifyContent: "center",
          alignContent: "center",
          // alignItems: 'center',
          overflow: "hidden",
        },
        labelStyle: {
          fontSize: 18,
          fontWeight: "normal",
        },
      }}
      initialRouteName="Home"
    >
      <Drawer.Screen
        name="Home"
        component={HomeStack}
        options={{
          drawerIcon: ({ focused }) => (
            <Icon
              size={16}
              name="shop"
              family="GalioExtra"
              color={focused ? "white" : materialTheme.COLORS.MUTED}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

const ScreenStack = function ({ signInScreen, token, isSignout }) {
  console.log({ token });
  return (
    <Stack.Navigator mode="card" headerMode="none">
      {token === null ? (
        <Fragment>
          <Stack.Screen
            name="Onboarding"
            component={OnboardingScreen}
            option={{
              headerTransparent: true,
            }}
          />
          <Stack.Screen
            name="SignIn"
            options={{
              animationTypeForReplace: isSignout ? "pop" : "push",
            }}
            component={SignInStack}
          />
          <Stack.Screen name="Register" component={RegisterStack} />
        </Fragment>
      ) : (
        <Fragment>
          {/* <Stack.Screen name="Tab" component={MyTabs} /> */}
          <Stack.Screen name="Home" component={HomeScreen} />
        </Fragment>
      )}
    </Stack.Navigator>
  );
};
const mapStatetOPprops = ({ signInScreen }) => ({
  token: signInScreen.token,
  isSignout: signInScreen.isSignout,
});

export default connect(mapStatetOPprops)(ScreenStack);

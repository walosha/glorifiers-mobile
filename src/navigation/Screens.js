import React, { Fragment } from "react";
import { Easing, Animated, Dimensions } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { connect, useDispatch } from "react-redux";
import HomeScreen from "../screens/Home/Home";
import RegisterScreen from "../screens/Register";
import SignInScreen from "../screens/SignIn";
import OnboardingScreen from "../screens/Onboarding";
import ProfileScreen from "../screens/Profile";
import CustomDrawerContent from "./Menu";
import ContactSupportScreen from "../screens/ContactSupport";
import LoanScreen from "../screens/Loans";
import FundPurseScreen from "../screens/FundPurse";
import TransferToAccountScreeen from "../screens/TransferToAccount";
import TransferConfiirmationScreen from "../screens/TransferConfiirmationScreen";
import NotificationsScreen from "../screens/Notifications";
import SettingsScreen from "../screens/Settings";
import SucessPaymentScreen from "../screens/SucessPayment";
import FailurePaymentScreen from "../screens/FailurePayment";
import GetHelpScreen from "../screens/GetHelp";
import TicketScreen from "../screens/Ticket";
import { Icon, Header } from "../components";
import { materialTheme } from "../constants/";
import { setupInterceptor } from "../services/glorifiers";
const { width } = Dimensions.get("screen");

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

function FundPurseStack(props) {
  return (
    <Stack.Navigator
      initialRouteName="FundPurse"
      mode="card"
      headerMode="screen"
    >
      <Stack.Screen
        name="FundPurse"
        component={FundPurseScreen}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              back
              white
              navigation={navigation}
              title="Fund Purse"
              scene={scene}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
}

function TransferToAccountStack(props) {
  return (
    <Stack.Navigator
      initialRouteName="TransferToAccount"
      mode="card"
      headerMode="screen"
    >
      <Stack.Screen
        name="TransferToAccount"
        component={TransferToAccountScreeen}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              back
              white
              navigation={navigation}
              title="Transfer To Account"
              scene={scene}
            />
          ),
        }}
      ></Stack.Screen>
    </Stack.Navigator>
  );
}

function TransferConfiirmationStack({ route: { params } }) {
  return (
    <Stack.Navigator initialRouteName="Ticket" mode="card" headerMode="screen">
      <Stack.Screen
        name="Confirm Transfer"
        options={{
          header: ({ navigation, scene }) => (
            <Header
              back
              white
              navigation={navigation}
              title="Confirm Transfer to Account"
              scene={scene}
            />
          ),
        }}
      >
        {(props) => <TransferConfiirmationScreen {...props} params={params} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
}

function TicketStack(props) {
  return (
    <Stack.Navigator initialRouteName="Ticket" mode="card" headerMode="screen">
      <Stack.Screen
        name="Ticket"
        component={TicketScreen}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              white
              navigation={navigation}
              title="Ticket"
              scene={scene}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
}
function LoanStack(props) {
  return (
    <Stack.Navigator initialRouteName="Ticket" mode="card" headerMode="screen">
      <Stack.Screen
        name="Ticket"
        component={LoanScreen}
        options={{
          header: ({ navigation, scene }) => (
            <Header white navigation={navigation} title="Loan" scene={scene} />
          ),
        }}
      />
    </Stack.Navigator>
  );
}

function SettingsStack(props) {
  return (
    <Stack.Navigator
      initialRouteName="Settings"
      mode="card"
      headerMode="screen"
    >
      <Stack.Screen
        name="Notifications"
        component={SettingsScreen}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              white
              navigation={navigation}
              title="Settings"
              scene={scene}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
}
function GetHelpStack(props) {
  return (
    <Stack.Navigator
      initialRouteName="Settings"
      mode="card"
      headerMode="screen"
    >
      <Stack.Screen
        name="Notifications"
        component={GetHelpScreen}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              white
              navigation={navigation}
              title="Get Help"
              scene={scene}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
}

function NotificationsStack(props) {
  return (
    <Stack.Navigator
      initialRouteName="Notifications"
      mode="card"
      headerMode="screen"
    >
      <Stack.Screen
        name="Notifications"
        component={NotificationsScreen}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              white
              navigation={navigation}
              title="Notifications"
              scene={scene}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
}

function ContactSupportStack(props) {
  return (
    <Stack.Navigator
      initialRouteName="ContactSupport"
      mode="card"
      headerMode="screen"
    >
      <Stack.Screen
        name="ContactSupport"
        component={ContactSupportScreen}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              white
              navigation={navigation}
              title="Contact Supports"
              scene={scene}
            />
          ),
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

function HomeStack(props) {
  return (
    <Stack.Navigator initialRouteName="Home" mode="card" headerMode="screen">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          header: ({ navigation, scene }) => (
            <Header white tabs navigation={navigation} title="" scene={scene} />
          ),
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

function MyTabs({ navigation }) {
  const dispatch = useDispatch();
  if (navigation !== undefined) setupInterceptor(dispatch);

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
        backgroundColor: materialTheme.COLORS.PRIMARY,
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
      <Drawer.Screen name="Home" component={HomeStack} />
      <Drawer.Screen name="LoanApplication" component={LoanStack} />
      <Drawer.Screen name="Notifications" component={NotificationsStack} />
      <Drawer.Screen name="Settings" component={SettingsStack} />
      <Drawer.Screen name="ContactSupport" component={ContactSupportStack} />
      <Drawer.Screen name="MyTicket" component={TicketStack} />
      <Drawer.Screen name="GetHelp" component={GetHelpStack} />
    </Drawer.Navigator>
  );
}

const ScreenStack = function ({ signInScreen, token, isSignout }) {
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
          <Stack.Screen name="Tab" component={MyTabs} />
          <Stack.Screen name="FundPurse" component={FundPurseStack} />
          <Stack.Screen
            name="TransferToAccount"
            component={TransferToAccountStack}
          />
          <Stack.Screen
            name="TransferConfirmation"
            component={TransferConfiirmationStack}
          />
          <Stack.Screen
            name="FailurePayment"
            component={FailurePaymentScreen}
          />
          <Stack.Screen name="SucessPayment" component={SucessPaymentScreen} />
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

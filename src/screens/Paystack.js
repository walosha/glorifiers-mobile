import React from "react";
import PaystackWebView from "react-native-paystack-webview";
import { useSelector } from "react-redux";
import { materialTheme } from "../constants";

function Pay({ params: { amount }, navigation }) {
  const {
    user: { email, phoneNumber, firstName, lastName },
  } = useSelector(({ signInScreen }) => ({
    user: signInScreen.user,
  }));

  return (
    <PaystackWebView
      buttonText="Proceed to Payment"
      btnStyles={{
        backgroundColor: materialTheme.COLORS.PRIMARY,
        color: "#fff",
        paddingHorizontal: 25,
        paddingVertical: 12,
        borderRadius: 25,
        fontSize: 18,
      }}
      showPayButton={true}
      paystackKey="pk_test_844e11c5109c2aa907273a04855f8bd3b41312ff"
      amount={parseFloat(amount).toFixed(2)}
      billingEmail={email}
      billingMobile={phoneNumber}
      billingName={`${firstName}  ${lastName}`}
      ActivityIndicatorColor={materialTheme.COLORS.PRIMARY}
      refNumber={Date.now() + Math.floor(Math.random() * 100000 + 1)}
      SafeAreaViewContainer={{ marginTop: 5 }}
      SafeAreaViewContainerModal={{ marginTop: 5 }}
      onCancel={(e) => {
        console.log({ onCancel: e });
        navigation.navigate("TransferConfirmation");
      }}
      onSuccess={async (res) => {
        try {
          await navigation.navigate("Tab");
        } catch (error) {
          console.log(error);
        }
      }}
      autoStart={true}
    />
  );
}

export default Pay;

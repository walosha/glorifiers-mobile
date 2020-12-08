import React, { Fragment, useEffect } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { Block, theme } from "galio-framework";
import { useSelector } from "react-redux";
import ActionButton from "./Home-section/actionButton";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import RecentTransactions from "./Home-section/recentTransactions";
import { setAuthorizationHeader } from "../../services/glorifiers";

const Home = () => {
  const { token } = useSelector(({ signInScreen }) => ({
    token: signInScreen.token,
  }));

  useEffect(() => {
    setAuthorizationHeader(token);
  }, [token]);

  return (
    <ScrollView contentContainerStyle={styles.home}>
      <View
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.home}
      >
        <ActionButton />
        <RecentTransactions />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  home: {
    justifyContent: "center",
    alignItems: "center",
  },
});
export default Home;

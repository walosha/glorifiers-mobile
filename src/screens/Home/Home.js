import React, { Fragment, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { Block, theme } from "galio-framework";
import { useSelector } from "react-redux";
import ActionButton from "./Home-section/actionButton";
import RecentTransactions from "./Home-section/recentTransactions";
import { setAuthorizationHeader } from "../../services/glorifiers";

const Home = () => {
  const { token } = useSelector(({ signInScreen }) => ({
    token: signInScreen.token,
  }));
  console.log({ token });

  useEffect(() => {
    setAuthorizationHeader(token);
  }, [token]);

  return (
    <Block style={styles.home}>
      <View
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.home}
      >
        <ActionButton />
        <RecentTransactions />
      </View>
    </Block>
  );
};

const styles = StyleSheet.create({
  home: {
    flex: 1,
    alignItems: "center",
  },
});
export default Home;

import React, { useRef, useEffect } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { useSelector } from "react-redux";
import ActionButton from "./Home-section/actionButton";
import RecentTransactions from "./Home-section/recentTransactions";
import { setAuthorizationHeader } from "../../services/glorifiers";
import WithdrawalModal from "./Home-section/withdrawalModal";

const Home = () => {
  const { token } = useSelector(({ signInScreen }) => ({
    token: signInScreen.token,
  }));

  useEffect(() => {
    setAuthorizationHeader(token);
  }, [token]);
  const modalizeRef = useRef(null);

  const onOpen = () => {
    modalizeRef.current?.open();
  };

  return (
    <ScrollView contentContainerStyle={styles.home}>
      <View
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.home}
      >
        <ActionButton onOpen={onOpen} />
        <RecentTransactions />
        <WithdrawalModal modalizeRef={modalizeRef} />
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

import React, { Fragment, useEffect } from "react";
import { StyleSheet, Dimensions, View, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Text, Block, theme } from "galio-framework";
import { LogOutUser } from "../redux/actions";
const { width } = Dimensions.get("screen");

const Home = ({}) => {
  const dispatch = useDispatch();
  useEffect(() => {}, []);

  function logout() {
    LogOutUser(dispatch);
  }

  return (
    <Block style={styles.home}>
      <View
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.home}
      >
        <TouchableOpacity onPress={logout}>
          <Text>Hello</Text>
        </TouchableOpacity>
      </View>
    </Block>
  );
};

const styles = StyleSheet.create({
  home: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Home;

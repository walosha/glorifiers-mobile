import React, { useState, useEffect } from "react";
import { View, Dimensions, StyleSheet, FlatList } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Block, Text } from "galio-framework";
import TransferList from "../../../components/TransferList";
import { materialTheme } from "../../../constants";
import { getlast3Trans } from "../../../store/actions";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
const { width, height } = Dimensions.get("screen");

export default function RecentTransactions() {
  const [selectedId, setSelectedId] = useState(null);
  const dispatch = useDispatch();
  const { transArray } = useSelector(({ homeScreen }) => homeScreen);

  useEffect(() => {
    getlast3Trans(dispatch);
  }, []);

  const renderItem = ({ item: { createdAt, type, amount, narration } }) => (
    <TransferList
      date={createdAt}
      status={type}
      amount={amount}
      description={narration}
    />
  );

  return (
    <View style={styles.actionContainer}>
      <Block style={{ padding: 7, fontFamily: "montserrat-regular" }} middle>
        <Text size={30} color={materialTheme.COLORS.MUTED}>
          RecentTransactions
        </Text>
      </Block>
      <FlatList
        data={transArray}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  actionContainer: {
    paddingHorizontal: 7,
    paddingVertical: 5,
    height: hp("70%"),
  },
});

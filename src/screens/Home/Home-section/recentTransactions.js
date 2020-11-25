import React, { useState } from "react";
import { View, Dimensions, ScrollView, FlatList } from "react-native";
import { Block, Text } from "galio-framework";
import TransferList from "../../../components/TransferList";
import { materialTheme } from "../../../constants";
const { width, height } = Dimensions.get("screen");

const DATA = [
  {
    id: "1",
    date: "02 sept, 2020",
    status: "Sucessful",
    amount: "30,000.90",
    description: "Transfer to Olawale Afuye",
  },
  {
    id: "12",
    date: "02 sept, 2020",
    status: "failed",
    amount: "30,000.90",
    description: "Transfer to Olawale Afuye",
  },
  {
    id: "11",
    date: "02 sept, 2020",
    status: "sucessfull",
    amount: "1020,000.90",
    description: "Transfer from Abeeb Lekan",
  },
];

export default function RecentTransactions() {
  const [selectedId, setSelectedId] = useState(null);
  const renderItem = ({ item: { date, status, amount, description } }) => (
    <TransferList
      date={date}
      status={status}
      amount={amount}
      description={description}
    />
  );

  return (
    <View>
      <Block style={{ padding: 7, fontFamily: "montserrat-regular" }} middle>
        <Text size={30} color={materialTheme.COLORS.MUTED}>
          RecentTransactions
        </Text>
      </Block>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
    </View>
  );
}

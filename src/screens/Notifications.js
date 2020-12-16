import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Notification = () => {
  const data = [
    {
      id: 1,
      icon: "message-reply",
      name: "Admin",
      comment:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
    },
    {
      id: 2,
      icon: "message-reply",
      name: "Admin",
      comment:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
    },
    {
      id: 3,
      icon: "message-reply",
      name: "Admin",
      comment:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
    },
  ];

  return (
    <FlatList
      style={styles.root}
      data={data}
      extraData={data}
      ItemSeparatorComponent={() => {
        return <View style={styles.separator} />;
      }}
      keyExtractor={(item) => {
        return item.id;
      }}
      renderItem={(item) => {
        const Notification = item.item;
        return (
          <View style={styles.container}>
            <MaterialCommunityIcons size={35} name={item.icon} color={"blue"} />
            <View style={styles.content}>
              <View style={styles.contentHeader}>
                <Text style={styles.name}>{Notification.name}</Text>
                <Text style={styles.time}>9:58 am</Text>
              </View>
              <Text rkType="primary3 mediumLine">{Notification.comment}</Text>
            </View>
          </View>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: "#ffffff",
    marginTop: 10,
  },
  container: {
    paddingLeft: 19,
    paddingRight: 16,
    paddingVertical: 12,
    flexDirection: "row",
    alignItems: "flex-start",
  },
  content: {
    marginLeft: 16,
    flex: 1,
  },
  contentHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 6,
  },
  separator: {
    height: 1,
    backgroundColor: "#CCCCCC",
  },
  image: {
    width: 45,
    height: 45,
    borderRadius: 20,
    marginLeft: 20,
  },
  time: {
    fontSize: 11,
    color: "#808080",
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Notification;

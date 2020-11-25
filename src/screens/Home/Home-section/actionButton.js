import React from "react";
import {
  StyleSheet,
  Dimensions,
  View,
  TouchableOpacity,
  Alert,
} from "react-native";
import { Block, Button as GaButton, Text, theme, Icon } from "galio-framework";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { materialTheme } from "../../../constants";
const { width, height } = Dimensions.get("screen");

export default function ActionButton() {
  function onActionBtnPress() {
    Alert.alert("Features not yet Available");
  }

  return (
    <View style={styles.actionContainer}>
      <View style={styles.groupActionContainer}>
        <TouchableOpacity style={styles.actionBtn} onPress={onActionBtnPress}>
          <View style={styles.btn}>
            <Icon
              size={34}
              name="money-bill"
              family="Font-Awesome-5"
              color={materialTheme.COLORS.PRIMARY}
            />
            <Text size={19} color={materialTheme.COLORS.PRIMARY}>
              Withdrawal
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionBtn} onPress={onActionBtnPress}>
          <View style={styles.btn}>
            <MaterialCommunityIcons
              size={34}
              name="transfer-right"
              color={materialTheme.COLORS.PRIMARY}
            />
            <Text size={19} color={materialTheme.COLORS.PRIMARY}>
              Fund Transfer
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.groupActionContainer}>
        <TouchableOpacity style={styles.actionBtn} onPress={onActionBtnPress}>
          <View style={styles.btn}>
            <Icon
              size={34}
              name="shopping-cart"
              family="Feather"
              color={materialTheme.COLORS.PRIMARY}
            />

            <Text size={19} color={materialTheme.COLORS.PRIMARY}>
              Bill Payment
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionBtn} onPress={onActionBtnPress}>
          <View style={styles.btn}>
            <Icon
              size={34}
              name="mobile"
              family="Font-awesome"
              color={materialTheme.COLORS.PRIMARY}
            />

            <Text size={19} color={materialTheme.COLORS.PRIMARY}>
              Buy Airtime
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.groupActionContainer}>
        <TouchableOpacity style={styles.actionBtn} onPress={onActionBtnPress}>
          <View style={styles.btn}>
            <Icon
              size={34}
              family="Fontisto"
              name="history"
              color={materialTheme.COLORS.PRIMARY}
            />

            <Text size={19} color={materialTheme.COLORS.PRIMARY}>
              History
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionBtn} onPress={onActionBtnPress}>
          <View style={styles.btn}>
            <Icon
              size={34}
              name="issue-opened"
              family="Octicon"
              color={materialTheme.COLORS.PRIMARY}
            />

            <Text size={19} color={materialTheme.COLORS.PRIMARY}>
              View Dispute
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  groupActionContainer: {
    flexDirection: "row",
    paddingHorizontal: 5,
    marginVertical: ".4%",
    height: "33%",
  },
  actionContainer: {
    paddingHorizontal: 7,
    paddingVertical: 5,
    height: height * 0.3,
  },
  btn: {
    width: width * 0.5,
    flexDirection: "row",
    height: 80,
    shadowColor: theme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 8,
    shadowOpacity: 0.2,
    backgroundColor: "#fff",
    marginRight: 5,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  divider: {
    borderRightWidth: 0.3,
    borderRightColor: theme.COLORS.MUTED,
  },
});

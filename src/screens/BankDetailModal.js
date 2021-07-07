import React, { Fragment, useEffect, useState } from "react";
import { Picker } from "@react-native-picker/picker";
import { StyleSheet, Dimensions, Alert } from "react-native";
import { Block, Text, Button, theme } from "galio-framework";
import { materialTheme } from "../constants";
import { Input, ButtomModal } from "../components";
import authStyles from "./AuthScreen/authStyles";
import { getBankList, verifyAccount } from "../react-query/queries";

const { width } = Dimensions.get("window");

export default function BankDetaillModal({ modalizeRef }) {
  const [bankArray, setBank] = useState([]);
  const [choosenBank, setChosenBank] = useState(null);
  const [account_number, setAccount_number] = useState(null);

  useEffect(() => {
    async function getbanks() {
      const response = await getBankList();
      await setBank(response);
    }
    getbanks();
  }, []);

  const onVerifyAccount = async () => {
    if (choosenBank && account_number) {
      const { code } = bankArray.find((el) => el.name === choosenBank);
      const response = await verifyAccount(account_number, code);
      if (!response.status) {
        Alert.alert(response.message.split(".")[0]);
      } else {
        Alert.alert(
          "Confirm",
          `Your account name is ${response.account_name}`,
          [
            {
              text: "Cancel",
              onPress: () => {},
              style: "cancel",
            },
            {
              text: "Confirm",
              onPress: () => {},
            },
          ]
        );
      }
    }
  };
  return (
    <ButtomModal modalizeRef={modalizeRef}>
      <Fragment>
        <Block
          style={{
            paddingVertical: 11,
            fontFamily: "montserrat-regular",
          }}
          middle
        >
          <Text size={27} color={materialTheme.COLORS.PRIMARY}>
            Bank Detail
          </Text>
        </Block>
        <Block
          style={{
            paddingVertical: 11,
            fontFamily: "montserrat-regular",
          }}
          middle
        >
          <Text
            style={{ flex: 1, flexWrap: "wrap", paddingHorizontal: 8 }}
            size={12}
            color={materialTheme.COLORS.PRIMARY}
          >
            Add your bank account where you want your saved funds to return to.
          </Text>
        </Block>
        <Block
          style={{
            paddingVertical: 5,
            paddingHorizontal: 5,
            fontFamily: "montserrat-regular",
            backgroundColor: materialTheme.COLORS.WHITE,
          }}
        >
          <Block style={{ marginHorizontal: width * 0.1 }}>
            <Input
              onSubmitEditing={() => {}}
              blurOnSubmit={false}
              keyboardType={"numeric"}
              returnKeyType="next"
              value={account_number}
              placeholder="Account Number"
              onChangeText={(text) => setAccount_number(text)}
            />
          </Block>
          <Block
            style={{
              marginHorizontal: width * 0.1,
              borderWidth: 0.3,
              color: materialTheme.COLORS.INPUT,
              marginVertical: 5,
            }}
          >
            <Picker
              selectedValue={choosenBank}
              mode="dropdown"
              style={{ height: 50 }}
              onValueChange={(itemValue, itemIndex) => setChosenBank(itemValue)}
            >
              {bankArray.map((bank) => (
                <Picker.Item label={bank.name} value={bank.name} />
              ))}
            </Picker>
          </Block>
          <Block middle>
            <Button
              loading={false}
              color="primary"
              round
              style={authStyles.createButton}
              onPress={onVerifyAccount}
            >
              <Text
                style={{ fontFamily: "montserrat-bold" }}
                size={14}
                color={materialTheme.COLORS.WHITE}
              >
                Verifiy Account
              </Text>
            </Button>
          </Block>
        </Block>
      </Fragment>
    </ButtomModal>
  );
}

const styles = StyleSheet.create({
  card: {
    height: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 0.3,
    borderBottomColor: theme.COLORS.MUTED,
  },
});

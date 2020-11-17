import React, { Fragment, useEffect } from "react";
import { StyleSheet, Dimensions, View, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Block, Text, Button as GaButton, theme, Icon } from "galio-framework";
import { LogOutUser } from "../redux/actions";
import { Card, CircleProgressChart } from "../components";
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
          <Card>
            <Block space="between">
              <Block style={{ marginBottom: 27 }} space="evenly" row>
                <GaButton
                  round
                  onlyIcon
                  shadowless
                  icon="running"
                  iconFamily="Font-Awesome-5"
                  iconColor={theme.COLORS.WHITE}
                  iconSize={theme.SIZES.BASE * 1.625}
                  color={"#F04F6D"}
                  style={[styles.social, styles.shadow]}
                />

                <Block style={{ paddingVertical: 8 }}>
                  <Text color="#fff" h5>
                    Behind The Target Pace
                  </Text>
                  <Block row space="around">
                    <Text color="#fff" h5>
                      5"45"
                    </Text>
                    <Text color="#fff" h6>
                      AVERAGE KILOMETER
                    </Text>
                  </Block>
                </Block>
              </Block>
              <Block
                style={{ paddingVertical: 8, paddingHorizontal: 16 }}
                space="evenly"
                row
                middle
              >
                <Text color="#fff" size={14}>
                  Your Target has been Completed!
                </Text>
                <GaButton round style={[styles.social]}>
                  OK
                </GaButton>
              </Block>
            </Block>
          </Card>
          <Card cardstyles={{ backgroundColor: "#fff" }}>
            <Block middle>
              <Icon
                name="alarm"
                family="Material-Icons"
                color={"#7e57c2"}
                size={150}
              />
              <Text size={19}>Alarm</Text>
            </Block>
          </Card>
          <CircleProgressChart />
        </TouchableOpacity>
      </View>
    </Block>
  );
};

const styles = StyleSheet.create({
  home: {
    paddingHorizontal: 17,
    paddingVertical: 9,
  },
  social: {
    width: theme.SIZES.BASE * 3.5,
    height: theme.SIZES.BASE * 3.5,
    borderRadius: theme.SIZES.BASE * 1.75,
    justifyContent: "center",
    marginHorizontal: 10,
  },
});

export default Home;

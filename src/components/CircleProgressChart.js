import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import { Card } from "native-base";
import { Block, Text, Button as GaButton, theme, Icon } from "galio-framework";

export default function CircleProgressChart() {
  const [fill, setFill] = useState(95);
  return (
    <Card style={{ justifyContent: "center", padding: 25, marginTop: 15 }}>
      <Block row space="between">
        <Block row middle space="between">
          <Icon name="foot" family="Foundation" color={"#000"} size={20} />
          <Text style={{ padding: 8 }}>Walk</Text>
        </Block>
        <Icon name="md-apps" family="Ionicon" color={"#000"} size={20} />
      </Block>
      <Block middle>
        <AnimatedCircularProgress
          size={200}
          width={13}
          fill={fill}
          tintColor="#00e0ff"
          backgroundColor="#3d5875"
        >
          {(fill) => <Text>{fill}</Text>}
        </AnimatedCircularProgress>
      </Block>
      <Block style={{ paddingVertical: 9 }} space="evenly" row>
        <Block>
          <Text size={17}>750</Text>
          <Text>Steps</Text>
        </Block>
        <Block>
          <Text size={17}>3</Text>
          <Text>Km</Text>
        </Block>
        <Block>
          <Text size={17}>30</Text>
          <Text>mins</Text>
        </Block>
      </Block>
    </Card>
  );
}

import React from "react";
import { View, Text } from "react-native";

import { styles } from "./styles";

export const ExamplePage: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ReactNative Expo Bare Workflow setup!</Text>
      <Text>Clone esse projeto e renomeie o name e o slug no app.json</Text>
    </View>
  );
};

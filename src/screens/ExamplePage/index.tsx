import React from "react";
import { View, Text } from "react-native";

import { styles } from "./styles";

export const ExamplePage: React.FC = () => {
  return (
    <View style={styles.containerStart}>
      <Text style={styles.title}>Título Página</Text>
      <Text>Texto página</Text>
    </View>
  );
};

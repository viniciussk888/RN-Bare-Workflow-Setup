import React from "react";
import { View, Text } from "react-native";

import { styles } from "./styles";
import { stylesGlobal } from '../../global/styles/styles';

export const ExamplePage: React.FC = () => {

  return (
    <View style={stylesGlobal.containerStart}>
      <Text style={stylesGlobal.title}>Título Página</Text>
      <Text>Texto página</Text>
    </View>
  );
};

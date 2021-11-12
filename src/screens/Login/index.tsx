import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import {useNavigation} from '@react-navigation/native';

import { styles } from "./styles";
import { stylesGlobal } from '../../global/styles/styles';

export const Login: React.FC = () => {

  const navigation = useNavigation();

  return (
    <View style={stylesGlobal.containerCenter}>
      <Text style={stylesGlobal.title}>Login</Text>
      <TouchableOpacity style={stylesGlobal.button} onPress={() => navigation.navigate('Main')}>
        <Text style={stylesGlobal.textButton}>HOME</Text>
      </TouchableOpacity>
    </View>
  );
};

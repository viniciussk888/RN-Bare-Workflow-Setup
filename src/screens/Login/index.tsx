import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { styles } from "./styles";

import AppService from "../../services/app.service";

export const Login: React.FC = (props) => {
  const navigation = useNavigation();
  const api = new AppService(props);

  useEffect(() => {
    getInitial();
    return () => {
      // Ao desmontar o componente
    };
  }, []);

  const getInitial = () => {
    const obj = { teste: "teste" };
    api.testGet(
      obj,
      (response: Object) => {
        console.log("resposta", response);
      },
      (error: any) => {
        console.log(error);
      }
    );
  };

  return (
    <View style={styles.containerCenter}>
      <Text style={styles.title}>Login</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Main" as never)}
      >
        <Text style={styles.textButton}>HOME</Text>
      </TouchableOpacity>
    </View>
  );
};

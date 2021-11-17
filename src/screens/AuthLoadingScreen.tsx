import React, { useState, useEffect } from 'react';
import { 
  View,
  StatusBar,
  ActivityIndicator, 
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';

import { stylesGlobal } from '../global/styles/styles';

export const AuthLoading: React.FC = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.navigate('Login');
    //Condição pra verficar se o usuário está logado - usar o AsyncStorage pra salvar e consultar dados do usuário
    /*if (logged) {
      navigation.navigate('Main');
    } else {
      navigation.navigate('Login');
    };*/

    //SplashScreen.hide();
    return () => {};
  }, []);

  return (
    <View style={stylesGlobal.containerCenter}>
      <StatusBar
        barStyle='dark-content'
        backgroundColor={'#fff'}
        translucent={false}
      />
      <ActivityIndicator size='large' color={'red'} />
    </View>
  );
};

import React from "react";
import { StatusBar } from "expo-status-bar";
import AppLoading from "expo-app-loading";

//fonts
import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
//screens
import { ExamplePage } from "./src/screens/ExamplePage";
import Router from './src/routers/index';

export default function App() {
  //Inicia o carregamento das fontes.
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });
  //Enquanto fonte não for carregada o app continua em loading
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <Router />
      <StatusBar style="auto" />
    </>
  );
}

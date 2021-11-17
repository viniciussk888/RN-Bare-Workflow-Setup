import { StyleSheet } from "react-native";
import theme from "./theme";

export const stylesGlobal = StyleSheet.create({
  containerCenter: {
    flex: 1,
    backgroundColor: theme.colors.background,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
});

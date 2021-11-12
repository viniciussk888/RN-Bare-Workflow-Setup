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
  containerStart: {
    flex: 1,
    backgroundColor: theme.colors.background,
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontFamily: theme.fonts.bold,
  },
  button: {
    backgroundColor: theme.colors.primary,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    marginVertical: 10,
  },
  textButton: {
    fontSize: 18,
    color: theme.colors.background,
    fontFamily: theme.fonts.medium,
  }
});
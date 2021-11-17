import { StyleSheet } from "react-native";
import theme from "../../global/styles/theme";

export const styles = StyleSheet.create({
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
});

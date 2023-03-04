import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, LogBox } from "react-native";
import RootNavigator from "./src/routes";
import { useFonts } from "expo-font";
LogBox.ignoreLogs(["VirtualizedLists", "Warning:..."]);
LogBox.ignoreAllLogs();

export default function App() {
  const [loaded] = useFonts({
    regular: require("./assets/Fonts/Roboto-Regular.ttf"),
    bold: require("./assets/Fonts/Roboto-Bold.ttf"),
    light: require("./assets/Fonts/Roboto-Light.ttf"),
    semiBold: require("./assets/Fonts/Roboto-Medium.ttf"),
  });

  if (!loaded) return <View />;

  return <RootNavigator />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

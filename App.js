import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, LogBox } from "react-native";
import RootNavigator from "./src/routes";
import { useFonts } from "expo-font";
LogBox.ignoreLogs(["VirtualizedLists", "Warning:..."]);
LogBox.ignoreAllLogs();

export default function App() {
  const [loaded] = useFonts({
    bold: require("./assets/fonts/Poppins-Bold.ttf"),
    regular: require("./assets/fonts/Poppins-Regular.ttf"),
    light: require("./assets/fonts/Poppins-Light.ttf"),
    medium: require("./assets/fonts/Poppins-Medium.ttf"),
    mediumItalic: require("./assets/fonts/Poppins-MediumItalic.ttf"),
    semiBoldItalic: require("./assets/fonts/Poppins-SemiBoldItalic.ttf"),



    semiBold: require("./assets/fonts/Poppins-SemiBold.ttf"),
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

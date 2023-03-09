import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../../../utils/Colors";
import commonStyles from "../../../utils/CommonStyles";
import { icons } from "../../../../assets/icons";
import { Image } from "react-native-elements";
import { Spacer } from "../../../components/Spacer";
import { scale } from "react-native-size-matters";
import CustomText from "../../../components/CustomText";

const WelcomeScreen = () => {
  const Header = () => (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: scale(20),
      }}
    >
      <Image
        source={icons.appIconNav}
        resizeMode={"contain"}
        containerStyle={{
          height: 100,
          width: 100,
        }}
      />
      <Image
        source={icons.bell}
        resizeMode={"contain"}
        containerStyle={{
          height: 40,
          width: 40,
        }}
      />
    </View>
  );
  
  const InfoText = () => (
    <View style={{ alignSelf: "center", alignItems: "center" }}>
      <CustomText
        label={"REVIEW RESERVATION THEN"}
        color={colors.secondary}
        fontWeight={"900"}
      />
      <CustomText
        label={"CONFIRM OR CANCEL"}
        color={colors.secondary}
        fontWeight={"900"}
      />
      <Spacer height={15} />
      <CustomText
        label={"DO NOT enter the property,"}
        color={colors.secondary}
        fontWeight={"900"}
      />
      <CustomText
        label={"until the time of your reservation."}
        color={colors.secondary}
        fontWeight={"900"}
      />
    </View>
  );
  return (
    <View style={styles.container}>
      <Spacer height={20} />
      <Header />
      <InfoText />
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});

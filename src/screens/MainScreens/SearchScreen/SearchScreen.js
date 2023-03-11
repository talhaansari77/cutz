import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import React, { useState } from "react";
import AppHeader from "../../../components/AppHeader";
import commonStyles, { PH20 } from "../../../utils/CommonStyles";
import SearchHeader from "./molecules/SearchHeader";
import { Spacer } from "../../../components/Spacer";
import SearchBody from "./molecules/SearchBody";
import CustomText from "../../../components/CustomText";
import { colors } from "../../../utils/Colors";
import { icons } from "../../../../assets/icons";
import { scale } from "react-native-size-matters";

const SearchScreen = () => {
  return (
    <SafeAreaView style={commonStyles.commonMain}>
      <AppHeader />
      <PH20>
        <Spacer height={10} />
        <SearchHeader />
        <Spacer height={20} />

        <SearchBody />
        <View style={{ paddingTop: "50%" }}>
          <View style={styles.circle}>
            <Image
              resizeMode="contain"
              source={icons.searchSome}
              style={{ width: 60, height: 60 }}
            />
          </View>
          <Spacer height={20} />
          <View
            style={{ width: "80%", alignSelf: "center", alignItems: "center" }}
          >
            <CustomText
              color={colors.secondary}
              fontSize={14}
              // marginRight={20}
              textAlign="center"
              label="Search Events"
            />
          </View>
        </View>
      </PH20>
    </SafeAreaView>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  circle: {
    width: scale(100),
    height: scale(100),
    borderWidth: 4,
    borderRadius: 100,
    borderColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
});

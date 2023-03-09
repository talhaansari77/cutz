import { StyleSheet, Text, View } from "react-native";
import React from "react";
import SepratorLine from "../../../components/SepratorLine";
import { colors } from "../../../utils/Colors";
import CustomText from "../../../components/CustomText";
import { scale, verticalScale } from "react-native-size-matters";
import { PH20 } from "../../../utils/CommonStyles";

const DetailContainer = (props) => {
  return (
    <>
      <View
        style={{
          flexDirection: "row",
          //   padding:scale(20),
          paddingHorizontal: scale(20),
          paddingVertical: verticalScale(15),
          alignItems: "flex-end",
          backgroundColor: colors.white,
        }}
      >
        <CustomText
          color={colors.secondary}
          fontSize={14}
          fontFamily="medium"
          //   marginLeft={10}
          //   alignSelf="center"
          label={props.name}
        />
      </View>
      <SepratorLine backgroundColor={"#C9C9C9"} />
    </>
  );
};

export default DetailContainer;

const styles = StyleSheet.create({});

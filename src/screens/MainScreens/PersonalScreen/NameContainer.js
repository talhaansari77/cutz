import { StyleSheet, Text, View } from "react-native";
import React from "react";
import SepratorLine from "../../../components/SepratorLine";
import { colors } from "../../../utils/Colors";
import CustomText from "../../../components/CustomText";
import { verticalScale } from "react-native-size-matters";
import { PH20 } from "../../../utils/CommonStyles";

const NameContainer = (props) => {
  return (
    <>
      <SepratorLine backgroundColor={"#C9C9C9"} />
      <View
        style={{
          flexDirection: "row",
          height: verticalScale(50),
          alignItems: "flex-end",
          backgroundColor: colors.gray1,
        }}
      >
        <PH20>
          <CustomText
            color={colors.gray2}
            fontSize={14}
            fontFamily="medium"
            //   marginLeft={10}
            marginBottom={10}
            //   alignSelf="center"
            label={props.name}
          />
        </PH20>
      </View>
      <SepratorLine backgroundColor={"#C9C9C9"} />
    </>
  );
};

export default NameContainer;

const styles = StyleSheet.create({});

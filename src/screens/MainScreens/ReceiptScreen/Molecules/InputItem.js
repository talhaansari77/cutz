import React from "react";
import { TextInput } from "react-native";
import { colors } from "../../../../utils/Colors";

const InputItem = ({value,spacer}) => {
  return (
    <TextInput
      placeholder={value}
      placeholderTextColor={colors.perFectDark}
      maxLength={1}
      style={{
        fontSize: 40,
        fontFamily: "bold",
        //   color: colors.perFectDark,
        backgroundColor: colors.gray1,
        paddingHorizontal: 10,
        marginLeft:spacer?10:0,
      }}
    />
  );
};

export default InputItem;


import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { colors } from "../../../../utils/Colors";
import { verticalScale } from "react-native-size-matters";

const CustomInputs = (props) => {
  return (
    <View
      style={{
        flexDirection: "row",
        borderBottomWidth: 1.2,
        borderBottomColor: colors.black,
        width:props.width ||"100%"
      }}
    >
      <TextInput
        onPressIn={props.onInputPress}
        editable={props.editable}
        style={[
          {
            width: "99%",
            height: props.inputHeight || "100%",
            paddingRight: props.paddingRight || 10,
            paddingHorizontal: props.paddingHorizontal,
            fontFamily: props.fontFamily || "regular",
            color: props.color || colors.black,
            fontSize: verticalScale(15),
            multiline: props.multiline,
          },
        ]}
        onChangeText={props.onChangeText}
        value={props.value}
        numberOfLines={props.numberOfLines}
        keyboardType={props.keyboardType}
        autoCapitalize="none"
        multiline={props.multiline}
        placeholder={props.placeholder}
        placeholderTextColor={colors.secondary}
        secureTextEntry={props.secureTextEntry}
      />
    </View>
  );
};

export default CustomInputs;

const styles = StyleSheet.create({});

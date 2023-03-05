import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  Platform,
} from "react-native";
import React from "react";
import {
  moderateScale,
  scale,
  ScaledSheet,
  verticalScale,
} from "react-native-size-matters";
import CustomText from "./CustomText";
import { colors } from "../utils/Colors";
import commonStyles from "../utils/CommonStyles";

const CustomTextInput = ({
  eyeClick,
  password,
  setEyeClick,
  error,
  withLabel,
  leftIcon,
  source,
  iconWidth,
  iconHeight,
  onRightPress,
  rigthIcon,
  ...props
}) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      disabled={!props.onPress}
      style={[
        {
          width: props.width || "100%",
          alignSelf: props.alignSelf,
          height: props.height || verticalScale(42),
          borderRadius: props.borderRadius || moderateScale(10),
          padding: scale(10),
          marginTop: props.marginTop || verticalScale(0),
          borderColor: props.borderColor,
          paddingLeft: props.paddingLeft,
          backgroundColor: "#EBEBEB",
          shadowColor: Platform.OS == "ios" ? "#343a40" : colors.black,
          shadowRadius: 2,
          elevation: 5,
          shadowOpacity: 0.4,
          // inputMarginTop:-20,
          shadowOffset: { width: -1, height: 3 },
        },
        props.inputStyle,
      ]}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          width: "100%",
        }}
      >
        <TextInput
          onPressIn={props.onInputPress}
          editable={props.editable}
          style={[
            {
              width: rigthIcon ? "90%" : "99%",
              height: props.inputHeight || "100%",
              paddingRight: props.paddingRight || 10,
              paddingHorizontal: props.paddingHorizontal,
              fontFamily: props.fontFamily || "semiBold",
              color: props.color || colors.black,
              fontSize: verticalScale(18),
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
          placeholderTextColor={colors.placeholder}
          secureTextEntry={props.secureTextEntry}
        />
        {rigthIcon ? (
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={onRightPress}
            style={{
              width: iconWidth || scale(20),
              height: iconHeight || verticalScale(20),
              marginLeft: verticalScale(10),
            }}
          >
            <Image
              style={commonStyles.img}
              resizeMode="contain"
              source={rigthIcon}
            />
          </TouchableOpacity>
        ) : (
          <></>
        )}
      </View>
    </TouchableOpacity>
  );
};
export default CustomTextInput;
const styles = ScaledSheet.create({
  icon: {
    width: "20@s",
    height: "20@vs",
    marginLeft: verticalScale(10),
  },
});

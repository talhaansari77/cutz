import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import CustomTextInput from "../../../components/CustomTextInput";
import { Spacer } from "../../../components/Spacer";
import CustomButton from "../../../components/CustomButton";
import { scale, verticalScale } from "react-native-size-matters";
import { colors } from "../../../utils/Colors";
import { icons } from "../../../../assets/icons";

const LoginBody = ({ user, setCheckUser, checkUser }) => {
  const [showPassword, setShowPassword] = useState(true);
  const checkUserData = ["Client", "Volunteer"];
  return (
    <View style={{ paddingHorizontal: 20 }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {checkUserData.map((item, index) => {
          return (
            <CustomButton
              onPress={() => setCheckUser(item)}
              width={"46%"}
              borderTopLeftRadius={10}
              height={verticalScale(27)}
              borderTopRightRadius={10}
              backgroundColor={
                checkUser == item ? colors.secondary : colors.primary
              }
              title={item}
            />
          );
        })}
      </View>
      <Spacer height={20} />

      <CustomTextInput
        placeholder="Email"
        paddingLeft={20}
        alignSelf="center"
        width="90%"
        borderRadius={15}
      />
      <Spacer height={25} />

      <CustomTextInput
        placeholder="Password"
        paddingLeft={20}
        alignSelf="center"
        width="90%"
        borderRadius={15}
        iconWidth={scale(15)}
        secureTextEntry={showPassword}
        onRightPress={() => {
          setShowPassword(!showPassword);
        }}
        iconHeight={verticalScale(15)}
        rigthIcon={showPassword ? icons.eyeSlash : icons.eye}
      />
      
    </View>
  );
};

export default LoginBody;

const styles = StyleSheet.create({});

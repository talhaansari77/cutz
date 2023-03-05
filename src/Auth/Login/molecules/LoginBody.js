import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CustomTextInput from "../../../components/CustomTextInput";
import { Spacer } from "../../../components/Spacer";
import CustomButton from "../../../components/CustomButton";
import { verticalScale } from "react-native-size-matters";
import { colors } from "../../../utils/Colors";

const LoginBody = ({ user, setCheckUser, checkUser }) => {
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
      />
    </View>
  );
};

export default LoginBody;

const styles = StyleSheet.create({});

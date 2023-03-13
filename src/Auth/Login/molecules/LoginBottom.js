import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { colors } from "../../../utils/Colors";
import CustomText from "../../../components/CustomText";
import { Spacer } from "../../../components/Spacer";
import CustomButton from "../../../components/CustomButton";
import { verticalScale } from "react-native-size-matters";
import { Feather } from "@expo/vector-icons";

const LoginBottom = ({navigation,checkUser}) => {
  const [check, setCheck] = useState(false);
  return (
    <View style={{ alignItems: "center" }}>
      <Spacer height={30} />

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TouchableOpacity
          style={styles.checkCon}
          activeOpacity={0.6}
          onPress={() => setCheck(!check)}
        >
          {check && <Feather name="check" size={24} color={colors.secondary} />}
        </TouchableOpacity>

        <CustomText
          label="Remember Me"
          marginLeft={10}
          fontFamily="semiBold"
          fontSize={18}
          color={colors.placeholder}
        />
      </View>
      <View style={{ height: "10%" }} />

      <CustomButton
        width={"55%"}
        fontFamily={"bold"}
        onPress={()=>{
          navigation.navigate("MainStack", {
            screen: "Welcome",
            params: { userType: checkUser },
            merge: true,
          });

        }}
        borderRadius={15}
        title="Log In"
        btnStyle={{
          shadowColor: Platform.OS == "ios" ? "#343a40" : colors.black,
          shadowRadius: 2,
          elevation: 5,
          shadowOpacity: 0.4,
          // inputMarginTop:-20,
          shadowOffset: { width: -1, height: 3 },
        }}
      />
      <Spacer height={10} />
      <CustomText
        label="FORGOT PASSWORD"
        fontFamily="bold"
        fontSize={13}
        color={colors.secondary}
      />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginTop: verticalScale(4),
        }}
      >
        <CustomText
          label="NOT REGISTERED? "
          fontFamily="bold"
          fontSize={10}
          color={colors.darkGray}
        />
        <CustomText
        onPress={()=>navigation.navigate("signup")}
          label="CREATE AN ACCOUNT"
          fontFamily="bold"
          fontSize={10}
          color={colors.primary}
        />
      </View>
      <CustomText
        marginTop={verticalScale(10)}
        label="©2023 COVERSHIFTZ, LLC"
        fontFamily="bold"
        fontSize={15}
        color={colors.darkGray}
      />
    </View>
  );
};

export default LoginBottom;

const styles = StyleSheet.create({
  checkCon: {
    width: 23,
    height: 23,
    borderWidth: 1,
    borderColor: colors.secondary,
    borderRadius: 5,
    shadowColor: Platform.OS == "ios" ? "#343a40" : colors.black,
    shadowRadius: 2,
    elevation: 5,
    shadowOpacity: 0.4,
    // inputMarginTop:-20,
    shadowOffset: { width: -1, height: 3 },
  },
});

import { View, Text, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import CustomInputs from "./CustomInputs";
import CustomBottomSheet from "../../../../components/CustomBottomSheet";
import PhoneInput from "react-native-phone-number-input";
import { Platform } from "react-native";
import CustomText from "../../../../components/CustomText";
import { colors } from "../../../../utils/Colors";
import { AntDesign } from "@expo/vector-icons";
import { Spacer } from "../../../../components/Spacer";
import { scale, verticalScale } from "react-native-size-matters";
import CustomButton from "../../../../components/CustomButton";
import { useSignup } from "../../../../Auth/Signup/useSignup";
import * as FileSystem from "expo-file-system";
import {
  DeleteClientEvent,
  UpdateClientEvent,
} from "../../../../services/EventClientsApi";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Toast from "react-native-root-toast";
const ClientEditProfile = ({ navigation, setLoading,imageUri }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [familySize, setFamilySize] = useState("");
  const dispatch = useDispatch();
  const [phoneRaw, setPhoneRaw] = useState("");

  const AuthUser = useSelector((state) => state.authReducers.authState);

  useEffect(() => {
    setFamilySize(AuthUser?.familySize);

  }, []);

  const [signupErrors, setSignupError] = useState({
    firstError: "",
    lastError: "",
    emailError: "",
    phoneError: "",
    addressError: "",
    sizeError: "",
    passwordError: "",
    confirmError: "",
  });
  const [signupValue, setSignupValue] = useState({
    firstName: AuthUser?.firstName,
    lastName: AuthUser?.lastName,
    email: AuthUser?.email,
    phoneNumber: AuthUser?.phoneNumber,
    address: AuthUser?.address,
    familySize: AuthUser?.familySize,
    password: AuthUser?.password,
    confirmPassword: AuthUser?.confirmPassword,
  });
  const onSubmitUpdate = async () => {
    console.log("nkbk");
    const ValidateResponse = useSignup(
      signupValue,
      signupErrors,
      setSignupError,
      phoneRaw
    );
    if (ValidateResponse) {
      // const forBase64 = await FileSystem.readAsStringAsync(imageUri, { encoding: 'base64' });
      console.log("Imagebsze",forBase64)
      const data = {
        firstName: signupValue.firstName,
        lastName: signupValue.lastName,
        email: signupValue.email,
        phoneNumber: signupValue.phoneNumber,
        address: signupValue.address,
        familySize: Number(signupValue.familySize),
        password: signupValue.password,
        confirmPassword: signupValue.confirmPassword,
      };
      await UpdateClientEvent(
        AuthUser?.token,
        data,
        AuthUser,
        dispatch,
        setLoading
      );

      // console.log("ResponseData", responData);
    }

    // navigation.navigate("MainStack", {
    //   screen: "Welcome",
    //   params: { userType: props.checkUser },
    //   merge: true,
    // });
  };

  const onSubmitDelete = async () => {
    const res = await DeleteClientEvent(AuthUser?.token);
    if (res?.data) {
      Toast.show("Account deleted successfully");
      navigation.navigate("AuthStack", { screen: "signup" });
    }
  };

  const onSetValue = (item) => {
    console.log("Item", item);

    setFamilySize(item);
    setModalVisible(false);
  };
  const formatePhone = (phoneNumberString) => {
    let newText = "";
    let cleaned = ("", phoneNumberString).replace(/\D/g, "");
    for (var i = 0; i < cleaned.length; i++) {
      if (i == 0) {
        newText = "(";
      } else if (i == 3) {
        newText = newText + ") ";
      } else if (i == 6) {
        newText = newText + "-";
      }
      newText = newText + cleaned[i];
    }
    setSignupValue({ ...signupValue, phoneNumber: newText });
    setSignupError({ ...signupErrors, phoneError: "" });
  };
  return (
    <>
      <Spacer height={20} />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <CustomInputs
          placeholder="First"
          paddingLeft={20}
          alignSelf="center"
          value={signupValue.firstName}
          error={signupErrors.firstError}
          onChangeText={(txt) => {
            setSignupValue({ ...signupValue, firstName: txt });
            setSignupError({ ...signupErrors, firstError: "" });
          }}
          width="45%"
        />

        <CustomInputs
          placeholder="Last"
          paddingLeft={20}
          alignSelf="center"
          value={signupValue.lastName}
          error={signupErrors.lastError}
          onChangeText={(txt) => {
            setSignupValue({ ...signupValue, lastName: txt });
            setSignupError({ ...signupErrors, lastError: "" });
          }}
          width="45%"
        />
      </View>
      <Spacer height={30} />
      <CustomInputs
        placeholder="Email"
        paddingLeft={20}
        alignSelf="center"
        width="100%"
        value={signupValue.email}
        error={signupErrors.emailError}
        onChangeText={(txt) => {
          setSignupValue({ ...signupValue, email: txt });
          setSignupError({ ...signupErrors, emailError: "" });
        }}
      />
      <Spacer height={30} />
      <CustomInputs
        placeholder="Phone Number"
        paddingLeft={20}
        alignSelf="center"
        width="100%"
        keyboardType={"number-pad"}
        value={signupValue.phoneNumber}
        error={signupErrors.phoneError}
        onChangeText={(txt) => {
          formatePhone(txt);
        }}
      />

      <Spacer height={30} />
      <CustomInputs
        placeholder="Address"
        paddingLeft={20}
        alignSelf="center"
        width="100%"
        value={signupValue.address}
        error={signupErrors.addressError}
        onChangeText={(txt) => {
          setSignupValue({ ...signupValue, address: txt });
          setSignupError({ ...signupErrors, addressError: "" });
        }}
      />
      <Spacer height={30} />
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <CustomText
          label="Family Size :"
          marginRight={15}
          fontSize={15}
          color={colors.secondary}
        />
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => setModalVisible(true)}
          style={{
            maxWidth: scale(80),
            height: verticalScale(42),
            backgroundColor: "#EBEBEB",
            borderRadius: scale(15),
            paddingHorizontal: 10,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            shadowColor: Platform.OS == "ios" ? "#343a40" : colors.black,
            shadowRadius: 2,
            elevation: 5,
            shadowOpacity: 0.4,
            shadowOffset: { width: -1, height: 3 },
          }}
        >
          <CustomText
            label={familySize}
            fontFamily="regular"
            marginRight={15}
            fontSize={15}
            color={colors.black}
          />
          <AntDesign name="caretdown" size={24} color="#727171" />
        </TouchableOpacity>
      </View>
      {signupErrors.sizeError && (
        <CustomText
          marginTop={5}
          fontSize={9}
          marginLeft={10}
          label={signupErrors.sizeError}
          color={colors.red}
        />
      )}
      <Spacer height={30} />
      <CustomInputs
        placeholder="Password"
        paddingLeft={20}
        alignSelf="center"
        width="100%"
        value={signupValue.password}
        error={signupErrors.passwordError}
        onChangeText={(txt) => {
          setSignupValue({ ...signupValue, password: txt });
          setSignupError({ ...signupErrors, passwordError: "" });
        }}
      />
      <Spacer height={30} />
      <CustomInputs
        placeholder="Confirm Password"
        paddingLeft={20}
        alignSelf="center"
        width="100%"
        value={signupValue.confirmPassword}
        error={signupErrors.confirmError}
        onChangeText={(txt) => {
          setSignupValue({ ...signupValue, confirmPassword: txt });
          setSignupError({ ...signupErrors, confirmError: "" });
        }}
      />
      <Spacer height={50} />

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: 5,
        }}
      >
        <CustomButton
          title="Update"
          fontFamily={"bold"}
          onPress={onSubmitUpdate}
          borderRadius={15}
          width={"42%"}
          btnStyle={{
            shadowColor: Platform.OS == "ios" ? "#343a40" : colors.black,
            shadowRadius: 2,
            elevation: 5,
            shadowOpacity: 0.4,
            shadowOffset: { width: -1, height: 3 },
          }}
          backgroundColor={colors.secondary}
        />
        <CustomButton
          title="Delete"
          onPress={onSubmitDelete}
          fontFamily={"bold"}
          borderRadius={15}
          width={"42%"}
          btnStyle={{
            shadowColor: Platform.OS == "ios" ? "#343a40" : colors.black,
            shadowRadius: 2,
            elevation: 5,
            shadowOpacity: 0.4,
            shadowOffset: { width: -1, height: 3 },
          }}
          backgroundColor={colors.primary}
        />
      </View>

      <CustomBottomSheet
        modalVisible={modalVisible}
        list={[
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11",
          "12",
          "13",
          "14",
          "15",
          "16",
          "17",
          "18",
          "19",
          "20",
        ]}
        onSetValue={onSetValue}
        setValue={setFamilySize}
        onCloseModal={() => setModalVisible(false)}
      />
    </>
  );
};

export default ClientEditProfile;

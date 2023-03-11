import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
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

const ClientEditProfile = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [familySize, setFamilySize] = useState("");

  const onSetValue = (item) => {
    console.log("Item", item);

    setFamilySize(item);
    setModalVisible(false);
  };
  return (
    <>
    <Spacer height={20}/>
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
          width="45%"
        />

        <CustomInputs
          placeholder="Last"
          paddingLeft={20}
          alignSelf="center"
          width="45%"
        />
      </View>
      <Spacer height={30} />

      <CustomInputs
        placeholder="Email"
        paddingLeft={20}
        alignSelf="center"
        width="100%"
      />
      <Spacer height={30} />
      <PhoneInput
        //   initialCountry="Uk"
        //   defaultCode="+1"
        //   initialValue={state.contact}
        onChangeText={(num) => {
          // if (num.charAt(0) == 0) {
          //   console.log("numValue", num);
          // } else {
          //   console.log("numValue", num);            }
        }}
        containerStyle={{
          borderBottomWidth: 1.5,
          borderBottomColor: colors.black,
          width: "100%",
        }}
        textContainerStyle={{
          backgroundColor: "transparent",

          borderBottomWidth: 0.1,
          borderBottomColor: colors.secondary,
        }}
      />
      <Spacer height={30} />
      <CustomInputs
        placeholder="Address"
        paddingLeft={20}
        alignSelf="center"
        width="100%"
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
      <Spacer height={30} />
      <CustomInputs
        placeholder="Password"
        paddingLeft={20}
        alignSelf="center"
        width="100%"
      />
      <Spacer height={30} />

      <CustomInputs
        placeholder="Confirm Password"
        paddingLeft={20}
        alignSelf="center"
        width="100%"
      />
      <Spacer height={50} />

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal:5
        }}
      >
        <CustomButton
          title="Update"
          fontFamily={"bold"}
          borderRadius={15}
          width={"42%"}
          btnStyle={{
            shadowColor: Platform.OS == "ios" ? "#343a40" : colors.black,
            shadowRadius: 2,
            elevation: 5,
            shadowOpacity: 0.4,
            // inputMarginTop:-20,
            shadowOffset: { width: -1, height: 3 },
          }}
          backgroundColor={colors.secondary}
        />
        <CustomButton
          title="Delete"
          fontFamily={"bold"}

          borderRadius={15}
          width={"42%"}
          btnStyle={{
            shadowColor: Platform.OS == "ios" ? "#343a40" : colors.black,
            shadowRadius: 2,
            elevation: 5,
            shadowOpacity: 0.4,
            // inputMarginTop:-20,
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

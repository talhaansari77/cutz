import { Platform, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import PhoneInput from "react-native-phone-number-input";
import { colors } from "../../../../utils/Colors";
import { PH20 } from "../../../../utils/CommonStyles";
import { scale } from "react-native-size-matters";
import { Spacer } from "../../../../components/Spacer";
import CustomInputs from "./CustomInputs";
import CustomButton from "../../../../components/CustomButton";

const VolunteerEditProfile = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [familySize, setFamilySize] = useState("");
  const SignupData = [
    {
      id: 1,
      placeholder: "E-mail",

      //   value: signupValues.country,
      editable: false,
    },
    {
      id: 2,
      placeholder: "Phone Number",

      //   value: signupValues.country,
      editable: false,
    },
    {
      id: 3,
      placeholder: "Address",

      //   value: signupValues.country,
      editable: false,
    },
    {
      id: 4,
      placeholder: "Employer",

      //   value: signupValues.country,
      editable: false,
    },
    {
      id: 5,
      placeholder: "Organization",

      //   value: signupValues.country,
      editable: false,
    },
    {
      id: 7,
      placeholder: "Password",

      //   value: signupValues.country,
      editable: false,
    },
    {
      id: 7,
      placeholder: "Confirm Password",

      //   value: signupValues.country,
      editable: false,
    },
  ];
  return (
    <>
      <View>
        <Spacer height={30} />
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

          {SignupData.map((item) => {
            return item.id == 2 ? (
              <>
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
              </>
            ) : (
              <>
                <Spacer height={30} />

                <CustomInputs
                  placeholder={item.placeholder}
                  paddingLeft={20}
                  alignSelf="center"
                  width="100%"
                />
              </>
            );
          })}
      </View>
      <Spacer height={30}/>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <CustomButton
          title="Update"
          borderRadius={15}
          width={"45%"}
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
          borderRadius={15}
          width={"45%"}
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
    </>
  );
};

export default VolunteerEditProfile;

const styles = StyleSheet.create({});

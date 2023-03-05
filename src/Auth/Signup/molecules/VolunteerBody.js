import { Platform, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import CustomText from "../../../components/CustomText";
import CustomTextInput from "../../../components/CustomTextInput";
import PhoneInput from "react-native-phone-number-input";
import { colors } from "../../../utils/Colors";
import { PH20 } from "../../../utils/CommonStyles";
import { scale } from "react-native-size-matters";
import { Spacer } from "../../../components/Spacer";

const VolunteerBody = (props) => {
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
        <Spacer height={20} />
        <PH20>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <CustomTextInput
              placeholder="First"
              paddingLeft={20}
              alignSelf="center"
              width="45%"
              borderRadius={15}
            />

            <CustomTextInput
              placeholder="Last"
              paddingLeft={20}
              alignSelf="center"
              width="45%"
              borderRadius={15}
            />
          </View>

          {SignupData.map((item) => {
            return item.id == 2 ? (
              <>
                <Spacer height={20} />

                <PhoneInput
                  onChangeText={(num) => {
                    // if (num.charAt(0) == 0) {
                    //   console.log("numValue", num);
                    // } else {
                    //   console.log("numValue", num);            }
                  }}
                  containerStyle={{
                    backgroundColor: "#EBEBEB",
                    borderWidth: -1,
                    borderRadius: scale(15),
                    width: "100%",
                    shadowColor:
                      Platform.OS == "ios" ? "#343a40" : colors.black,
                    shadowRadius: 2,
                    elevation: 5,
                    shadowOpacity: 0.4,
                    shadowOffset: { width: -1, height: 3 },
                  }}
                  textContainerStyle={{
                    backgroundColor: "#EBEBEB",
                    borderRadius: scale(15),
                  }}
                />
              </>
            ) : (
              <>
                <Spacer height={20} />

                <CustomTextInput
                  placeholder={item.placeholder}
                  paddingLeft={20}
                  alignSelf="center"
                  width="100%"
                  borderRadius={15}
                />
              </>
            );
          })}
        </PH20>
      </View>
    </>
  );
};

export default VolunteerBody;

const styles = StyleSheet.create({});

import { Platform, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import CustomText from "../../../components/CustomText";
import CustomTextInput from "../../../components/CustomTextInput";
import PhoneInput from "react-native-phone-number-input";
import { colors } from "../../../utils/Colors";
import { PH20 } from "../../../utils/CommonStyles";
import { scale, verticalScale } from "react-native-size-matters";
import { Spacer } from "../../../components/Spacer";
import { icons } from "../../../../assets/icons";

const VolunteerBody = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [familySize, setFamilySize] = useState("");
  const [showPassword, setShowPassword] = useState(true);
  const [showPassword1, setShowPassword1] = useState(true);

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
        <Spacer height={10} />
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

          {SignupData.map((item) => (
            <>
              <Spacer height={11} />
              <CustomTextInput
                placeholder={item.placeholder}
                paddingLeft={20}
                alignSelf="center"
                width="100%"
                // height={verticalScale(35)}
                borderRadius={15}
                iconWidth={scale(15)}
                secureTextEntry={
                  item.placeholder === "Password" ? showPassword : showPassword1
                }
                onRightPress={() => {
                  if (item.placeholder === "Password")
                    setShowPassword(!showPassword);
                  else setShowPassword1(!showPassword1);
                }}
                iconHeight={verticalScale(15)}
                rigthIcon={
                  item.placeholder === "Password"
                    ? showPassword
                      ? icons.eyeSlash
                      : icons.eye
                    : item.placeholder === "Confirm Password"
                    ? showPassword1
                      ? icons.eyeSlash
                      : icons.eye
                    : ""
                }
              />
            </>
          ))}
        </PH20>
      </View>
    </>
  );
};

export default VolunteerBody;

const styles = StyleSheet.create({});

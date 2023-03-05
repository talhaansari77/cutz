import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React,{useState} from "react";
import CustomTextInput from "../../../components/CustomTextInput";
import { PH20 } from "../../../utils/CommonStyles";
import { Spacer } from "../../../components/Spacer";
import { colors } from "../../../utils/Colors";
import PhoneInput from "react-native-phone-number-input";
import { scale, verticalScale } from "react-native-size-matters";
import { Platform } from "react-native";
import CustomText from "../../../components/CustomText";
import { AntDesign } from '@expo/vector-icons'; 
import CustomBottomSheet from "../../../components/CustomBottomSheet";



const SignupBody = (props) => {
    const [modalVisible, setModalVisible] = useState(false)
    const [familySize, setFamilySize] = useState("")

    const onSetValue=(item)=>{
        console.log("Item",item)

        setFamilySize(item)
        setModalVisible(false)



    }
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
        <Spacer height={20} />

        <CustomTextInput
          placeholder="Email"
          paddingLeft={20}
          alignSelf="center"
          width="100%"
          borderRadius={15}
        />
        <Spacer height={20} />
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
            backgroundColor:"#EBEBEB",
            borderWidth: -1,
            borderRadius: scale(15),
            width: "100%",
            shadowColor: Platform.OS == "ios" ? "#343a40" : colors.black,
            shadowRadius: 2,
            elevation: 5,
            shadowOpacity: 0.4,
            shadowOffset: { width: -1, height: 3 },
          }}
          textContainerStyle={{
            backgroundColor:"#EBEBEB",
            borderRadius: scale(15),
          }}
        />
        <Spacer height={20} />
        <CustomTextInput
          placeholder="Address"
          paddingLeft={20}
          alignSelf="center"
          width="100%"
          borderRadius={15}
        />
        <Spacer height={20} />
        <View style={{flexDirection:"row",alignItems:"center"}}>
        <CustomText
          label="Family Size :"
          fontFamily="bold"
          marginRight={15}
          fontSize={20}
          color={colors.placeholder}
        />
        <TouchableOpacity 
        activeOpacity={0.6}
        onPress={()=>setModalVisible(true)}
        style={{maxWidth:scale(80), height:verticalScale(42),
          backgroundColor:"#EBEBEB",
          borderRadius: scale(15),
          paddingHorizontal:10,
          flexDirection:"row",
          alignItems:"center",
          justifyContent:"center",
          shadowColor: Platform.OS == "ios" ? "#343a40" : colors.black,
          shadowRadius: 2,
          elevation: 5,
          shadowOpacity: 0.4,
          shadowOffset: { width: -1, height: 3 },
        }}>
              <CustomText
          label={familySize}
          fontFamily="bold"
          marginRight={15}
          fontSize={20}
          color={colors.black}
        />
            <AntDesign name="caretdown" size={24} color="#727171" />
            

        </TouchableOpacity>

        </View>
        <Spacer height={20} />
        <CustomTextInput
          placeholder="Password"
          paddingLeft={20}
          alignSelf="center"
          width="100%"
          borderRadius={15}
        />
        <Spacer height={20} />

        <CustomTextInput
          placeholder="Confirm Password"
          paddingLeft={20}
          alignSelf="center"
          width="100%"
          borderRadius={15}
        />
      </PH20>
    </View>
          <CustomBottomSheet
        modalVisible={modalVisible}
        list={["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20"]}
        onSetValue={onSetValue}
        setValue={setFamilySize}
        onCloseModal={() => setModalVisible(false)}
      />
      </>
   
  );
};

export default SignupBody;

const styles = StyleSheet.create({});

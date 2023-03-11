import { StyleSheet, Text, View } from "react-native";
import React,{useState} from "react";
import CustomText from "../../../../components/CustomText";
import { colors } from "../../../../utils/Colors";
import commonStyles from "../../../../utils/CommonStyles";
import { Feather } from "@expo/vector-icons";
import { Spacer } from "../../../../components/Spacer";
import { moderateScale } from "react-native-size-matters";
import { Ionicons } from "@expo/vector-icons";
import CustomDropDown from "../../../../components/CustomDropDown";

const SearchHeader = () => {
    const [modalVisible,setModalVisible] = useState(false)

    const dropData=[
      "Shelter",
      "Food",
      "Fundraisers ",
       "Other"]
  return (
    <View style={commonStyles.justifyContainer}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <CustomText
        onPress={()=>setModalVisible(!modalVisible)}
          label="Organization"
          fontFamily="semiBold"
          fontSize={18}
          color={colors.lightGray}
        />
        {/* <Spacer width={5}/> */}
        <View style={{ marginTop: 7 }}>
          <Feather
            name="chevron-down"
            size={moderateScale(27)}
            color="#2C2929"
          />
        </View>
      </View>
      <Ionicons name="ios-menu" size={moderateScale(35)} color="#134563" />
      <CustomDropDown modalVisible={modalVisible} setModalVisible={setModalVisible}  dropData={dropData}/>
    </View>
  );
};

export default SearchHeader;

const styles = StyleSheet.create({});

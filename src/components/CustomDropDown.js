import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Modal,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { verticalScale } from "react-native-size-matters";
import { colors } from "../utils/Colors";
import CustomText from "./CustomText";
import SepratorLine from "./SepratorLine";
const height = Dimensions.get("screen").height;

const CustomDropDown = ({ dropData, modalVisible, setModalVisible,setEventData,leftModal,modalWidth }) => {
  const [selectItem, setSelectItem] = useState(-1);
  return (
    <Modal
    animationType="fade"
    transparent={true}
    visible={modalVisible}
    onRequestClose={() => {
      Alert.alert('Modal has been closed.');
      setModalVisible(!modalVisible);
    }}>
        <View style={styles.centeredView}>

    <View
      style={{
        width: modalWidth|| "60%",
        // height: verticalScale(130),
        borderRadius: 10,
        backgroundColor: colors.white,
        borderWidth: 1,
        borderColor: colors.primary,
        position: "absolute",
        shadowColor: Platform.OS == "ios" ? "#343a40" : colors.black,
        shadowRadius: 2,
        elevation: 5,
        shadowOpacity: 0.5,
        zIndex: 100,
        // inputMarginTop:-20,
        shadowOffset: { width: 1, height: 3 },
        top: verticalScale(110),
        left: leftModal|| "30%",
      }}
    >
      <ScrollView>
        {dropData.map((item, index) => {
          return (
            <>
              <TouchableOpacity
              activeOpacity={0.6}
              onPress={()=>{
                setEventData(item?.name)
                setModalVisible(false);
                setSelectItem(index)


              }}
                style={{
                  backgroundColor: index == selectItem ? colors.primary : null,
                  borderTopLeftRadius: index==0? 10:0,
                  borderTopRightRadius: index==0? 10:0,
                }}
              >
                <CustomText
                 
                  color={colors.secondary}
                  fontSize={14}
                  fontFamily="semiBold"
                  marginTop={5}
                  marginLeft={10}
                  marginBottom={5}
                  //   alignSelf="center"
                  label={item?.name}
                />
              </TouchableOpacity>

              {dropData.length - 1 == index ? (
                <></>
              ) : (
                <SepratorLine backgroundColor={colors.primary} />
              )}
            </>
          );
        })}
      </ScrollView>
    </View>
    </View>

       </Modal>
  );
};

export default CustomDropDown;

const styles = StyleSheet.create({
  centeredView: {
    marginTop: 22,
  },
});

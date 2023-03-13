import { Platform, ScrollView, StyleSheet, Text, View,Modal } from "react-native";
import React,{useState} from "react";
import { verticalScale } from "react-native-size-matters";
import { colors } from "../utils/Colors";
import CustomText from "./CustomText";
import SepratorLine from "./SepratorLine";

const CustomDropDown = ({ dropData,modalVisible,setModalVisible }) => {
    const [selectItem, setSelectItem] = useState(0)
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
        width: "60%",
        // height: verticalScale(130),
        borderRadius: 10,
        backgroundColor:colors.white,
        borderWidth: 1,
        borderColor: colors.primary,
        position: "absolute",
        shadowColor: Platform.OS == "ios" ? "#343a40" : colors.black,
        shadowRadius: 2,
        elevation: 5,
        shadowOpacity: 0.5,
        // inputMarginTop:-20,
        shadowOffset: { width: 1, height: 3 },
        top: verticalScale(100),
        left: "30%",
      }}
    >
        <ScrollView>
        {dropData.map(( item, index ) => {
        return (
          <>
          <View style={{backgroundColor: index==selectItem?colors.primary:null,borderTopLeftRadius:10,borderTopRightRadius:10}}>
          <CustomText
            onPress={()=>{
                // setSelectItem(index)
                setModalVisible(false)

            }}
              color={colors.secondary}
              fontSize={14}
              fontFamily="semiBold"
              marginTop={5}
                marginLeft={10}
              marginBottom={5}
              //   alignSelf="center"
              label={item}
            />

          </View>
          
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

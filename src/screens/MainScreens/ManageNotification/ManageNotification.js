import {
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";
import React from "react";
import CustomText from "../../../components/CustomText";
import commonStyles, { PH20 } from "../../../utils/CommonStyles";
import { icons } from "../../../../assets/icons";
import { colors } from "../../../utils/Colors";
import SepratorLine from "../../../components/SepratorLine";
import { Spacer } from "../../../components/Spacer";
import NotificationBody from "./molecules/NotificationBody";
import NotificationContainer from "./molecules/NotificationContainer";

const ManageNotification = ({ navigation }) => {
  return (
    <SafeAreaView style={commonStyles.commonMain}>
      <Spacer height={5} />
      <NotificationBody navigation={navigation} />
      <Spacer height={40} />
      <SepratorLine backgroundColor={"#C9C9C9"} />

      <NotificationContainer
        name={"Choose Organizations"}
        // img={item.img}
        // enable
        // onPress={item.onPress}
        // family={item?.family}
      />
      <SepratorLine backgroundColor={"#C9C9C9"} />

      {/* if  account type volunteer */}
      {/* <NameContainer name={"FAMILY SIZE"} />
<DetailContainer name={"# of mouths"}/> */}
    </SafeAreaView>
  );
};
export default ManageNotification;

const styles = StyleSheet.create({});

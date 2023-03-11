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

const ManageNotification = () => {
  return (
    <SafeAreaView style={commonStyles.commonMain}>
      <Spacer height={5} />
      <NotificationBody/>

     

      {/* if  account type volunteer */}
      {/* <NameContainer name={"FAMILY SIZE"} />
<DetailContainer name={"# of mouths"}/> */}
    </SafeAreaView>
  );
};
export default ManageNotification;

const styles = StyleSheet.create({});

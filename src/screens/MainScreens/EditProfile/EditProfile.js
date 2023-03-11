import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import commonStyles, { PH20 } from "../../../utils/CommonStyles";
import { Spacer } from "../../../components/Spacer";
import ProfilePhoto from "../../../components/ProfilePhoto";
import CustomInputs from "./molecules/CustomInputs";
import ClientEditProfile from "./molecules/ClientEditProfile";
import VolunteerEditProfile from "./molecules/VolunteerEditProfile";
import { scale } from "react-native-size-matters";

const EditProfile = () => {
  return (
    <SafeAreaView style={commonStyles.commonMain}>
      <ScrollView>



      <PH20>
      <Spacer height={10} />


      <ProfilePhoto  width={scale(80)} height={scale(80)} addPhoto alignSelf="center" />
      {/* <Spacer height={15} /> */}
      <ClientEditProfile/>
      {/* <VolunteerEditProfile/> */}



      </PH20>
      </ScrollView>

    </SafeAreaView>
  );
};

export default EditProfile;

const styles = StyleSheet.create({});

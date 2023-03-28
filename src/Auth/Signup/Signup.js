import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import commonStyles from "../../utils/CommonStyles";
import SignupHeader from "./molecules/SignupHeader";
import SignupBody from "./molecules/SignupBody";
import SignupBottom from "./molecules/SignupBottom";
import VolunteerBody from "./molecules/VolunteerBody";
const Signup = ({ navigation }) => {
  const [checkUser, setCheckUser] = useState("Client");
  return (
    <SafeAreaView style={commonStyles.commonMain}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <SignupHeader
          setCheckUser={setCheckUser}
          checkUser={checkUser}
          navigation={navigation}
        />
        {checkUser == "Client" ? (
          <SignupBody 
          navigation={navigation}
          checkUser={checkUser} />
        ) : (
          <VolunteerBody 
          navigation={navigation}
          checkUser={checkUser}
          />
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Signup;

const styles = StyleSheet.create({});

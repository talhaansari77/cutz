import { StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { colors } from "../../../utils/Colors";
import { SafeAreaView } from "react-native-safe-area-context";
import AppHeader from "../../../components/AppHeader";
import EventDetail from "./Molecules/EventDetail";
import TicketDetails from "./Molecules/TicketDetails";
import { useIsFocused } from "@react-navigation/native";

const WelcomeScreen = ({ navigation: { navigate }, route }) => {
  const [ticketVisible, setTicketVisible] = useState(false);
  const isFocused = useIsFocused();

  const handleConfirmPress = () => {
    navigate("Receipt", {
      userType: route?.params?.userType,
    });
  };
  const handleBookingPress = () => {
    setTicketVisible(true);
  };


  useEffect(() => {
    setTicketVisible(false);
  }, [isFocused]);

  return (
    <SafeAreaView style={styles.container}>
      <AppHeader />
      {!ticketVisible ? (
        <EventDetail
          userType={route?.params?.userType}
          handleBookingPress={handleBookingPress}
        />
      ) : (
        <TicketDetails
          userType={route?.params?.userType}
          handleConfirmPress={handleConfirmPress}
          navigate={navigate}
          cardBtnText={"Confirm"}
        />
      )}
    </SafeAreaView>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  shadowDivider: {
    width: "100%",
    height: 2,
    backgroundColor: colors.white,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,

    elevation: 9,
  },
  orgListItem: {
    alignItems: "center",
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,

    elevation: 9,
  },
});

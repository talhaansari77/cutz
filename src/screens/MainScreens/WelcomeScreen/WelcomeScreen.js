import { StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { colors } from "../../../utils/Colors";
import { SafeAreaView } from "react-native-safe-area-context";
import AppHeader from "../../../components/AppHeader";
import EventDetail from "./Molecules/EventDetail";
import TicketDetails from "./Molecules/TicketDetails";
import { useIsFocused } from "@react-navigation/native";
import Carousel from "react-native-reanimated-carousel";
import { useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getEvents } from "../../../services/Events";
import Loader from "../../../utils/Loader";
import { loaderAnimation } from "../../../../assets/Loaders";
import {
  postEventReservationClient,
  postEventReservationVolunteer,
} from "../../../services/Reservation";

const WelcomeScreen = ({ navigation: { navigate }, route }) => {
  const AuthUser = useSelector((state) => state.authReducers.authState);

  const [events, setEvents] = useState([]);
  const [state, setState] = useState({
    events: [],
    companyData: [],
    eventTypes: [],
    ticketData: {},
    loading: false,
  });
  const [ticketVisible, setTicketVisible] = useState(false);
  const isFocused = useIsFocused();

  const handleConfirmPress = () => {
    loaderOn();
    const data = {
      // clientID: "6420311a0bb5bf7676e2aa8e",
      eventGroupID: "64220f310bb5bf7676e2aafe",
      eventID: state.ticketData._id,
      checkIN: "",
      checkOut: "",
    };
    // clientStatus
    console.log(AuthUser);
    if (AuthUser._id)
      if (AuthUser.clientStatus) {
        postEventReservationClient(data, AuthUser.token).then((r) => {
          loaderOff();
          navigate("Receipt");
        });
      } else {
        postEventReservationVolunteer(data, AuthUser.token).then((r) => {
          loaderOff();
          navigate("Receipt");
        });
      }
      
  };
  const handleCancelPress = () => {
    setTicketVisible(false);
  };
  const handleBookingPress = (index) => {
    setState({ ...state, ticketData: state.events[index] });
    setTicketVisible(true);
  };
  const loaderOn = () => {
    setState({ ...state, loading: true });
  };
  const loaderOff = () => {
    setState({ ...state, loading: false });
  };

  useEffect(() => {
    loaderOn();
    getEvents().then((r) => {
      let data = r.data;
      let eventTypes = data.map((o) => ({
        title: o.eventType,
      }));
      let companyData = data.map((o, index) => ({
        index: index,
        title: o.organization,
      }));
      console.log(eventTypes);
      setState({
        ...state,
        events: data,
        eventTypes: eventTypes,
        companyData: companyData,
      });
    });
    loaderOff();
  }, []);

  useEffect(() => {
    setTicketVisible(false);
  }, [isFocused]);

  return (
    <>
      <SafeAreaView style={styles.container}>
        <AppHeader />
        {!ticketVisible ? (
          <EventDetail
            userType={route?.params?.userType}
            handleBookingPress={handleBookingPress}
            state={state}
            setState={setState}
          />
        ) : (
          <TicketDetails
            userType={route?.params?.userType}
            ticketData={state.ticketData}
            handleConfirmPress={handleConfirmPress}
            handleCancelPress={handleCancelPress}
            state={state}
            setState={setState}
            navigate={navigate}
            cardBtnText={"Confirm"}
          />
        )}
      </SafeAreaView>
      <Loader file={loaderAnimation} loading={state.loading} />
    </>
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
    shadowColor: Platform.OS == "ios" ? "#343a40" : colors.black,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,

    elevation: 9,
  },
});

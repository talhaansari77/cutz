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
import { getEventById, getEvents } from "../../../services/Events";
import Loader from "../../../utils/Loader";
import loaderAnimation from "../../../../assets/Loaders";
import {
  postEventReservationClient,
  postEventReservationVolunteer,
} from "../../../services/Reservation";
import moment from "moment";
import {
  getOrganizationById,
  getOrganizations,
} from "../../../services/Organization";
import { getTimings } from "../../../services/Organization copy";

const WelcomeScreen = ({ navigation: { navigate }, route }) => {
  const AuthUser = useSelector((state) => state.authReducers.authState);

  const [events, setEvents] = useState([]);
  const [state, setState] = useState({
    events: [],
    companyData: [],
    eventTypes: [],
    timings: [],
    ticketData: {},
    loading: false,
    searchIndex: -1,
  });
  const [ticketVisible, setTicketVisible] = useState(false);
  const isFocused = useIsFocused();

  const handleConfirmPress = () => {
    loaderOn();
    const data = {
      // clientID: "6420311a0bb5bf7676e2aa8e",
      eventGroupID: state.ticketData.groupId,
      eventID: state.ticketData.eventId,
      checkIN: "",
      checkOut: "",
    };
    // clientStatus
    // console.log(AuthUser);
    if (AuthUser._id)
      if (AuthUser.clientStatus) {
        postEventReservationClient(data, AuthUser.token).then((r) => {
          loaderOff();
          if (r?.data) navigate("Receipt");
          else alert("Event already reserved for Client");
        });
      } else {
        postEventReservationVolunteer(data, AuthUser.token).then((r) => {
          loaderOff();
          if (r?.data) navigate("Receipt");
          else alert("Event already reserved for Volunteer");
        });
      }
  };
  const handleCancelPress = () => {
    setTicketVisible(false);
  };
  const handleBookingPress = (index) => {
    loaderOn();

    let time = index;
    getEventById(time.eventId).then((r) => {
      let event = r.data;
      getOrganizationById(event.orgId).then((r) => {
        let org = r.data;
        setState({
          ...state,
          ticketData: {
            ...time,
            ...event,
            eventId:event._id,
            groupId: time._id,
            organization: org.organizationName,
          },
        });
        setTicketVisible(true);
        console.log('state.ticketData',{
          ...time,
          ...event,
          organization: org.organizationName,
        });
      });
      // loaderOff();
    });
  };
  const loaderOn = () => {
    setState({ ...state, loading: true });
  };
  const loaderOff = () => {
    setState({ ...state, loading: false });
  };

  useEffect(() => {
    // let companyData = [];
    // let eventTypes = [];
    loaderOn();
    getOrganizations().then((r) => {
      let data = r.data;
      let companyData = data.map((o, index) => ({
        index: index,
        id: o._id,
        title: o.organizationName,
      }));
      getEvents().then((r) => {
        let events = r.data;
        // setTimeout(() => {
        //   console.log(events[0].addresses)
        // }, 3000);
        let eventTypes = events.map((o, index) => ({
          index: index,
          id: o._id,
          title: o.eventType,
        }));

        getTimings().then((r) => {
          let data = r.data;
          setState({
            ...state,
            events: events,
            eventTypes: eventTypes,
            companyData: companyData,
            timings: data,
          });
        });
      });
    });

    // setTimeout(() => {
    //   setState({
    //     ...state,
    //     eventTypes: eventTypes,
    //     companyData: companyData,
    //   });
    //   console.log("companyData", companyData);
    // }, 3000);
  }, []);

  // useEffect(() => {
  //   loaderOn();
  //   setTicketVisible(true);
  //   setTimeout(() => {
  //     setTicketVisible(false);
  //     loaderOff();
  //   }, 3000);
  // }, [isFocused]);

  useEffect(() => {
    setTicketVisible(false);
  }, [isFocused]);

  useEffect(() => {
    setTimeout(() => {
      if (isFocused && route?.params?.data) {
        let eventID = route?.params?.data[0]?._id;
        let i = state.events.findIndex((e) => e._id === eventID);
        // console.log("index", i);
        if (i) {
          setState({ ...state, searchIndex: i });
        } else {
          alert("Not Found");
        }
      }
    }, 1000);
    // console.log("Data=>",route?.params?.data)
  }, [isFocused]);
  return (
    <>
      <SafeAreaView style={styles.container}>
        <AppHeader />
        {!ticketVisible ? (
          <EventDetail
            userType={AuthUser?.clientStatus}
            handleBookingPress={handleBookingPress}
            state={state}
            setState={setState}
          />
        ) : (
          <TicketDetails
            userType={AuthUser?.clientStatus}
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

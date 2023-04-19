import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Platform,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useEffect, useRef, useState } from "react";
import CustomText from "../../../components/CustomText";
import { Spacer } from "../../../components/Spacer";
import { colors } from "../../../utils/Colors";
import { scale, verticalScale } from "react-native-size-matters";
import { icons } from "../../../../assets/icons";
import { Avatar, Image } from "react-native-elements";
import { images } from "../../../../assets/images";
import CustomButton from "../../../components/CustomButton";
import commonStyles from "../../../utils/CommonStyles";
import TicketCheckInAndOut from "./Molecules/TicketCheckInAndOut";
import InputItem from "./Molecules/InputItem";
import ThumbGreeting from "./Molecules/ThumbGreeting";
import SmileGreeting from "./Molecules/SmileGreeting";
import AppHeader from "../../../components/AppHeader";
import TicketDetails from "../WelcomeScreen/Molecules/TicketDetails";
import { useIsFocused } from "@react-navigation/native";
import TicketCheckInAndOutVol from "./Molecules/TicketCheckInAndOutVol";
import TicketCarousel from "./Molecules/TicketCarousel";
import { useSelector } from "react-redux";
import {
  getReservationClient,
  getReservationVolunteer,
} from "../../../services/Reservation";
import { getEvents } from "../../../services/Events";
import { getEventGroup } from "../../../services/EventGroup";
import Loader from "../../../utils/Loader";
import loaderAnimation from "../../../../assets/Loaders";
import { getTimingBy, getTimings } from "../../../services/Organization copy";
import { getOrganizationById } from "../../../services/Organization";
import moment from "moment";
const currentDate = new Date().toString();

const ReceiptScreen = ({ navigation: { navigate }, route }) => {
  // console.log("RoutesType", route?.params);
  const AuthUser = useSelector((state) => state.authReducers.authState);
  const isFocused = useIsFocused();

  const [check, setCheck] = useState(false);
  const [state, setState] = useState({
    loading: false,
    checkIn: false,
    checkOut: false,
    greet: false,
    ticketDetail: false,
    events: [],
    reservations: [],
    tickets: [],
    currentTicket: {},
    ticketData: {},
    pin1: "",
    pin2: "",
    pin3: "",
    pin4: "",
  });

  const loaderOn = () => {
    setState({ ...state, loading: true });
  };
  const loaderOff = () => {
    setState({ ...state, loading: false });
  };

  useEffect(() => {
    if (isFocused) {
      loaderOn();
      // var myTickets = [];
      getEvents().then((r) => {
        let data = r.data;
        getReservationData().then((r1) => {
          let res = SetReservationData(data, r1.data);
          console.log("res", res);
          setState({ ...state, tickets: res, currentTicket: res[0] });
        });
      });

      // loaderOff();
    }
  }, [isFocused]);

  const getReservationData = () => {
    let data = [];
    if (AuthUser._id)
      if (AuthUser.clientStatus) {
        return getReservationClient(AuthUser.token);
      } else {
        return getReservationVolunteer(AuthUser.token);
      }
  };

  const SetReservationData = (events, reservations) => {
    let myTickets = [];
    events.map((e) => {
      reservations.map((r) => {
        if (e._id === r.eventID) {
          myTickets.push({ ...e, eventGroupID: r.eventGroupID });
          console.log("res ==>", e);
          // myTickets.push({ ...e, eventStartTime: eventStartTime });
        }
      });
    });
    return myTickets;
  };

  const handleProceedPress = (ticket) => {
    if (ticket)
      navigate("Event", {
        location: ticket.addresses[0].location,
      });
  };
  const handleTicketPress = () => {
    // setState({ ...state, ticketDetail: true });
    console.log(state.currentTicket);

    // getOrganizationById(event.orgId).then((r) => {
    //   let org = r.data;
    //   setState({
    //     ...state,
    //     ticketData: {
    //       ...time,
    //       ...event,
    //       eventId: event._id,
    //       groupId: time._id,
    //       organization: org.organizationName,
    //     },
    //   });
    //   setTicketVisible(true);
    //   console.log("state.ticketData", {
    //     ...time,
    //     ...event,
    //     organization: org.organizationName,
    //   });
    // });
    // loaderOff();

    getEventGroup().then((r) => {
      // console.log(state.currentTicket._id)
      // console.log(r.data.find((rr)=>rr.eventID===state.currentTicket._id))
      let grp = r.data.find((rr) => rr.eventID === state.currentTicket._id);
      // getTimingBy(tickets[index].eventGroupID).then((t) => {
      //   setTime(t.data.eventStartTime);
      // });
      setState({
        ...state,
        ticketData: { ...state.currentTicket, ...grp },
        ticketDetail: true,
      });
    });
  };
  const handleCancelPress = () => {
    navigate("Welcome");
  };
  // useEffect(() => {
  //   if (isFocused) {
  //     if (route?.params?.ticketDetail)
  //       setState({ ...state, ticketDetail: true });
  //     else setState({ ...state, ticketDetail: false });
  //   }
  // }, [isFocused]);
  return (
    <>
      <SafeAreaView style={styles.container}>
        {/* <ScrollView> */}

        {!state.ticketDetail ? (
          <>
            {/* <Spacer height={notch?30:10} /> */}

            <AppHeader
              ticket={
                moment(state?.time?.eventStartTime)
                  .utc()
                  .format("YYYY-MM-DD") ==
                  moment(currentDate).utc().format("YYYY-MM-DD") &&
                moment(currentDate).utc().format("hh:mm A") >
                  moment(state?.time?.eventStartTime)
                    .subtract(10, "minutes")
                    .utc()
                    .format("hh:mm A")
                  ? true
                  : false
              }
              onPressTicket={handleTicketPress}
            />

            <TicketCarousel
              tickets={state.tickets}
              state={state}
              setState={setState}
              handleCancelPress={handleCancelPress}
              handleProceedPress={handleProceedPress}
            />
          </>
        ) : AuthUser.clientStatus ? (
          <>
            <AppHeader
              backButton={state.checkOut ? false : true}
              onPressBack={() => {
                setState({ ...state, ticketDetail: false });
              }}
            />
            {/* <Text>{AuthUser._id}</Text> */}
            <TicketCheckInAndOut
              state={state}
              setState={setState}
              profilePicture={AuthUser?.profilePicture}
            />
          </>
        ) : (
          <>
            <AppHeader />
            {state.greet ? (
              state.checkOut ? (
                <SmileGreeting
                  state={state}
                  setState={setState}
                  navigate={navigate}
                />
              ) : (
                <ThumbGreeting
                  onPress={() => {
                    setState({
                      ...state,
                      greet: false,
                      checkIn: true,
                    });
                  }}
                />
              )
            ) : (
              <TicketCheckInAndOutVol state={state} setState={setState} />
            )}
          </>
        )}

        {/* </ScrollView> */}
      </SafeAreaView>
      <Loader file={loaderAnimation} loading={state.loading} />
    </>
  );
};

export default ReceiptScreen;

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
  cardStyle: {
    width: "80%",
    height: "45%",
    alignSelf: "center",
    borderRadius: 10,
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
  voucherContainer: {
    // alignItems: "center",
  },
  voucherHeader: {
    // width:300,
    height: verticalScale(40),
    // width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.primary,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,

    elevation: 9,
  },
  voucherBody: {
    // height: verticalScale(100),
    width: 300,
    backgroundColor: colors.white,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,

    elevation: 9,
  },
});

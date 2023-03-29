import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useEffect, useState } from "react";
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

const ReceiptScreen = ({ navigation: { navigate }, route }) => {
  // console.log("RoutesType", route?.params);
  const AuthUser = useSelector((state) => state.authReducers.authState);
  const isFocused = useIsFocused();

  const [check, setCheck] = useState(false);
  const [state, setState] = useState({
    checkIn: false,
    checkOut: false,
    greet: false,
    ticketDetail: false,
    events: [],
    reservations: [],
    tickets: [],
  });
  
  // const { ticketDetail } = route.params;

  // let data= r.data;
  // let myTickets=data.filter((t)=>r.clientID===AuthUser._id)
  // useEffect(() => {
  //   getEvents().then((r) => {
  //     let data = r.data;
  //     setState({
  //       ...state,
  //       events: data,
  //     });
  //   });
  // }, [isFocused]);
  useEffect(() => {
    var data = [];
    // setState({ ...state, tickets: [] });
    getEvents().then((r) => {
      let data = r.data;

      setState({
        ...state,
        events: data,
      });
    });

    if (AuthUser._id)
      if (AuthUser.clientStatus) {
        getReservationClient(AuthUser.token).then((r) => {
          data = r.data;

          // let myTickets = data.map((t) => r.eventID === AuthUser._id);
          setState({ ...state, reservations: data });
        });
      } else {
        getReservationVolunteer(AuthUser.token).then((r) => {
          data = r.data;
          setState({ ...state, reservations: data });
        });
      }
      
    state.events.map((e) => {
      state.reservations.map((r) => {
        if (e._id === r.eventID) {
          state.tickets.push(e);
        }
      });
    });
    console.log('myTickets')
    console.log(state.tickets.length)
    // setState({ ...state, tickets: myTickets });
  }, [isFocused]);

  const handleProceedPress = (ticket) => {
    navigate("Event", {
      userType: route?.params?.userType,
      location:ticket.location
    });
  };
  const handleTicketPress = () => {
    setState({ ...state, ticketDetail: true });
  };
  const handleCancelPress = () => {
    navigate("Welcome");
  };
  useEffect(() => {
    if (route?.params?.ticketDetail) setState({ ...state, ticketDetail: true });
    else setState({ ...state, ticketDetail: false });
  }, [isFocused]);

  return (
    <SafeAreaView style={styles.container}>
      {!state.ticketDetail ? (
        <>
          {/* <Spacer height={notch?30:10} /> */}

          <AppHeader ticket onPressTicket={handleTicketPress} />
          {/* <TicketDetails
            navigate={navigate}
            cardBtnText={"Proceed"}
            handleProceedPress={handleProceedPress}
          /> */}
          <TicketCarousel
            tickets={state.tickets}
            handleCancelPress={handleCancelPress}
            handleProceedPress={handleProceedPress}
          />
        </>
      ) : route?.params?.userType === "Client" ? (
        <>
          <AppHeader backButton />
          <TicketCheckInAndOut state={state} setState={setState} />
        </>
      ) : (
        <>
          <AppHeader />
          {state.greet ? (
            state.checkOut ? (
              <SmileGreeting state={state} setState={setState} />
            ) : (
              <ThumbGreeting />
            )
          ) : (
            <TicketCheckInAndOutVol state={state} setState={setState} />
          )}
        </>
      )}
    </SafeAreaView>
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

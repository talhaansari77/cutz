import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Platform,
  SafeAreaView,
} from "react-native";
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

const ReceiptScreen = ({ navigation: { navigate }, route }) => {
  // console.log("RoutesType", route?.params);
  const isFocused = useIsFocused();

  const [check, setCheck] = useState(false);

  const [state, setState] = useState({
    checkIn: false,
    checkOut: false,
    greet: false,
    ticketDetail: false,
  });
  // const { ticketDetail } = route.params;
  const Header = () => (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: scale(20),
        paddingBottom: 10,
      }}
    >
      <Image
        source={icons.appIconNav}
        resizeMode={"contain"}
        containerStyle={{
          height: 40,
          width: 100,
        }}
      />
      <View style={{ flexDirection: "row" }}>
        {check ? (
          <>
            <Image
              source={icons.ticket2}
              resizeMode={"contain"}
              containerStyle={{
                height: 40,
                width: 40,
              }}
            />
            <Spacer width={10} />
          </>
        ) : (
          <></>
        )}
        <Image
          source={icons.bell}
          resizeMode={"contain"}
          containerStyle={{
            height: 40,
            width: 40,
          }}
        />
      </View>
    </View>
  );

  const InfoText = () => (
    <View style={{ alignSelf: "center", alignItems: "center" }}>
      <>
        <CustomText
          label={"REVIEW RESERVATION THEN"}
          color={colors.secondary}
          fontFamily={"semiBold"}
        />
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <CustomText
            label={"Proceed"}
            color={colors.secondary}
            marginRight={5}
            fontFamily={"bold"}
          />
          <CustomText
            label={"OR CANCEL"}
            color={colors.secondary}
            fontFamily={"semiBold"}
          />
        </View>
        <Spacer height={15} />
        <CustomText
          label={"DO NOT enter the property,"}
          color={colors.secondary}
          fontFamily={"semiBold"}
        />
        <CustomText
          label={"until the time of your reservation."}
          color={colors.secondary}
          fontFamily={"semiBold"}
        />
      </>
    </View>
  );

  const handleProceedPress = () => {
    navigate("Event", {
      userType: route?.params?.userType,
    });
  };
  const handleTicketPress = () => {
    setState({ ...state, ticketDetail: true });
  };

  useEffect(() => {
    if (route?.params?.ticketDetail) setState({ ...state, ticketDetail: true });
    else setState({ ...state, ticketDetail: false });
  }, [isFocused]);

  return (
    <SafeAreaView style={styles.container}>
      {!state.ticketDetail ? (
        <>
          <AppHeader ticket onPressTicket={handleTicketPress} />
          <TicketDetails
            navigate={navigate}
            cardBtnText={"Proceed"}
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

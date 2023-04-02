import {
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { colors } from "../../../../utils/Colors";
import { Avatar, Image } from "react-native-elements";
import { images } from "../../../../../assets/images";
import { icons } from "../../../../../assets/icons";
import { Spacer } from "../../../../components/Spacer";
import CustomButton from "../../../../components/CustomButton";
import CustomText from "../../../../components/CustomText";
import { verticalScale } from "react-native-size-matters";
import InputItem from "./InputItem";
import { Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";
import moment from "moment";
import OTP from "./OTP";
import { URLS } from "../../../../services/Urls";

const TicketCheckInAndOut = ({ setState, state, profilePicture }) => {
  const navigation = useNavigation();
  const [visible, setVisible] = useState(false);
  const modelClose = () => {
    setVisible(false);
  };
  const modelOpen = () => {
    setVisible(true);
  };
  const ModalContent = () => (
    <View
      style={{
        flex: 1,
        backgroundColor: "rgba(255, 255, 255,0.6)",
        justifyContent: "center",
      }}
    >
      {/* <Spacer height={100}/> */}
      <View style={styles.voucherContainer}>
        <View style={styles.voucherBody}>
          <View style={styles.voucherHeader}>
            <CustomText
              label={"Check In"}
              color={colors.white}
              fontFamily={"semiBold"}
              fontSize={16}
            />
            <TouchableOpacity
              onPress={modelClose}
              style={{ position: "absolute", right: 20 }}
            >
              <Image
                source={icons.close}
                containerStyle={{
                  height: verticalScale(12),
                  width: verticalScale(12),
                }}
              />
            </TouchableOpacity>
          </View>

          <View style={{ alignItems: "center" }}>
            <Spacer height={20} />
            <CustomText
              label={"Admin — Enter Code"}
              color={colors.secondary}
              fontFamily={"regular"}
              fontSize={16}
            />
            <Spacer height={20} />
            <OTP state={state} setState={setState} />

            {/* <View style={{ flexDirection: "row", alignItems: "center" }}> */}
            {/* </View> */}
          </View>
          <Spacer height={30} />
        </View>
        <Spacer height={20} />
        <CustomButton
          title={"Next"}
          width={"50%"}
          fontFamily={"bold"}
          btnStyle={{
            shadowColor: Platform.OS == "ios" ? "#343a40" : colors.black,
            shadowRadius: 2,
            elevation: 5,
            shadowOpacity: 0.4,
            // inputMarginTop:-20,
            shadowOffset: { width: -1, height: 3 },
          }}
          borderRadius={12}
          onPress={() => {
            // state.checkIn
            // ? setState({ ...state, checkOut: true, greet: true })
            // : setState({ ...state, checkIn: true });
            let eventCode = state.pin1 + state.pin2 + state.pin3 + state.pin4;
            console.log(eventCode, state?.currentTicket?.eventCode);
            if (!state.checkIn) {
              if (eventCode === state?.currentTicket?.eventCode) {
                setState({ ...state, checkIn: true });
              }
            } else {
              if (eventCode === state?.currentTicket?.eventCode) {
                setState({ ...state, checkOut: true, greet: true });
              }
            }
            // setState({ ...state, pin1: "", pin2: "", pin3: "", pin4: "" });

            modelClose();
            // setTimeout(() => {
            //   setState({ ...state, pin1: "", pin2: "", pin3: "", pin4: "" })
            // }, 1000);
          }}
        />
      </View>
    </View>
  );
  return (
    <View style={{ flex: 1, backgroundColor: colors.white }}>
      <Spacer height={20} />
      {state.greet ? (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            paddingHorizontal: 20,
            // backgroundColor:"red"
          }}
        >
          <CustomText
            label={"Success!"}
            color={colors.secondary}
            fontFamily={"regular"}
            fontSize={16}
          />
          <Spacer height={20} />
          <CustomText
            label={`Thank you for attending this event. Gratitude and smiles!`}
            color={colors.secondary}
            fontFamily={"regular"}
            fontSize={16}
            textAlign={"center"}
          />
          <Spacer height={20} />
          <CustomText
            label={`:)`}
            color={colors.secondary}
            fontFamily={"regular"}
            fontSize={50}
          />
          <Spacer height={20} />
          <CustomButton
            title={"Okay"}
            width={"50%"}
            borderRadius={10}
            onPress={() => {
              console.log("first");
              setState({
                ...state,
                checkIn: false,
                checkOut: false,
                greet: false,
                ticketDetail: false,
              });
              navigation.navigate("Welcome");
            }}
          />
        </View>
      ) : (
        <>
          <Modal
            transparent
            visible={visible}
            onRequestClose={() => setVisible(false)}
          >
            <ModalContent />
          </Modal>
          <View
            style={{
              height: 80,
              width: 80,
              borderRadius: 50,
              alignSelf: "center",
              zIndex: 100,
            }}
          >
            <Avatar
              source={
                profilePicture ? { uri: profilePicture } : images.userAvatar
              }
              rounded
              size={80}
              containerStyle={{}}
            />
            {!profilePicture && (
              <Avatar
                source={icons.cameraPlus}
                rounded
                size={40}
                containerStyle={{
                  alignSelf: "center",
                  position: "absolute",
                  bottom: -5,
                  right: -5,
                }}
              />
            )}
          </View>

          <Spacer height={10} />
          <View style={styles.card}>
            <View style={styles.whiteCircle} />
            <View style={{ alignItems: "center", marginTop: -10 }}>
              <CustomButton
                title={"Get In Line!"}
                width={"95%"}
                height={40}
                activeOpacity={1}
              />
              <Spacer height={10} />
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <CustomText
                  label={"EVENT ID: "}
                  color={colors.white}
                  fontFamily={"bold"}
                  fontSize={15}
                />
                <CustomText
                  label={state.currentTicket._id}
                  color={colors.white}
                  fontFamily={"bold"}
                  fontSize={12}
                />
              </View>
              <Spacer height={5} />
              {/* <CustomText
                label={moment().format(state?.currentTicket?.eventStartTime)}
                color={colors.white}
                fontFamily={"bold"}
                fontSize={23}
              /> */}
              <CustomText
                label={
                  moment("2023-03-12T20:30:11.000Z").utc().format("DD/MM/YY") +
                  " @ " +
                  moment(state?.currentTicket?.eventStartTime)
                    .utc()
                    .format("hh:mm A")
                }
                // label={"2/12/23 @ 2PM"}
                color={colors.white}
                fontFamily={"bold"}
                fontSize={23}
              />
              <Spacer height={5} />
              <View style={{ marginVertical: -30 }}>
                <View
                  style={{
                    position: "absolute",
                    top: verticalScale(72),
                    left: verticalScale(-65),
                  }}
                >
                  <CustomText
                    label={"GROUP"}
                    color={colors.white}
                    fontFamily={"bold"}
                    fontSize={12}
                  />
                </View>
                <CustomText
                  label={state?.ticketData?.groupLetter.toUpperCase()}
                  color={colors.white}
                  fontFamily={"Righteous"}
                  fontSize={120}
                />
              </View>
              <CustomText
                label={state.ticketData.groupCapacity + " People"}
                color={colors.white}
                fontFamily={"bold"}
                fontSize={27}
              />
            </View>
            <Spacer height={20} />
          </View>
          <Spacer height={20} />
          <View style={{ alignItems: "center" }}>
            <CustomButton
              btnStyle={{
                shadowColor: Platform.OS == "ios" ? "#343a40" : colors.black,
                shadowRadius: 2,
                elevation: 5,
                shadowOpacity: 0.4,
                // inputMarginTop:-20,
                shadowOffset: { width: -1, height: 3 },
              }}
              title={state.checkIn ? "Check Out" : "Check In"}
              width={"50%"}
              borderRadius={10}
              fontFamily={"bold"}
              onPress={modelOpen}
            />
          </View>
        </>
      )}
    </View>
  );
};

export default TicketCheckInAndOut;

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.drakBlue,
    height: "65%",
    width: "90%",
    borderRadius: 12,
    paddingHorizontal: 10,
    alignSelf: "center",
    shadowColor: Platform.OS == "ios" ? "#343a40" : colors.black,
    shadowRadius: 2,
    elevation: 5,
    shadowOpacity: 0.4,
    // inputMarginTop:-20,
    shadowOffset: { width: -1, height: 3 },
  },
  whiteCircle: {
    backgroundColor: colors.white,
    height: 60,
    width: 65,
    borderRadius: 50,
    position: "relative",
    top: -20,
    alignSelf: "center",
    zIndex: -100,
  },
  voucherContainer: {
    alignItems: "center",
  },
  voucherHeader: {
    height: verticalScale(40),
    // width: "80%",
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
    width: "75%",
    backgroundColor: colors.white,
    borderRadius: 10,
    shadowColor: Platform.OS == "ios" ? "#343a40" : colors.black,
    shadowRadius: 2,
    elevation: 5,
    shadowOpacity: 0.4,
    // inputMarginTop:-20,
    shadowOffset: { width: -1, height: 3 },
  },
});

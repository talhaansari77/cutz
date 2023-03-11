import { StyleSheet, Text, TouchableOpacity, View,Platform } from "react-native";
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

const ReceiptScreen = ({ navigation, route }) => {
  console.log("RoutesType",route?.params)

  const [check, setCheck] = useState(false);
  const [state, setState] = useState({
    checkIn: false,
    checkOut: false,
    greet: false,
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
      {route?.params?.userType === "Client" ? (
        <>
          <CustomText
            label={"REVIEW RESERVATION THEN"}
            color={colors.secondary}
            fontFamily={"semiBold"}
          />
          <CustomText
            label={"CONFIRM OR CANCEL"}
            color={colors.secondary}
            fontFamily={"semiBold"}
          />
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
      ) : check ? (
        <>
          <CustomText
            label={"REVIEW RESERVATION THEN"}
            color={colors.secondary}
            fontFamily={"semiBold"}
          />
          <CustomText
            label={"CONFIRM OR CANCEL"}
            color={colors.secondary}
            fontFamily={"semiBold"}
          />
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
      ) : (
        <>
          <CustomText
            label={"You are AWESOME!"}
            color={colors.secondary}
            fontSize={13}
            fontFamily={"semiBold"}
          />
          <CustomText
            label={"Please confirm the details of the event"}
            color={colors.secondary}
            fontSize={13}
            fontFamily={"semiBold"}
          />
          <CustomText
            label={"you have volunteered for."}
            color={colors.secondary}
            fontSize={13}
            fontFamily={"semiBold"}
          />
        </>
      )}
    </View>
  );

  useEffect(() => {
    console.log(route?.params?.userType);
  }, []);

  return (
    <View style={styles.container}>
      {route?.params?.userType === "Client" ? (
        <>
          <Spacer height={40} />
          <Header />
          <View style={styles.shadowDivider} />
          <Spacer
            height={
              route?.params?.userType === "Client" ? 20 : !check ? 35 : 20
            }
          />
          {route?.params?.ticketDetail ? (
            <TicketCheckInAndOut state={state} setState={setState} />
          ) : (
            <>
              <InfoText />
              <Spacer
                height={
                  route?.params?.userType === "Client" ? 20 : !check ? 35 : 20
                }
              />
              <View style={styles.cardStyle}>
                <Image
                  source={images.cardHeader}
                  containerStyle={{ width: "100%", height: 40 }}
                  resizeMode={"stretch"}
                />
                <View
                  style={{
                    paddingHorizontal: scale(50),
                    paddingVertical: verticalScale(5),
                    backgroundColor: colors.darkOrange,
                    alignSelf: "center",
                    borderRadius: 5,
                  }}
                >
                  <CustomText
                    label={"EHH"}
                    fontFamily={"semiBold"}
                    color={colors.white}
                    fontSize={14}
                  />
                </View>
                <Spacer height={20} />
                <View>
                  <View style={{ flexDirection: "row" }}>
                    <Spacer width={10} />
                    <Image
                      source={icons.calender}
                      resizeMode={"contain"}
                      containerStyle={{ height: 40, width: 40 }}
                    />
                    <Spacer width={15} />
                    <View>
                      <CustomText
                        label={"Friday, January 20"}
                        fontFamily={"semiBold"}
                        color={colors.secondary}
                        fontSize={14}
                      />
                      <CustomText
                        label={"1:00 PM"}
                        fontFamily={"semiBold"}
                        color={colors.perFectDark}
                        fontSize={11}
                      />
                    </View>
                  </View>
                  <Spacer height={20} />
                  <View style={{ flexDirection: "row" }}>
                    <Spacer width={10} />
                    <Image
                      source={icons.marker}
                      resizeMode={"contain"}
                      containerStyle={{ height: 40, width: 40 }}
                    />
                    <Spacer width={15} />
                    <View>
                      <CustomText
                        label={"THURSTON HIGH SCHOOL"}
                        fontFamily={"semiBold"}
                        color={colors.secondary}
                        fontSize={14}
                      />
                      <CustomText
                        label={"26255 Schoolcraft St "}
                        fontFamily={"semiBold"}
                        color={colors.perFectDark}
                        fontSize={11}
                      />
                      <CustomText
                        label={"Redford Charter Twp, MI 48239"}
                        fontFamily={"semiBold"}
                        color={colors.perFectDark}
                        fontSize={11}
                      />
                    </View>
                  </View>
                </View>
                <Spacer height={30} />

                <View style={{ flexDirection: "row" }}>
                  <Spacer width={10} />
                  <Image
                    source={icons.ticket1}
                    resizeMode={"contain"}
                    style={{
                      tintColor: check ? colors.secondary : colors.white,
                    }}
                    containerStyle={{ height: 40, width: 40 }}
                  />
                  <Spacer width={15} />
                  <View>
                    <CustomText
                      label={"FOOD DISTRIBUTION "}
                      fontFamily={"bold"}
                      color={colors.secondary}
                      fontSize={18}
                    />
                  </View>
                </View>

                <Image
                  source={images.cardBottom}
                  containerStyle={{
                    width: "100%",
                    height: 40,
                    position: "absolute",
                    bottom: 0,
                  }}
                  resizeMode={"stretch"}
                />
              </View>

              <Spacer height={60} />
              <View style={{ flexDirection: "row", justifyContent: "center" }}>
                <CustomButton
                  title={check ? "Proceed" : "Confirm"}
                  btnStyle={{
                    shadowColor: Platform.OS == "ios" ? "#343a40" : colors.black,
                    shadowRadius: 2,
                    elevation: 5,
                    shadowOpacity: 0.4,
                    // inputMarginTop:-20,
                    shadowOffset: { width: -1, height: 3 },
                  }}
                  width={"37%"}
                  borderRadius={15}
                  onPress={() => {
                    if (check) {
                      navigation.navigate("Event", {
                        userType: route?.params?.userType,
                      });
                    } else {
                      setCheck(true);
                    }
                  }}
                />
                <Spacer width={20} />
                <CustomButton
                  title={"Cancel"}
                  btnStyle={{
                    shadowColor: Platform.OS == "ios" ? "#343a40" : colors.black,
                    shadowRadius: 2,
                    elevation: 5,
                    shadowOpacity: 0.4,
                    // inputMarginTop:-20,
                    shadowOffset: { width: -1, height: 3 },
                  }}
                  width={"37%"}
                  backgroundColor={colors.gray}
                  color={colors.secondary}
                  borderRadius={15}
                  onPress={() => {
                    // navigation.navigate("Receipt")
                    setCheck(false);
                  }}
                />
              </View>
            </>
          )}
        </>
      ) : route?.params?.ticketDetail ? (
        <>
          <Spacer height={40} />
          <Header />
          <View style={styles.shadowDivider} />
          {state.greet ? (
            state.checkOut ? (
              <SmileGreeting state={state} setState={setState} />
            ) : (
              <ThumbGreeting />
            )
          ) : (
            <>
              <Spacer height={40} />
              <View style={{ alignItems: "center" }}>
                <View>
                  <View style={{ flexDirection: "row" }}>
                    <Spacer width={10} />
                    <Image
                      source={icons.calender}
                      resizeMode={"contain"}
                      containerStyle={{ height: 40, width: 40 }}
                    />
                    <Spacer width={15} />
                    <View>
                      <CustomText
                        label={"Friday, January 20"}
                        fontFamily={"semiBold"}
                        color={colors.secondary}
                        fontSize={14}
                      />
                      <CustomText
                        label={"1:00 PM"}
                        fontFamily={"semiBold"}
                        color={colors.perFectDark}
                        fontSize={11}
                      />
                    </View>
                  </View>
                  <Spacer height={20} />
                  <View style={{ flexDirection: "row" }}>
                    <Spacer width={10} />
                    <Image
                      source={icons.marker}
                      resizeMode={"contain"}
                      containerStyle={{ height: 40, width: 40 }}
                    />
                    <Spacer width={15} />
                    <View>
                      <CustomText
                        label={"THURSTON HIGH SCHOOL"}
                        fontFamily={"semiBold"}
                        color={colors.secondary}
                        fontSize={14}
                      />
                      <CustomText
                        label={"26255 Schoolcraft St "}
                        fontFamily={"semiBold"}
                        color={colors.perFectDark}
                        fontSize={11}
                      />
                      <CustomText
                        label={"Redford Charter Twp, MI 48239"}
                        fontFamily={"semiBold"}
                        color={colors.perFectDark}
                        fontSize={11}
                      />
                    </View>
                  </View>
                </View>
                <Spacer height={30} />

                <View style={{ flexDirection: "row" }}>
                  <Spacer width={10} />
                  <Image
                    source={icons.ticket1}
                    resizeMode={"contain"}
                    style={{
                      tintColor: colors.secondary,
                    }}
                    containerStyle={{ height: 40, width: 40 }}
                  />
                  <Spacer width={15} />
                  <View>
                    <CustomText
                      label={"FOOD DISTRIBUTION "}
                      fontFamily={"bold"}
                      color={colors.secondary}
                      fontSize={18}
                    />
                  </View>
                </View>
                <Spacer height={30} />
                <View>
                  <View style={styles.voucherBody}>
                    <View style={styles.voucherHeader}>
                      <CustomText
                        label={"Check In"}
                        color={colors.white}
                        fontFamily={"semiBold"}
                        fontSize={16}
                      />
                    </View>

                    <View style={{ alignItems: "center" }}>
                      <Spacer height={20} />
                      <CustomText
                        label={"Admin Use"}
                        color={colors.secondary}
                        fontFamily={"semiBold"}
                        fontSize={16}
                      />
                      <Spacer height={20} />

                      <View style={{ flexDirection: "row" }}>
                        <InputItem value={"3"} />
                        <InputItem value={"2"} spacer />
                        <InputItem value={"4"} spacer />
                        <InputItem value={"5"} spacer />
                      </View>
                    </View>
                    <Spacer height={10} />
                    <View style={{ alignItems: "center" }}>
                      <CustomButton
                        title={state.checkIn ? "Done" : "All Set!"}
                        width={"50%"}
                        btnStyle={{
                          shadowColor: Platform.OS == "ios" ? "#343a40" : colors.black,
                          shadowRadius: 2,
                          elevation: 5,
                          shadowOpacity: 0.4,
                          // inputMarginTop:-20,
                          shadowOffset: { width: -1, height: 3 },
                        }}
                        height={40}
                        borderRadius={15}
                        backgroundColor={colors.btnDark}
                        onPress={() => {
                          if (state.checkIn) {
                            setState({ ...state, checkOut: true, greet: true });
                          } else {
                            setState({ ...state, checkIn: true, greet: true });
                            setTimeout(() => {
                              setState({
                                ...state,
                                greet: false,
                                checkIn: true,
                              });
                            }, 3000);
                          }
                        }}
                      />
                      <Spacer height={10} />
                    </View>
                  </View>
                </View>
                <Spacer height={20} />
                <TouchableOpacity style={{ width: "75%" }} onPress={()=>navigation.navigate("Welcome")}>
                  <Image
                    source={icons.back}
                    containerStyle={{
                      height: 50,
                      width: 50,
                      alignSelf: "flex-start",
                    }}
                    resizeMode={"contain"}
                  />
                </TouchableOpacity>
              </View>
            </>
          )}
        </>
      ) : (
        <>
        <Spacer height={40} />
          <Header />
          <View style={styles.shadowDivider} />
          <Spacer
            height={
              route?.params?.userType === "Client" ? 20 : !check ? 35 : 20
            }
          />
          <InfoText />
          <Spacer
            height={
              route?.params?.userType === "Client" ? 20 : !check ? 35 : 20
            }
          />
          <View style={styles.cardStyle}>
            <Image
              source={images.cardHeader}
              containerStyle={{ width: "100%", height: 40 }}
              resizeMode={"stretch"}
            />
            <View
              style={{
                paddingHorizontal: scale(50),
                paddingVertical: verticalScale(5),
                backgroundColor: colors.darkOrange,
                alignSelf: "center",
                borderRadius: 5,
              }}
            >
              <CustomText
                label={"EHH"}
                fontFamily={"semiBold"}
                color={colors.white}
                fontSize={14}
              />
            </View>
            <Spacer height={20} />
            <View>
              <View style={{ flexDirection: "row" }}>
                <Spacer width={10} />
                <Image
                  source={icons.calender}
                  resizeMode={"contain"}
                  containerStyle={{ height: 40, width: 40 }}
                />
                <Spacer width={15} />
                <View>
                  <CustomText
                    label={"Friday, January 20"}
                    fontFamily={"semiBold"}
                    color={colors.secondary}
                    fontSize={14}
                  />
                  <CustomText
                    label={"1:00 PM"}
                    fontFamily={"semiBold"}
                    color={colors.perFectDark}
                    fontSize={11}
                  />
                </View>
              </View>
              <Spacer height={20} />
              <View style={{ flexDirection: "row" }}>
                <Spacer width={10} />
                <Image
                  source={icons.marker}
                  resizeMode={"contain"}
                  containerStyle={{ height: 40, width: 40 }}
                />
                <Spacer width={15} />
                <View>
                  <CustomText
                    label={"THURSTON HIGH SCHOOL"}
                    fontFamily={"semiBold"}
                    color={colors.secondary}
                    fontSize={14}
                  />
                  <CustomText
                    label={"26255 Schoolcraft St "}
                    fontFamily={"semiBold"}
                    color={colors.perFectDark}
                    fontSize={11}
                  />
                  <CustomText
                    label={"Redford Charter Twp, MI 48239"}
                    fontFamily={"semiBold"}
                    color={colors.perFectDark}
                    fontSize={11}
                  />
                </View>
              </View>
            </View>
            <Spacer height={30} />

            <View style={{ flexDirection: "row" }}>
              <Spacer width={10} />
              <Image
                source={icons.ticket1}
                resizeMode={"contain"}
                style={{
                  tintColor: check ? colors.secondary : colors.white,
                }}
                containerStyle={{ height: 40, width: 40 }}
              />
              <Spacer width={15} />
              <View>
                <CustomText
                  label={"FOOD DISTRIBUTION "}
                  fontFamily={"bold"}
                  color={colors.secondary}
                  fontSize={18}
                />
              </View>
            </View>

            <Image
              source={images.cardBottom}
              containerStyle={{
                width: "100%",
                height: 40,
                position: "absolute",
                bottom: 0,
              }}
              resizeMode={"stretch"}
            />
          </View>

          <Spacer height={60} />
          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <CustomButton
              title={check ? "Proceed" : "Confirm"}
              width={"37%"}
              btnStyle={{
                shadowColor: Platform.OS == "ios" ? "#343a40" : colors.black,
                shadowRadius: 2,
                elevation: 5,
                shadowOpacity: 0.4,
                // inputMarginTop:-20,
                shadowOffset: { width: -1, height: 3 },
              }}
              borderRadius={15}
              onPress={() => {
                if (check) {
                  navigation.navigate("Event", {
                    userType: route?.params?.userType,
                  });
                } else {
                  setCheck(true);
                }
              }}
            />
            <Spacer width={20} />
            <CustomButton
              title={"Cancel"}
              width={"37%"}
              btnStyle={{
                shadowColor: Platform.OS == "ios" ? "#343a40" : colors.black,
                shadowRadius: 2,
                elevation: 5,
                shadowOpacity: 0.4,
                // inputMarginTop:-20,
                shadowOffset: { width: -1, height: 3 },
              }}
              backgroundColor={colors.gray}
              color={colors.secondary}
              borderRadius={15}
              onPress={() => {
                // navigation.navigate("Receipt")
                setCheck(false);
              }}
            />
          </View>
        </>
      )}
    </View>
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

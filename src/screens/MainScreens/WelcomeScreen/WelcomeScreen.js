import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { colors } from "../../../utils/Colors";
import commonStyles, { PH20 } from "../../../utils/CommonStyles";
import { icons } from "../../../../assets/icons";
import { Image } from "react-native-elements";
import { Spacer } from "../../../components/Spacer";
import { scale, verticalScale } from "react-native-size-matters";
import CustomText from "../../../components/CustomText";
import CustomButton from "../../../components/CustomButton";
import { SafeAreaView } from "react-native-safe-area-context";

const orgListItem = [
  {
    label: "EAGLES",
    backgroundColor: colors.primary,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingHorizontal: scale(40),
    paddingVertical: verticalScale(5),
    dividerBottom: true,
  },
  {
    label: "EHH",
    backgroundColor: colors.darkOrange,
    //   borderTopLeftRadius: 10,
    //   borderTopRightRadius: 10,
    paddingHorizontal: scale(40),
    paddingVertical: verticalScale(5),
    dividerBottom: true,
  },
  {
    label: "GLEANERS",
    backgroundColor: colors.primary,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    paddingHorizontal: scale(40),
    paddingVertical: verticalScale(5),
    dividerBottom: false,
  },
];

const eventTypeList = [
  {
    label: "HOMELESS SHELTER",
    color: colors.black,
    fontSize: verticalScale(8),
    dividerBottom: true,
  },
  {
    label: "FOOD DISTRIBUTION",
    color: colors.blue1,
    fontSize: verticalScale(14),
    dividerBottom: true,
  },
  {
    label: "FUNDRAISING EVENTS",
    color: colors.black,
    fontSize: verticalScale(8),
    dividerBottom: false,
  },
];

const eventTimingListVolunteer = [
  {
    label: "Prep Event:  11AM - 3PM",
  },
  {
    label: "Event:  2PM - 6PM",
  },
  {
    label: "Clean Up:  6PM - 9PM",
  },
];
const eventTimingList = [
  {
    label: "12 PM - AVAILABLE",
    color: colors.blue1,
    fontSize: verticalScale(8),
    dividerBottom: true,
  },
  {
    label: "1 PM - NOT AVAILABLE",
    color: colors.secondary,
    fontSize: verticalScale(14),
    dividerBottom: true,
  },
  {
    label: "2 pm - AVAILABLE",
    color: colors.blue1,
    fontSize: verticalScale(8),
    dividerBottom: false,
  },
];

const addressList = [
  {
    label:
      "THURSTON HIGH SCHOOL 26265 Schoolcraft St Redford Carter Twp, MI 48239",
    paddingVertical: verticalScale(5),
    width: "70%",
    backgroundColor: colors.Brown3,
    borderRadius: 5,
    dividerBottom: true,
  },
  {
    label: "21906 Garrison St, DearBorn, MI 48128",
    paddingVertical: verticalScale(5),
    width: "70%",
    backgroundColor: colors.Brown4,
    borderRadius: 5,
    dividerBottom: false,
  },
];

const evenDateList = [
  {
    day: "Thursday",
    date: "19",
    MMYY: "Jan 2023",
  },
  {
    day: "Friday",
    date: "20",
    MMYY: "Jan 2023",
  },
  {
    day: "Saturday",
    date: "21",
    MMYY: "Jan 2023",
  },
];

const WelcomeScreen = ({ navigation, route }) => {
  const [index, setIndex] = useState(0);
  const [dateIndex, setDateIndex] = useState(0);
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
      <Image
        source={icons.bell}
        resizeMode={"contain"}
        containerStyle={{
          height: 40,
          width: 40,
        }}
      />
    </View>
  );

  const OrgListItem = ({
    paddingHorizontal,
    paddingVertical,
    backgroundColor,
    borderTopRightRadius,
    borderTopLeftRadius,
    borderBottomRightRadius,
    borderBottomLeftRadius,
    dividerBottom,
    label,
  }) => (
    <View
      style={{
        alignItems: "center",
        borderBottomColor: colors.white,
        borderBottomWidth: dividerBottom ? 1 : 0,
        // paddingHorizontal: paddingHorizontal,
        width: scale(150),
        paddingVertical: paddingVertical,
        backgroundColor: backgroundColor,
        borderTopRightRadius: borderTopRightRadius,
        borderTopLeftRadius: borderTopLeftRadius,
        borderBottomLeftRadius: borderBottomLeftRadius,
        borderBottomRightRadius: borderBottomRightRadius,
      }}
    >
      <CustomText
        label={label}
        color={colors.white}
        fontSize={14}
        fontFamily={"semiBold"}
      />
    </View>
  );

  const AddressContainer = ({
    label,
    paddingVertical,
    backgroundColor,
    width,
    borderRadius,
    dividerBottom,
  }) => (
    <View
      style={{
        paddingVertical: paddingVertical,
        backgroundColor: backgroundColor,
        borderRadius: borderRadius,
        alignItems: "center",
        marginBottom: dividerBottom ? 15 : 0,
        
        
        // ...styles.shadow
      }}
    >
      <View style={{ width: width }}>
        <CustomText label={label} fontSize={12} textAlign={"center"} />
      </View>
    </View>
  );

  const EventListItem = ({ label, color, fontSize, dividerBottom }) => (
    <View
      style={{
        backgroundColor: colors.Brown1,
        paddingHorizontal: scale(40),
        paddingVertical: verticalScale(2),
        borderRadius: 5,
        marginBottom: dividerBottom ? verticalScale(5) : 0,
        // shadowColor: Platform.OS == "ios" ? "#343a40" : colors.black,
        // // shadowRadius: 2,
        // elevation: 5,
        // shadowOpacity: 0.4,
        // // inputMarginTop:-20,
        // shadowOffset: { width: 1, height: 1  },
        // ...styles.shadow
      }}
    >
      <CustomText
        label={label}
        color={color}
        fontSize={fontSize}
        fontFamily={"bold"}
      />
    </View>
  );
  const EventTimingListItemVolunteer = ({ label, indexx }) => (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        // justifyContent:'center'
        paddingHorizontal: "30%",
        paddingVertical: 10,
      }}
    >
      <TouchableOpacity
        onPress={() => setIndex(indexx)}
        style={{
          height: 20,
          width: 20,
          backgroundColor: index === indexx ? colors.primary : colors.gray1,
        }}
      />
      <Spacer width={10} />
      <CustomText label={label} fontFamily={"semiBold"} />
    </View>
  );
  const EventTimingListItem = ({ label, color, fontSize, dividerBottom }) => (
    <View
      style={{
        // backgroundColor: colors.Brown1,
        // paddingHorizontal: scale(40),
        // paddingVertical: verticalScale(2),
        width: "100%",
        borderRadius: 5,
        borderBottomWidth: dividerBottom ? 1 : 0,
        borderBottomColor: colors.gray3,
        alignItems: "center",
        
      }}
    >
      <CustomText
        label={label}
        color={color}
        fontSize={fontSize}
        fontFamily={"bold"}
      />
    </View>
  );
  const EventDateItem = ({ date, day, MMYY, indexx }) => (
    <TouchableOpacity
      style={{
        alignItems: "center",
        backgroundColor: dateIndex === indexx ? colors.white : colors.gray2,
        borderWidth: dateIndex === indexx ? 1 : 0,
        borderColor: colors.secondary,
        paddingHorizontal: scale(18),
        paddingVertical: verticalScale(6),
        ...styles.shadow,
      }}
      onPress={() => setDateIndex(indexx)}
    >
      <CustomText
        label={day}
        color={colors.black}
        // fontSize={18}
        fontFamily={"regular"}
        marginBottom={-10}
      />
      <CustomText
        label={date}
        color={ dateIndex === indexx ? colors.secondary:"#9B9B9B"}
        fontSize={36}
        fontFamily={"bold"}
        marginBottom={-10}
      />
      <CustomText
        label={MMYY}
        color={colors.blue1}
        // fontSize={18}
        fontFamily={"semiBold"}
      />
    </TouchableOpacity>
  );

  useEffect(() => {
    // console.log(route.params?.userType);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Spacer height={10} />
      <Header />
      <View style={styles.shadowDivider} />
      <ScrollView>
        <Spacer height={20} />
        <View style={{ alignItems: "center" }}>
          {route.params?.userType === "Client" ? (
            <CustomText
              label={"WELCOME"}
              color={colors.primary}
              fontSize={18}
              fontFamily={"semiBold"}
            />
          ) : (
            <>
              <CustomText
                label={"WELCOME VOLUNTEER"}
                color={colors.primary}
                fontSize={18}
                fontFamily={"semiBold"}
              />
              <CustomText
                label={"CHOOSE AN ORGANIZATION & DATE"}
                color={colors.primary}
                fontSize={14}
                fontFamily={"semiBold"}
              />
            </>
          )}
        </View>

        <Spacer height={30} />

        <View style={{ alignItems: "center" }}>
          {orgListItem.map(
            ({
              paddingHorizontal,
              paddingVertical,
              backgroundColor,
              borderTopRightRadius,
              borderTopLeftRadius,
              borderBottomRightRadius,
              borderBottomLeftRadius,
              dividerBottom,
              label,
            }) => (
              <OrgListItem
                paddingHorizontal={paddingHorizontal}
                paddingVertical={paddingVertical}
                backgroundColor={backgroundColor}
                borderTopRightRadius={borderTopRightRadius}
                borderTopLeftRadius={borderTopLeftRadius}
                borderBottomRightRadius={borderBottomRightRadius}
                borderBottomLeftRadius={borderBottomLeftRadius}
                dividerBottom={dividerBottom}
                label={label}
              />
            )
          )}
        </View>
        <Spacer height={15} />
        <View style={{ alignItems: "center" }}>
          <CustomText
            label={"TYPE OF EVENT"}
            color={colors.blue1}
            fontSize={11}
            fontFamily={"semiBold"}
          />
        </View>
        <Spacer height={10} />
        <View style={{ alignItems: "center",
        
       }}>
          {eventTypeList.map(({ label, color, fontSize, dividerBottom }) => (
            <EventListItem
              label={label}
              fontSize={fontSize}
              color={color}
              dividerBottom={dividerBottom}
            />
          ))}
        </View>
        <Spacer height={20} />
        <PH20>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            {evenDateList.map(({ date, day, MMYY }, index) => (
              <EventDateItem date={date} day={day} MMYY={MMYY} indexx={index} />
            ))}
          </View>
        </PH20>
        <Spacer height={20} />
        <PH20>
          {addressList.map(
            ({
              label,
              paddingVertical,
              backgroundColor,
              width,
              borderRadius,
              dividerBottom,
            }) => (
              <AddressContainer
                label={label}
                paddingVertical={paddingVertical}
                backgroundColor={backgroundColor}
                width={width}
                borderRadius={borderRadius}
                dividerBottom={dividerBottom}
              />
            )
          )}
        </PH20>

        <Spacer height={20} />
        <View style={{}}>
          {route?.params?.userType === "Client"
            ? eventTimingList.map(
                ({ label, color, fontSize, dividerBottom }) => (
                  <EventTimingListItem
                    label={label}
                    fontSize={fontSize}
                    color={color}
                    dividerBottom={dividerBottom}
                  />
                )
              )
            : // Volunteer
              eventTimingListVolunteer.map(({ label }, index) => (
                <EventTimingListItemVolunteer
                  label={label}
                  indexx={index}
                  key={index}
                />
              ))}
        </View>
        <Spacer height={20} />
        <View style={{ alignItems: "center" }}>
          <CustomButton
            title={
              route?.params?.userType === "Client"
                ? "Make My Reservation"
                : "Yes, I Will Volunteer!"
            }
            width={"80%"}
            fontFamily={"bold"}

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
              navigation.navigate("Receipt", {
                userType: route?.params?.userType,
                // params: { userType: route?.params?.userType },
                // merge: true,
              });
            }}
          />
        </View>
        <Spacer height={30} />
      </ScrollView>
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

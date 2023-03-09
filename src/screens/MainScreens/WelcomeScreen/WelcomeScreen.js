import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../../../utils/Colors";
import commonStyles, { PH20 } from "../../../utils/CommonStyles";
import { icons } from "../../../../assets/icons";
import { Image } from "react-native-elements";
import { Spacer } from "../../../components/Spacer";
import { scale, verticalScale } from "react-native-size-matters";
import CustomText from "../../../components/CustomText";
import CustomButton from "../../../components/CustomButton";

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

const WelcomeScreen = ({navigation}) => {
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
        borderBottomWidth: dividerBottom ? dividerBottom : 0,
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
        marginBottom: dividerBottom ? 4 : 0,
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

  const EventDateItem = ({ date, day, MMYY }) => (
    <View
      style={{
        alignItems: "center",
        backgroundColor: colors.gray2,
        paddingHorizontal: scale(18),
        paddingVertical: verticalScale(6),
      }}
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
        color={colors.secondary}
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
    </View>
  );
  return (
    <View style={styles.container}>
      <Spacer height={40} />
      <Header />
      <View style={styles.shadowDivider} />
      <ScrollView>
        <Spacer height={20} />
        <View style={{ alignItems: "center" }}>
          <CustomText
            label={"WELCOME"}
            color={colors.primary}
            fontSize={18}
            fontFamily={"semiBold"}
          />
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
            fontSize={8}
            fontFamily={"semiBold"}
          />
        </View>
        <Spacer height={10} />
        <View style={{ alignItems: "center" }}>
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
            {evenDateList.map(({ date, day, MMYY }) => (
              <EventDateItem date={date} day={day} MMYY={MMYY} />
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
        <View style={{ alignItems: "center" }}>
          {eventTimingList.map(({ label, color, fontSize, dividerBottom }) => (
            <EventTimingListItem
              label={label}
              fontSize={fontSize}
              color={color}
              dividerBottom={dividerBottom}
            />
          ))}
        </View>
        <Spacer height={20} />
        <View style={{ alignItems: "center" }}>
          <CustomButton
            title={"Make My Reservation"}
            width={"80%"}
            borderRadius={15}
            onPress={()=>{
              navigation.navigate("Reservation")
            }}
          />
        </View>
        <Spacer height={30} />
      </ScrollView>
    </View>
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
});

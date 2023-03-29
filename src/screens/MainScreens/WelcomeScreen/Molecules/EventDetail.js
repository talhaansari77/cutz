import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { Spacer } from "../../../../components/Spacer";
import CustomText from "../../../../components/CustomText";
import { colors } from "../../../../utils/Colors";
import Carousel from "react-native-reanimated-carousel";
import { PH20 } from "../../../../utils/CommonStyles";
import { verticalScale, scale } from "react-native-size-matters";
import CustomButton from "../../../../components/CustomButton";
import MyCarousel from "../../../../../MyCarousel";
import EventTimingCarousel from "../../../../../EventTimingCarousel";
import Loader from "../../../../utils/Loader";
import { loaderAnimation } from "../../../../../assets/Loaders";

const { height, width } = Dimensions.get("window");
// data being used
const companyData = [
  { index: 0, title: "EAGLES" },
  { index: 1, title: "EHH" },
  { index: 2, title: "GLENAERS" },
  { index: 3, title: "APPLE" },
  { index: 4, title: "GOOGLE" },
  { index: 5, title: "SONY" },
  { index: 6, title: "HUAWEI" },
];

const eventData = [
  { id: 0, title: "FOOD DISTRIBUTION" },
  { id: 1, title: "HOMELESS SHELTER" },
  { id: 2, title: "FUNDRAISING EVENTS" },
  { id: 3, title: "CHARITY" },
  { id: 4, title: "SOUP KITCHEN" },
  { id: 5, title: "CLOTHES DONATE" },
  { id: 6, title: "FUNDRAISING EVENTS" },
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

const addressData = [
  {
    index: 0,
    place: "THURSTON HIGH SCHOOL",
    house: "26255 Schoolcraft St",
    zip: "Redford",
  },
  {
    index: 1,
    place: "Ford Garage Dearborn",
    house: "21906 Garrison Street",
    zip: "Dearborn, MI 48124",
  },
  {
    index: 2,
    place: "Jack Dimmer",
    house: "21531 Michigan Ave",
    zip: "Dearborn, MI 48124",
  },
  {
    index: 3,
    place: "Mexican Fiesta - Dearborn Hgts.",
    house: "24310 Ford Rd, ",
    zip: "Dearborn, MI 48124",
  },
  {
    index: 4,
    place: "THURSTON HIGH SCHOOL",
    house: "26255 Schoolcraft St",
    zip: "Redford",
  },
  {
    index: 5,
    place: "Ford Garage Dearborn",
    house: "21906 Garrison Street",
    zip: "Dearborn, MI 48124",
  },
  {
    index: 6,
    place: "Jack Dimmer",
    house: "21531 Michigan Ave",
    zip: "Dearborn, MI 48124",
  },
];

const eventDateList = [
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
  {
    day: "Thursday",
    date: "22",
    MMYY: "Jan 2023",
  },
  {
    day: "Friday",
    date: "23",
    MMYY: "Jan 2023",
  },
  {
    day: "Saturday",
    date: "24",
    MMYY: "Jan 2023",
  },
];

const EventDetail = ({ handleBookingPress, userType,state,setState }) => {
  const [index, setIndex] = useState(0);
  const [dateIndex, setDateIndex] = useState(0);
  const [companyIndex, setCompanyIndex] = useState(0);
  const [companyName, setCompany] = useState("EAGLES");
  const [eventType, setEventType] = useState("FOOD DISTRIBUTION");
  const [eventIndex, setEventIndex] = useState(0);
  const [timingIndex, setTimingIndex] = useState(0);

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
        borderBottomWidth: 1,
        // paddingHorizontal: paddingHorizontal,
        // width: scale(150),

        backgroundColor: backgroundColor,
        // borderTopLeftRadius: 10,
        // borderTopRightRadius: 10,
        // paddingHorizontal: scale(40),
        paddingVertical: verticalScale(5),
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

  const AddressContainer = ({ place, house, zip, backgroundColor }) => (
    <View
      style={{
        paddingVertical: verticalScale(10),
        backgroundColor: backgroundColor,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 15,

        ...styles.shadow,
      }}
    >
      <CustomText label={place} fontSize={12} textAlign={"center"} />
      <CustomText label={house} fontSize={12} textAlign={"center"} />
      <CustomText label={zip} fontSize={12} textAlign={"center"} />
    </View>
  );

  const EventListItem = ({ label, color, fontSize, dividerBottom }) => (
    <View
      style={{
        backgroundColor: colors.Brown1,
        // paddingHorizontal: scale(40),
        paddingVertical: verticalScale(2),
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
        // marginBottom: 5,
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
        fontSize={20}
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
        borderBottomWidth: 1,
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
        color={dateIndex === indexx ? colors.secondary : "#9B9B9B"}
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
      <Spacer height={4}/>
    </TouchableOpacity>
  );
  return (
    <ScrollView showsVerticalScrollIndicator={false} nestedScrollEnabled={true}>
      <Spacer height={20} />
      <View style={{ alignItems: "center" }}>
        {userType === "Client" ? (
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
      {/* COmpanies List */}
      <Carousel
        width={174}
        height={
          state.companyData.length === 1 ? 35 : state.companyData.length === 2 ? 70 : 105
        }
        enabled={state.companyData.length === 1 ? false : true}
        defaultIndex={state.companyData.length > 1 && 1}
        autoFillData={false}
        // height={40}
        vertical="true"
        mode="parallax"
        modeConfig={{
          parallaxScrollingOffset: state.companyData.length < 3 ? 35 : 70,
          parallaxScrollingScale: 1,
          // parallaxAdjacentItemScale: 0.82,
        }}
        loop={state.companyData.length === 1 ? false : true}
        // loop={true}
        style={{
          // width: 174,
          backgroundColor: colors.primary,
          borderRadius: 10,
          alignSelf: "center",
          // height: 200,
        }}
        scrollAnimationDuration={1}
        data={state.companyData}
        onSnapToItem={(index) => {
          setCompany(
            state.companyData[index < state.companyData.length - 1 ? index + 1 : 0].title
          );
          setCompanyIndex(index < state.companyData.length - 1 ? index + 1 : 0);
        }}
        renderItem={({ item }) => (
          <OrgListItem
            label={item.title}
            backgroundColor={
              companyIndex == item.index ? colors.darkOrange : colors.Brown3
            }
          />
        )}
      />

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

      <MyCarousel data={state.eventTypes} />

      <Spacer height={20} />
      <PH20>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          // style={{ flexDirection: "row", justifyContent: "space-between" }}
        >
          {eventDateList.map(({ date, day, MMYY }, index) => (
            <>
              <EventDateItem date={date} day={day} MMYY={MMYY} indexx={index} />
              <Spacer width={20} />
            </>
          ))}
        </ScrollView>
      </PH20>
      <Spacer height={20} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        nestedScrollEnabled={true}
        style={{ height: height / 4.4 }}
      >
        <PH20>
          {addressData.map(({ place, house, zip, index }) => (
            <AddressContainer
              place={place}
              house={house}
              zip={zip}
              backgroundColor={
                eventIndex === index ? colors.Brown3 : colors.Brown4
              }
            />
          ))}
        </PH20>
      </ScrollView>

      <Spacer height={20} />
      <View style={{}}>
        {userType === "Client" ? (
          <EventTimingCarousel data={eventTimingList} />
        ) : (
          eventTimingListVolunteer.map(({ label }, index) => (
            <EventTimingListItemVolunteer
              label={label}
              indexx={index}
              key={index}
            />
          ))
        )}
      </View>
      <Spacer height={20} />
      <View style={{ alignItems: "center" }}>
        <CustomButton
          title={
            userType === "Client"
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
          onPress={()=>{handleBookingPress(companyIndex)}}
        />
      </View>
      <Spacer height={10} />
    </ScrollView>
  );
};

export default EventDetail;

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

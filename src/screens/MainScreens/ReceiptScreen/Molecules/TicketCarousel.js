import React, { useState } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { Image } from "react-native-elements";
import { scale, verticalScale } from "react-native-size-matters";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { icons } from "../../../../../assets/icons";
import { images } from "../../../../../assets/images";
import CustomButton from "../../../../components/CustomButton";
import CustomText from "../../../../components/CustomText";
import { Spacer } from "../../../../components/Spacer";
import { colors } from "../../../../utils/Colors";
import moment from 'moment';

const data = [
  { id: 1, text: "Item 1" },
  { id: 2, text: "Item 2" },
  { id: 3, text: "Item 3" },
  //   { id: 4, text: "Item 4" },
  //   { id: 5, text: "Item 5" },
];

// console.log("dataTimeData",moment("2023-03-12T20:30:11.000Z",).utc().format('dddd MMM YYYY'));
// console.log("dataTimeData",moment("2023-03-12T20:30:11.000Z",).utc().format('DD MMM YYYY'));

const { height, width } = Dimensions.get("window");
const TicketCarousel = ({
  handleCancelPress,
  handleProceedPress,
  tickets,
  state,
  setState,
}) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const renderItem = ({ item, index }) => (
    <View style={styles.cardStyle}>
      <Image
        source={images.cardHeader}
        containerStyle={{ width: "100%", height: 40 }}
        resizeMode={"stretch"}
      />
      <Spacer height={10} />
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
          label={item.organization}
          fontFamily={"semiBold"}
          color={colors.white}
          fontSize={14}
        />
      </View>
      <Spacer height={20} />
      <View>
        <View style={{ flexDirection: "row" }}>
          <Spacer width={15} />
          <Image
            source={icons.calender}
            resizeMode={"contain"}
            containerStyle={{ height: scale(30), width: scale(30) }}
          />
          <Spacer width={10} />
          <View>
            <CustomText
              label={item.day + ", " + item.monthYear.split(' ')[0] +" " + item.date}
              fontFamily={"semiBold"}
              color={colors.secondary}
              fontSize={14}
            />
            <CustomText
              label={moment(item.eventStartTime).utc().format('hh:mm A')}
              fontFamily={"semiBold"}
              color={colors.perFectDark}
              fontSize={11}
            />
          </View>
        </View>
        <Spacer height={25} />
        <View style={{ flexDirection: "row" }}>
          <Spacer width={10} />
          <Image
            source={icons.marker}
            resizeMode={"contain"}
            containerStyle={{ height: scale(30), width: scale(30) }}
          />
          <Spacer width={15} />
          <View>
            <CustomText
              label={item.place}
              fontFamily={"semiBold"}
              color={colors.secondary}
              fontSize={14}
            />
            <CustomText
              label={item.house}
              fontFamily={"semiBold"}
              color={colors.perFectDark}
              fontSize={11}
            />
            <CustomText
              label={item.zip}
              fontFamily={"semiBold"}
              color={colors.perFectDark}
              fontSize={11}
            />
          </View>
        </View>
      </View>
      <Spacer height={15} />

      <View style={{ flexDirection: "row" }}>
        <Spacer width={10} />
        <Image
          source={icons.ticket1}
          resizeMode={"contain"}
          style={{
            tintColor: colors.secondary,
          }}
          containerStyle={{ height: scale(30), width: scale(30) }}
        />
        <Spacer width={15} />
        <View>
          <CustomText
            label={item.eventType}
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
      <Spacer height={40} />
    </View>
  );

  const InfoText = () => (
    <View style={{ alignSelf: "center", alignItems: "center" }}>
      <CustomText
        label={"REVIEW RESERVATION THEN"}
        color={colors.secondary}
        fontFamily={"semiBold"}
      />
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <CustomText
          label={"PROCEED OR CANCEL"}
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
    </View>
  );
  return (
    <View style={styles.container}>
      <Spacer height={20} />
      <InfoText />
      <Spacer height={20} />
      <Carousel
        data={tickets}
        renderItem={renderItem}
        // sliderHeight={300}
        // itemHeight={60}
        sliderWidth={width}
        itemWidth={400}
        layout="default"
        inactiveSlideScale={0.8} // set inactive slide scale to make items smaller
        onSnapToItem={(index) => {
          setActiveSlide(index);
          setState({ ...state, currentTicket: tickets[index] });
        }} // update the active slide index
      />
      <View style={{ alignItems: "center" }}>
        <Spacer height={10} />
        <Pagination
          dotsLength={tickets.length}
          activeDotIndex={activeSlide}
          containerStyle={styles.pagination}
          dotStyle={styles.dot}
          inactiveDotStyle={styles.inactiveDot}
          inactiveDotOpacity={1}
          inactiveDotScale={1}
        />
      </View>
      <Spacer height={40} />
      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        <CustomButton
          title={"PROCEED"}
          fontFamily="bold"
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
            handleProceedPress(tickets[activeSlide]);
          }}
        />
        <Spacer width={20} />
        <CustomButton
          title={"Cancel"}
          fontFamily="bold"
          btnStyle={{
            shadowColor: Platform.OS == "ios" ? "#343a40" : colors.black,
            shadowRadius: 2,
            elevation: 5,
            shadowOpacity: 0.4,
            // inputMarginTop:-20,
            shadowOffset: { width: -1, height: 3 },
          }}
          width={"37%"}
          backgroundColor={colors.gray2}
          color={colors.secondary}
          borderRadius={15}
          onPress={handleCancelPress}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
  },

  pagination: {
    // position: "absolute",
    // bottom: 0,
    paddingVertical: 10,
    width: width / 8,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 5,
    backgroundColor: colors.black,
    marginHorizontal: 8,
  },
  inactiveDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "grey",
  },
  cardStyle: {
    width: width / 1.3,
    // height: "65%",
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
});

export default TicketCarousel;

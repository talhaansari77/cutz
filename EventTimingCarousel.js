import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Divider } from "react-native-elements";
import { verticalScale } from "react-native-size-matters";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { colors } from "./src/utils/Colors";

// const data = [
//   { id: 1, text: "Item 1" },
//   { id: 2, text: "Item 2" },
//   { id: 3, text: "Item 3" },
//   { id: 4, text: "Item 4" },
//   { id: 5, text: "Item 5" },
// ];

const EventTimingCarousel = ({ data }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const renderItem = ({ item, index }) => {
    const isFocused = index === activeSlide;

    return (
      <View style={[styles.item, isFocused && styles.focusedItem]}>
        <Text
          style={[
            styles.itemText,
            { color: isFocused ? colors.secondary : colors.blue1 },
          ]}
        >
          {item.label}
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Carousel
        data={data}
        renderItem={renderItem}
        sliderHeight={120}
        itemHeight={45}
        layout="default"
        vertical={true}
        loop={true}
        ItemSeparatorComponent={()=><Divider width={1}/>}
        nestedScrollEnabled={true}
        inactiveSlideScale={0.8} // set inactive slide scale to make items smaller
        activeSlideAlignment="center" // set active slide alignment to center the selected item
        onSnapToItem={(index) => setActiveSlide(index + 3)} // update the active slide index
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 180,
    // height: 200,
    // alignItems: "center",
    // justifyContent: "center",
    // backgroundColor: "red",
  },
  item: {
    // width:"90%",
    // backgroundColor: colors.Brown1,
    borderRadius: 5,
    height: 40,
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    // marginVertical: 10,
    // marginHorizontal: 20,
  },
  itemText: {
    // backgroundColor: colors.Brown1,
    // paddingHorizontal: verticalScale(70),
    // paddingVertical:10,
    fontSize: 26,
    fontFamily: "bold",
  },
  focusedItem: {
    // backgroundColor: colors.Brown1,
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 6,
    // },
    // shadowOpacity: 0.37,
    // shadowRadius: 7.49,

    // elevation: 5,
    // transform: [{ scale: 1.2 }], // increase size of the focused item
  },
  pagination: {
    position: "absolute",
    bottom: 0,
    paddingVertical: 10,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "blue",
    marginHorizontal: 8,
  },
  inactiveDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "grey",
  },
});

export default EventTimingCarousel;
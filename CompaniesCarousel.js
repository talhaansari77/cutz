import React, { useEffect, useRef, useState } from "react";
import { View, Text, StyleSheet, Platform } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { colors } from "./src/utils/Colors";

// const data = [
//   { id: 1, text: "Item 1" },
//   { id: 2, text: "Item 2" },
//   { id: 3, text: "Item 3" },
//   { id: 4, text: "Item 4" },
//   { id: 5, text: "Item 5" },
// ];

const CompaniesCarousel = ({ data, setCompanyIndex, companyIndex, state }) => {
  const [activeSlide, setActiveSlide] = useState(3);
  const carouselRef = useRef(null);

  useEffect(() => {
    // setActiveSlide(companyIndex + 3);
    setTimeout(() => {
      if (data) {
        carouselRef.current.snapToItem(3);
      }
    }, 3000);
  }, []);

  useEffect(() => {
    let searchIndex = state.searchOrg;
    if (searchIndex >= 0) {
      carouselRef.current.snapToItem(searchIndex);
    }
  }, [state.searchOrg]);

  const renderItem = ({ item, index }) => {
    const isFocused = index === activeSlide;

    return (
      <View style={[styles.item, isFocused && styles.focusedItem]}>
        <Text style={[styles.itemText]}>{item.title}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Carousel
        ref={carouselRef}
        data={data}
        renderItem={renderItem}
        sliderHeight={120}
        itemHeight={41}
        layout="default"
        vertical={true}
        loop={true}
        nestedScrollEnabled={true}
        activeSlideOffset={3}
        inactiveSlideScale={1} // set inactive slide scale to make items smaller
        activeSlideAlignment="center" // set active slide alignment to center the selected item
        onSnapToItem={(index) => {
          setActiveSlide(index + 3);
          setCompanyIndex(state.companyData[index].id);
          console.log(state.companyData[index].title);
        }} // update the active slide index
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
    backgroundColor: colors.primary,
    // borderRadius: 5,
    height: 40,
    width: 174,
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
    fontSize: scale(14),
    color: colors.white,
    fontFamily: "semiBold",
  },
  focusedItem: {
    borderRadius: 0,
    backgroundColor: colors.darkOrange,
    shadowColor: Platform.OS == "ios" ? "#343a40" : colors.black,
    shadowRadius: 2,
    elevation: 5,
    position: "absolute",
    shadowOpacity: 0.5,
    zIndex: 100,
    // inputMarginTop:-20,
    shadowOffset: { width: 1, height: 3 },
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

export default CompaniesCarousel;

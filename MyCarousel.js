import { useIsFocused } from "@react-navigation/native";
import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  ActivityIndicator,
} from "react-native";
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

const MyCarousel = ({
  data,
  state,
  typeIndex,
  setTypeIndex,
  setCompanyIndex1,
  dataLoader,
}) => {
  const carouselRef = useRef(null);
  // useEffect(() => {
  //   setActiveSlide(companyIndex)
  //   carouselRef.current.snapToItem(companyIndex);
  // }, [companyIndex])
  const isFocused = useIsFocused();
  useEffect(() => {
    let searchIndex = state.searchType;
    // carouselRef.current.snapToItem(searchIndex-data.length);
    if (searchIndex) {
      data.map((t, index) => {
        if (t.title === state.searchType) {
          carouselRef.current.snapToItem(index);
        }
        // else{
        //   alert("Choose the right organization")
        // }
      });
    }
  }, [state.searchType]);

  useEffect(() => {
    // setActiveSlide(companyIndex + 3);
    if (data.length) {
    if (isFocused) {
      setTimeout(() => {
        carouselRef.current.snapToItem(2);
      }, 3500);
    }
    }
  }, []);

  const [activeSlide, setActiveSlide] = useState(3);

  const renderItem = ({ item, index }) => {
    const isFocused = index === activeSlide;

    return (
      <View style={[styles.item, isFocused && styles.focusedItem]}>
        <Text
          style={[
            styles.itemText,
            {
              color: isFocused ? colors.blue1 : colors.black,
              fontSize: scale(20),
            },
          ]}
        >
          {item.title}
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {data.length ? (
        <Carousel
          ref={carouselRef}
          data={data}
          renderItem={renderItem}
          sliderHeight={135}
          itemHeight={45}
          layout="default"
          vertical={true}
          loop={true}
          nestedScrollEnabled={true}
          inactiveSlideScale={0.8} // set inactive slide scale to make items smaller
          activeSlideAlignment="center" // set active slide alignment to center the selected item
          onSnapToItem={(index) => {
            setActiveSlide(index + 3);
            setTypeIndex(state.eventTypes[index].id);
            setCompanyIndex1(index);
            console.log(state.eventTypes[index]);
          }} // update the active slide index
        />
      ) : (
        <View style={{ alignSelf: "center" }}>
          {dataLoader ? (
            <ActivityIndicator color={colors.primary} size={"large"} />
          ) : (
            <Text style={{ fontSize: 22, color: "#000" }}>Not Found</Text>
          )}
        </View>
      )}
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
    backgroundColor: "#F8E1C8",
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
    fontFamily: "bold",
  },
  focusedItem: {
    backgroundColor: "#F8E1C8",

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

export default MyCarousel;

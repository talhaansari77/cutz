import {
  scale,
  ScaledSheet,
  verticalScale,
  moderateScale,
} from "react-native-size-matters";
import styled from "react-native-styled-components";
// import colors from './colors';
import { View } from "react-native";
import { colors } from "./Colors";
const commonStyles = ScaledSheet.create({
  container: {
  
    flexDirection: "column",
    padding: scale(20),
    flex: 1,
  },
  container1:{
    flex: 1, backgroundColor: colors.white 
  },
  mainContainer: {
    flex: 1,
    padding: 15,
    alignItems: "center",
    justifyContent: "center",
    
  },
  rowContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },

  padding: {
    paddingHorizontal: 20,
  },
  height: {
    height: verticalScale(30),
  },
  justifyContainer: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  imgContainer: {
    width: moderateScale(20),
    height: verticalScale(20),
  },
  img: {
    width: "100%",
    height: "100%",
  },
  commonMain:{
    flex:1,
    backgroundColor:"white"
  },
  center:{
    justifyContent: "center",
    alignItems: "center",
  }
});

export const PH10 = styled(View, {
  paddingHorizontal: scale(10),
});
export const PH20 = styled(View, {
  paddingHorizontal: scale(20),
});
export const PH30 = styled(View, {
  paddingHorizontal: scale(30),
});

export default commonStyles;

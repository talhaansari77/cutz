import { ActivityIndicator, View } from "react-native";
import LottieView from "lottie-react-native";
import { colors } from '../utils/Colors';


const Loader = ({ loading, file }) => {
  return loading ? (
    <View
      style={{
        backgroundColor: "black",
        position: "absolute",
        opacity: 0.6,
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        width: "100%",
      }}
    >
      <ActivityIndicator size={"large"} color={colors.primary}/>
      
   
    </View>
  ) : (
    <></>
  );
};

export default Loader;
